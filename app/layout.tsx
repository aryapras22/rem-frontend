import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Requirement Ellicitation Tool",
  description: "Requirement Ellicitation Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className=''>{children}</body>
    </html>
  );
}
