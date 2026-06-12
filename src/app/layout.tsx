import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGRIMARKET DIGITAL | Company Profile Pertanian",
  description:
    "Company profile AGRIMARKET DIGITAL, agribisnis modern yang bergerak di bidang pertanian, kemitraan petani, distribusi hasil tani, dan solusi agrikultur berkelanjutan."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
