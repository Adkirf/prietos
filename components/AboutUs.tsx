'use client'

import Image from 'next/image'
import { getTranslations } from '@/lib/utils'
import { useEffect, useRef, useState, useCallback } from 'react'

export function AboutUs({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isImageAnimating, setIsImageAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const marker1Ref = useRef<HTMLDivElement>(null)
  const marker2Ref = useRef<HTMLDivElement>(null)
  const marker3Ref = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.target === marker1Ref.current) {
        if (entry.isIntersecting && currentIndex < 1) {
          setCurrentIndex(1)
        } else if (!entry.isIntersecting && currentIndex === 1) {
          setCurrentIndex(0)
        }
      } else if (entry.target === marker2Ref.current) {
        if (entry.isIntersecting && currentIndex < 2) {
          setCurrentIndex(2)
        } else if (!entry.isIntersecting && currentIndex === 2) {
          setCurrentIndex(1)
        }
      } else if (entry.target === marker3Ref.current) {
        if (entry.isIntersecting && currentIndex < 3) {
          setCurrentIndex(3)
        } else if (!entry.isIntersecting && currentIndex === 3) {
          setCurrentIndex(2)
        }
      }
    })
  }, [currentIndex])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    // Store current ref values in variables
    const marker1 = marker1Ref.current
    const marker2 = marker2Ref.current
    const marker3 = marker3Ref.current

    if (marker1) observer.observe(marker1)
    if (marker2) observer.observe(marker2)
    if (marker3) observer.observe(marker3)

    return () => {
      // Use stored variables in cleanup function
      if (marker1) observer.unobserve(marker1)
      if (marker2) observer.unobserve(marker2)
      if (marker3) observer.unobserve(marker3)
    }
  }, [handleIntersection])

  useEffect(() => {
    setIsAnimating(true)
    setIsImageAnimating(true)
    const textTimer = setTimeout(() => setIsAnimating(false), 500)
    const imageTimer = setTimeout(() => setIsImageAnimating(false), 500)
    return () => {
      clearTimeout(textTimer)
      clearTimeout(imageTimer)
    }
  }, [currentIndex])

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16 relative bg-background" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-8 md:mb-0">
            <div className="absolute inset-0 rounded-full shadow-lg overflow-hidden">
              <Image
                src={t.aboutUs.images[currentIndex].src}
                alt="About Us"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className={`rounded-full object-cover transition-opacity duration-500 ease-in-out
                  ${isImageAnimating ? 'opacity-0' : 'opacity-100'}
                `}
              />
            </div>
            <div className="
              absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8
              bg-card rounded-full p-2 px-6
              shadow-md
            ">
              <p className="
                text-sm md:text-base font-italic
                text-primary
                max-w-[150px] md:max-w-[200px]
              ">
                {t.aboutUs.slogan}
              </p>
            </div>
          </div>
          <div className="md:ml-12 lg:ml-16 max-w-md overflow-hidden">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-foreground transition-all ${isAnimating ? 'duration-0' : 'duration-500'} ease-in-out
              ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
            `}>
              {t.aboutUs.titles[currentIndex]}
            </h2>
            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all ${isAnimating ? 'duration-0' : 'duration-500'} ease-in-out
                ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
              `}
            >
              {t.aboutUs.descriptions[currentIndex]}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${currentIndex === index
                ? 'bg-primary scale-125'
                : 'bg-muted'
                }`}
            />
          ))}
        </div>
      </div>
      <div ref={marker1Ref} className="h-screen" />
      <div ref={marker2Ref} className="h-screen" />
      <div ref={marker3Ref} className="h-screen" />
    </div>
  )
}
