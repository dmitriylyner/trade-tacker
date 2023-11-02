import type { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
    description: 'Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.',
    defaultTitle: 'Trade Tracker - Next generation investment journal and analysis',
    canonical: 'https://tradetracker.ai',
    additionalLinkTags: [
        {
            rel: 'icon',
            // href: 'https://tradetracker.ai/favicon.ico'
            href: '/favicon.ico'
        }
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://tradetracker.ai',
        title: 'Trade Tracker - Next generation investment journal and analysis',
        siteName: 'Trade Tracker',
        description: 'Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.',
        images: [
            {
                url: 'https://tradetracker.ai/tradetracker-og.jpg',
                alt: 'Trade Tracker - Next generation investment journal and analysis',
                type: 'image/jpg',
                width: 1200,
                height: 600
                // secureUrl: ''
            }
        ]
    }
}

export default config;