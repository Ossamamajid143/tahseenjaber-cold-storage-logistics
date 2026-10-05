import React from "react";
import { Navbar } from "@/components/Navbar";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HomeCapabilities } from "@/components/home/HomeCapabilities";
import { HomeFacility } from "@/components/home/HomeFacility";
import { HomeWhyPillars } from "@/components/home/HomeWhyPillars";
import { HomeVisualBleed } from "@/components/home/HomeVisualBleed";
import { HomeCTA } from "@/components/home/HomeCTA";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/site-content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.fullName,
    description:
      "Tahseen Jaber Cold Storage provides dependable cold-storage solutions designed to preserve product quality and support efficient supply chains.",
    image: "https://tahseenjaber.com/images/hero-warehouse.jpg",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressCountry: "US",
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
          {/* 1. Curated Editorial Hero */}
          <HomeHero />

          {/* 2. Brand Statement */}
          <HomeIntro />

          {/* 3. Capabilities Overview */}
          <HomeCapabilities />

          {/* 4. Facility Overview */}
          <HomeFacility />

          {/* 5. Editorial Why Us Pillars */}
          <HomeWhyPillars />

          {/* 6. Full Bleed Photography */}
          <HomeVisualBleed />

          {/* 7. Simple Bold CTA */}
          <HomeCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
