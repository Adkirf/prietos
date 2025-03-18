import '@/app/globals.css'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export const metadata: Metadata = {
  title: 'Prietos Kompaniet',
  description: 'Multilingual website using Next.js 13+ internationalization',
}

export default function Root({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}