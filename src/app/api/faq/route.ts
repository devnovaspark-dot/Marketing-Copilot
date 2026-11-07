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

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    console.log(`
=====================================================
❓ [NEW FAQ STRATEGY QUESTION RECEIVED]
=====================================================
📅 Date/Time:   ${timestamp} (IST)
👤 Full Name:   ${fullName}
📱 Phone/WA:    ${phone}
🏢 Business:    ${businessName || 'Not specified'}
❓ Question:    ${question || 'No question details provided'}
=====================================================
    `);

    const payload = {
      'Full Name': fullName,
      'Phone / WhatsApp': phone,
      'Business / Company': businessName || 'Not specified',
      'Question / Bottleneck': question || 'No question details provided',
      'Submitted At': `${timestamp} (IST)`,
      _subject: `New FAQ Growth Question — ${fullName} (${phone})`,
      _template: 'table',
      _captcha: 'false',
    };

    // 1. Optional Webhook
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `❓ **New FAQ Question: ${fullName}**\n📱 Phone: ${phone}\n🏢 Business: ${businessName || 'N/A'}\n❓ Question: ${question || 'N/A'}`,
            faq: payload,
          }),
          signal: AbortSignal.timeout(4000),
        }).catch((err) => console.warn('[FAQ Route] Webhook dispatch warning:', err));
      } catch (webhookErr) {
        console.warn('[FAQ Route] Webhook dispatch error:', webhookErr);
      }
    }

    // 2. FormSubmit relay with strict 4-second timeout
    try {
      const formsubmitRes = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(4000),
        }
      );

      const data = await formsubmitRes.json().catch(() => null);
      if (formsubmitRes.ok && (data?.success === 'true' || data?.success === true)) {
        console.log('[FAQ Route] FormSubmit dispatched successfully.');
      } else {
        console.warn(
          `[FAQ Route] FormSubmit returned status ${formsubmitRes.status}: ${data?.message || 'Relay warning'}. Question safely saved in server logs.`
        );
      }
    } catch (formsubmitErr: unknown) {
      console.warn(
        '[FAQ Route] FormSubmit dispatch timed out or network error. Question safely captured in server logs.',
        formsubmitErr instanceof Error ? formsubmitErr.message : formsubmitErr
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Question submitted successfully.',
    });
  } catch (error: unknown) {
    console.error('API /faq fatal error:', error);
    const errMsg = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { success: false, message: errMsg },
      { status: 500 }
    );
  }
}
