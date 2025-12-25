"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!senderEmail || !message) {
    return { error: "Email and message are required" };
  }

  if (message.length > 5000) {
    return { error: "Message is too long" };
  }

  const attachmentFiles = formData.getAll("attachments") as File[];
  const attachments = [];

  for (const file of attachmentFiles) {
    if (!file || !file.name || file.size === 0) continue;

    if (file.size > 5 * 1024 * 1024) {
      return { error: `File ${file.name} is too large (max 5MB)` };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");

    attachments.push({
      filename: file.name,
      content: base64,
    });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "aleksander.podobnik@gmail.com",
      subject: "New Contact Form Message",
      replyTo: senderEmail,
      text: `From: ${senderEmail}\n\nMessage:\n${message}`,
      attachments: attachments,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send email" };
  }
};
