import iynaLogo from '@/assets/images/logos/iyna-logo.png';
import ysjLogo from '@/assets/images/logos/ysj-logo.png';

export const organizations = [
  {
    id: 'iyna',
    shortName: 'IYNA',
    fullName: 'International Youth Neuroscience Association, October Chapter, 2 seasons',
    logo: iynaLogo,
    summary:
      'Beyond the public website, I built and maintained the internal tooling IYNA relies on each admissions cycle, from the applicant-facing portal to the systems the review team and administrators use behind the scenes.',
    deliverables: [
      {
        title: 'Application management platform',
        description:
          'Full admissions pipeline: registration, multi-step submissions, reviewer scoring, and final admin decisions, with a dedicated dashboard per role.',
      },
      {
        title: 'Other internal tools',
        description:
          'Additional internal tools supporting day-to-day chapter operations, built and iterated on alongside the core platform.',
      },
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript', 'security audits'],
    links: [{ label: 'Visit site', href: 'https://iyna-oct.com' }],
    demo: null,
  },
  {
    id: 'ysj',
    shortName: 'YSJ',
    fullName: 'YS Journal, 2 seasons',
    logo: ysjLogo,
    summary:
      'Worked with YSJ across two full seasons, reusing and adapting the same platform architecture I built for IYNA, proving the system out as a scalable base rather than a one-off build.',
    deliverables: [
      {
        title: 'Application management platform',
        description:
          'Same core architecture and workflow as the IYNA deployment, fully re-skinned with YSJ’s own UI/UX and branding, demonstrating the platform’s reusability across organizations.',
      },
      {
        title: 'Certificate generator',
        description:
          'Admins upload or enter participant names and emails; the system auto-generates professionally designed certificates and distributes them automatically, with no manual design work per participant.',
      },
      {
        title: 'Other internal tools',
        description: 'Supporting internal tools built over two seasons of continued collaboration with the team.',
      },
    ],
    techStack: ['React', 'PHP', 'MySQL', 'JavaScript'],
    links: [{ label: 'Visit site', href: 'https://ys-journal.org' }],
    demo: {
      eyebrow: 'Platform demo',
      title: 'YS Journal application platform',
      description: 'A walkthrough of the application management platform and certificate generator built for YSJ.',
      videoSrc: '/videos/portal.mp4',
      footerLink: { label: 'Visit ys-journal.org', href: 'https://ys-journal.org' },
    },
  },
];
