import './globals.css'

export const metadata = {
    title: 'snehasishkun - Home',
    description: 'The home page of snehasishkun.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
