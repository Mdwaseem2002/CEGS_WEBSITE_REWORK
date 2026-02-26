// src/app/api/contact/route.js (for Next.js 13+ App Router)
// or src/pages/api/contact.js (for Next.js Pages Router)

import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, referredName, message, attachment } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !referredName || !message) {
      return Response.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransporter({
      // Gmail configuration
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
      // Alternative SMTP configuration
      // host: process.env.SMTP_HOST,
      // port: process.env.SMTP_PORT,
      // secure: true,
      // auth: {
      //   user: process.env.SMTP_USER,
      //   pass: process.env.SMTP_PASS,
      // },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 2px solid #004e92; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #004e92; margin-bottom: 15px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 8px 12px; border: 1px solid #ddd;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #004e92;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="tel:${phone}" style="color: #004e92;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Referred By:</td>
                <td style="padding: 8px 12px; border: 1px solid #ddd;">${referredName}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #004e92; margin-bottom: 15px;">Message</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #004e92; border-radius: 4px;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>

          ${attachment ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #004e92; margin-bottom: 15px;">Attachment</h3>
            <p style="color: #666;">File attached: <strong>${attachment.name}</strong> (${attachment.type})</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from your website contact form at ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${fullName}`,
      html: htmlContent,
      replyTo: email,
    };

    // Add attachment if present
    if (attachment && attachment.data) {
      const base64Data = attachment.data.split(',')[1]; // Remove data:mime;base64, prefix
      mailOptions.attachments = [
        {
          filename: attachment.name,
          content: base64Data,
          encoding: 'base64',
          contentType: attachment.type,
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    const confirmationMailOptions = {
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #000000, #004e92); padding: 30px; border-radius: 8px; color: white;">
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${fullName},</p>
            <p>We've received your message and will get back to you within 24-48 hours.</p>
            <p>Here's a copy of what you sent:</p>
            <div style="background-color: rgba(255,255,255,0.1); padding: 15px; border-radius: 4px; margin: 15px 0;">
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p>Best regards,<br>Your Company Team</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return Response.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// For Pages Router (src/pages/api/contact.js), use this instead:
/*
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, referredName, message, attachment } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !referredName || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // ... rest of the code remains the same ...

    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
}
*/