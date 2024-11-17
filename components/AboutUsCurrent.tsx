'use client'

import { Dictionary } from '@/app/[lang]/dictionaries'
import Image from 'next/image'
import { useEffect, useState, useRef, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { about1, about2, about3, about4 } from '@/lib/assets'

export function AboutUs({ dict }: { dict: Dictionary }) {
    const images = [about1, about2, about3, about4]
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
    const [opacities, setOpacities] = useState<number[]>([1, 0, 0, 0])
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const lastScrollY = useRef(0)

    const setRef = useCallback((element: HTMLDivElement | null, index: number) => {
        sectionRefs.current[index] = element
    }, [])

    useEffect(() => {
        console.log(currentImageIndex)
    }, [currentImageIndex])

    useEffect(() => {
        lastScrollY.current = window.scrollY

        const calculateOpacity = () => {
            const scrollDirection = window.scrollY > lastScrollY.current ? 'down' : 'up'
            lastScrollY.current = window.scrollY

            const newOpacities = sectionRefs.current.map((ref, index) => {
                if (!ref) return 0
                const rect = ref.getBoundingClientRect()
                const viewportHeight = window.innerHeight
                const elementTop = rect.top
                const elementBottom = rect.bottom

                if (elementTop >= viewportHeight * 0.5) {
                    return 1
                }

                if (elementTop < viewportHeight * 1) {
                    const fadeDistance = viewportHeight * 0.25
                    const opacity = Math.max(0, elementTop / fadeDistance)
                    const finalOpacity = Math.pow(opacity, 1.5)

                    if (finalOpacity > 0.05) {
                        setCurrentImageIndex(index)
                    }

                    return finalOpacity
                }

                return 0
            })
            setOpacities(newOpacities)
        }

        window.addEventListener('scroll', calculateOpacity)
        calculateOpacity()

        return () => window.removeEventListener('scroll', calculateOpacity)
    }, [])

    return (
        <div className="relative flex flex-col lg:flex-row justify-center w-full">
            {/* Left column - Fixed image */}
            <div className="w-full lg:w-1/2 sticky top-0 h-[50vh] lg:h-screen flex items-end md:items-center justify-center lg:justify-end z-10">
                <Card className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[375px] pt-6 mb-6">
                    <CardContent>
                        <div className="relative">
                            <div className="relative w-full aspect-video lg:h-[375px] rounded shadow-lg overflow-hidden">
                                <Image
                                    src={images[currentImageIndex].src}
                                    alt="About Us"
                                    fill
                                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 375px"
                                    className="rounded-lg object-cover transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right column - Scrolling content */}
            <div className="w-full lg:w-2/3 flex flex-col pt-[25vh] lg:pt-[50vh] pb-20">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        ref={(el) => setRef(el, index)}
                        className="min-h-[50vh] lg:h-[88vh] flex items-center px-4 lg:px-0"
                        style={{ opacity: opacities[index] }}
                    >
                        <div className="mx-4 max-w-xl md:mx-0]">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">{dict.aboutUs.titles[index]}</h2>
                            <p className="text-base lg:text-lg">{dict.aboutUs.descriptions[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
