import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://preventivaeste.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://preventivaeste.com/proteccion',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://preventivaeste.com/servicios/gatos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: 'https://preventivaeste.com/servicios/ninos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: 'https://preventivaeste.com/servicios/aves',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://preventivaeste.com/testes-certificaciones',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://preventivaeste.com/politica-privacidad',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
