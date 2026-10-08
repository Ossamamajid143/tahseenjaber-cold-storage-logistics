import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | Tahseen Jaber Cold Storage",
  description:
    "Discover why businesses choose Tahseen Jaber Cold Storage for temperature-controlled storage, professional handling, and cold-chain support.",
};

export default function WhyChooseUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
