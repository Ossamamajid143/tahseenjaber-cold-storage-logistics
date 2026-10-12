import React from "react";
import { Navbar } from "@/components/Navbar";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeFacility } from "@/components/home/HomeFacility";
import { HomeComprehensiveServices } from "@/components/home/HomeComprehensiveServices";
import { HomeSolutionsShowcase } from "@/components/home/HomeSolutionsShowcase";
import { HomeContactSection } from "@/components/home/HomeContactSection";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/site-content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.fullName,
    description:
      "Tahseen Jaber Cold Storage provides dependable cold-storage solutions designed to preserve product quality and support efficient supply chains.",
    image: "https://tahseenjaber.com/images/facility-exterior-wide.png",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tahseen Jaber Cold Storage, Uuayrij Industrial area",
      addressLocality: "Baghdad",
      addressCountry: "IQ",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* 1. Industrial Hero with Vertical Split & Chevron Notch */}
          <HomeHero />

          {/* 2. State-of-the-art facility feature */}
          <HomeFacility />

          {/* 3. Comprehensive service offerings */}
          <HomeComprehensiveServices />

          {/* 4. End-to-end cold-storage services */}
          <HomeSolutionsShowcase />

          {/* 5. Existing interactive inquiry form */}
          <HomeContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
