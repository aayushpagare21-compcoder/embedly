import PageWrapper from "emebedme/components/containers/PageWrapper";
import EmbedmeNavbar from "emebedme/components/embedme/EmbedmeNavbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Embedme",
  description: "Create your personalised chatbot",
};

export default async function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>
          <EmbedmeNavbar />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
