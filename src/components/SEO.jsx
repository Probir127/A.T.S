import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = '', image = null }) => {
  const siteUrl = 'https://www.ajantatechstudio.com';
  const url = `${siteUrl}${path}`;
  const defaultTitle = 'A.T.S - Where Technology Meets Craft.';
  const defaultDescription = "Ajanta Tech & Studio (A.T.S) is a premium software development and creative studio. We build enterprise-grade digital products with the precision of engineering and the intentionality of design.";
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const seo = {
    title: title ? `${title} | A.T.S` : defaultTitle,
    description: description || defaultDescription,
    url: url,
    image: image || defaultImage,
  };

  return (
    <Helmet>
      {/* Basic tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#07080C" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content="A.T.S" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEO;
