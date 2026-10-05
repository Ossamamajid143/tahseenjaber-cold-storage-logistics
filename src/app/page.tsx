import React from "react";
import { Navbar } from "@/components/Navbar";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HomeServicesPreview } from "@/components/home/HomeServicesPreview";
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
          {/* 1. Large Industrial Hero */}
          <HomeHero />

          {/* 2. Large Editorial Statement */}
          <HomeIntro />

          {/* 3. Designed Editorial Services List */}
          <HomeServicesPreview />

          {/* 4. Large Facility Showcase */}
          <HomeFacility />

          {/* 5. Editorial Why Us Pillars */}
          <HomeWhyPillars />

          {/* 6. Full-Bleed Atmospheric Visual */}
          <HomeVisualBleed />

          {/* 7. Impactful Bold CTA */}
          <HomeCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
