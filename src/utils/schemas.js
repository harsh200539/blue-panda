export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Blue Panda Digital Marketing',
  url: 'https://bluepanda.com',
  logo: 'https://bluepanda.com/logo.png',
  sameAs: [
    'https://www.facebook.com/bluepanda',
    'https://www.instagram.com/bluepanda',
    'https://www.linkedin.com/company/bluepanda'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-123-456-7890',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: 'en'
  }
});

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Blue Panda Digital Marketing',
  image: 'https://bluepanda.com/storefront.jpg',
  '@id': 'https://bluepanda.com',
  url: 'https://bluepanda.com',
  telephone: '+91-123-456-7890',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business Road',
    addressLocality: 'Vadodara',
    addressRegion: 'GJ',
    postalCode: '390001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.3072,
    longitude: 73.1812
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '09:00',
    closes: '18:00'
  }
});

export const generateServiceSchema = (serviceName, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'Organization',
    name: 'Blue Panda Digital Marketing'
  },
  areaServed: {
    '@type': 'City',
    name: 'Vadodara'
  },
  description: description,
  url: url
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
});
