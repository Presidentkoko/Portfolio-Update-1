(function () {
  "use strict";

  window.PORTFOLIO_DATA = {
    site: {
      name: "Jeruz Garde",
      fullName: "Jeruz Laynell J. Garde",
      title: "Computer Engineer, Developer & Digital Growth Specialist",
      email: "jeruzgarde@gmail.com",
      phoneDisplay: "+63 961 417 0201",
      phone: "+639614170201",
      location: "Maasin City, Southern Leyte, Philippines",
      github: "https://github.com/Presidentkoko",
      linkedin: "https://www.linkedin.com/in/jeruz-laynell-garde-413145369/",
      upwork: "https://www.upwork.com/freelancers/~0151ea079618e266d2",
      cv: "assets/docs/Jeruz-Garde-Resume.pdf",
      portfolioPdf: "assets/docs/Jeruz-Garde-Portfolio.pdf",
      availability: "Available for selected freelance projects"
    },

    roles: [
      "Full-Stack Developer",
      "Growth Manager",
      "Social Media Manager",
      "Graphic Designer",
      "Automation Specialist",
      "Creative Technologist"
    ],

    values: [
      { icon: "target", title: "Business-first thinking", text: "Every feature, page, and campaign starts with the result it needs to create." },
      { icon: "layers", title: "One connected partner", text: "Strategy, design, development, content, and launch support can stay under one roof." },
      { icon: "message", title: "Clear communication", text: "Practical updates, visible decisions, and a process clients can follow without technical guesswork." },
      { icon: "code", title: "Built for your workflow", text: "No one-size-fits-all templates when the business needs a custom system or customer journey." },
      { icon: "shield", title: "Support beyond launch", text: "Handover, training, maintenance, and six-month support options can be scoped into the engagement." },
      { icon: "globe", title: "Local and remote delivery", text: "Working from Southern Leyte with businesses and teams across locations and time zones." }
    ],

    services: [
      {
        icon: "browser",
        title: "Website Design & Development",
        problem: "Your website looks dated, loads poorly, or does not turn visits into enquiries.",
        provide: "Responsive design, conversion-focused pages, SEO foundations, analytics, forms, and deployment.",
        benefit: "A credible digital storefront that explains the offer clearly and gives customers a next step.",
        cta: "Plan a website"
      },
      {
        icon: "stack",
        title: "Full-Stack Web Applications",
        problem: "Spreadsheets and disconnected tools are slowing down operations.",
        provide: "Secure web apps, dashboards, databases, user roles, APIs, and third-party integrations.",
        benefit: "One reliable system for the work your team currently handles manually.",
        cta: "Discuss an application"
      },
      {
        icon: "calendar",
        title: "Booking & Management Systems",
        problem: "Bookings arrive through chat, availability gets confused, and reporting is difficult.",
        provide: "Live schedules, reservations, payments, confirmations, customer flows, and owner dashboards.",
        benefit: "Fewer manual handoffs and a smoother experience from booking to reporting.",
        cta: "Build a booking flow"
      },
      {
        icon: "automation",
        title: "AI & Workflow Automation",
        problem: "Repetitive admin work consumes time that should go to customers and growth.",
        provide: "Workflow mapping, n8n automations, lead routing, notifications, data sync, and practical AI assistance.",
        benefit: "Faster operations with fewer copy-paste tasks and missed follow-ups.",
        cta: "Automate a workflow"
      },
      {
        icon: "linkedin",
        title: "LinkedIn Growth Management",
        problem: "Your company page is active but lacks positioning, consistency, and a lead-focused content system.",
        provide: "Page optimisation, content planning, daily workflows, recruitment campaigns, and engagement management.",
        benefit: "A clearer professional presence built to support trust, hiring, and business development.",
        cta: "Plan LinkedIn growth"
      },
      {
        icon: "social",
        title: "Social Media Management",
        problem: "Posting is inconsistent and content does not feel connected to the brand or business goals.",
        provide: "Content calendars, post production, scheduling, community management, and campaign coordination.",
        benefit: "A repeatable publishing rhythm with stronger message consistency across channels.",
        cta: "Build a content system"
      },
      {
        icon: "pen",
        title: "Graphic Design & Brand Content",
        problem: "Visuals feel inconsistent or fail to communicate the value of an event, service, or campaign.",
        provide: "Social graphics, hiring ads, event materials, brand applications, covers, and campaign systems.",
        benefit: "Recognisable communication that looks intentional wherever customers meet the brand.",
        cta: "Create brand content"
      },
      {
        icon: "video",
        title: "Video & Short-Form Content",
        problem: "You have footage or ideas but no polished content pipeline for social channels.",
        provide: "Editing, pacing, captions, thumbnails, reels, short-form cuts, and aerial content production.",
        benefit: "Ready-to-publish video that holds attention and supports the campaign message.",
        cta: "Produce a video"
      },
      {
        icon: "desktop",
        title: "IT Support & Desktop Systems",
        problem: "Legacy tools, local networks, or desktop workflows are unreliable and difficult to maintain.",
        provide: "Windows applications, POS systems, database repair, network setup, troubleshooting, and documentation.",
        benefit: "Stable day-to-day systems with clearer ownership and support.",
        cta: "Review an IT system"
      }
    ],

    projects: [
      {
        slug: "pickleball-platform",
        title: "Pickleball Booking & Management Platform",
        kicker: "Full-Stack System",
        category: "Full-Stack Systems",
        featured: true,
        image: "assets/images/snowbear-home.jpg",
        alt: "Pickleball booking platform landing page",
        summary: "A multi-tenant platform that connects guest booking, payment handling, tournaments, open play, and facility operations.",
        challenge: "Facility teams needed to replace fragmented chat-based reservations and manual payment tracking with one customer and owner workflow.",
        solution: "Built a no-sign-up booking experience, tenant-aware administration, payment proof handling, receipts, scheduling controls, and operational reporting.",
        outcome: "A working end-to-end product that demonstrates how customer booking and back-office management can live in one system.",
        role: "Product design, full-stack development, database architecture",
        tech: ["Node.js", "Express", "PostgreSQL", "JavaScript", "JWT", "Chart.js"],
        features: ["Live slot availability", "Guest booking", "Payment verification", "Open play and tournaments", "Owner dashboard", "Multi-tenant controls"],
        live: "",
        github: "https://github.com/Presidentkoko/Pickleball-app",
        private: false
      },
      {
        slug: "corencore-life",
        title: "Core-N-Core / Corencore Life",
        kicker: "Corporate Website",
        category: "Web Development",
        featured: true,
        image: "assets/images/web-corencore.jpg",
        alt: "Corencore Life technical services website",
        summary: "An editorial corporate site for a Dubai technical-services and fit-out company, shaped around an architectural drawing-sheet concept.",
        challenge: "The company needed a more distinctive digital presence for a technical, architecture-led service offer.",
        solution: "Created the concept, visual system, responsive front end, scroll storytelling, gallery, and enquiry journey.",
        outcome: "A live, self-contained company website with a coherent technical identity and clear service navigation.",
        role: "Creative direction, UI/UX design, front-end development",
        tech: ["HTML", "CSS", "JavaScript", "SVG", "Responsive Design"],
        features: ["Cinematic hero", "Blueprint design language", "Service storytelling", "Project gallery", "Responsive enquiry flow"],
        live: "https://presidentkoko.github.io/Core-N-Core/",
        github: "https://github.com/Presidentkoko/Core-N-Core",
        private: false
      },
      {
        slug: "college-of-maasin",
        title: "College of Maasin Website Redesign",
        kicker: "Education Website",
        category: "Web Development",
        featured: true,
        image: "assets/images/web-maasin.jpg",
        alt: "College of Maasin website redesign preview",
        summary: "A modern redesign concept for a local college, focused on clearer information hierarchy, mobile access, and institutional credibility.",
        challenge: "Academic information needed a more organised, accessible presentation for students, parents, and the community.",
        solution: "Restructured key content into a responsive institutional experience with prominent pathways and a consistent visual system.",
        outcome: "A complete front-end redesign repository ready for review and further institutional content integration.",
        role: "UI/UX design and front-end development",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        features: ["Responsive navigation", "Programme pathways", "Institutional content", "Accessible page structure"],
        live: "",
        github: "https://github.com/Presidentkoko/College-of-Maasin-redesign",
        private: false
      },
      {
        slug: "sumayod-pos",
        title: "Sumayod Pensione POS",
        kicker: "Desktop Operations System",
        category: "Desktop Applications",
        featured: true,
        image: "assets/images/pos/sumayod-dashboard.png",
        alt: "Sumayod Pensione POS live room dashboard preview",
        summary: "A Windows front-desk and POS system for room check-ins, live stay timers, product sales, inventory, billing, and reports.",
        challenge: "Room billing, occupancy, stock, and sales needed one dependable local workflow with consistent business rules.",
        solution: "Modernised the WinForms application into clear presentation, business, data, and infrastructure layers with centralised billing and portable database setup.",
        outcome: "A maintainable desktop system with live room visibility, consistent charges, safer credentials, and exportable operational reports.",
        role: "Desktop development, system modernisation, database work",
        tech: ["C#", ".NET Framework 4.8", "WinForms", "SQL Server LocalDB", "EPPlus"],
        features: ["Live room dashboard", "Check-in and check-out", "Hourly and daily billing", "Atomic inventory sales", "Excel report export", "Admin rate controls"],
        live: "",
        github: "https://github.com/darkhorsepig/Sumayod-Pensione-POS",
        private: false
      },
      {
        slug: "cayawanan-pos",
        title: "Cayawanan Pensionne POS",
        kicker: "Branded POS Deployment",
        category: "Desktop Applications",
        featured: false,
        image: "assets/images/pos/cayawanan-dashboard.png",
        alt: "Cayawanan Pensionne POS live room dashboard preview",
        summary: "A custom-branded deployment of the lodging POS platform for Cayawanan Pensionne, covering rooms, sales, stock, billing, and reports.",
        challenge: "A second lodging operation needed the proven front-desk workflow adapted to its own identity without splitting the underlying business rules.",
        solution: "Applied Cayawanan branding to the shared layered Windows architecture while retaining central billing, room timers, inventory transactions, reporting, and local setup.",
        outcome: "A separate property-ready application that demonstrates how one maintainable POS foundation can support distinct hospitality brands.",
        role: "Desktop development, product adaptation, UI branding",
        tech: ["C#", ".NET Framework 4.8", "WinForms", "SQL Server LocalDB", "EPPlus"],
        features: ["Cayawanan-branded shell", "Live occupancy status", "Flexible room billing", "Product and stock controls", "Excel report export", "Portable LocalDB setup"],
        live: "",
        github: "",
        private: true
      },
      {
        slug: "nexuspos",
        title: "NexusPOS",
        kicker: "Offline-First POS Application",
        category: "Web Development",
        featured: true,
        image: "assets/images/pos/nexuspos-register.png",
        alt: "NexusPOS browser-based retail register and checkout interface",
        summary: "A responsive, offline-first point-of-sale application for retail, restaurants, cafés, salons, groceries, and other shop formats.",
        challenge: "Small businesses need capable checkout and reporting tools without depending on a hosted backend, complex setup, or a permanent internet connection.",
        solution: "Built a dependency-free browser application with a configurable register, catalogue, customers, loyalty, sales history, reports, staff access, and local backup workflows.",
        outcome: "A portable POS experience that runs locally, adapts to multiple business types, and keeps day-to-day selling and operational data in one interface.",
        role: "Product design, front-end development, POS workflow architecture",
        tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "Offline-First"],
        features: ["Barcode-ready register", "Split payments and discounts", "Inventory and low-stock alerts", "Customer loyalty", "Refund and void reversal", "Cash-drawer X/Z reports", "CSV and JSON export"],
        live: "",
        github: "",
        private: true
      },
      {
        slug: "premium-uppal",
        title: "Premium Uppal",
        kicker: "Real Estate Experience",
        category: "Web Development",
        featured: true,
        image: "assets/images/web-uppal-premium.jpg",
        alt: "Premium Uppal real estate website",
        summary: "A premium real-estate concept with cinematic composition, confident typography, and enquiry-focused movement.",
        challenge: "A high-value property offer needed a more polished digital presentation than a conventional company template.",
        solution: "Designed a dark luxury system, editorial layouts, responsive interactions, and clear contact pathways.",
        outcome: "A live brand direction demonstrating a stronger online experience for premium property audiences.",
        role: "Creative direction, UI/UX design, front-end development",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        features: ["Full-screen hero", "Editorial layouts", "Property storytelling", "Motion details", "Responsive enquiries"],
        live: "https://presidentkoko.github.io/Premium-Uppal/",
        github: "https://github.com/Presidentkoko/Premium-Uppal",
        private: false
      },
      {
        slug: "uppal-group",
        title: "Uppal Group Website",
        kicker: "Corporate Brand Website",
        category: "Branding",
        featured: false,
        image: "assets/images/web-uppal-luxury.jpg",
        alt: "Uppal Group corporate website",
        summary: "A refined corporate web direction for a UAE group, combining architectural imagery with restrained premium styling.",
        challenge: "The group needed a consistent company presence that could communicate legacy, services, and contact information.",
        solution: "Built a responsive visual system and page flow around corporate credibility and architectural presentation.",
        outcome: "A live company website with a focused premium identity and clear contact journey.",
        role: "Brand application, UI design, front-end development",
        tech: ["HTML", "CSS", "JavaScript"],
        features: ["Corporate overview", "Service presentation", "Architectural gallery", "Contact pathways"],
        live: "https://presidentkoko.github.io/Uppal-Group-Website/",
        github: "https://github.com/Presidentkoko/Uppal-Group-Website",
        private: false
      },
      {
        slug: "ecommerce-system",
        title: "E-Commerce Operations System",
        kicker: "Full-Stack Commerce",
        category: "Full-Stack Systems",
        featured: false,
        image: "assets/images/shop-dashboard.jpg",
        alt: "E-commerce administration dashboard",
        summary: "A storefront and admin workflow covering products, customer accounts, checkout, order tracking, stock, and fulfilment.",
        challenge: "The selling workflow needed customer-facing commerce and administration in one connected application.",
        solution: "Built the catalogue, account, cart, checkout, order, stock, and dashboard flows around a shared database.",
        outcome: "A complete private project demonstrating customer and administrator journeys across the commerce lifecycle.",
        role: "Full-stack development and database design",
        tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        features: ["Product catalogue", "Customer accounts", "Cart and checkout", "Order tracking", "Admin stock controls"],
        live: "",
        github: "",
        private: true
      },
      {
        slug: "linkedin-growth",
        title: "Uppal LinkedIn Growth Management",
        kicker: "Growth Management",
        category: "Growth Management",
        featured: true,
        image: "assets/images/growth/uppal-linkedin-growth-mockup.webp",
        alt: "Portfolio mockup of the Uppal Construction LinkedIn company page management system",
        summary: "A LinkedIn growth-management system for Uppal Construction and related company pages, combining page positioning, branded content, recruitment assets, and a repeatable publishing workflow.",
        challenge: "The company pages needed a more consistent presentation and a practical content system that could support services, hiring, credibility, and ongoing outreach.",
        solution: "Created company-page positioning, branded cover directions, service and company-profile content, recruitment campaigns, short-form video, and daily page-management routines.",
        outcome: "A reusable LinkedIn operating system spanning Uppal and Accutax page materials. Follower figures visible in the supplied visuals are clearly labelled portfolio mockups, not verified analytics.",
        role: "Growth management, content strategy, brand design, publishing",
        tech: ["LinkedIn", "Content Strategy", "Canva", "CapCut", "Community Management"],
        features: ["Page positioning", "Branded covers", "Service content", "Hiring campaigns", "Publishing workflow", "Short-form video"],
        live: "",
        github: "",
        private: true
      },
      {
        slug: "apex-aerial",
        title: "Apex Aerial PH",
        kicker: "Video & Content",
        category: "Video & Content",
        featured: false,
        image: "assets/images/drone-apex-poster.jpg",
        alt: "Apex Aerial PH drone services campaign",
        summary: "An aerial content service covering capture, edit, campaign graphics, and social publishing for events, properties, and promotions.",
        challenge: "Clients needed usable promotional content, not only raw drone footage.",
        solution: "Connected aerial production with editing, short-form deliverables, campaign design, and page management.",
        outcome: "A complete creative workflow from capture planning to ready-to-publish media.",
        role: "Founder, drone operator, editor, content manager",
        tech: ["DJI Mini 5 Pro", "4K Video", "CapCut", "Canva", "Social Media"],
        features: ["Event aerial coverage", "Property showcases", "Promotional reels", "Short-form edits", "Campaign graphics"],
        videos: [
          { src: "assets/videos/drone-cinematic-1.mp4", title: "Cinematic Aerial Reel", format: "Landscape showcase" },
          { src: "assets/videos/drone-commercial-1.mp4", title: "Commercial Property Flight", format: "Business promotion" },
          { src: "assets/videos/drone-sample-1.mp4", title: "Aerial Service Sample", format: "Service demonstration" },
          { src: "assets/videos/drone-tiktok-1.mp4", title: "Vertical Drone Cut", format: "TikTok / Reels edit" },
          { src: "assets/videos/drone-wedding-1.mp4", title: "Wedding Aerial Film I", format: "Event coverage" },
          { src: "assets/videos/drone-wedding-2.mp4", title: "Wedding Aerial Film II", format: "Event coverage" },
          { src: "assets/videos/drone-wedding-all.mp4", title: "Wedding Celebration Overview", format: "Group aerial sequence" },
          { src: "assets/videos/drone-wedding-couple.mp4", title: "Wedding Couple Sequence", format: "Cinematic couple portrait" },
          { src: "assets/videos/drone-yen2.mp4", title: "Location Flyover", format: "Cinematic aerial study" }
        ],
        live: "",
        github: "",
        private: true
      }
    ],

    creativeWork: [
      { src: "assets/images/creative/graphic-design-collection/brilliance-campaign.jpg", alt: "Three Brilliance jewelry promotional advertising concepts", title: "Brilliance Promotional Concepts", category: "Marketing", format: "Jewelry campaign concepts" },
      { src: "assets/images/creative/graphic-design-collection/earth-day-responsive-ads.jpg", alt: "Earth Day lab diamond advertising adapted to multiple banner sizes", title: "Earth Day Responsive Ad Set", category: "Marketing", format: "Multi-size display campaign" },
      { src: "assets/images/creative/graphic-design-collection/agrochemical-campaign.jpg", alt: "Four visual directions for an agrochemical promotional campaign", title: "Agrochemicals Visual System", category: "Branding", format: "Campaign concept progression" },
      { src: "assets/images/creative/graphic-design-collection/system-bypass-campaign.jpg", alt: "System Bypass cybersecurity advertising and banner collection", title: "System Bypass Campaign", category: "Marketing", format: "Cybersecurity campaign system" },
      { src: "assets/images/creative/uppal-statement.jpg", alt: "Uppal Group architectural brand statement cover", title: "Uppal Brand Statement", category: "Branding", format: "LinkedIn cover system" },
      { src: "assets/images/creative/uppal-services.jpg", alt: "Uppal Group service overview banner", title: "Uppal Service Architecture", category: "Branding", format: "Company-page banner" },
      { src: "assets/images/creative/community-fun-walk.jpg", alt: "Community fun walk promotional graphic", title: "Community Fun Walk", category: "Social Graphics", format: "Event campaign" },
      { src: "assets/images/creative/event-fun-day.jpg", alt: "Family Fun Day event banner", title: "Family Fun Day", category: "Event Design", format: "Event identity" },
      { src: "assets/images/creative/anniversary-identity.jpg", alt: "75th anniversary graphic in blue and gold", title: "75th Anniversary", category: "Branding", format: "Celebration identity" },
      { src: "assets/images/creative/kadiwa-formal.jpg", alt: "Kadiwa formal event graphic", title: "Kadiwa Formal", category: "Event Design", format: "Event announcement" },
      { src: "assets/images/creative/scan-event.jpg", alt: "SCAN Grand Eyeball event poster", title: "SCAN Grand Eyeball", category: "Event Design", format: "Event poster" },
      { src: "assets/images/creative/event-reminder.jpg", alt: "Joint monthly meetup event reminder", title: "Meetup Reminder", category: "Social Graphics", format: "Mobile story" },
      { src: "assets/images/creative/music-poster.jpg", alt: "Denim-inspired music playlist poster", title: "Music Favelist", category: "Social Graphics", format: "Playlist artwork" },
      { src: "assets/images/creative/agriculture-social.jpg", alt: "Agricultural consultant social media post", title: "Agriculture Social Post", category: "Social Graphics", format: "Instagram post" },
      { src: "assets/images/creative/drone-campaign.jpg", alt: "Drone rental and aerial service promotional graphic", title: "Apex Aerial Campaign", category: "Marketing", format: "Service promotion" },
      { src: "assets/images/creative/wedding-invitation.jpg", alt: "Emerald and gold wedding invitation", title: "Emerald Wedding Suite", category: "Event Design", format: "Invitation concept" }
    ],

    growthServices: [
      "Company-page positioning and profile optimisation",
      "Content pillars, calendars, and daily posting workflows",
      "Lead-generation and recruitment content",
      "Brand-consistent social graphics and campaign assets",
      "Scheduling, engagement, and community management",
      "Editable reporting structure for verified analytics"
    ],

    socialEvidence: [
      { src: "assets/images/social/accounts-instagram.webp", alt: "Meta account switcher showing multiple Facebook and Instagram profiles", title: "Meta Multi-Account Workspace", format: "Account portfolio / Facebook and Instagram", type: "evidence" },
      { src: "assets/images/social/accounts-facebook.webp", alt: "Meta account switcher showing multiple Facebook pages", title: "Facebook Page Portfolio", format: "Multi-page management", type: "evidence" },
      { src: "assets/images/social/publishing-ronley.webp", alt: "Ronley Wealth Instagram content grid and professional dashboard", title: "Ronley Publishing Dashboard", format: "Content grid and dashboard", type: "evidence" },
      { src: "assets/images/social/publishing-ezra.webp", alt: "Ezra Rosenfeld Instagram content grid and professional dashboard", title: "Ezra Publishing Dashboard", format: "Content grid and dashboard", type: "evidence" },
      { src: "assets/images/social/publishing-luca.webp", alt: "Luca Moretti Instagram content grid and professional dashboard", title: "Luca Publishing Dashboard", format: "Content grid and dashboard", type: "evidence" },
      { src: "assets/images/social/publishing-david.webp", alt: "David Felt Instagram content grid and professional dashboard", title: "David Publishing Dashboard", format: "Content grid and dashboard", type: "evidence" },
      { src: "assets/images/social/publishing-malcolm.webp", alt: "Malcolm Vance Instagram content grid and professional dashboard", title: "Malcolm Publishing Dashboard", format: "Content grid and dashboard", type: "evidence" },
      { src: "assets/images/social/publishing-web3.webp", alt: "Web3 themed Instagram content publishing grid", title: "Web3 Content Grid", format: "Short-form publishing system", type: "evidence" }
    ],

    socialMockups: [
      { src: "assets/images/social/mockup-ezra.webp", alt: "Portfolio mockup of an Ezra Rosenfeld Instagram profile", title: "Ezra Profile Concept", format: "Portfolio mockup / illustrative figures", type: "mockup" },
      { src: "assets/images/social/mockup-luca.webp", alt: "Portfolio mockup of a Luca Moretti Instagram profile", title: "Luca Profile Concept", format: "Portfolio mockup / illustrative figures", type: "mockup" },
      { src: "assets/images/social/mockup-marcus.webp", alt: "Portfolio mockup of a Marcus Vale Instagram profile", title: "Marcus Profile Concept", format: "Portfolio mockup / illustrative figures", type: "mockup" },
      { src: "assets/images/social/mockup-adam.webp", alt: "Portfolio mockup of an Adam Savali Instagram profile", title: "Adam Profile Concept", format: "Portfolio mockup / illustrative figures", type: "mockup" },
      { src: "assets/images/social/mockup-david.webp", alt: "Portfolio mockup of a David Felt Instagram profile", title: "David Profile Concept", format: "Portfolio mockup / illustrative figures", type: "mockup" },
      { src: "assets/images/social/mockup-malcolm.webp", alt: "Portfolio mockup of a Malcolm Vance Instagram profile", title: "Malcolm Profile Concept", format: "Portfolio mockup / illustrative figures", type: "mockup" }
    ],

    socialVideos: [
      { src: "assets/videos/social/instagram-management.mp4", poster: "assets/images/social/posters/instagram-management.webp", title: "Instagram Account Walkthrough", format: "Profile setup and account presentation" },
      { src: "assets/videos/social/account-workflow.mp4", poster: "assets/images/social/posters/account-workflow.webp", title: "Publishing Workflow Capture", format: "Mobile editing and publishing workflow" },
      { src: "assets/videos/social/short-form-01.mp4", poster: "assets/images/social/posters/short-form-01.webp", title: "Fitness Short-Form Cut 01", format: "Vertical content sample" },
      { src: "assets/videos/social/short-form-02.mp4", poster: "assets/images/social/posters/short-form-02.webp", title: "Fitness Short-Form Cut 02", format: "Captioned vertical edit" },
      { src: "assets/videos/social/short-form-03.mp4", poster: "assets/images/social/posters/short-form-03.webp", title: "Fitness Short-Form Cut 03", format: "Vertical campaign edit" }
    ],

    process: [
      { step: "01", title: "Discovery", text: "Clarify the business, audience, problem, constraints, and what success needs to look like." },
      { step: "02", title: "Strategy & Planning", text: "Shape the offer, scope, content, architecture, timeline, and production plan before execution." },
      { step: "03", title: "Design", text: "Build the visual direction, interaction model, and key screens or content templates for review." },
      { step: "04", title: "Development / Production", text: "Create the system, website, campaign, or content with regular progress checkpoints." },
      { step: "05", title: "Review & Testing", text: "Test function, responsiveness, messaging, accessibility, and real-world workflows." },
      { step: "06", title: "Launch", text: "Deploy, publish, connect required services, and hand over the finished work clearly." },
      { step: "07", title: "Support & Growth", text: "Maintain, improve, train, or continue content and growth work under an agreed support plan." }
    ],

    skillGroups: [
      { name: "Frontend & Experience", items: ["HTML", "CSS", "JavaScript", "React", "Vite", "Next.js", "Responsive UI", "Accessibility"] },
      { name: "Backend & Data", items: ["Node.js", "Express", "Python", "Django", "PHP", "REST APIs", "PostgreSQL", "MySQL", "SQL Server", "Firebase"] },
      { name: "Desktop & Engineering", items: ["Java", "C#", "VB.NET", ".NET / WinForms", "Networking", "IT Systems", "AutoCAD", "3D Modeling"] },
      { name: "Growth & Creative", items: ["LinkedIn Management", "Social Media", "Content Strategy", "Canva", "CapCut", "GoHighLevel", "Video Editing", "Brand Content"] },
      { name: "Automation & Delivery", items: ["n8n", "Workflow Automation", "Git", "GitHub", "Vercel", "WordPress", "Elementor", "Technical Documentation"] }
    ],

    experience: [
      {
        period: "2025 — 2027",
        role: "IT College Instructor",
        organisation: "College of Maasin · Southern Leyte",
        summary: "Teaching programming, object-oriented Java, networking, hardware systems, and information assurance through practical coursework and labs."
      },
      {
        period: "2025 — Present",
        role: "Founder & Aerial Content Creator",
        organisation: "Apex Aerial PH",
        summary: "Managing aerial capture, editing, campaign content, social publishing, and client coordination for events, properties, and promotions."
      },
      {
        period: "2024 — Present",
        role: "Full-Stack Developer",
        organisation: "Independent / Client Projects",
        summary: "Designing and delivering booking platforms, company websites, dashboards, POS systems, and local-government management tools."
      },
      {
        period: "Project-based",
        role: "Growth & Social Media Manager",
        organisation: "Company-page and campaign work",
        summary: "Developing page positioning, content workflows, recruitment material, brand graphics, scheduling, and community-management routines."
      },
      {
        period: "Graduate",
        role: "BS in Computer Engineering",
        organisation: "Southern Leyte State University",
        summary: "Software, systems, electronics, networking, and a 600-hour industry placement covering computer assembly, installation, and networking."
      }
    ]
  };
})();
