import { Helmet } from "react-helmet-async";

const SITE_URL = "https://eyadashraf.dev";

const DEFAULT_TITLE = "Eyad Ashraf — Full Stack Web Developer";

const DEFAULT_DESCRIPTION =
  "Eyad Ashraf — Full Stack Web Developer specializing in PHP, Laravel, React, TypeScript, and modern web technologies. Building fast, scalable, secure, and SEO-friendly web applications.";

const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eyad Ashraf",
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  jobTitle: "Full Stack Web Developer",

  description: DEFAULT_DESCRIPTION,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },

  sameAs: [
    "https://github.com/eyadwebdeveloper",
    "https://www.linkedin.com/in/eyad-ashraf-953a2430b/",
  ],

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
    "UI/UX",
  ],
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
      <meta
        name="keywords"
        content="Eyad Ashraf, Full Stack Developer, Laravel Developer, React Developer, PHP Developer, Web Developer Egypt"
      />
      <meta name="author" content="Eyad Ashraf" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Eyad Ashraf" />
      <meta property="og:locale" content="en_US" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Eyad Ashraf Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(PERSON_JSON_LD)}
      </script>
    </Helmet>
  );
}