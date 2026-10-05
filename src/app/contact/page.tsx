"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Truck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/site-content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#E3E8EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B84D1B] mb-4">
                <span className="w-5 h-[2px] bg-[#B84D1B] inline-block" />
                <span>Get in Touch</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2340] leading-tight tracking-tight">
                Let&apos;s talk about your{" "}
                <span className="text-[#B84D1B] block sm:inline">
                  storage needs.
                </span>
              </h1>
              <p className="mt-6 text-lg text-[#66717C] leading-relaxed">
                Whether you require seasonal agricultural allocation or ongoing commercial
                cold-chain warehousing, our operations team is ready to assist.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Contact Body (Spacious 2-column layout, not a tiny card) */}
        <section className="py-20 sm:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              
              {/* Left Column: Direct Contact & Facility Details */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#0A2340] mb-6">
                    Operational Inquiries & Dispatch
                  </h2>
                  <p className="text-base text-[#66717C] leading-relaxed">
                    Contact our facility dispatch directly for pallet rates, receiving
                    schedules, or freight transit coordination.
                  </p>
                </div>

                <div className="space-y-6 text-sm text-[#202B35]">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#B84D1B] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#66717C] block font-semibold">
                        Direct Phone
                      </span>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-base font-bold text-[#0A2340] hover:text-[#B84D1B] transition-colors"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#B84D1B] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#66717C] block font-semibold">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-base font-bold text-[#0A2340] hover:text-[#B84D1B] transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#B84D1B] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#66717C] block font-semibold">
                        Facility Location
                      </span>
                      <p className="text-base text-[#0A2340]">
                        {SITE_CONFIG.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#B84D1B] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#66717C] block font-semibold">
                        Operating Hours
                      </span>
                      <p className="text-sm text-[#0A2340] leading-relaxed">
                        {SITE_CONFIG.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Logistics Gate Note */}
                <div className="pt-6 border-t border-[#E3E8EC] flex items-start gap-3 text-xs text-[#66717C]">
                  <Truck className="w-4 h-4 text-[#B84D1B] shrink-0 mt-0.5" />
                  <span>
                    Heavy transport rigs and refrigerated semi-trailers receive direct dock bay
                    staging. Inquire for turn-in gate instructions.
                  </span>
                </div>
              </div>

              {/* Right Column: Clean Editorial Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[12px] border border-[#E3E8EC] shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-[#0A2340] mb-2">
                  Send an Inquiry
                </h3>
                <p className="text-sm text-[#66717C] mb-8">
                  Provide your product details and our team will get in touch promptly.
                </p>

                {submitted ? (
                  <div className="py-12 text-center bg-[#EEF5F8] rounded-[8px] p-6 border border-[#D8E6ED]">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                    <h4 className="font-heading text-xl font-bold text-[#0A2340] mb-2">
                      Inquiry Received
                    </h4>
                    <p className="text-sm text-[#66717C] max-w-sm mx-auto">
                      Thank you for contacting Tahseen Jaber Cold Storage. We will review your
                      specifications and reach out shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0A2340] uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-sm px-4 py-3 rounded-[7px] border border-[#D8E6ED] bg-white text-[#202B35] focus:outline-hidden focus:ring-2 focus:ring-[#B84D1B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0A2340] uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-sm px-4 py-3 rounded-[7px] border border-[#D8E6ED] bg-white text-[#202B35] focus:outline-hidden focus:ring-2 focus:ring-[#B84D1B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0A2340] uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-sm px-4 py-3 rounded-[7px] border border-[#D8E6ED] bg-white text-[#202B35] focus:outline-hidden focus:ring-2 focus:ring-[#B84D1B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0A2340] uppercase tracking-wider mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Farm Logistics Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full text-sm px-4 py-3 rounded-[7px] border border-[#D8E6ED] bg-white text-[#202B35] focus:outline-hidden focus:ring-2 focus:ring-[#B84D1B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0A2340] uppercase tracking-wider mb-2">
                        Message & Storage Requirements *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your commodity type, estimated pallet volume, preferred temperatures, or timing..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-[7px] border border-[#D8E6ED] bg-white text-[#202B35] focus:outline-hidden focus:ring-2 focus:ring-[#B84D1B] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 bg-[#B84D1B] hover:bg-[#A34215] text-white font-semibold text-sm px-7 py-3.5 rounded-[7px] transition-all shadow-xs hover:shadow-md"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
