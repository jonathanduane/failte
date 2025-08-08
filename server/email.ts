import type { BroadcasterSignup, FeedbackSubmission } from "@shared/schema";

const SMTP2GO_API_KEY = "api-62B342CE059E430EB8A30379BC4C795A";
const SMTP2GO_API_URL = "https://api.smtp2go.com/v3/email/send";
const TO_EMAIL = "info@failtedab.ie";

interface EmailData {
  api_key: string;
  to: string[];
  sender: string;
  subject: string;
  html_body: string;
  text_body: string;
}

async function sendEmail(emailData: EmailData): Promise<boolean> {
  try {
    const response = await fetch(SMTP2GO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const result = await response.json();
    
    if (response.ok && result.data?.succeeded > 0) {
      console.log('Email sent successfully:', result);
      return true;
    } else {
      console.error('Failed to send email:', result);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export async function sendBroadcasterSignupNotification(signup: BroadcasterSignup): Promise<boolean> {
  const subject = `New Broadcaster Signup: ${signup.stationName}`;
  
  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #149191;">New Broadcaster Signup</h2>
        
        <h3>Station Information</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Station Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${signup.stationName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>License Number:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${signup.licenseNumber}</td></tr>
        </table>

        <h3>Contact Information</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Contact Person:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${signup.contactPerson}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${signup.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${signup.phone}</td></tr>
        </table>

        ${signup.message ? `
        <h3>Message</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${signup.message}</p>
        ` : ''}

        <p style="margin-top: 30px; color: #666; font-size: 14px;">
          This notification was sent from the FáilteDAB broadcaster signup form.<br>
          Submitted: ${new Date(signup.createdAt).toLocaleString()}
        </p>
      </body>
    </html>
  `;

  const textBody = `
New Broadcaster Signup

Station Information:
- Station Name: ${signup.stationName}
- License Number: ${signup.licenseNumber}

Contact Information:
- Contact Person: ${signup.contactPerson}
- Email: ${signup.email}
- Phone: ${signup.phone}

${signup.message ? `Message:\n${signup.message}` : ''}

This notification was sent from the FáilteDAB broadcaster signup form.
Submitted: ${new Date(signup.createdAt).toLocaleString()}
  `;

  const emailData: EmailData = {
    api_key: SMTP2GO_API_KEY,
    to: [TO_EMAIL],
    sender: "noreply@failtedab.ie",
    subject,
    html_body: htmlBody,
    text_body: textBody,
  };

  return await sendEmail(emailData);
}

export async function sendFeedbackNotification(feedback: FeedbackSubmission): Promise<boolean> {
  const subject = `New Feedback Submission from ${feedback.name}`;
  
  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #149191;">New Feedback Submission</h2>
        
        <h3>Contact Information</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${feedback.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${feedback.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${feedback.location}</td></tr>
          ${feedback.radioModel ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Radio Model:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${feedback.radioModel}</td></tr>` : ''}
        </table>

        <h3>Feedback Details</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Experience Rating:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${feedback.experienceRating}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Consent for Contact:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${feedback.consent ? 'Yes' : 'No'}</td></tr>
        </table>

        <h3>Message</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${feedback.message}</p>

        <p style="margin-top: 30px; color: #666; font-size: 14px;">
          This feedback was submitted through the FáilteDAB feedback form.<br>
          Submitted: ${new Date(feedback.createdAt).toLocaleString()}
        </p>
      </body>
    </html>
  `;

  const textBody = `
New Feedback Submission

Contact Information:
- Name: ${feedback.name}
- Email: ${feedback.email}
- Location: ${feedback.location}
${feedback.radioModel ? `- Radio Model: ${feedback.radioModel}` : ''}

Feedback Details:
- Experience Rating: ${feedback.experienceRating}
- Consent for Contact: ${feedback.consent ? 'Yes' : 'No'}

Message:
${feedback.message}

This feedback was submitted through the FáilteDAB feedback form.
Submitted: ${new Date(feedback.createdAt).toLocaleString()}
  `;

  const emailData: EmailData = {
    api_key: SMTP2GO_API_KEY,
    to: [TO_EMAIL],
    sender: "noreply@failtedab.ie",
    subject,
    html_body: htmlBody,
    text_body: textBody,
  };

  return await sendEmail(emailData);
}