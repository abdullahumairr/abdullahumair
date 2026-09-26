export type Lang = "en" | "id";

// Item untuk tab Penghargaan & Pengalaman di section Projects
export type ContentItem = {
  eyebrow: string;
  title: string;
  desc: string;
  date: string;
};

type DictShape = {
  navHome: string;
  navAbout: string;
  navExperience: string;
  navProjects: string;
  navContacts: string;
  wordmark: string;
  loadingTitle: string;
  loadingLabel: string;
  loadingStatus: string;
  availableBadge: string;
  heroH1: string;
  bio: string;
  ctaExplore: string;
  ctaDownload: string;
  connect: string;
  badge1: string;
  badge2: string;
  badge3: string;
  marqueeItems: string[];
  aboutEyebrow: string;
  aboutHeading: string;
  aboutProfileLabel: string;
  aboutName: string;
  aboutKnownAs: string;
  aboutFocus: string;
  aboutWhoTitle: string;
  aboutWhoBody: string;
  aboutApproachTitle: string;
  aboutApproachBody: string;
  aboutInfoTitle: string;
  infoFullName: string;
  infoFullNameVal: string;
  infoHometown: string;
  infoHometownVal: string;
  infoCurrent: string;
  infoCurrentVal: string;
  infoAvailability: string;
  infoAvailabilityVal: string;
  infoAcademic: string;
  infoAcademicVal: string;
  infoGpa: string;
  infoGpaVal: string;
  aboutCollab: string;
  expEyebrow: string;
  expHeading: string;
  expIntro: string;
  exp1Title: string;
  exp1Subtitle: string;
  exp1Body: string;
  exp2Title: string;
  exp2Subtitle: string;
  exp2Body: string;
  exp3Title: string;
  exp3Subtitle: string;
  exp3Body: string;
  techEyebrow: string;
  techHeading: string;
  techFrontend: string;
  techFrontendDesc: string;
  techBackend: string;
  techBackendDesc: string;
  techDb: string;
  techDbDesc: string;
  techDevops: string;
  techDevopsDesc: string;
  projectsEyebrow: string;
  projectsHeading: string;
  projectsAllLink: string;
  projectsViewMore: string;
  projectsHide: string;
  projectsDetail: string;
  projectsTabProjects: string;
  projectsTabAwards: string;
  projectsTabExperience: string;
  projectsSubtitle: string;
  awardsSubtitle: string;
  experienceSubtitle: string;
  p1Title: string;
  p1Desc: string;
  p2Title: string;
  p2Desc: string;
  p3Title: string;
  p3Desc: string;
  p4Title: string;
  p4Desc: string;
  awardItems: ContentItem[];
  experienceItems: ContentItem[];
  contactEyebrow: string;
  contactHeading: string;
  contactBaseLabel: string;
  contactBaseVal: string;
  contactBaseTag: string;
  contactResponse: string;
  contactAvailable: string;
  contactGithub: string;
  contactGithubVal: string;
  contactEmail: string;
  contactEmailVal: string;
  contactWhatsapp: string;
  contactWhatsappVal: string;
  contactLinkedin: string;
  contactLinkedinVal: string;
  contactInstagram: string;
  contactInstagramVal: string;
  contactTiktok: string;
  contactTiktokVal: string;
  footerRights: string;
  footerBackTop: string;
};

export const dict: Record<Lang, DictShape> = {
  id: {
    // Nav
    navHome: "Beranda",
    navAbout: "Tentang",
    navExperience: "Pengalaman",
    navProjects: "Proyek",
    navContacts: "Kontak",
    wordmark: "PORTFOLIO.",
    // Loading
    loadingTitle: "Abdlumrr",
    loadingLabel: "PORTFOLIO LOADING",
    loadingStatus: "SISTEM MEMUAT",
    // Hero
    availableBadge: "Tersedia untuk Pekerjaan & Kontrak",
    heroH1: "Halo, Saya Umair",
    bio: "Halo! Saya suka ngoding dan bereksperimen dengan ide-ide baru. Bagi saya, setiap baris kode adalah cara untuk menghadirkan sesuatu yang bermanfaat dan keren di dunia digital.",
    ctaExplore: "Jelajahi Proyek",
    ctaDownload: "Unduh CV",
    connect: "TERHUBUNG",
    // Hero badges
    badge1: "JS & TS — Stack Inti Utama",
    badge2: "Fullstack Architecture — End-to-End System",
    badge3: "2+ Tahun — Pengalaman Rekayasa",
    // Marquee
    marqueeItems: [
      "FULLSTACK WEB DEVELOPER",
      "ARSITEKTUR BACKEND TERDISTRIBUSI",
      "SPECIALIS NEXT.JS & TYPESCRIPT",
      "DEVOPS & ORKESTRASI DOCKER",
      "PENCINTA UI MINIMALIS",
    ],
    // About
    aboutEyebrow: "EKSPLORASI",
    aboutHeading: "Tentang Saya",
    aboutProfileLabel: "PROFIL PROFESIONAL",
    aboutName: "Abdullah Umair",
    aboutKnownAs: "Dikenal sebagai Umair",
    aboutFocus: "Fokus Inti: Scalable Web Apps",
    aboutWhoTitle: "Siapa Saya",
    aboutWhoBody:
      "Saya adalah Full Stack Developer dengan hasrat mendalam pada arsitektur perangkat lunak yang bersih, teruji, dan modular. Memiliki beberapa pengalaman dibidang IT khusunya Web Developer ",
    aboutApproachTitle: "Pendekatan Rekayasa",
    aboutApproachBody:
      "Saya menulis kode yang bersih, modular, dan terukur. Setiap keputusan arsitektur dibuat untuk bertahan lama dan mudah dikembangkan, bukan sekadar berjalan hari ini.",
    aboutInfoTitle: "Informasi Personal",
    infoFullName: "NAMA LENGKAP",
    infoFullNameVal: "Abdullah Umair",
    infoHometown: "DOMISILI ASAL",
    infoHometownVal: "Bontang, Kalimantan Timur, Indonesia",
    infoCurrent: "DOMISILI SAAT INI",
    infoCurrentVal: "Semarang, Jawa Tengah, Indonesia",
    infoAvailability: "KONTRAK & KETERSEDIAAN",
    infoAvailabilityVal: "Remote / Hybrid On-Site",
    infoAcademic: "ALMAMATER AKADEMIK",
    infoAcademicVal: "Universitas Negeri Semarang",
    infoGpa: "INDEKS PRESTASI KUMULATIF",
    infoGpaVal: "X.XX / 4.00",
    aboutCollab: "Inisiasi Kolaborasi",
    // Experience
    expEyebrow: "JEJAK KARIER",
    expHeading: "Pengalaman Pendidikan & Kerja",
    expIntro:
      "Jejak akademik dan profesional yang membentuk pendekatan rekayasa saya hari ini.",
    exp1Title: "SMA Sekolah Developer Indonesia",
    exp1Subtitle: "Sekolah Menengah Atas — 2023 – 2026",
    exp1Body:
      "Mendalami pengembangan web dari sisi front-end hingga back-end sebagai fondasi keahlian teknis. Mempelajari alur kerja pengembangan aplikasi secara menyeluruh, mulai dari perancangan antarmuka pengguna hingga logika di sisi server.",
    exp2Title: "Lead & Full Stack Developer",
    exp2Subtitle:
      "PT. Kodeintekno Cipta Solusi (INTERN) — Agustus 2025 – November 2025",
    exp2Body:
      "Berperan sebagai lead full-stack developer selama program magang, memimpin pengembangan beberapa proyek web di antaranya situs Sekolah Developer Indonesia dan PKBM Bina Generasi. Menangani proses pengembangan secara end-to-end, dari perancangan arsitektur hingga implementasi penuh di sisi front-end dan back-end.",
    exp3Title: "Universitas Negeri Semarang",
    exp3Subtitle: "Sistem Informasi (S1) — 2026 – Sekarang",
    exp3Body:
      "Baru memulai perkuliahan di jurusan Sistem Informasi dengan tujuan memperdalam dan mengembangkan skill teknis yang sudah dimiliki. Mengarahkan fokus studi ke depan menuju bidang data science, sebagai langkah pengembangan dari web ke analisis dan pemodelan data.",
    // Tech stack
    techEyebrow: "KEAHLIAN & PERANGKAT",
    techHeading: "Tech Stack Saya",
    techFrontend: "Frontend Ecosystem",
    techFrontendDesc:
      "Antarmuka presisi, animasi halus, arsitektur komponen yang rapi.",
    techBackend: "Backend & Runtimes",
    techBackendDesc:
      "API cepat, logika server yang dapat diandalkan, arsitektur terukur.",
    techDb: "Basis Data & ORM",
    techDbDesc: "Pemodelan data relasional dan NoSQL, query yang dioptimalkan.",
    techDevops: "DevOps & Infrastruktur",
    techDevopsDesc: "Git workflow, API testing, dan orkestrasi deployment.",
    // Projects
    projectsEyebrow: "PORTFOLIO",
    projectsHeading: "Karya Terpilih",
    projectsAllLink: "Lihat Seluruh Proyek di GitHub",
    projectsViewMore: "Lihat lebih banyak",
    projectsHide: "Sembunyikan",
    projectsDetail: "Lihat Detail",
    projectsTabProjects: "Proyek",
    projectsTabAwards: "Penghargaan",
    projectsTabExperience: "Pengalaman",
    projectsSubtitle: "Koleksi proyek — proyek yang sudah pernah saya buat.",
    awardsSubtitle: "Sertifikat dan pencapaian yang pernah saya raih.",
    experienceSubtitle:
      "Pengalaman kerja dan kegiatan yang pernah saya jalani.",
    p1Title: "Kodein School Website",
    p1Desc: "Website resmi Sekolah Developer Indonesia.",
    p2Title: "PKBM Bina Generasi",
    p2Desc: "Website untuk PKBM Bina Generasi.",
    p3Title: "Monity",
    p3Desc:
      "Dibuat untuk kompetisi TECHSOFT 2026, meraih Top 30 dari 256 tim peserta.",
    p4Title: "BNSP Certification Site",
    p4Desc: "Website pendukung sertifikasi BNSP Junior Web Developer.",

    awardItems: [
      {
        eyebrow: "KOMPETISI",
        title: "Top 30 TECHSOFT 2026",
        desc: "Menembus 30 besar dari 256 tim peserta pada kompetisi TECHSOFT 2026.",
        date: "2026",
      },
      {
        eyebrow: "SERTIFIKASI",
        title: "Sertifikat Junior Web Developer",
        desc: "Sertifikasi kompetensi pengembangan web tingkat junior.",
        date: "2026",
      },
      {
        eyebrow: "SERTIFIKAT",
        title: "Sertifikat Pelatihan Web Development",
        desc: "Menyelesaikan pelatihan pengembangan web front-end dan back-end.",
        date: "Mei 2025",
      },
      {
        eyebrow: "PENGHARGAAN",
        title: "Siswa Berprestasi Bidang Teknologi",
        desc: "Penghargaan atas capaian dan kontribusi di bidang teknologi informasi.",
        date: "Desember 2025",
      },
    ],
    // Pengalaman (DUMMY — ganti dengan data asli, urutan sama dengan experienceImages)
    experienceItems: [
      {
        eyebrow: "MAGANG",
        title: "Lead & Full Stack Developer",
        desc: "PT. Kodeintekno Cipta Solusi — memimpin pengembangan beberapa proyek web secara end-to-end.",
        date: "Agu – Nov 2025",
      },
      {
        eyebrow: "PROYEK TIM",
        title: "Frontend Developer — Tim Kompetisi",
        desc: "Membangun antarmuka dan alur pengguna untuk proyek kompetisi bersama tim.",
        date: "2026",
      },
      {
        eyebrow: "FREELANCE",
        title: "Web Developer Freelance",
        desc: "Mengerjakan website untuk klien kecil, dari desain antarmuka hingga deployment.",
        date: "2025 – Sekarang",
      },
    ],
    // Contact
    contactEyebrow: "HUBUNGI SAYA",
    contactHeading: "Hubungi Saya",
    contactBaseLabel: "BASIS OPERASI",
    contactBaseVal: "Semarang, Indonesia",
    contactBaseTag: "WIB (GMT+7)",
    contactResponse: "Estimasi respon cepat: dalam 24 jam kerja",
    contactAvailable: "Tersedia",
    contactGithub: "GITHUB",
    contactGithubVal: "abdulumair",
    contactEmail: "EMAIL",
    contactEmailVal: "abdulumair@gmail.com",
    contactWhatsapp: "WHATSAPP",
    contactWhatsappVal: "+62 813-9040-0237",
    contactLinkedin: "LINKEDIN",
    contactLinkedinVal: "Abdullah Umair",
    contactInstagram: "INSTAGRAM",
    contactInstagramVal: "@abdlumrr",
    contactTiktok: "TIKTOK",
    contactTiktokVal: "@abdulumair",
    // Footer
    footerRights:
      "© 2026 Abdullah Umair. All rights reserved. Dibuat dengan Next.js & Tailwind CSS",
    footerBackTop: "Kembali ke atas",
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navContacts: "Contacts",
    wordmark: "PORTFOLIO.",
    loadingTitle: "Abdlumrr",
    loadingLabel: "PORTFOLIO LOADING",
    loadingStatus: "SYSTEM INITIALIZING",
    availableBadge: "Available for Work & Contract",
    heroH1: "Hi, I'm Umair",
    bio: "Hi! I love coding and experimenting with new ideas. For me, every line of code is a way to bring something useful and cool into the digital world.",
    ctaExplore: "Explore Work",
    ctaDownload: "Download CV",
    connect: "CONNECT",
    badge1: "JS & TS — Core Stack",
    badge2: "Fullstack Architecture — End-to-End System",
    badge3: "2+ Years — Engineering Experience",
    marqueeItems: [
      "FULLSTACK WEB DEVELOPER",
      "DISTRIBUTED BACKEND ARCHITECTURE",
      "NEXT.JS & TYPESCRIPT SPECIALIST",
      "DEVOPS & DOCKER ORCHESTRATION",
      "MINIMALIST UI ENTHUSIAST",
    ],
    aboutEyebrow: "DISCOVER",
    aboutHeading: "About Me",
    aboutProfileLabel: "PROFESSIONAL PROFILE",
    aboutName: "Abdullah Umair",
    aboutKnownAs: "Known as Umair",
    aboutFocus: "Core Focus: Scalable Web Apps",
    aboutWhoTitle: "Who Am I",
    aboutWhoBody:
      "I am a full-stack developer with a deep passion for clean, tested, and modular software architecture. I have some experience in the IT field, specifically as a web developer.",
    aboutApproachTitle: "Engineering Approach",
    aboutApproachBody:
      "I write clean, modular, scalable code. Every architectural decision is made to last and to grow, not just to ship today.",
    aboutInfoTitle: "Personal Information",
    infoFullName: "FULL NAME",
    infoFullNameVal: "Abdullah Umair",
    infoHometown: "HOMETOWN",
    infoHometownVal: "Bontang, East Kalimantan, Indonesia",
    infoCurrent: "CURRENT LOCATION",
    infoCurrentVal: "Semarang, Central Java, Indonesia",
    infoAvailability: "AVAILABILITY",
    infoAvailabilityVal: "Remote / Hybrid On-Site",
    infoAcademic: "ACADEMIC",
    infoAcademicVal: "Universitas Negeri Semarang",
    infoGpa: "GPA",
    infoGpaVal: "X.XX / 4.00",
    aboutCollab: "Start a Collaboration",
    expEyebrow: "CAREER PATH",
    expHeading: "Education & Work Experience",
    expIntro:
      "The academic and professional path that shaped my engineering approach today.",
    exp1Title: "SMA Sekolah Developer Indonesia",
    exp1Subtitle: "High School — 2023 – 2026",
    exp1Body:
      "Diving into web development from front-end to back-end as the foundation of my technical skills. Learning the full application development workflow, from designing user interfaces to server-side logic.",
    exp2Title: "Lead & Full Stack Developer",
    exp2Subtitle:
      "PT. Kodeintekno Cipta Solusi (INTERN) — August 2025 – November 2025",
    exp2Body:
      "Served as lead full-stack developer during the internship, leading development of several web projects including the Sekolah Developer Indonesia site and PKBM Bina Generasi. Handling the end-to-end development process, from architecture design to full front-end and back-end implementation.",
    exp3Title: "Universitas Negeri Semarang",
    exp3Subtitle: "Information Systems (BSc) — 2026 – Present",
    exp3Body:
      "Just started studies in Information Systems to deepen and grow my existing technical skills. Directing my future study focus toward data science, as a step from web into data analysis and modeling.",
    techEyebrow: "SKILLS & TOOLS",
    techHeading: "My Tech Stack",
    techFrontend: "Frontend Ecosystem",
    techFrontendDesc:
      "Precise interfaces, smooth animation, clean component architecture.",
    techBackend: "Backend & Runtimes",
    techBackendDesc: "Fast APIs, reliable server logic, scalable architecture.",
    techDb: "Databases & ORM",
    techDbDesc: "Relational and NoSQL data modeling, optimized queries.",
    techDevops: "DevOps & Infrastructure",
    techDevopsDesc: "Git workflows, API testing, and deployment orchestration.",
    projectsEyebrow: "PORTFOLIO",
    projectsHeading: "Selected Works",
    projectsAllLink: "View All Projects on GitHub",
    projectsViewMore: "View More",
    projectsHide: "Show Less",
    projectsDetail: "View Details",
    projectsTabProjects: "Projects",
    projectsTabAwards: "Awards",
    projectsTabExperience: "Experience",
    projectsSubtitle: "A collection of projects I've built so far.",
    awardsSubtitle: "Certificates and achievements I've earned.",
    experienceSubtitle: "Work and activities I've been part of.",
    p1Title: "Kodein School Website",
    p1Desc: "Official website for Sekolah Developer Indonesia.",
    p2Title: "PKBM Bina Generasi",
    p2Desc: "Website for PKBM Bina Generasi.",
    p3Title: "Monity",
    p3Desc:
      "Built for the TECHSOFT 2026 competition, ranked Top 30 out of 256 participating teams.",
    p4Title: "BNSP Certification Site",
    p4Desc:
      "Supporting website for the BNSP Junior Web Developer certification.",
    // Awards (DUMMY — replace with real data, same order as awardImages)
    awardItems: [
      {
        eyebrow: "COMPETITION",
        title: "Top 30 TECHSOFT 2026",
        desc: "Made the top 30 out of 256 participating teams at the TECHSOFT 2026 competition.",
        date: "2026",
      },
      {
        eyebrow: "CERTIFICATION",
        title: "Junior Web Developer Certificate",
        desc: "Competency certification for junior-level web development.",
        date: "2026",
      },
      {
        eyebrow: "CERTIFICATE",
        title: "Web Development Training Certificate",
        desc: "Completed front-end and back-end web development training.",
        date: "May 2025",
      },
      {
        eyebrow: "AWARD",
        title: "Outstanding Student in Technology",
        desc: "Recognized for achievements and contributions in information technology.",
        date: "December 2025",
      },
    ],

    experienceItems: [
      {
        eyebrow: "INTERNSHIP",
        title: "Lead & Full Stack Developer",
        desc: "PT. Kodeintekno Cipta Solusi — led the end-to-end development of several web projects.",
        date: "Aug – Nov 2025",
      },
      {
        eyebrow: "TEAM PROJECT",
        title: "Frontend Developer — Competition Team",
        desc: "Built the interface and user flows for a competition project with a team.",
        date: "2026",
      },
      {
        eyebrow: "FREELANCE",
        title: "Freelance Web Developer",
        desc: "Built websites for small clients, from interface design to deployment.",
        date: "2025 – Present",
      },
    ],
    contactEyebrow: "GET IN TOUCH",
    contactHeading: "Contact Me",
    contactBaseLabel: "BASE OF OPERATIONS",
    contactBaseVal: "Semarang, Indonesia",
    contactBaseTag: "WIB (GMT+7)",
    contactResponse: "Fast response estimate: within 24 business hours",
    contactAvailable: "Available",
    contactGithub: "GITHUB",
    contactGithubVal: "abdulumair",
    contactEmail: "EMAIL",
    contactEmailVal: "abdulumair@gmail.com",
    contactWhatsapp: "WHATSAPP",
    contactWhatsappVal: "+62 813-9040-0237",
    contactLinkedin: "LINKEDIN",
    contactLinkedinVal: "Abdullah Umair",
    contactInstagram: "INSTAGRAM",
    contactInstagramVal: "@abdlumrr",
    contactTiktok: "TIKTOK",
    contactTiktokVal: "@abdulumair",
    footerRights:
      "© 2026 Abdullah Umair. All rights reserved. Built with Next.js & Tailwind CSS",
    footerBackTop: "Back to top",
  },
};

export type Dict = DictShape;
