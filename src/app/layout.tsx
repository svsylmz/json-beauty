import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "JSON Beautifier & Viewer Online | Format, Validate & Explore JSON Instantly",
  description:
    "Beautify, validate, format and view your JSON data instantly with our fast and easy-to-use online JSON viewer. Perfect for developers, analysts, and data debugging.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F61MH7761L"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F61MH7761L');
            `,
          }}
        />

        <meta
          name="google-site-verification"
          content="zEYBiWyOqJ9vhpHRNaVmy_NfXLyQNuWbjG3blGO1GoI"
        />
      </head>
      <body
        className={`${jakarta.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
