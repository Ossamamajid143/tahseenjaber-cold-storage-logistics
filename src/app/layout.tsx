import type { Metadata } from "next";
import { Roboto_Slab, Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tahseenjaber.com"),
  title: "Tahseen Jaber Cold Storage | Reliable Cold Storage Solutions",
  description:
    "Tahseen Jaber Cold Storage provides dependable cold storage and storage solutions designed to help businesses preserve product quality and support efficient supply chains.",
  keywords: [
    "Tahseen Jaber Cold Storage",
    "Cold Chain Logistics",
    "Refrigerated Warehousing",
    "Temperature Controlled Storage",
    "Fresh Produce Preservation",
    "Industrial Cold Storage",
  ],
  openGraph: {
    title: "Tahseen Jaber Cold Storage | Reliable Cold Storage Solutions",
    description:
      "Tahseen Jaber Cold Storage provides dependable cold storage solutions designed to preserve product quality and support efficient supply chains.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/facility-exterior-wide.png",
        width: 1200,
        height: 675,
        alt: "Tahseen Jaber Cold Storage Facility",
      },
    ],
  },
  icons: {
    icon: "/tahseenjaber-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${inter.variable} ${cairo.variable} scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased text-[#202B35] bg-[#FFFFFF] selection:bg-[#B84D1B]/15 selection:text-[#0A2340]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
