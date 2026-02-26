import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, phone, message } = req.body;

    try {
      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "your-email@gmail.com", // Replace with your email
          pass: "your-email-password-or-app-password", // Replace with your email password
        },
      });

      // Compose the email
      const mailOptions = {
        from: `"${fullName}" <${email}>`, // Sender info
        to: "strwaseem285@gmail.com", // Your email
        subject: "New Contact Form Submission",
        text: `You have a new message from your website contact form:
        
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Respond with success
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
