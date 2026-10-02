import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot anti-spam check: if bot filled _honey, return success silently
    if (body._honey) {
      return NextResponse.json({ success: true, message: 'Form received' });
    }

    const { name, email, phone, company, budget, services, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.FORMSUBMIT_EMAIL ||
      process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ||
      'novasdmagency@gmail.com';

    const origin = req.headers.get('origin') || 'https://marketingcopilot.in';
    const referer = req.headers.get('referer') || `${origin}/contact`;

    const formattedServices = Array.isArray(services)
      ? services.join(', ')
      : services || 'None selected';

    const payload = {
      'Full Name': name,
      'Work Email': email,
      'Phone / WhatsApp': phone || 'Not provided',
      'Company Name': company || 'Not specified',
      'Monthly Budget': budget || 'Not specified',
      'Services Requested': formattedServices,
      'Project Details / Message': message || 'No additional details provided',
      _subject: `New Lead Consultation Inquiry — ${name} (${company || 'Direct'})`,
      _template: 'table',
      _captcha: 'false',
      _autoresponse:
        'Thank you for reaching out to Marketing Copilot! We have safely received your consultation inquiry. Our senior growth team in Bhubaneswar is reviewing your requirements and will reach out to you within 4 hours with your preliminary growth blueprint.',
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

    // FormSubmit returns data.success = "true" | true, or activation notice on first setup
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
        message: data?.message || 'Form submitted successfully.',
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: data?.message || 'FormSubmit could not process the submission.',
      },
      { status: formsubmitRes.status || 400 }
    );
  } catch (error: unknown) {
    console.error('API /contact error:', error);
    const errMsg = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { success: false, message: errMsg },
      { status: 500 }
    );
  }
}
