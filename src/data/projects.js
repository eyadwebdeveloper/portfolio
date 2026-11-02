import tutCare from '@/assets/images/projects/tut-care.webp';
import tutWonders from '@/assets/images/projects/tut-wonders.webp';
import ember from '@/assets/images/projects/ember.webp';
import alNoor from '@/assets/images/projects/al-noor.webp';
import iyna from '@/assets/images/projects/iyna.webp';
import climateCast from '@/assets/images/projects/climate-cast.webp';
import ysJournal from '@/assets/images/projects/ys-journal.webp';

export const projects = [
  {
    id: 'tut-care',
    title: 'TutCare',
    previewLabel: 'TutCare',
    previewImage: tutCare,
    url: 'https://tutcare.com',
    category: 'Accessibility',
    caption: 'tutcare.com',
    description:
      'The website for TutCare, an accessibility app that helps visually impaired and mobility-challenged people connect with helpers. Built with React and Vite, with support for 23 languages, dark and light modes, scroll-triggered animations, and a realistic phone mockup in the hero.',
    techStack: ['React', 'Vite', '23 languages', 'Dark and light mode', 'Responsive'],
    links: [{ label: 'Visit site', href: 'https://tutcare.com' }],
  },
  {
    id: 'tut-wonders',
    title: 'Tut Wonders',
    previewLabel: 'Tut Wonders',
    previewImage: tutWonders,
    url: 'https://tutwonders.com',
    category: 'Digital agency, ReactJS',
    caption: 'tutwonders.com',
    description:
      'The website for Tut Wonders, a Cairo-based digital agency. Built in React with a six-language switcher (English, Arabic, French, Spanish, German and Russian), full right-to-left support for Arabic, SEO, and project inquiry forms that submit through a Google Apps Script webhook.',
    techStack: ['React', 'i18next', '6 languages', 'Arabic RTL', 'SEO'],
    links: [{ label: 'Visit site', href: 'https://tutwonders.com' }],
  },
  {
    id: 'ember',
    title: 'EMBER Fine Dining',
    previewLabel: 'EMBER',
    previewImage: ember,
    url: 'https://eyadwebdeveloper.github.io/ember-resturant/',
    category: 'Featured, Frontend, HTML',
    caption: '2026',
    description:
      'Immersive fine-dining website for Cairo’s most celebrated restaurant. Features a split-screen cinematic hero, custom cursor system with trailing ring, page loader with progress bar, skeleton image loading, interactive menu tabs with panel switching, a full reservation form with validation and confirmation flow, and scroll-triggered reveal animations throughout.',
    techStack: ['HTML5', 'CSS3', 'Vanilla JS', 'Custom cursor', 'Animations', 'Responsive'],
    links: [
      { label: 'Live demo', href: 'https://eyadwebdeveloper.github.io/ember-resturant/' },
      { label: 'GitHub', href: 'https://github.com/eyadwebdeveloper/ember-restaurent' },
    ],
  },
  {
    id: 'al-noor',
    title: 'Al-Noor Travel',
    previewLabel: 'Al-Noor',
    previewImage: alNoor,
    url: 'https://eyadwebdeveloper.github.io/al-noor-travel',
    category: 'Travel, Frontend',
    caption: '2026',
    description:
      'Premium Hajj and Umrah travel platform with luxury package showcases, an immersive hero, a multi-step booking UI, and full Arabic RTL support.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'RTL', 'Responsive'],
    links: [
      { label: 'Live demo', href: 'https://eyadwebdeveloper.github.io/al-noor-travel' },
      { label: 'GitHub', href: 'https://github.com/eyadwebdeveloper/al-noor-travel' },
    ],
  },
  {
    id: 'iyna',
    title: 'IYNA Official Website',
    previewLabel: 'IYNA',
    previewImage: iyna,
    url: 'https://iyna-oct.com',
    category: 'Published, Organization',
    caption: '2025',
    description:
      'Official website for a real published organization, the International Youth Neuroscience Association Oct. Chapter. A full production site, built and deployed live at iyna-oct.com.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Production', 'Responsive'],
    links: [{ label: 'Visit site', href: 'https://iyna-oct.com' }],
  },
  {
    id: 'climate-cast',
    title: 'Climate Cast',
    previewLabel: 'Climate Cast',
    previewImage: climateCast,
    url: 'https://climate-cast-app.vercel.app',
    category: 'ReactJS',
    caption: '2025',
    description:
      'Real-time weather dashboard with a 7-day forecast, location search, and beautifully animated condition displays. Deployed on Vercel.',
    techStack: ['React', 'Weather API', 'Chart.js', 'Vercel'],
    links: [
      { label: 'Live demo', href: 'https://climate-cast-app.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/eyadwebdeveloper/climate-cast' },
    ],
  },
  {
    id: 'ys-journal',
    title: 'YS Journal',
    previewLabel: 'YS Journal',
    previewImage: ysJournal,
    url: 'https://ys-journal.org',
    category: 'Published, Organization',
    caption: '2025',
    description:
      'Official journal website for a real published organization, built entirely with React.js and deployed live at ys-journal.org. A modern, responsive publication platform.',
    techStack: ['React.js', 'JavaScript', 'CSS3', 'Production', 'Responsive'],
    links: [{ label: 'Visit site', href: 'https://ys-journal.org' }],
  },
];
