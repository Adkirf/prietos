'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslations, cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

interface ImageComparisonProps {
  params: { lang: string }
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export function ImageComparisonComponent({ params: { lang },
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const t = getTranslations(lang);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const containerWidth = containerRect.width
        const mouseX = event.clientX - containerRect.left
        const newPosition = (mouseX / containerWidth) * 100
        setSliderPosition(Math.max(0, Math.min(100, newPosition)))
      }
    },
    []
  )

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [handleMouseMove])

  return (
    <div className="w-full px-4 h-screen flex flex-col items-center justify-center gap-4 bg-background">

      <Card className="w-full max-w-[640px] mx-auto">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center bg-gradient-to-r from-foreground to-primary text-transparent bg-clip-text font-bold">
            {t.imageComparison.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            ref={containerRef}
            className="relative w-full h-[300px] md:h-[400px] overflow-hidden cursor-ew-resize"
          >
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
            />
            <div
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              className="absolute top-0 left-0 right-0 bottom-0"
            >
              <Image
                src={afterImage}
                alt={afterAlt}
                fill
                className="object-cover"
              />
            </div>
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.7)]"
            >
              <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "w-12 h-12 bg-primary rounded-full flex items-center justify-center",
                "shadow-[0_0_15px_rgba(var(--primary),0.9)]",
                "transition-transform duration-200 ease-in-out transform hover:scale-110"
              )}>
                <div className="flex items-center justify-center space-x-1">
                  <ChevronLeft className="w-4 h-4 text-primary-foreground" />
                  <ChevronRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground">{t.imageComparison.description}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
