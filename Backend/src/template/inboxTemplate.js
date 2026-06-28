const generateContactEmail = (name, email, message) => {
  return {
    text: `Portfolio Message from ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Portfolio Message</h2>
        <p style="margin-top: 16px;"><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Reply-To Address:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-top: 16px; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; white-space: pre-wrap; color: #4b5563;">${message}</p>
        </div>
      </div>
    `
  };
};

module.exports = {generateContactEmail};