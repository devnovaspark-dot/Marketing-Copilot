import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body._honey) {
      return NextResponse.json({ success: true, message: 'Question received' });
    }

    const { fullName, phone, businessName, question } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.FORMSUBMIT_EMAIL ||
      process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ||
      'novasdmagency@gmail.com';

    const origin = req.headers.get('origin') || 'https://marketingcopilot.in';
    const referer = req.headers.get('referer') || `${origin}/faq`;

    const payload = {
      'Full Name': fullName,
      'Phone / WhatsApp': phone,
      'Business / Company': businessName || 'Not specified',
      'Question / Bottleneck': question || 'No question details provided',
      _subject: `New FAQ Growth Question — ${fullName} (${phone})`,
      _template: 'table',
      _captcha: 'false',
    };

    const formsubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': origin,
          'Referer': referer,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await formsubmitRes.json().catch(() => null);

    const isSuccess =
      formsubmitRes.ok &&
      (data?.success === 'true' ||
        data?.success === true ||
        (typeof data?.message === 'string' &&
          (data.message.toLowerCase().includes('activation') ||
            data.message.toLowerCase().includes('activate') ||
            data.message.toLowerCase().includes('submitted') ||
            data.message.toLowerCase().includes('success'))));

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: data?.message || 'Question submitted successfully.',
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: data?.message || 'FormSubmit could not process the question.',
      },
      { status: formsubmitRes.status || 400 }
    );
  } catch (error: unknown) {
    console.error('API /faq error:', error);
    const errMsg = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { success: false, message: errMsg },
      { status: 500 }
    );
  }
}
