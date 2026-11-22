import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anwarsanchez.com';
  const currentDate = new Date().toISOString();

  return [
    // Homepage - Highest priority (Marca Personal + Partner Digital)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Casos de Éxito - High priority for social proof
    {
      url: `${baseUrl}/casos-de-exito`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Caso individual - Gastromedical
    {
      url: `${baseUrl}/casos-de-exito/gastromedical`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Services - Crecimiento Digital
    {
      url: `${baseUrl}/crecimiento-digital`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Legal pages - Lower priority
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
