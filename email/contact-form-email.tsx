import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{message}</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
          <Container className="mx-auto py-8 px-4">
            <Section className="bg-white px-8 py-6 shadow-lg">
              <div className="mb-6">
                <Text className="text-gray-600 text-sm font-semibold mb-2 mt-0">
                  FROM
                </Text>
                <Link
                  href={`mailto:${senderEmail}`}
                  className="text-blue-600 text-lg font-medium no-underline hover:underline"
                >
                  {senderEmail}
                </Link>
              </div>

              <div className="mb-6">
                <Text className="text-gray-600 text-sm font-semibold mb-2 mt-0">
                  MESSAGE
                </Text>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <Text className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap m-0">
                    {message}
                  </Text>
                </div>
              </div>

              <Hr className="border-gray-200 my-6" />

              <div className="text-center">
                <Link
                  href={`mailto:${senderEmail}`}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium no-underline hover:bg-blue-700"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Reply to {senderEmail}
                </Link>
              </div>
            </Section>

            <Section className="bg-gray-50 rounded-b-lg px-8 py-4 border-t border-gray-200">
              <Text className="text-gray-500 text-xs text-center m-0">
                This message was sent via the contact form on{" "}
                <Link
                  href="https://aleksanderpodobnik.dev"
                  className="text-blue-600 no-underline"
                >
                  aleksanderpodobnik.dev
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
