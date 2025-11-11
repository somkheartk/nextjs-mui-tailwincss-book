import type { Metadata } from "next";
import "./globals.css";
import MuiThemeProvider from "@/theme/MuiThemeProvider";

export const metadata: Metadata = {
  title: "Next.js + MUI + Tailwind CSS",
  description: "ตัวอย่างการใช้ Next.js, Material-UI และ Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}
