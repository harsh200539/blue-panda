import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seo-config';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image, 
  structuredData, 
  type = 'website' 
}) => {
  const meta = {
    title: title || seoConfig.default.title,
    description: description || seoConfig.default.description,
    keywords: keywords || seoConfig.default.keywords,
    url: url || seoConfig.default.url,
    image: image || seoConfig.default.image,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
