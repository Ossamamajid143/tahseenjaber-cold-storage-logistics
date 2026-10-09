export type Language = "EN" | "AR";

export const TRANSLATIONS = {
  EN: {
    brand: {
      name: "TAHSEEN JABER",
      tagline: "Cold Storage",
      fullName: "Tahseen Jaber Cold Storage",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      facilities: "Why Choose Us",
      contact: "Contact",
    },
    servicesPage: {
      heroTitle: "Services",
      heroDesc:
        "With our Cold Storage facilities, we guarantee optimal conditions to preserve the integrity of your goods. Whether you need short-term or long-term storage, our temperature-controlled warehouses maintain the required climate for your products.",
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",

      reliableHeading: "Reliable Cold Storage Solutions",
      reliableDesc:
        "Our cold storage facilities are designed to maintain optimal temperatures, ensuring your perishable goods stay fresh and safe. With advanced technology and strict quality controls, we provide reliable storage solutions that meet diverse industry needs. Trust us to protect your products with the highest standards of care and efficiency.",
      suitableForLabel: "Suitable for",

      serviceSections: [
        {
          title: "Cold Storage Leasing",
          description:
            "Our cold storage facilities provide businesses with professionally managed, temperature-controlled storage space for perishable and temperature-sensitive products.",
          suitableFor: [
            "Fresh produce",
            "Frozen products",
            "Temperature-sensitive goods",
            "Other approved products",
          ],
          imageAlt: "Temperature-controlled cold-storage warehouse with fresh produce and frozen products",
        },
        {
          title: "Cold Chain Delivery",
          description:
            "Cold-chain transportation plays an important role in maintaining product quality during movement. Our services are designed to support the safe handling and transportation of temperature-sensitive products.",
          imageAlt: "Refrigerated delivery truck at a cold-storage warehouse loading dock",
        },
        {
          title: "Import / Export & Re-export",
          description:
            "We provide operational support for businesses involved in the movement of goods through import, export and re-export activities, according to the company's operational scope and applicable requirements.",
          imageAlt: "Temperature-controlled cargo and shipping containers at a logistics facility",
        },
        {
          title: "Consignment Sale",
          description:
            "We provide consignment-related storage, handling and sales support where required, helping businesses manage their products through an organized storage and distribution process.",
          imageAlt: "Warehouse staff checking inventory in a refrigerated distribution facility",
        },
      ],
      facilitySection: {
        title: "Our Facilities",
        description:
          "Our facilities are designed to provide secure and organized storage solutions for temperature-sensitive products. With dedicated storage areas and professional handling operations, we aim to maintain product quality throughout the storage process.",
        galleryTitle: "Facility Gallery",
        gallery: [
          { title: "Cold Storage Rooms", alt: "Interior of a temperature-controlled cold storage room" },
          { title: "Refrigeration Systems", alt: "Refrigeration equipment serving a cold storage facility" },
          { title: "Loading & Unloading Area", alt: "Tahseen Jaber cold storage loading bays" },
          { title: "Warehouse", alt: "Interior view of the cold storage warehouse" },
          { title: "Facility Exterior", alt: "Exterior of the Tahseen Jaber Cold Storage facility" },
          { title: "Logistics Area", alt: "Truck and logistics area at the cold storage facility" },
        ],
        specificationsTitle: "Facility Specifications",
        specifications: [
          { value: "100 Pallets", label: "Storage Capacity" },
          { value: "18", label: "Number of Cold Rooms" },
          { value: "-20°C to +16°C", label: "Temperature Range" },
        ],
        infrastructureTitle: "Facility Areas",
        infrastructure: [
          { category: "Deep Freeze & Chill", name: "Chilled & Frozen Chambers" },
          { category: "Dock Bays", name: "Sealed & Insulated Loading Bays" },
          { category: "High-Bay Racking", name: "Standardized Heavy-Duty Racking" },
          { category: "Plant & Redundancy", name: "Industrial Refrigeration Plant" },
        ],
      },

      box1Title: "Temperature-Controlled Environments",
      box1Desc:
        "Utilizing state-of-the-art temperature regulation technology, we maintain consistent cold environments tailored to your product needs. This precision helps prevent spoilage and extends shelf life.",

      box2Title: "Advanced Inventory Management",
      box2Desc:
        "With integrated inventory tracking systems, Tahseen Jaber ensures accurate stock monitoring and quick retrieval, enhancing your supply chain's efficiency and timely dispatch schedules.",

      box3Title: "Secure and Monitored Access",
      box3Desc:
        "Our cold storage warehouses are equipped with robust security measures, including 24/7 surveillance and controlled access, to protect your valuable inventory from damage and risks.",
      box3Btn: "Get in touch with us",

      box4Title: "Flexible Storage Options",
      box4Desc:
        "We offer scalable cold storage options to accommodate varying inventory sizes and durations. Whether you require short-term or long-term contracts, our facilities adapt to your demands.",
      box4Btn: "Explore our pricing Plans",

      customizedHeading: "Customized Storage Solutions",
      customizedDesc1:
        "We understand that different products have unique storage requirements. Tahseen Jaber offers customized cold storage solutions designed to meet your specific needs. From adjusting temperature ranges to accommodating special packaging, our team works closely with you to deliver personalized service that enhances product integrity and supports your business objectives.",
      customizedDesc2:
        "Our advanced scalable infrastructure allows seamless capacity expansion, specialized humidity zones, and multi-climate compartmentation to guarantee your perishable goods receive the exact preservation environment demanded by global cold chain standards.",

      tempMgmtHeading: "Advanced\nTemperature\nManagement",
      tempMgmtDesc:
        "Our cold storage services provide a reliable environment for perishable goods, preserving freshness and quality. With advanced temperature control systems and strict monitoring, we ensure your products remain in optimal condition throughout their storage period. Whether you need short-term or long-term storage, our facilities are designed to meet your specific needs efficiently. Trust Tahseen Jaber to safeguard your inventory with professionalism and care.",
      tempChecklist: [
        "Accurate stock tracking",
        "Continuous temperature monitoring",
        "Reduced handling errors",
        "Flexible storage solutions",
      ],

      contactHeading: "Get in Touch with Us",
      contactImageAlt: "Interior of a temperature-controlled cold storage room",
      contactNameLabel: "Full Name",
      contactNamePlaceholder: "Full Name",
      contactEmailLabel: "Email Address",
      contactEmailPlaceholder: "Email Address",
      contactMessageLabel: "Description",
      contactMessagePlaceholder: "Description",
      contactSendBtn: "Send Message",
      contactConfidential:
        "Your information will be treated confidentially and used only to respond to your inquiry.",
      contactRequiredError: "Please complete all required fields.",
      contactEmailError: "Please enter a valid email address.",
      contactBackendNotice:
        "Message sending is not connected yet. Please contact us by phone or email instead.",
      contactSuccessTitle: "Inquiry Received",
      contactSuccessDesc:
        "Thank you for contacting Tahseen Jaber. We will get in touch shortly.",
      contactSendAnother: "Send another message",

      pricingModalTitle: "Flexible Pricing Plans",
      pricingModalDesc:
        "Tahseen Jaber Cold Storage offers customized tiered pricing plans designed around your required pallet volume, temperature specifications, and contract duration.",
      pricingTierCol: "Plan Tier",
      pricingTermsCol: "Allocation & Terms",
      pricingTier1: "Short-Term Flexible",
      pricingTerms1: "Per Pallet / Daily & Weekly",
      pricingTier2: "Dedicated Commercial",
      pricingTerms2: "Monthly Reserved Bays",
      pricingTier3: "Enterprise Cold Chain",
      pricingTerms3: "Multi-Chamber Custom Logistics",
      pricingRequestBtn: "Request Personalized Rate Card",
      pricingCloseBtn: "Close",
    },
    home: {
      hero: {
        title: "Tahseen Jaber",
        tagline: "Cold Storage",
        desc:
          "Experience top-tier cold storage services designed to preserve your perishable goods with precision and care. Our facilities ensure optimal temperature control and hygiene, supporting your business needs efficiently and securely at Tahseen Jaber Cold Storage. Trust us to keep your products fresh and safe.",
        cta: "Explore our services",
      },
      pillars: [
        {
          tag: "Precision Cooling Technology",
          title: "Advanced Temperature Control",
          desc:
            "Utilizing cutting-edge refrigeration systems, our cold storage units maintain consistent temperatures essential for preserving sensitive products. This technology minimizes spoilage and extends shelf life, ensuring your goods remain fresh and high-quality throughout storage.",
        },
        {
          tag: "Protecting Your Inventory",
          title: "Secure Storage Facilities",
          desc:
            "Our cold storage warehouses are equipped with advanced security measures to safeguard your products 24/7. With monitored access points and surveillance systems, we ensure that your inventory is protected against theft and unauthorized entry.",
        },
        {
          tag: "Tailored to Your Needs",
          title: "Flexible Storage Options",
          desc:
            "We offer customizable storage plans that accommodate varying volumes and durations. Whether you need short-term or long-term storage, our facilities adapt to your requirements, providing scalable solutions to optimize your supply chain.",
        },
      ],
      getInTouch: {
        title: "Get in Touch with Us",
        desc:
          "Have questions or need personalized storage solutions? Reach out to Tahseen Jaber Cold Storage today. Our customer support team is ready to assist you with inquiries and provide expert advice to ensure your storage needs are met with the highest standards. Connect with us and start optimizing your cold storage today.",
        cta: "Contact customer support",
      },
      benefits: [
        {
          title: "State-of-the-Art Facilities",
          desc:
            "Our cold storage units feature cutting-edge refrigeration systems and insulated designs that guarantee consistent temperature control. This infrastructure supports a wide range of products—including fruits, vegetables, meat, chicken, seafood, and pharmaceuticals—within our state-of-the-art facilities, ensuring they stay in prime condition throughout storage durations.",
          btn: "Learn more about our facilities",
        },
        {
          title: "Flexible Storage Options",
          desc:
            "We offer customizable storage spaces to accommodate varying volumes and product types. Whether you require short-term or long-term storage, our flexible solutions ensure efficiency and cost-effectiveness, allowing Tahseen Jaber to adapt quickly to market demands.",
          btn: "Explore our services",
        },
        {
          title: "Advanced Security Measures",
          desc:
            "Security is paramount in our cold storage facilities. We employ 24/7 surveillance, controlled access, and alarm systems to protect your goods. These measures provide peace of mind, knowing your inventory is safe from unauthorized access and environmental hazards.",
          btn: "Get in touch with our team",
        },
        {
          title: "Efficient Inventory Management",
          desc:
            "Utilizing the latest barcode and tracking technology, our inventory management system ensures accuracy and transparency. This allows Tahseen Jaber to monitor stock levels in real time, optimize storage space, and facilitate timely order fulfillment.",
          btn: "Explore storage solutions",
        },
      ],
      testimonial: {
        quote:
          "Choosing Tahseen Jaber for our cold storage requirements was a game-changer. Great facilities and excellent customer service.",
        author: "Patricia Torres",
        role: "Director of Logistics & Commercial Supply",
      },
      comprehensive: {
        title: "Comprehensive Service Offerings",
        desc:
          "Our comprehensive range of services extends beyond cold storage to include inventory management, logistics support, and real-time tracking. We are committed to enhancing your supply chain efficiency through integrated solutions that simplify operations and reduce overheads. Partner with us to experience seamless storage and distribution services.",
        btn: "Discover our services",
      },
      solutions: {
        title: "Efficient Cold Storage Solutions",
        desc:
          "Our cold storage facilities provide the ideal environment to preserve perishable goods, ensuring freshness and quality throughout the supply chain. With advanced temperature control and monitoring systems, we guarantee consistent conditions tailored to your specific storage needs. Trust our secure and reliable cold storage services to minimize spoilage and extend the shelf life of your products.",
        btn: "Learn about our services",
      },
      contactSection: {
        title: "Get in Touch",
        desc:
          "Get in touch with us to explore our cold storage options. We are dedicated to providing top-notch storage facilities for your products. Contact us now to discuss how we can support your storage requirements.",
        namePlaceholder: "Full Name",
        emailPlaceholder: "Email Address",
        descPlaceholder: "Description",
        unlockedText: "Form unlocked successfully",
        lockedText: "Click lock icon few times to unblock the form",
        sendBtn: "Send message",
        confidential:
          "You are very important to us, all information received will always remain confidential.",
        thankYou: "Thank You",
        thankYouDesc:
          "Your message has been received. Our team will get in touch with you shortly.",
        sendAnother: "Send another inquiry",
      },
    },
    about: {
      badge: "About Us",
      title: "Reliable Cold Storage & Cold Chain Solutions in Iraq",
      desc:
        "Providing professional cold storage, temperature-controlled handling, and cold-chain solutions for businesses across Iraq.",
      introP1:
        "We provide professional cold storage, temperature-controlled handling, and cold-chain solutions for businesses across Iraq.",
      introP2:
        "Our services are designed to support businesses handling perishable and temperature-sensitive products through dependable storage, professional handling, and efficient cold-chain operations.",
      servicesBadge: "Capabilities & Scope",
      twoCol: {
        optimalSubtitle: "Maintain Optimal Conditions",
        optimalTitle: "Temperature-Controlled Warehousing",
        optimalDesc:
          "Temperature-sensitive inventory needs appropriate storage conditions. Our temperature-controlled warehousing supports the preservation of perishable products through professional handling and organized storage operations. We work with businesses across Iraq to help maintain product quality and prepare inventory for its next stage in the cold chain.",
        flexibleSubtitle: "Customized to Your Needs",
        flexibleTitle: "Flexible Storage Options",
        flexibleDesc:
          "We offer cold storage arrangements suited to different product types, storage durations, and inventory requirements. Whether you need short-term storage or an ongoing storage plan, our team works with you to organize appropriate space and handling around your business needs and distribution schedules.",
      },
      storage: {
        title: "Reliable Cold Storage Solutions",
        desc:
          "Tahseen Jaber supports businesses in Iraq with temperature-controlled storage and professional handling for perishable goods. We coordinate receiving, storage, and preparation for dispatch around your product requirements, helping maintain appropriate conditions and dependable operations throughout the cold chain.",
        highlights: [
          "Temperature-controlled environment",
          "Professional inventory handling",
          "Efficient storage operations",
        ],
        imageAlt: "Clean commercial refrigerated cold-storage chamber with ceiling cooling units",
      },
      commitments: {
        qualityTitle: "Commitment to Quality and Safety",
        qualityDesc:
          "Quality-focused storage starts with careful product handling and appropriate conditions. We organize receiving, storage, and dispatch around the needs of temperature-sensitive goods, helping businesses protect perishable inventory through professional facility operations and dependable cold-chain support.",
        qualityBtn: "Request pricing",
        sustainabilityTitle: "Sustainable Cold Storage Practices",
        sustainabilityDesc:
          "Responsible cold storage means planning storage space and handling work carefully, using resources thoughtfully, and avoiding unnecessary product movement or waste. Our approach focuses on appropriate storage conditions and practical coordination with customers to support efficient, responsible operations.",
        sustainabilityBtn: "Learn more about services",
        imageAlt: "Refrigerated food-storage room with organized racks",
      },
      inventory: {
        title: "Professional Cold Storage & Cold Chain Solutions for Your Business in Iraq",
        brandName: "Tahseen Jaber cold storage",
        btn: "Get Started",
      },
      servicesHeading: "Our Core Cold Chain Solutions",
      servicesSub:
        "Cold storage leasing, cold chain delivery, import / export & re-export, and consignment sale in Iraq.",
      readMore: "Read More",
      solutions: [
        {
          title: "Cold Storage Leasing",
          desc:
            "We provide temperature-controlled storage solutions designed to meet the requirements of businesses dealing with perishable and temperature-sensitive products.",
          href: "/services",
        },
        {
          title: "Cold Chain Delivery",
          desc:
            "Our cold-chain solutions are designed to support the safe movement and handling of temperature-sensitive products while maintaining appropriate conditions.",
          href: "/services",
        },
        {
          title: "Import / Export & Re-export",
          desc:
            "We support business operations related to the import, export and re-export of products, subject to the requirements and scope of our operations.",
          href: "/services",
        },
        {
          title: "Consignment Sale",
          desc:
            "We provide professional product handling and consignment-related solutions for businesses requiring reliable storage and distribution support.",
          href: "/services",
        },
      ],
      missionBadge: "Our Mission",
      missionTitle: "Safeguarding perishable value from storage to supply.",
      missionP1:
        "Cold storage is more than square footage—it is an active defense against product degradation. Agricultural commodities and sensitive freight require unwavering temperature consistency to retain crispness, weight, and marketability.",
      missionP2:
        "At Tahseen Jaber Cold Storage, we combine robust industrial infrastructure with disciplined warehouse management. We provide producers and distributors with the operational confidence that their inventory remains secure from inbound arrival through outbound cross-docking.",
      principlesBadge: "Operating Principles",
      principlesTitle: "How we deliver dependable storage.",
      principles: [
        {
          number: "01",
          title: "Thermal Continuity",
          text:
            "From incoming truck docks to regulated chambers, our facility is engineered to prevent thermal shocks that compromise shelf life.",
        },
        {
          number: "02",
          title: "Quality Preservation",
          text:
            "We protect the texture, moisture, and market value of perishable goods through calibrated humidity and air circulation.",
        },
        {
          number: "03",
          title: "Disciplined Logistics",
          text:
            "Strict intake verification, orderly pallet staging, and prompt dock turnarounds ensure seamless freight handoffs.",
        },
        {
          number: "04",
          title: "Client Partnership",
          text:
            "We structure our storage allocation around harvest seasonality, supply fluctuations, and commercial distributor timelines.",
        },
      ],
      ctaTitle: "Let's discuss your cold storage needs.",
      ctaDesc:
        "Our operational team is ready to assist with pallet allocation, receiving schedules, and facility specifications.",
      ctaBtn: "Get in Touch",
    },
    facilities: {
      badge: "Our Facilities",
      title: "Facilities",
      desc:
        "Engineered for maximum thermal stability, hygienic cargo staging, and seamless freight handling across every square foot.",
      refrigNote:
        "Industrial-grade compressors and pressure loops provide steady cooling distribution with continuous atmospheric monitoring.",
      archBadge: "Infrastructure Architecture",
      archTitle: "Engineered zones built for preservation.",
      zones: [
        {
          number: "01",
          category: "Deep Freeze & Chill",
          name: "Chilled & Frozen Chambers",
          desc:
            "Multi-temperature chambers operating from deep freeze (-25°C) to regulated fresh produce storage (+4°C) with continuous computerized telemetry.",
          highlights: [
            "Independent multi-loop cooling",
            "Continuous microclimate logging",
            "Food-grade floor coatings",
          ],
        },
        {
          number: "02",
          category: "Dock Bays",
          name: "Sealed & Insulated Loading Bays",
          desc:
            "Temperature-buffered staging docks with hydraulic dock levelers and inflatable perimeter air cushions that prevent thermal breach during trailer loading.",
          highlights: [
            "Inflatable airtight dock seals",
            "Pre-cooled enclosed docks",
            "Rapid hydraulic levelers",
          ],
        },
        {
          number: "03",
          category: "High-Bay Racking",
          name: "Standardized Heavy-Duty Racking",
          desc:
            "Engineered pallet racking optimized for standard EUR/ISO pallet dimensions, seismic stabilization, and rapid reach-truck circulation.",
          highlights: [
            "Standard ISO & EUR bays",
            "Impact bollards & rail guides",
            "High-density storage capacity",
          ],
        },
        {
          number: "04",
          category: "Plant & Redundancy",
          name: "Industrial Refrigeration Plant",
          desc:
            "Dual-circuit ammonia/glycol central plant with auto-switchover and automatic on-site backup generator sets ensuring 100% operational continuity.",
          highlights: [
            "Dual redundant compressor banks",
            "Automatic generator backup",
            "24/7 SCADA safety telemetry",
          ],
        },
      ],
      ctaTitle: "Schedule a facility inspection or intake.",
      ctaDesc:
        "Our dispatch team coordinates facility visits and logistics intake scheduling by appointment.",
      ctaBtn: "Contact Dispatch",
    },
    whyChooseUs: {
      title: "Why Choose Us",
      desc: "Discover why businesses choose Tahseen Jaber Cold Storage for reliable temperature-controlled storage, professional handling, and cold-chain support.",
      showcaseDesc:
        "We are committed to providing reliable, temperature-controlled storage and logistics solutions that meet the needs of modern businesses. Our focus on quality, safety and customer support makes us a trusted partner for your cold storage requirements.",
      showcaseImageAlt: "Cold-storage worker in a temperature-controlled warehouse",
      advantagesEyebrow: "OUR ADVANTAGES",
      heading: "Key Reasons to Work with Us",
      intro:
        "We combine modern infrastructure, professional management and customer-focused service to deliver reliable cold storage solutions.",
      advantages: [
        { title: "Reliable Temperature Control", description: "State-of-the-art systems to maintain consistent and accurate temperatures." },
        { title: "Secure Storage Facilities", description: "Safe and organized storage for perishable and temperature-sensitive goods." },
        { title: "Experienced Team", description: "A professional team dedicated to supporting your business needs." },
        { title: "Flexible Storage Options", description: "Tailored solutions to accommodate different product types and volumes." },
        { title: "Strategic Location", description: "Convenient access for efficient distribution and transport." },
        { title: "Customer-Focused Service", description: "We work closely with you to ensure a smooth and reliable storage experience." },
      ],
      statisticsAriaLabel: "Facility highlights",
      statistics: [
        { value: "", label: "Storage Capacity", unit: "Pallets", accessibleValue: "100 pallets" },
        { value: "", label: "Number of Cold Rooms", unit: "", accessibleValue: "18" },
        { value: "", label: "Temperature Range", unit: "", accessibleValue: "-20°C to +16°C" },
        { value: "Strategic Location", label: "Easy Access for Distribution", unit: "", accessibleValue: "Strategic location, easy access for distribution" },
      ],
      commitmentEyebrow: "OUR COMMITMENT",
      supportTitle: "Supporting Your Business Every Step of the Way",
      supportDesc:
        "From temperature-controlled storage to organized handling and cold-chain support, Tahseen Jaber Cold Storage is committed to helping businesses manage their perishable and temperature-sensitive products with care.",
      commitmentHighlights: [
        { title: "Quality Service", description: "Supporting organized and professional storage operations." },
        { title: "Product Care", description: "Focused on maintaining product quality throughout storage and handling." },
        { title: "Business Partnerships", description: "Providing practical solutions that support long-term business relationships." },
      ],
      ctaTitle: "Ready to Work With Us?",
      ctaDesc: "Contact Tahseen Jaber Cold Storage to discuss your cold-storage and logistics requirements.",
      ctaBtn: "Get in Touch",
      imageAlt: "Cold-storage logistics warehouse exterior with loading docks at dusk",
    },
    contact: {
      title: "Contact Us",
      desc:
        "Looking for reliable cold storage solutions? Look no further than tahseenjaber. Our experienced team is dedicated to providing top-notch storage services for your perishable goods. Get in touch with us now to discuss your requirements.",
      benefits: [
        {
          title: "Advanced Temperature Control",
          desc:
            "Our state-of-the-art temperature control technology maintains consistent cold environments tailored to your product requirements. This precision prevents spoilage and extends shelf life, making Tahseen Jaber a trusted partner for your cold storage needs.",
        },
        {
          title: "Secure Warehousing",
          desc:
            "We prioritize security with comprehensive monitoring and access control protocols. Our warehouses are designed to protect your goods from unauthorized access and environmental risks. Choose Tahseen Jaber for cold storage that combines safety with superior capabilities.",
        },
        {
          title: "Flexible Storage Options",
          desc:
            "Whether you need short-term or long-term storage, our facilities offer flexible options to suit your logistics. We adapt to your requirements, providing scalable cold storage solutions that grow with your business.",
        },
      ],
      formHeading: "Reach Out Today",
      formDesc:
        "Ready to discuss your cold storage requirements? Get in touch with us today to discover how we can support your storage and warehousing needs with our specialized services.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      messagePlaceholder: "Your message or question",
      sendBtn: "Send message",
      confidential:
        "You are very important to us, all information received will always remain confidential.",
      successTitle: "Message Transmitted",
      successDesc:
        "Thank you for contacting Tahseen Jaber Cold Storage. We will review your request and reach out shortly.",
      sendAnother: "Send another message",
      metrics: {
        m1: "Advanced Temperature Control",
        m2: "Secure Facility Access",
        m3: "Flexible Storage Options",
        m4: "Efficient Inventory Management",
        m5: "Strategic Location Advantage",
      },
      directionsHeading: "Facility Directions",
      directionsDesc: "Contact our team for the facility address and directions before arranging a visit.",
      mapDirectionsLabel: "Get directions",
      getInTouchHeading: "Get in Touch",
      getInTouchDesc:
        "If you have any questions or inquiries regarding our cold storage services, don't hesitate to get in touch with us. Our team at tahseenjaber is here to assist you in finding the best storage solutions for your needs.",
      locationLabel: "Location:",
      emailLabel: "Email Address:",
      phoneLabel: "Phone number:",
      hoursLabel: "Work hours:",
      testimonialQuote:
        "“The team at Tahseen Jaber goes above and beyond to ensure our products are stored properly in their cold storage units.”",
      testimonialSub: "Commercial Food Logistics & Cold Chain Partner",
      closingTestimonial:
        "With Tahseen Jaber Cold Storage, we have peace of mind knowing that our perishable goods are well taken care of.",
    },
    footer: {
      tagline: "High-standard commercial cold chain logistics and temperature preservation facilities.",
      aboutTitle: "About Us",
      aboutDesc:
        "At Tahseen Jaber Cold Storage, we specialize in cold storage services designed to meet the highest industry standards. Our facilities are equipped with cutting-edge technology, defending precise temperatures so as to preserve the quality of your products.",
      quickLinks: "Quick Links",
      contactTitle: "Contact Info",
      galleryTitle: "Gallery",
      address: "Tahseen Jaber Cold Storage, Uuayrij Industrial area, Baghdad, Iraq",
      hours: "Monday – Saturday: 07:00 – 19:00 | Receiving: 24/7 By Appointment",
      copyright: "Tahseen Jaber Cold Storage. All rights reserved.",
    },
  },
  AR: {
    brand: {
      name: "تحسين جابر",
      tagline: "مخازن تبريد",
      fullName: "شركة تحسين جابر لمخازن التبريد",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      facilities: "لماذا تختارنا",
      contact: "اتصل بنا",
    },
    servicesPage: {
      heroTitle: "خدماتنا",
      heroDesc:
        "مع مرافق تحسين جابر للتخزين المبرد، نضمن لك الظروف المثالية للحفاظ على سلامة وجودة بضائعك القابلة للتلف. سواء كنت بحاجة إلى تخزين قصير الأجل أو طويل الأجل، فإن مستودعاتنا المضبوطة بدرجات حرارة دقيقة تحافظ على المناخ المطلوب لكل منتج.",
      breadcrumbHome: "الرئيسية",
      breadcrumbServices: "خدماتنا",

      reliableHeading: "حلول موثوقة للتخزين المبرد",
      reliableDesc:
        "تم تصميم مرافق التخزين المبرد لدينا للحفاظ على درجات حرارة مثالية، مما يضمن بقاء بضائعك القابلة للتلف طازجة وآمنة. بفضل التكنولوجيا المتقدمة وضوابط الجودة الصارمة، نوفر حلول تخزين موثوقة تلبي متطلبات مختلف القطاعات الصناعية والغذائية. ثق بنا لحماية منتجاتك بأعلى معايير الرعاية والكفاءة.",
      suitableForLabel: "مناسب لـ",

      serviceSections: [
        {
          title: "تأجير التخزين المبرد",
          description:
            "توفر مرافق التخزين المبرد لدينا للشركات مساحات تخزين مُدارة باحترافية ومضبوطة الحرارة للمنتجات سريعة التلف والحساسة لدرجات الحرارة.",
          suitableFor: [
            "المنتجات الزراعية الطازجة",
            "المنتجات المجمدة",
            "البضائع الحساسة لدرجات الحرارة",
            "المنتجات الأخرى المعتمدة",
          ],
          imageAlt: "مستودع تخزين مبرد ومضبوط الحرارة يضم منتجات طازجة ومجمدة",
        },
        {
          title: "التوصيل بسلسلة التبريد",
          description:
            "يلعب النقل ضمن سلسلة التبريد دوراً مهماً في الحفاظ على جودة المنتجات أثناء نقلها. صُممت خدماتنا لدعم المناولة والنقل الآمنين للمنتجات الحساسة لدرجات الحرارة.",
          imageAlt: "شاحنة توصيل مبردة عند رصيف تحميل مستودع للتخزين المبرد",
        },
        {
          title: "الاستيراد والتصدير وإعادة التصدير",
          description:
            "نقدم الدعم التشغيلي للشركات المشاركة في حركة البضائع من خلال أنشطة الاستيراد والتصدير وإعادة التصدير، وفقاً لنطاق عمليات الشركة والمتطلبات المعمول بها.",
          imageAlt: "بضائع وحاويات شحن مضبوطة الحرارة في منشأة لوجستية",
        },
        {
          title: "البيع بالأمانة",
          description:
            "نقدم خدمات التخزين والمناولة ودعم المبيعات المتعلقة بالبيع بالأمانة عند الحاجة، لمساعدة الشركات على إدارة منتجاتها من خلال عملية منظمة للتخزين والتوزيع.",
          imageAlt: "موظفو مستودع يتحققون من المخزون في منشأة توزيع مبردة",
        },
      ],
      facilitySection: {
        title: "مرافقنا",
        description:
          "صُممت مرافقنا لتوفير حلول تخزين آمنة ومنظمة للمنتجات الحساسة لدرجات الحرارة. ومن خلال مناطق التخزين المخصصة وعمليات المناولة الاحترافية، نهدف إلى الحفاظ على جودة المنتجات طوال عملية التخزين.",
        galleryTitle: "معرض المرافق",
        gallery: [
          { title: "غرف التخزين المبرد", alt: "منظر داخلي لغرفة تخزين مبردة ومضبوطة الحرارة" },
          { title: "أنظمة التبريد", alt: "معدات التبريد المستخدمة في منشأة التخزين المبرد" },
          { title: "منطقة التحميل والتفريغ", alt: "أرصفة التحميل في منشأة تحسين جابر للتخزين المبرد" },
          { title: "المستودع", alt: "منظر داخلي لمستودع التخزين المبرد" },
          { title: "الواجهة الخارجية للمنشأة", alt: "الواجهة الخارجية لمنشأة تحسين جابر للتخزين المبرد" },
          { title: "منطقة الخدمات اللوجستية", alt: "شاحنة ومنطقة الخدمات اللوجستية في منشأة التخزين المبرد" },
        ],
        specificationsTitle: "مواصفات المنشأة",
        specifications: [
          { value: "100 منصة تخزين", label: "سعة التخزين" },
          { value: "18", label: "عدد غرف التبريد" },
          { value: "-20°م إلى +16°م", label: "نطاق درجات الحرارة" },
        ],
        infrastructureTitle: "مناطق المنشأة",
        infrastructure: [
          { category: "التجميد والتبريد", name: "غرف التبريد والتجميد" },
          { category: "أرصفة الشحن", name: "أرصفة تحميل محكمة ومعزولة" },
          { category: "أرفف التخزين العالية", name: "أنظمة أرفف ثقيلة قياسية" },
          { category: "محطة التبريد", name: "محطة التبريد الصناعية" },
        ],
      },

      box1Title: "بيئات تخزين مضبوطة الحرارة",
      box1Desc:
        "باستخدام أحدث تقنيات تنظيم درجات الحرارة، نحافظ على بيئات تبريد متسقة ومخصصة لاحتياجات منتجاتك بدقة متناهية. تمنع هذه الدقة التلف وتطيل العمر الافتراضي للبضائع.",

      box2Title: "إدارة متطورة للمخزون",
      box2Desc:
        "من خلال أنظمة تتبع المخزون الرقمية المتكاملة، تضمن شركة تحسين جابر مراقبة دقيقة للمخزون وسرعة في المعالجة والتوزيع، مما يعزز كفاءة سلسلة التوريد وجداول الشحن الخاصة بك.",

      box3Title: "أمان ومراقبة على مدار الساعة",
      box3Desc:
        "مستودعاتنا مجهزة بتدابير أمنية متينة تشمل مراقبة بالكاميرات على مدار 24 ساعة وأنظمة تحكم بالدخول، لحماية بضائعك الثمينة من أي أضرار أو مخاطر.",
      box3Btn: "تواصل معنا",

      box4Title: "خيارات تخزين مرنة",
      box4Desc:
        "نقدم حلول تخزين مبرد قابلة للتوسع والتعديل لتناسب مختلف أحجام الشحنات والمدد الزمنية. سواء كنت تبحث عن عقود قصيرة أو طويلة الأجل، فإن مرافقنا تتكيف مع متطلبات عملك.",
      box4Btn: "استكشف خطط الأسعار",

      customizedHeading: "حلول تخزين مخصصة",
      customizedDesc1:
        "ندرك أن لكل منتج متطلبات تخزين فريدة. تقدم شركة تحسين جابر حلول تخزين مبرد مخصصة مصممة خصيصاً لتلبية احتياجاتك، بدءاً من ضبط نطاقات درجات الحرارة المناسبة وحتى توفير حلول التغليف المتخصصة، حيث يعمل فريقنا معك لتقديم خدمات تعزز جودة بضائعك وتخدم أهدافك التجارية.",
      customizedDesc2:
        "تتيح بنيتنا التحتية المتقدمة إمكانية التوسع السلس في السعات، وتوفير مناطق رطوبة متخصصة، وتقسيم الغرف لمناخات متعددة لضمان حصول بضائعك على بيئة الحفظ المثالية المعتمدة عالمياً.",

      tempMgmtHeading: "إدارة ومراقبة\nدرجات الحرارة\nالمتقدمة",
      tempMgmtDesc:
        "توفر خدمات التخزين المبرد لدينا بيئة يعتمد عليها للبضائع القابلة للتلف، للحفاظ على نضارتها وأعلى مستويات جودتها. بفضل أنظمة التحكم الحراري المتطورة والمراقبة اللحظية الصارمة، نضمن بقاء منتجاتك في أفضل حالة طوال فترة التخزين. سواء كنت بحاجة إلى تخزين قصير أو طويل الأجل، فإن مرافقنا مهيأة لتلبية احتياجاتك بكفاءة. ثق في تحسين جابر لحماية مخزونك بأقصى درجات الاحترافية والرعاية.",
      tempChecklist: [
        "تتبع دقيق وموثق للمخزون",
        "مراقبة مستمرة ولحظية للحرارة",
        "تقليل أخطاء المناولة والتلف",
        "حلول تخزين مرنة وقابلة للتوسع",
      ],

      contactHeading: "تواصل معنا",
      contactImageAlt: "الجزء الداخلي لغرفة تخزين مبردة مضبوطة الحرارة",
      contactNameLabel: "الاسم الكامل",
      contactNamePlaceholder: "الاسم الكامل",
      contactEmailLabel: "البريد الإلكتروني",
      contactEmailPlaceholder: "البريد الإلكتروني",
      contactMessageLabel: "الوصف",
      contactMessagePlaceholder: "الوصف",
      contactSendBtn: "إرسال الرسالة",
      contactConfidential:
        "ستُعامل معلوماتك بسرية وستُستخدم فقط للرد على استفسارك.",
      contactRequiredError: "يرجى إكمال جميع الحقول المطلوبة.",
      contactEmailError: "يرجى إدخال عنوان بريد إلكتروني صالح.",
      contactBackendNotice:
        "إرسال الرسائل عبر هذا النموذج غير متاح حالياً. يرجى التواصل معنا هاتفياً أو عبر البريد الإلكتروني.",
      contactSuccessTitle: "تم استلام استفسارك بنجاح",
      contactSuccessDesc:
        "شكراً لتواصلك مع شركة تحسين جابر لمخازن التبريد. سيتواصل فريقنا معك في أقرب وقت.",
      contactSendAnother: "إرسال رسالة أخرى",

      pricingModalTitle: "خطط الأسعار المرنة",
      pricingModalDesc:
        "تقدم شركة تحسين جابر لمخازن التبريد خطط أسعار مصممة ومخصصة وفقاً لحجم منصات التخزين (الطبليات)، ومتطلبات درجات الحرارة، ومدة العقد.",
      pricingTierCol: "فئة الخطة",
      pricingTermsCol: "التخصيص والشروط",
      pricingTier1: "مرنة قصيرة الأجل",
      pricingTerms1: "حسب الطبلية / يومي وأسبوعي",
      pricingTier2: "تجارية مخصصة",
      pricingTerms2: "أجنحة تخزين شهرية محجوزة",
      pricingTier3: "سلسلة التبريد للشركات الكبرى",
      pricingTerms3: "غرف متعددة ولوجستيات مخصصة بالكامل",
      pricingRequestBtn: "طلب قائمة أسعار مخصصة",
      pricingCloseBtn: "إغلاق",
    },
    home: {
      hero: {
        title: "تحسين جابر",
        tagline: "مخازن تبريد",
        desc:
          "اختبر أرقى خدمات التخزين المبرد المصممة للحفاظ على بضائعك القابلة للتلف بأقصى درجات الدقة والعناية. تضمن مرافقنا تحكماً مثالياً في درجات الحرارة وأعلى معايير النظافة، لدعم أعمالك بكفاءة وأمان في مخازن تحسين جابر. ثق بنا للحفاظ على منتجاتك طازجة وآمنة.",
        cta: "استكشف خدماتنا",
      },
      pillars: [
        {
          tag: "تكنولوجيا التبريد الدقيقة",
          title: "تحكم متقدم بدرجات الحرارة",
          desc:
            "باستخدام أنظمة تبريد متطورة عالمياً، تحافظ وحدات التخزين المبرد لدينا على درجات حرارة ثابتة لا غنى عنها لحفظ المنتجات الحساسة. تقلل هذه التكنولوجيا من احتمالية التلف وتطيل العمر الافتراضي لبضائعك، مما يضمن بقاءها طازجة وعالية الجودة.",
        },
        {
          tag: "حماية تامة لمخزونك",
          title: "مستودعات تخزين مؤمنة",
          desc:
            "مستودعات التخزين المبرد لدينا مزودة بإجراءات أمان متقدمة لحماية منتجاتك على مدار الساعة طوال أيام الأسبوع. مع نقاط وصول مراقبة وأنظمة مراقبة بالكاميرات، نضمن حماية بضائعك من السرقة والدخول غير المصرح به.",
        },
        {
          tag: "مصممة وفقاً لمتطلباتك",
          title: "خيارات تخزين مرنة",
          desc:
            "نقدم خطط تخزين قابلة للتخصيص تتسع لمختلف الأحجام والمدد الزمنية. سواء كنت بحاجة إلى تخزين قصير أو طويل الأجل، فإن مرافقنا تتكيف مع متطلباتك لتقديم حلول قابلة للتطوير تعزز كفاءة سلسلة التوريد الخاصة بك.",
        },
      ],
      getInTouch: {
        title: "تواصل معنا مباشرة",
        desc:
          "هل لديك استفسارات أو تحتاج إلى حلول تخزين مخصصة لمنتجاتك؟ تواصل مع شركة تحسين جابر لمخازن التبريد اليوم. فريق خدمة العملاء لدينا مستعد لمساعدتك في استفساراتك وتقديم المشورة الفنية الخبيرة لضمان تلبية متطلباتك بأعلى المعايير المهنية.",
        cta: "الاتصال بخدمة العملاء",
      },
      benefits: [
        {
          title: "مرافق وتجهيزات حديثة",
          desc:
            "تتميز وحدات التخزين المبرد لدينا بأنظمة تبريد متطورة وتصاميم معزولة تضمن ثبات درجات الحرارة بدقة متناهية. تدعم هذه البنية التحتية مجموعة واسعة من المنتجات — بما في ذلك الفواكه / الخضروات / اللحوم / الدجاج / المأكولات البحرية والأدوية في أحدث المرافق — مما يبقيها في أفضل حالاتها طوال فترات التخزين.",
          btn: "تعرف على المزيد حول مرافقنا",
        },
        {
          title: "خيارات تخزين مرنة",
          desc:
            "نوفر مساحات تخزين مخصصة لاستيعاب مختلف الأحجام وأنواع المنتجات. سواء كنت بحاجة إلى تخزين قصير الأجل أو طويل الأجل، فإن حلولنا المرنة تضمن الكفاءة العالية والجدوى الاقتصادية لتمكينك من الاستجابة السريعة لمتطلبات السوق.",
          btn: "استكشف خدماتنا المتكاملة",
        },
        {
          title: "تدابير أمنية متقدمة",
          desc:
            "الأمان له الأولوية القصوى في مرافقنا. نوظف كاميرات مراقبة على مدار 24 ساعة، وبوابات وصول إلكترونية مشددة، وأنظمة إنذار ذكية لحماية بضائعك، مما يمنحك راحة البال بأن مخزونك محمي من أي مخاطر بيئية أو غير مصرح بها.",
          btn: "تواصل مع فريقنا المختص",
        },
        {
          title: "إدارة دقيقة وفعالة للمخزون",
          desc:
            "بالاعتماد على أحدث تقنيات الباركود والتتبع الرقمي، يضمن نظام إدارة المخزون لدينا أعلى درجات الدقة والشفافية. يتيح ذلك متابعة مستويات المخزون لحظياً، واستغلال مساحات التخزين بذكاء، وتسريع تجهيز الشحنات.",
          btn: "استكشف حلول التخزين",
        },
      ],
      testimonial: {
        quote:
          "كان اختيار شركة تحسين جابر لاحتياجاتنا من التخزين المبرد نقلة نوعية لأعمالنا. مرافق متميزة وخدمة عملاء فائقة الاحترافية.",
        author: "باتريشيا توريس",
        role: "مديرة الخدمات اللوجستية والتوريد التجاري",
      },
      comprehensive: {
        title: "باقة خدماتنا الشاملة",
        desc:
          "تتجاوز خدماتنا الشاملة مجرد التخزين المبرد لتشمل إدارة المخزون والدعم اللوجستي والتتبع اللحظي للشحنات. نحن ملتزمون بتعزيز كفاءة سلسلة التوريد الخاصة بك من خلال حلول متكاملة تبسط العمليات وتقلل التكاليف التشغيلية.",
        btn: "اكتشف جميع خدماتنا",
      },
      solutions: {
        title: "حلول تخزين مبرد عالية الكفاءة",
        desc:
          "توفر مرافق التخزين المبرد لدينا البيئة المثالية لحفظ السلع القابلة للتلف، مما يضمن نضارتها وجودتها على امتداد سلسلة التوريد بأكملها. مع أنظمة التحكم والمراقبة الحرارية المتطورة، نضمن ظروفاً متناسقة ومصممة خصيصاً لاحتياجات التخزين الخاصة بك.",
        btn: "تعرف على خدماتنا",
      },
      contactSection: {
        title: "تواصل معنا",
        desc:
          "تواصل معنا لاستكشاف خيارات التخزين المبرد المتاحة. نحن ملتزمون بتقديم أفضل مرافق التخزين لحماية منتجاتك. اتصل بنا الآن لمناقشة كيفية تلبية متطلبات التخزين الخاصة بك.",
        namePlaceholder: "الاسم الكامل",
        emailPlaceholder: "البريد الإلكتروني",
        descPlaceholder: "تفاصيل الطلب أو الاستفسار",
        unlockedText: "تم فتح النموذج بنجاح",
        lockedText: "انقر فوق أيقونة القفل لتفعيل النموذج",
        sendBtn: "إرسال الرسالة",
        confidential:
          "أنت مهم جداً بالنسبة لنا، وجميع المعلومات المستلمة تبقى سرية ومحمية دائماً.",
        thankYou: "شكراً لك",
        thankYouDesc:
          "تم استلام رسالتك بنجاح. سيتواصل فريقنا المتخصص معك في أقرب وقت.",
        sendAnother: "إرسال استفسار آخر",
      },
    },
    about: {
      badge: "من نحن",
      title: "حلول موثوقة للتخزين المبرد وسلسلة التبريد في العراق",
      desc:
        "توفير حلول احترافية للتخزين المبرد، والتعامل مع البضائع بدرجات حرارة مضبوطة، وخدمات سلسلة التبريد للشركات في جميع أنحاء العراق.",
      introP1:
        "نقدم حلولاً احترافية للتخزين المبرد والمناولة المضبوطة الحرارة وخدمات سلسلة التبريد للشركات في جميع أنحاء العراق.",
      introP2:
        "صُممت خدماتنا لدعم الشركات التي تتعامل مع المنتجات سريعة التلف والحساسة للحرارة من خلال تخزين موثوق ومناولة احترافية وعمليات فعالة لسلسلة التبريد.",
      servicesBadge: "قدراتنا الأساسية",
      twoCol: {
        optimalSubtitle: "الحفاظ على الظروف المثالية",
        optimalTitle: "مستودعات مضبوطة الحرارة",
        optimalDesc:
          "تحتاج المنتجات الحساسة للحرارة إلى ظروف تخزين مناسبة. يدعم التخزين المضبوط الحرارة لدينا حفظ المنتجات سريعة التلف من خلال المناولة الاحترافية وعمليات التخزين المنظمة. نعمل مع الشركات في أنحاء العراق للمساعدة في الحفاظ على جودة المنتجات وتجهيز المخزون للمرحلة التالية من سلسلة التبريد.",
        flexibleSubtitle: "مخصص لاحتياجاتك",
        flexibleTitle: "خيارات تخزين مرنة",
        flexibleDesc:
          "نقدم ترتيبات تخزين مبرد تناسب أنواع المنتجات المختلفة ومدد التخزين ومتطلبات المخزون. سواء كنت تحتاج إلى تخزين قصير الأجل أو خطة مستمرة، يعمل فريقنا معك لتنظيم المساحة والمناولة المناسبة وفقاً لاحتياجات أعمالك وجداول التوزيع.",
      },
      storage: {
        title: "حلول موثوقة للتخزين المبرد",
        desc:
          "تدعم تحسين جابر الشركات في العراق بخدمات التخزين المضبوط الحرارة والمناولة الاحترافية للمنتجات سريعة التلف. ننسق الاستلام والتخزين والتجهيز للإرسال وفقاً لمتطلبات منتجاتك، للمساعدة في الحفاظ على الظروف المناسبة واستمرارية العمليات عبر سلسلة التبريد.",
        highlights: [
          "بيئة مضبوطة الحرارة",
          "مناولة احترافية للمخزون",
          "عمليات تخزين فعالة",
        ],
        imageAlt: "غرفة تخزين تجارية مبردة ونظيفة مزودة بوحدات تبريد في السقف",
      },
      commitments: {
        qualityTitle: "الالتزام بالجودة والسلامة",
        qualityDesc:
          "يبدأ التخزين الذي يركز على الجودة بالمناولة الدقيقة للمنتجات وتوفير الظروف المناسبة. ننظم الاستلام والتخزين والإرسال حول احتياجات المنتجات الحساسة للحرارة، لمساعدة الشركات على حماية مخزونها من خلال التشغيل الاحترافي للمرافق ودعم سلسلة التبريد.",
        qualityBtn: "اطلب عرض سعر",
        sustainabilityTitle: "ممارسات مستدامة للتخزين المبرد",
        sustainabilityDesc:
          "يعني التخزين المبرد المسؤول التخطيط المدروس لمساحات التخزين وأعمال المناولة واستخدام الموارد بعناية وتجنب الحركة غير الضرورية للمنتجات وهدرها. يركز نهجنا على ظروف التخزين المناسبة والتنسيق العملي مع العملاء لدعم عمليات فعالة ومسؤولة.",
        sustainabilityBtn: "تعرف على خدماتنا",
        imageAlt: "غرفة تخزين أغذية مبردة مزودة بأرفف منظمة",
      },
      inventory: {
        title: "حلول احترافية للتخزين المبرد وسلسلة التبريد لأعمالك في العراق",
        brandName: "مخازن تحسين جابر للتبريد",
        btn: "ابدأ الآن",
      },
      servicesHeading: "قدرات سلسلة التبريد الأساسية لدينا",
      servicesSub:
        "تأجير التخزين المبرد وتوصيل سلسلة التبريد والاستيراد والتصدير وإعادة التصدير والبيع بالأمانة في العراق.",
      readMore: "اقرأ المزيد",
      solutions: [
        {
          title: "تأجير التخزين المبرد",
          desc:
            "نوفر حلول تخزين مضبوطة الحرارة ومصممة لتلبية متطلبات الشركات التي تتعامل مع المنتجات سريعة التلف والحساسة لدرجات الحرارة.",
          href: "/services",
        },
        {
          title: "توصيل سلسلة التبريد",
          desc:
            "تم تصميم حلول سلسلة التبريد الخاصة بنا لدعم النقل الآمن والتعامل السليم مع المنتجات الحساسة لدرجات الحرارة مع الحفاظ على الظروف المناسبة.",
          href: "/services",
        },
        {
          title: "الاستيراد / التصدير وإعادة التصدير",
          desc:
            "ندعم العمليات التجارية المتعلقة باستيراد وتصدير وإعادة تصدير المنتجات، وفقاً للمتطلبات ونطاق عملياتنا.",
          href: "/services",
        },
        {
          title: "البيع بالأمانة (الكونسيجمنت)",
          desc:
            "نقدم مناولة احترافية للمنتجات وحلولاً متعلقة بالبيع بالأمانة للشركات التي تحتاج إلى دعم موثوق في التخزين والتوزيع.",
          href: "/services",
        },
      ],
      missionBadge: "رسالتنا",
      missionTitle: "حماية قيمة المنتجات القابلة للتلف من التخزين إلى التوريد.",
      missionP1:
        "التخزين المبرد أكثر من مجرد مساحات وأمتار مربعة—إنه خط دفاع نشط ضد تلف المنتجات وتدهور جودتها. تتطلب السلع الزراعية والشحنات الحساسة ثباتاً حرارياً لا يتزعزع للحفاظ على نضارتها ووزنها وقيمتها التسويقية العالية.",
      missionP2:
        "في تحسين جابر لمخازن التبريد، نجمع بين البنية التحتية الصناعية المتينة وإدارة المستودعات المنضبطة. نوفر للمنتجين والموزعين الثقة التشغيلية التامة بأن مخزونهم يظل آمناً من لحظة وصول الشحنات وحتى تحميلها وتوزيعها.",
      principlesBadge: "مبادئ العمل",
      principlesTitle: "كيف نقدم خدمات تخزين يعتمد عليها.",
      principles: [
        {
          number: "01",
          title: "الاستمرارية الحرارية",
          text:
            "من أرصفة الاستلام المبردة وحتى غرف التخزين المنظمة، صُممت منشأتنا لمنع أي صدمات حرارية قد تؤثر سلباً على العمر الافتراضي للمنتجات.",
        },
        {
          number: "02",
          title: "الحفاظ على الجودة",
          text:
            "نحمي القوام، والرطوبة، والقيمة السوقية للمنتجات القابلة للتلف من خلال المعايرة الدقيقة للرطوبة ودوران الهواء النقي.",
        },
        {
          number: "03",
          title: "لوجستيات منضبطة",
          text:
            "فحص صارم عند الاستلام، وتنظيم دقيق للطبليات، وسرعة في مناولة الأرصفة تضمن تسليماً واستلاماً سلساً للبضائع.",
        },
        {
          number: "04",
          title: "الشراكة مع العملاء",
          text:
            "نصمم خطط التخزين لدينا بما يتوافق مع مواسم الحصاد الزراعي، وتقلبات العرض والطلب، والجداول الزمنية لشركات التوزيع التجارية.",
        },
      ],
      ctaTitle: "دعنا نناقش احتياجاتك من التخزين المبرد.",
      ctaDesc:
        "فريق العمليات لدينا مستعد لمساعدتك في تخصيص منصات التخزين، وجداول الاستلام، والمواصفات الفنية لمنشأتنا.",
      ctaBtn: "تواصل معنا",
    },
    facilities: {
      badge: "مرافقنا وتجهيزاتنا",
      title: "المرافق",
      desc:
        "مجهزة ومصممة هندسياً لتحقيق أقصى درجات الاستقرار الحراري، والمناولة الصحية للبضائع، وسلاسة عمليات النقل عبر كل متر مربع.",
      refrigNote:
        "توفر الضواغط الصناعية ودوائر التبريد المغلقة توزيعاً ثابتاً للبرودة مع مراقبة بيئية وجوية مستمرة على مدار الساعة.",
      archBadge: "الهندسة المعمارية للمنشأة",
      archTitle: "مناطق هندسية مصممة خصيصاً لأفضل حفظ للمنتجات.",
      zones: [
        {
          number: "01",
          category: "التجميد الفائق والتبريد",
          name: "غرف التجميد والتبريد المنفصلة",
          desc:
            "غرف متعددة درجات الحرارة تعمل من التجميد العميق (-25°م) وحتى حفظ المنتجات الطازجة المبرد (+4°م) مع نظام قياس وإشراف حاسوبي مستمر.",
          highlights: [
            "دوائر تبريد مستقلة ومتعددة",
            "تسجيل ومراقبة لحظية للمناخ الداخلي",
            "أرضيات معالجة ومطابقة لمعايير الغذاء",
          ],
        },
        {
          number: "02",
          category: "أرصفة الشحن والتفريغ",
          name: "أرصفة تحميل محكمة ومعزولة",
          desc:
            "أرصفة استلام معزولة حرارياً ومزودة برافعات هيدروليكية ووسائد هوائية مطاطية مانعة لتسرب الهواء الخارجي أثناء تفريغ وتحميل الشاحنات.",
          highlights: [
            "عوازل أرصفة هوائية مانعة لتسرب الهواء",
            "أرصفة مسبقة التبريد ومغلقة بالكامل",
            "رافعات هيدروليكية سريعة التكيف",
          ],
        },
        {
          number: "03",
          category: "أرفف الارتفاعات العالية",
          name: "أنظمة أرفف ثقيلة قياسية",
          desc:
            "أرفف تخزين مصممة خصيصاً لتلائم مقاسات الطبليات العالمية (EUR/ISO)، مع تدعيم ضد الاهتزازات وسهولة حركة رافعات الشوكة.",
          highlights: [
            "مطابقة لمقاسات ISO و EUR العالمية",
            "حواجز أمان ومسارات توجيه صلبة",
            "سعة تخزينية عالية الكثافة",
          ],
        },
        {
          number: "04",
          category: "محطة التبريد والجاهزية",
          name: "محطة التبريد الصناعية وأنظمة الطوارئ",
          desc:
            "محطة تبريد مركزية مزدوجة الدوائر مع أنظمة تحويل تلقائي ومولدات كهربائية احتياطية بالموقع لضمان استمرارية التشغيل بنسبة 100%.",
          highlights: [
            "مجموعات ضواغط احتياطية مزدوجة",
            "مولدات كهربائية تعمل تلقائياً فور انقطاع التيار",
            "نظام SCADA للرصد والإنذار المبكر على مدار 24/7",
          ],
        },
      ],
      ctaTitle: "حدد موعداً لمعاينة المرافق أو توريد البضائع.",
      ctaDesc:
        "يقوم فريق العمليات والتوزيع لدينا بتنسيق الزيارات الميدانية وجداول استلام الشحنات بموجب مواعيد مسبقة.",
      ctaBtn: "تواصل مع قسم العمليات",
    },
    whyChooseUs: {
      title: "لماذا تختارنا",
      desc: "اكتشف لماذا تختار الشركات تحسين جابر للتخزين المبرد الموثوق والمناولة الاحترافية ودعم سلسلة التبريد.",
      showcaseDesc:
        "نلتزم بتقديم حلول موثوقة للتخزين والنقل بدرجات حرارة مضبوطة تلبي احتياجات الشركات الحديثة. ويركز عملنا على الجودة والسلامة وخدمة العملاء، مما يجعلنا شريكاً موثوقاً لمتطلبات التخزين المبرد.",
      showcaseImageAlt: "عامل تخزين مبرد داخل مستودع مضبوط الحرارة",
      advantagesEyebrow: "مزايا خدماتنا",
      heading: "أهم الأسباب لاختيارنا",
      intro:
        "نجمع بين البنية التحتية الحديثة والإدارة الاحترافية والخدمة التي تركز على العملاء لتقديم حلول تخزين مبرد موثوقة.",
      advantages: [
        { title: "تحكم موثوق بدرجات الحرارة", description: "أنظمة متطورة للحفاظ على درجات حرارة ثابتة ودقيقة." },
        { title: "مرافق تخزين آمنة", description: "تخزين آمن ومنظم للمنتجات سريعة التلف والحساسة للحرارة." },
        { title: "فريق ذو خبرة", description: "فريق محترف مكرس لدعم احتياجات أعمالكم." },
        { title: "خيارات تخزين مرنة", description: "حلول مصممة لتناسب أنواع المنتجات والكميات المختلفة." },
        { title: "موقع استراتيجي", description: "سهولة الوصول لدعم التوزيع والنقل بكفاءة." },
        { title: "خدمة تركز على العملاء", description: "نعمل معكم عن قرب لضمان تجربة تخزين سلسة وموثوقة." },
      ],
      statisticsAriaLabel: "إمكانيات المنشأة",
      statistics: [
        { value: "", label: "السعة التخزينية", unit: "طبالي", accessibleValue: "100 طبالي" },
        { value: "", label: "عدد غرف التبريد", unit: "", accessibleValue: "18" },
        { value: "", label: "نطاق درجات الحرارة", unit: "", accessibleValue: "-20°C إلى +16°C" },
        { value: "موقع استراتيجي", label: "سهولة الوصول للتوزيع", unit: "", accessibleValue: "موقع استراتيجي، سهولة الوصول للتوزيع" },
      ],
      commitmentEyebrow: "التزامنا",
      supportTitle: "ندعم أعمالك في كل خطوة على الطريق",
      supportDesc:
        "من التخزين المضبوط الحرارة إلى المناولة المنظمة ودعم سلسلة التبريد، تلتزم مخازن تحسين جابر للتبريد بمساعدة الشركات على إدارة منتجاتها سريعة التلف والحساسة للحرارة بعناية.",
      commitmentHighlights: [
        { title: "خدمة عالية الجودة", description: "دعم عمليات تخزين منظمة واحترافية." },
        { title: "العناية بالمنتجات", description: "الحرص على جودة المنتجات طوال فترة التخزين والمناولة." },
        { title: "شراكات الأعمال", description: "حلول عملية تدعم علاقات عمل طويلة الأمد." },
      ],
      ctaTitle: "هل أنت مستعد للعمل معنا؟",
      ctaDesc: "تواصل مع مخازن تحسين جابر للتبريد لمناقشة متطلبات التخزين المبرد والخدمات اللوجستية.",
      ctaBtn: "تواصل معنا",
      imageAlt: "المظهر الخارجي لمستودع تخزين مبرد مع أرصفة تحميل عند الغروب",
    },
    contact: {
      title: "اتصل بنا",
      desc:
        "هل تبحث عن حلول تخزين مبرد موثوقة ومضمونة؟ شركة تحسين جابر هي وجهتك المثالية. يكرس فريقنا الخبير جهوده لتقديم أفضل خدمات التخزين لبضائعك القابلة للتلف. تواصل معنا الآن لمناقشة متطلباتك بالتفصيل.",
      benefits: [
        {
          title: "تحكم متقدم بدرجات الحرارة",
          desc:
            "تحافظ تقنيتنا المتطورة للتحكم في درجات الحرارة على بيئات تبريد متسقة تلبي متطلبات منتجاتك بدقة. تمنع هذه الدقة التلف وتطيل العمر الافتراضي للبضائع، مما يجعل تحسين جابر الشريك الموثوق لاحتياجات التخزين المبرد.",
        },
        {
          title: "مستودعات تخزين آمنة",
          desc:
            "نضع الأمان في مقدمة أولوياتنا من خلال بروتوكولات المراقبة الشاملة والتحكم في الدخول. صُممت مستودعاتنا لحماية بضائعك من الدخول غير المصرح به والمخاطر البيئية، لتجمع بين الأمان الفائق والقدرات التخزينية المتميزة.",
        },
        {
          title: "خيارات تخزين مرنة",
          desc:
            "سواء كنت بحاجة إلى تخزين قصير الأجل أو طويل الأجل، توفر مرافقنا خيارات مرنة تناسب خططك اللوجستية. نتكيف مع متطلباتك ونقدم حلولاً قابلة للتطوير تنمو مع نمو أعمالك.",
        },
      ],
      formHeading: "تواصل معنا اليوم",
      formDesc:
        "هل أنت جاهز لمناقشة متطلبات التخزين المبرد لشركتك؟ تواصل معنا اليوم لمعرفة كيف يمكننا دعم احتياجاتك التخزينية واللوجستية من خلال خدماتنا الاحترافية المتخصصة.",
      namePlaceholder: "الاسم الكامل",
      emailPlaceholder: "البريد الإلكتروني",
      messagePlaceholder: "رسالتك أو استفسارك",
      sendBtn: "إرسال الرسالة",
      confidential:
        "أنت مهم جداً بالنسبة لنا، وجميع المعلومات المستلمة تبقى سرية ومحمية دائماً.",
      successTitle: "تم إرسال الرسالة بنجاح",
      successDesc:
        "شكراً لتواصلك مع شركة تحسين جابر لمخازن التبريد. سنراجع طلبك ونتواصل معك في أقرب وقت.",
      sendAnother: "إرسال رسالة أخرى",
      metrics: {
        m1: "تحكم متقدم بالحرارة",
        m2: "أمان ومراقبة للمنشأة",
        m3: "خيارات تخزين مرنة",
        m4: "إدارة فعالة للمخزون",
        m5: "موقع استراتيجي متميز",
      },
      directionsHeading: "الوصول إلى المنشأة",
      directionsDesc: "تواصل مع فريقنا للحصول على عنوان المنشأة وإرشادات الوصول قبل ترتيب الزيارة.",
      mapDirectionsLabel: "احصل على الاتجاهات",
      getInTouchHeading: "تواصل معنا",
      getInTouchDesc:
        "إذا كان لديك أي أسئلة أو استفسارات تتعلق بخدمات التخزين المبرد، فلا تتردد في التواصل معنا. فريق تحسين جابر مستعد دائماً لمساعدتك في العثور على أفضل حلول التخزين المناسبة لاحتياجاتك.",
      locationLabel: "الموقع:",
      emailLabel: "البريد الإلكتروني:",
      phoneLabel: "رقم الهاتف:",
      hoursLabel: "ساعات العمل:",
      testimonialQuote:
        "“يبذل فريق تحسين جابر جهداً استثنائياً لضمان تخزين منتجاتنا بالشكل الأمثل في وحدات التخزين المبرد لديهم.”",
      testimonialSub: "شريك لوجستيات الأغذية وسلسلة التبريد التجارية",
      closingTestimonial:
        "مع تحسين جابر لمخازن التبريد، نطمئن إلى أن بضائعنا القابلة للتلف تحظى بالعناية اللازمة.",
    },
    footer: {
      tagline: "خدمات لوجستية متطورة وسلسلة تبريد بمواصفات عالمية لحفظ المنتجات.",
      aboutTitle: "عن الشركة",
      aboutDesc:
        "في تحسين جابر لمخازن التبريد، نتخصص في تقديم خدمات التخزين المبرد المصممة لتلبية أعلى معايير الجودة في هذا المجال. مرافقنا مجهزة بأحدث تقنيات التبريد وأنظمة المراقبة الدقيقة للحفاظ على جودة ونضارة منتجاتك على مدار الساعة.",
      quickLinks: "روابط سريعة",
      contactTitle: "بيانات التواصل",
      galleryTitle: "معرض الصور",
      address: "Tahseen Jaber Cold Storage, Uuayrij Industrial area, Baghdad, Iraq",
      hours: "من الإثنين إلى السبت: 07:00 – 19:00 | الاستلام: 24/7 بموعد مسبق",
      copyright: "شركة تحسين جابر لمخازن التبريد. جميع الحقوق محفوظة.",
    },
  },
};
