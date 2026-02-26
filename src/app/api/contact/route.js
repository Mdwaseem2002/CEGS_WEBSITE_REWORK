// FOR APP ROUTER (Next.js 13+): src/app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the JSON body
    const body = await request.json();
    console.log('Received form data:', body); // Debug log
    
    const { fullName, email, phone, referredName, message, attachment } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !referredName || !message) {
      return Response.json({ 
        message: 'Missing required fields',
        received: { fullName, email, phone, referredName, message }
      }, { status: 400 });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'raiyan@careerexpertglobalsolution.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Prepare email attachments if provided
    const attachments = [];
    if (attachment && attachment.data) {
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

    // Email content with ALL fields
    const mailOptions = {
      from: 'raiyan@careerexpertglobaIsolution.com',
      to: ['strwaseem285@gmail.com', 'info@careerexpertglobalsolution.com'], // Multiple recipients
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Email Address:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Phone Number:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Referred By:</strong> ${referredName}</p>
          </div>
          
          <div style="background-color: #e9ecef; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong style="color: #007bff;">Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          ${attachment ? `
            <div style="background-color: #d4edda; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0;"><strong style="color: #155724;">Attachment:</strong> ${attachment.name}</p>
            </div>
          ` : ''}
          
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            This email was sent from your website contact form.
          </p>
        </div>
      `,
      attachments: attachments
    };

    // Send email to both recipients
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to both recipients'); // Debug log

    return Response.json({ message: 'Email sent successfully to both recipients' }, { status: 200 });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ 
      message: 'Error sending email', 
      error: error.message 
    }, { status: 500 });
  }
}

// =============================================================================
// FOR PAGES ROUTER (Next.js 12 and below): src/pages/api/contact.js
// =============================================================================

/*
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Received form data:', req.body); // Debug log
    
    const { fullName, email, phone, referredName, message, attachment } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !referredName || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        received: { fullName, email, phone, referredName, message }
      });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'raiyan@careerexpertglobaIsolution.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Prepare email attachments if provided
    const attachments = [];
    if (attachment && attachment.data) {
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

    // Email content with ALL fields
    const mailOptions = {
      from: 'raiyan@careerexpertglobaIsolution.com',
      to: ['strwaseem285@gmail.com', 'zabiusman@careerexpertglobalsolution.com'], // Multiple recipients
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Email Address:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Phone Number:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Referred By:</strong> ${referredName}</p>
          </div>
          
          <div style="background-color: #e9ecef; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong style="color: #007bff;">Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          ${attachment ? `
            <div style="background-color: #d4edda; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0;"><strong style="color: #155724;">Attachment:</strong> ${attachment.name}</p>
            </div>
          ` : ''}
          
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            This email was sent from your website contact form.
          </p>
        </div>
      `,
      attachments: attachments
    };

    // Send email to both recipients
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to both recipients'); // Debug log

    res.status(200).json({ message: 'Email sent successfully to both recipients' });
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email', 
      error: error.message 
    });
  }
}
*/