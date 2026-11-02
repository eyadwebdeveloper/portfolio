export const siteConfig = {
  name: 'Eyad Ashraf',
  nameWords: ['Eyad', 'Ashraf'],
  headline: 'Full-stack web developer in Cairo, Egypt',
  email: 'projects@eyadashraf.dev',
  // Kept so any other component using siteConfig.cvPath (e.g. the footer link) keeps working.
  cvPath: '/Eyad-Ashraf-CV-Designed.pdf',
  // First entry is the default: it is what the main "Download CV" button downloads.
  cvFiles: [
    {
      id: 'designed',
      label: 'Designed PDF',
      description: 'The full layout, best for reading on screen or print.',
      path: '/Eyad-Ashraf-CV-Designed.pdf',
    },
    {
      id: 'ats',
      label: 'Plain PDF',
      description: 'Simple text layout, best for job portal uploads.',
      path: '/Eyad-Ashraf-CV-ATS.pdf',
    },
  ],
  timeZone: 'Africa/Cairo',
  copyrightYear: 2026,
  socials: {
    github: { label: 'GitHub', handle: 'eyadwebdeveloper', url: 'https://github.com/eyadwebdeveloper' },
    linkedin: { label: 'LinkedIn', handle: 'eyadwebdeveloper', url: 'https://www.linkedin.com/in/eyadwebdeveloper' },
  },
};

export const navigationLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];