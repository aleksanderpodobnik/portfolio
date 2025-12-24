"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not set in environment variables.");
}
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmailRaw = formData.get("senderEmail");
  const messageRaw = formData.get("message");

  if (!validateString(senderEmailRaw, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(messageRaw, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const senderEmail = senderEmailRaw as string;
  const message = messageRaw as string;

  const entries = formData.getAll("attachments");
  const attachments: Array<{ name: string; data: string; type?: string }> = [];

  const MAX_TOTAL_ATTACHMENT_BYTES = 5 * 1024 * 1024;
  let totalBytes = 0;

  console.log("sendEmail: attachments entries count:", entries.length);

  for (let idx = 0; idx < entries.length; idx++) {
    const entry = entries[idx];

    const constructorName = entry && (entry as any).constructor?.name;
    console.log(`sendEmail: attachment[${idx}] constructor:`, constructorName);

    const isFileLike =
      entry &&
      typeof (entry as any).arrayBuffer === "function" &&
      typeof (entry as any).name === "string" &&
      typeof (entry as any).size === "number";

    if (!isFileLike) {
      console.warn(`sendEmail: attachment[${idx}] is not file-like, skipping`);
      continue;
    }

    const fileLike = entry as unknown as { name: string; size: number; type?: string; arrayBuffer: () => Promise<ArrayBuffer> };
    try {
      totalBytes += fileLike.size;
      console.log(`sendEmail: processing attachment[${idx}] name=${fileLike.name} size=${fileLike.size}`);

      if (totalBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
        const maxMb = Math.round(MAX_TOTAL_ATTACHMENT_BYTES / 1024 / 1024);
        console.error(`sendEmail: total attachments exceed ${maxMb} MB`);
        return {
          error: `Total attachment size exceeds ${maxMb} MB. Please attach smaller files.`,
        };
      }

      const arrayBuffer = await fileLike.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");
      attachments.push({ name: fileLike.name, data: base64, type: fileLike.type });
      console.log(`sendEmail: processed attachment[${idx}] bytes=${arrayBuffer.byteLength}`);
    } catch (e) {
      console.error(`sendEmail: failed processing attachment[${idx}]`, e);
      return {
        error: `Failed to process attachment ${fileLike.name}: ${getErrorMessage(e)}`,
      };
    }
  }

  console.log("sendEmail: totalBytes", totalBytes, "attachments prepared", attachments.length);

  let data;
  try {
    const siteUrl =
      process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "";
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "aleksander.podobnik@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
      attachments: attachments.map((a) => ({
        filename: a.name,
        data: a.data,
        type: a.type || "application/octet-stream",
      })),
    });
    console.log("sendEmail success:", data);
  } catch (error: unknown) {
    console.error("sendEmail error:", error);
    console.error("sendEmail error message:", getErrorMessage(error));
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
