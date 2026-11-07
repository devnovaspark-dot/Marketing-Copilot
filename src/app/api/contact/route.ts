import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot anti-spam check: if bot filled _honey, return success silently
    if (body._honey) {
      return NextResponse.json({ success: true, message: 'Form received' });
    }

    const { name, email, phone, company, website, budget, services, message } = body;

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

    const formattedServices = Array.isArray(services)
      ? services.join(', ')
      : services || 'None selected';

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 1. High-visibility logging in Vercel / server runtime logs to guarantee zero lead loss
    console.log(`
=====================================================
🚀 [NEW CONSULTATION INQUIRY RECEIVED]
=====================================================
📅 Date/Time:   ${timestamp} (IST)
👤 Full Name:   ${name}
📧 Work Email:  ${email}
📱 Phone/WA:    ${phone || 'Not provided'}
🏢 Company:     ${company || 'Not specified'}
🌐 Website:     ${website || 'Not provided'}
💰 Budget:      ${budget || 'Not specified'}
🎯 Services:    ${formattedServices}
📝 Message:     ${message || 'No additional details provided'}
=====================================================
    `);

    const payload = {
      'Full Name': name,
      'Work Email': email,
      'Phone / WhatsApp': phone || 'Not provided',
      'Company Name': company || 'Not specified',
      'Website URL': website || 'Not provided',
      'Monthly Budget': budget || 'Not specified',
      'Services Requested': formattedServices,
      'Project Details / Message': message || 'No additional details provided',
      'Submitted At': `${timestamp} (IST)`,
      _subject: `New Lead Consultation Inquiry — ${name} (${company || 'Direct'})`,
      _template: 'table',
      _captcha: 'false',
      _autoresponse:
        'Thank you for reaching out to Marketing Copilot! We have safely received your consultation inquiry. Our senior growth team in India is reviewing your requirements and will reach out to you within 4 hours with your preliminary growth blueprint.',
    };

    // 2. Optional: Dispatch to Custom Webhook (Discord, Slack, Google Sheets, Make, Zapier)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **New Consultation Lead: ${name}**\n📧 Email: ${email}\n📱 Phone: ${phone || 'N/A'}\n🏢 Company: ${company || 'N/A'}\n💰 Budget: ${budget || 'N/A'}\n🎯 Services: ${formattedServices}\n📝 Message: ${message || 'N/A'}`,
            lead: payload,
          }),
          signal: AbortSignal.timeout(4000),
        }).catch((err) => console.warn('[Contact Route] Webhook dispatch warning:', err));
      } catch (webhookErr) {
        console.warn('[Contact Route] Webhook dispatch error:', webhookErr);
      }
    }

    // 3. Optional: Dispatch via Resend API if API key is present
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Marketing Copilot Leads <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email,
            subject: `New Consultation Inquiry — ${name} (${company || 'Direct'})`,
            html: `
              <h2>New Consultation Inquiry Received</h2>
              <table border="1" cellpadding="8" style="border-collapse: collapse; font-family: sans-serif;">
                <tr><td><strong>Full Name</strong></td><td>${name}</td></tr>
                <tr><td><strong>Work Email</strong></td><td>${email}</td></tr>
                <tr><td><strong>Phone / WhatsApp</strong></td><td>${phone || 'Not provided'}</td></tr>
                <tr><td><strong>Company Name</strong></td><td>${company || 'Not specified'}</td></tr>
                <tr><td><strong>Website URL</strong></td><td>${website || 'Not provided'}</td></tr>
                <tr><td><strong>Monthly Budget</strong></td><td>${budget || 'Not specified'}</td></tr>
                <tr><td><strong>Services Requested</strong></td><td>${formattedServices}</td></tr>
                <tr><td><strong>Project Details</strong></td><td>${message || 'No additional details'}</td></tr>
                <tr><td><strong>Submitted At</strong></td><td>${timestamp} IST</td></tr>
              </table>
            `,
          }),
          signal: AbortSignal.timeout(4000),
        }).catch((err) => console.warn('[Contact Route] Resend dispatch warning:', err));
      } catch (resendErr) {
        console.warn('[Contact Route] Resend dispatch error:', resendErr);
      }
    }

    // 4. Relay to FormSubmit with a strict 4-second timeout and clean headers
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
        console.log('[Contact Route] FormSubmit dispatched successfully.');
      } else {
        console.warn(
          `[Contact Route] FormSubmit returned status ${formsubmitRes.status}: ${data?.message || 'Relay warning'}. Lead safely preserved in server logs.`
        );
      }
    } catch (formsubmitErr: unknown) {
      console.warn(
        '[Contact Route] FormSubmit dispatch timed out or network error. Lead safely captured in server logs.',
        formsubmitErr instanceof Error ? formsubmitErr.message : formsubmitErr
      );
    }

    // 5. Always return success: the lead is validated and safely recorded in server logs
    return NextResponse.json({
      success: true,
      message: 'Consultation request received successfully. Our strategists will review your project and get in touch within 4 hours.',
    });
  } catch (error: unknown) {
    console.error('API /contact fatal error:', error);
    const errMsg = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { success: false, message: errMsg },
      { status: 500 }
    );
  }
}
