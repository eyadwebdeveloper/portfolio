import { Helmet } from "react-helmet-async";

const SITE_URL = "https://eyadashraf.dev";

const DEFAULT_TITLE =
  "Eyad Ashraf | Full Stack Web Developer | Laravel • React • PHP";

const DEFAULT_DESCRIPTION =
  "Eyad Ashraf is a Full Stack Web Developer from Cairo, Egypt specializing in Laravel, PHP, React, TypeScript, JavaScript, MySQL, REST APIs, responsive web design, and SEO. Building modern, scalable, secure, and high-performance web applications.";

const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const KEYWORDS = `
Eyad Ashraf,
Eyad,
Eyad Ashraf Developer,
Eyad Ashraf Portfolio,
Full Stack Developer,
Full Stack Web Developer,
Laravel Developer,
PHP Developer,
React Developer,
Frontend Developer,
Backend Developer,
JavaScript Developer,
TypeScript Developer,
Web Developer Egypt,
Software Engineer,
Laravel,
PHP,
React,
JavaScript,
TypeScript,
MySQL,
REST API,
HTML,
CSS,
Bootstrap,
Tailwind CSS,
Git,
GitHub,
Responsive Design,
SEO,
Web Applications,
Portfolio,
Freelance Web Developer,
Cairo Developer,
Egypt Developer
`;

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Eyad Ashraf",

  url: SITE_URL,

  image: DEFAULT_IMAGE,

  jobTitle: "Full Stack Web Developer",

  description: DEFAULT_DESCRIPTION,

  nationality: "Egyptian",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "Egypt",
  },

  knowsAbout: [
    "PHP",
    "Laravel",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "REST APIs",
    "SEO",
    "Git",
    "GitHub",
    "Bootstrap",
    "Tailwind CSS",
    "Web Development",
    "Software Engineering",
  ],

  sameAs: [
    "https://github.com/eyadwebdeveloper",
    "https://www.linkedin.com/in/eyad-ashraf-953a2430b/",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  url: SITE_URL,

  name: "Eyad Ashraf",

  alternateName: "Eyad Ashraf Portfolio",

  description: DEFAULT_DESCRIPTION,

  inLanguage: "en",

  publisher: {
    "@type": "Person",
    name: "Eyad Ashraf",
  },
};

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>

      <html lang="en" />

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={KEYWORDS} />

      <meta name="author" content="Eyad Ashraf" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      <link rel="canonical" href={url} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:url" content={url} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:image:secure_url" content={image} />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:image:alt" content="Eyad Ashraf Portfolio" />

      <meta property="og:site_name" content="Eyad Ashraf" />

      <meta property="og:locale" content="en_US" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      <meta name="twitter:creator" content="@eyadashraf" />

      {/* Extra */}

      <meta name="application-name" content="Eyad Ashraf" />

      <meta name="apple-mobile-web-app-title" content="Eyad Ashraf" />

      <script type="application/ld+json">
        {JSON.stringify(PERSON_SCHEMA)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(WEBSITE_SCHEMA)}
      </script>

    </Helmet>
  );
}
