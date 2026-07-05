// Long-term organization partnerships (IYNA & YSJ) shown as case-study cards
// in the Collaborations section.

const collaborations = [
  {
    id: "iyna",
    org: "IYNA",
    orgSubname: "Islamic Youth Network Association",
    logo: "/assets/img/logos/iyna-logo.png",
    logoFallback: "IY",
    role: "Full Stack Developer · Internal Systems",
    duration: "2 seasons",
    summary:
      "Beyond the public-facing website, I've built and maintained the internal tooling IYNA relies on each admissions cycle — from the applicant-facing portal to the systems the review team and administrators use behind the scenes.",
    projects: [
      {
        icon: "🖥️",
        title: "Application Management Platform",
        description:
          "Full admissions pipeline — registration, multi-step submissions, reviewer scoring, and final admin decisions, with a dedicated dashboard per role.",
      },
      {
        icon: "🎓",
        title: "Certificate Generation System",
        description:
          "Admins upload or enter participant names and emails; the system auto-generates professionally designed certificates and distributes them automatically — no manual design work per participant.",
      },
      {
        icon: "⚙️",
        title: "Other Internal Web Systems",
        description:
          "Additional internal tools supporting day-to-day chapter operations, built and iterated on alongside the core platform.",
      },
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Security Audits"],
    links: [{ type: "demo", label: "Visit Site", href: "https://iyna-oct.com" }],
  },
  {
    id: "ysj",
    org: "YSJ",
    orgSubname: "YS Journal",
    logo: "/assets/img/logos/ysj-logo.png",
    logoFallback: "YS",
    role: "Full Stack Developer · Internal Systems",
    duration: "2 seasons",
    summary:
      "Worked with YSJ across two full seasons, reusing and adapting the same platform architecture I built for IYNA — proving the system out as a scalable base rather than a one-off build.",
    projects: [
      {
        icon: "🖥️",
        title: "Application Management Platform",
        description:
          "Same core architecture and workflow as the IYNA deployment, fully re-skinned with YSJ's own UI/UX and branding — demonstrating the platform's reusability across organizations.",
      },
      {
        icon: "⚙️",
        title: "Other Internal Web Systems",
        description: "Supporting internal tools built over two seasons of continued collaboration with the team.",
      },
    ],
    stack: ["React.js", "PHP", "MySQL", "JavaScript"],
    links: [
      { type: "demo", label: "Visit Site", href: "https://ys-journal.org" },
      {
        type: "video",
        label: "Watch Platform Demo",
        video: "/assets/media/portal.mp4",
      },
    ],
  },
];

export default collaborations;
