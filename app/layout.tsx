import '../src/app/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Journal Spark',
    description: 'Daily journaling prompts to inspire your writing',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}