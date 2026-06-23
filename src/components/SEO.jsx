import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = '' }) => {
  const siteUrl = 'https://www.ajantatechstudio.com';
  const url = `${siteUrl}${path}`;
  const defaultTitle = 'A.T.S - Where Technology Meets Craft.';
  const defaultDescription = "Ajanta Tech & Studio (A.T.S) is a premium software development and creative studio. We build enterprise-grade digital products with the precision of engineering and the intentionality of design.";

  const seo = {
    title: title ? `${title} | A.T.S` : defaultTitle,
    description: description || defaultDescription,
    url: url,
  };

  return (
    <Helmet>
      {/* Basic tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter tags */}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
};

export default SEO;
