'use client'

import { getTranslations } from '@/lib/utils';
import { CheckCircle } from 'lucide-react'

export function Hero({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videohomprieto.mp4" type="video/mp4" />
        ˇ
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-[#EAEAEA] px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-[#EAEAEA] sm:text-5xl md:text-6xl font-bold text-center mb-4">
          {t.hero.title}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center mb-8">
          {t.hero.subtitle}
        </h2>
        <ul className="space-y-4 text-lg sm:text-xl">
          {[t.hero.point1, t.hero.point2, t.hero.point3, t.hero.point4].map((point, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
