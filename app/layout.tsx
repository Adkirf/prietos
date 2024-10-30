import '@/app/globals.css'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export const metadata: Metadata = {
  title: 'Internationalized Site',
  description: 'Multilingual website using Next.js 13+ internationalization',
}

export default function Root({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}