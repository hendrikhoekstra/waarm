import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Waarm – Warmtepompen in Anjum',
  description:
    'Waarm is uw lokale specialist voor warmtepompen in Anjum, Friesland. Profiteer van maximale subsidie van €7.000,- en vakkundige installatie door erkende monteurs. Van aanvraag tot warme woning.',
  keywords: [
    'warmtepomp Anjum',
    'warmtepomp Friesland',
    'ISDE subsidie',
    'aardgasvrij Anjum',
    'Hitachi Yutaki',
    'hybride warmtepomp',
    'warmtepomp installateur',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'Waarm – Warmtepompen in Anjum',
    description:
      'Lokale specialist voor warmtepompen in Anjum. Maximale subsidie van €7.000,- en vakkundige installatie.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
