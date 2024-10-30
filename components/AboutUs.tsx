'use client'

import Image from 'next/image'
import { useEffect, useState, useRef, useCallback } from 'react'

import { about1, about2, about3, about4 } from '@/lib/assets'

export function AboutUs({ dict }: { dict: any }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isImageAnimating, setIsImageAnimating] = useState(false)

    const images = [about1, about2, about3, about4]

    // Add refs for scroll markers
    const marker1Ref = useRef<HTMLDivElement>(null)
    const marker2Ref = useRef<HTMLDivElement>(null)
    const marker3Ref = useRef<HTMLDivElement>(null)

    /* const nextSlide = () => {
        setCurrentIndex((prev) => (prev === 3 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? 3 : prev - 1))
    } */

    // Handle intersection observer
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

    // Set up intersection observer
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }

        const observer = new IntersectionObserver(handleIntersection, options)

        const marker1 = marker1Ref.current
        const marker2 = marker2Ref.current
        const marker3 = marker3Ref.current

        if (marker1) observer.observe(marker1)
        if (marker2) observer.observe(marker2)
        if (marker3) observer.observe(marker3)

        return () => {
            if (marker1) observer.unobserve(marker1)
            if (marker2) observer.unobserve(marker2)
            if (marker3) observer.unobserve(marker3)
        }
    }, [handleIntersection])

    useEffect(() => {
        setIsAnimating(true)
        setIsImageAnimating(true)
        const textTimer = setTimeout(() => setIsAnimating(false), 150)
        const imageTimer = setTimeout(() => setIsImageAnimating(false), 350)
        return () => {
            clearTimeout(textTimer)
            clearTimeout(imageTimer)
        }
    }, [currentIndex])

    return (
        <div className="relative bg-background" style={{ height: '400vh' }}>
            <div className="sticky top-[15vh] md:top-0 left-0 right-0 h-[85vh] md:h-screen flex items-start md:items-center justify-center px-4">
                <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto relative">
                    {/*  <Button
                        variant="ghost"
                        className="absolute left-0 md:-left-16 z-10"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button> */}

                    <div className="relative md:mb-0">
                        <div className="
                            w-[175px] md:w-[250px] lg:w-[375px]
                            h-[175px] md:h-[250px] lg:h-[375px]
                            rounded-full shadow-lg overflow-hidden
                        ">
                            <Image
                                src={images[currentIndex].src}
                                alt="About Us"
                                fill
                                sizes="(max-width: 768px) 175px, (max-width: 1024px) 250px, 375px"
                                className={`rounded-full object-cover transition-opacity duration-500 ease-in-out
                                    ${isImageAnimating ? 'opacity-0' : 'opacity-100'}
                                `}
                            />
                        </div>
                    </div>
                    <div className="py-4 md:px-4 flex justify-center">
                        {[0, 1, 2, 3].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${currentIndex === index
                                    ? 'bg-primary scale-125'
                                    : 'bg-muted'
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="md:ml-12 lg:ml-16 max-w-md">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-foreground transition-all ${isAnimating ? 'duration-0' : 'duration-500'} ease-in-out
                            ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                        `}>
                            {dict.aboutUs.titles[currentIndex]}
                        </h2>
                        <p className={`text-lg text-muted-foreground leading-relaxed transition-all ${isAnimating ? 'duration-0' : 'duration-500'} ease-in-out
                            ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                        `}>
                            {dict.aboutUs.descriptions[currentIndex]}
                        </p>
                    </div>

                    {/*    <Button
                        variant="ghost"
                        className="absolute right-0 md:-right-16 z-10"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button> */}
                </div>


            </div>

            {/* Scroll markers */}
            <section ref={marker1Ref} />
            <section ref={marker2Ref} />
            <section ref={marker3Ref} />
        </div>
    )
} 