import '../globals.css';

const details = {
    title: 'snehasishkun - knowledge',
    description: 'snehasish\'s education, knowledge and experience.',
    image: '/icon.png',
    image_height: 400,
    image_width: 400,
    icon: '/icon.ico',
    theme: '#1066f4',
    site_name: 'snehasishkun',
    url: 'https://snehasish.cf/knowledge',
    locale: 'en-IN',
    type: 'website',
    twitter_card: 'summary',
    twitter_site_id: '',
    twitter_creator: '@snehasishkun',
    twitter_creator_id: ''
}

export const metadata = {
    title: details.title,
    description: details.description,
    image: details.image,
    themeColor: details.theme,

    openGraph: {
        title: details.title,
        description: details.description,
        url: details.url,
        siteName: details.site_name,
        images: [
            {
                url: details.image,
                width: details.image_width,
                height: details.image_height,
            }
        ],
        locale: details.locale,
        type: details.type,
        themeColor: details.theme
    },

    twitter: {
        card: details.twitter_card,
        title: details.title,
        description: details.description,
        siteId: details.twitter_site_id,
        creator: details.twitter_creator,
        creatorId: details.twitter_creator_id,
        images: [details.image],
    },

    icons: {
        icon: details.icon,
        shortcut: details.icon,
        apple: details.image
    }
};

export default function ActivityLayout({ children }) {
    return (
        <>
            <body>{children}</body>
        </>
    )
}
