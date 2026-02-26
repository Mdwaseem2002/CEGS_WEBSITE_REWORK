// src/app/api/contact/route.js (for Next.js 13+ App Router)
// OR src/pages/api/contact.js (for Pages Router)

import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullName, email, phone, referredName, message, attachment } = await request.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'waseemmd907@gmail.com', // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // You'll need to set this up
      }
    });

    // Prepare email attachments if provided
    const attachments = [];
    if (attachment && attachment.data) {
      // Extract base64 data and file info
      const matches = attachment.data.match(/^data:(.+);base64,(.+)$/);
      
      if (matches && matches.length === 3) {
        const fileType = matches[1];
        const base64Data = matches[2];
        
        attachments.push({
          filename: attachment.name,
          content: Buffer.from(base64Data, 'base64'),
          contentType: fileType
        });
      }
    }

    // Email content with all fields including referredName
    const mailOptions = {
      from: 'waseemmd907@gmail.com',
      to: 'strwaseem285@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #004e92; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Referred By:</strong> ${referredName || 'Not specified'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #004e92;">Message:</h3>
            <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #004e92; border-radius: 4px;">
              ${message || 'No message provided'}
            </div>
          </div>
          
          ${attachment ? `
            <div style="margin: 20px 0; padding: 15px; background-color: #fff3cd; border-radius: 4px; border-left: 4px solid #ffc107;">
              <p style="margin: 0;"><strong style="color: #856404;">Attachment:</strong> ${attachment.name}</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #856404;">File Type: ${attachment.type}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This email was sent from your website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      attachments: attachments
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ message: 'Error sending email' }, { status: 500 });
  }
}

// For Pages Router (if you're using src/pages/api/contact.js instead)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, referredName, message, attachment } = req.body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'waseemmd907@gmail.com', // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // You'll need to set this up
      }
    });

    // Prepare email attachments if provided
    const attachments = [];
    if (attachment && attachment.data) {
      // Extract base64 data and file info
      const matches = attachment.data.match(/^data:(.+);base64,(.+)$/);
      
      if (matches && matches.length === 3) {
        const fileType = matches[1];
        const base64Data = matches[2];
        
        attachments.push({
          filename: attachment.name,
          content: Buffer.from(base64Data, 'base64'),
          contentType: fileType
        });
      }
    }

    // Email content with all fields including referredName
    const mailOptions = {
      from: 'waseemmd907@gmail.com',
      to: 'strwaseem285@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #004e92; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #004e92;">Referred By:</strong> ${referredName || 'Not specified'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #004e92;">Message:</h3>
            <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #004e92; border-radius: 4px;">
              ${message || 'No message provided'}
            </div>
          </div>
          
          ${attachment ? `
            <div style="margin: 20px 0; padding: 15px; background-color: #fff3cd; border-radius: 4px; border-left: 4px solid #ffc107;">
              <p style="margin: 0;"><strong style="color: #856404;">Attachment:</strong> ${attachment.name}</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #856404;">File Type: ${attachment.type}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This email was sent from your website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      attachments: attachments
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}