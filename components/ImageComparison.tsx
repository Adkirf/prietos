'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslations, cn } from '@/lib/utils'
import { Card, CardContent, CardFooter } from '@/components/ui/card'


export function ImageComparisonComponent({ params: { lang } }: { params: { lang: string } }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)

  const t = getTranslations(lang);

  const handleMove = useCallback(
    (clientX: number) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const containerWidth = containerRect.width
        const mouseX = clientX - containerRect.left
        const newPosition = (mouseX / containerWidth) * 100
        setSliderPosition(Math.max(0, Math.min(100, newPosition)))
      }
    },
    []
  )

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(event.clientX)
      }
    },
    [handleMove]
  )

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (isDraggingRef.current) {
        handleMove(event.touches[0].clientX)
      }
    },
    [handleMove]
  )

  const handleStartDragging = useCallback(() => {
    isDraggingRef.current = true
  }, [])

  const handleStopDragging = useCallback(() => {
    isDraggingRef.current = false
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('mousedown', handleStartDragging)
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseup', handleStopDragging)
      container.addEventListener('mouseleave', handleStopDragging)
      container.addEventListener('touchstart', handleStartDragging)
      container.addEventListener('touchmove', handleTouchMove)
      container.addEventListener('touchend', handleStopDragging)

      return () => {
        container.removeEventListener('mousedown', handleStartDragging)
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseup', handleStopDragging)
        container.removeEventListener('mouseleave', handleStopDragging)
        container.removeEventListener('touchstart', handleStartDragging)
        container.removeEventListener('touchmove', handleTouchMove)
        container.removeEventListener('touchend', handleStopDragging)
      }
    }
  }, [handleMouseMove, handleTouchMove, handleStartDragging, handleStopDragging])

  return (
    <div className="w-full px-4 h-screen flex flex-col items-center justify-center gap-4 bg-background">

      <h1 className='mb-2'>
        {t.imageComparison.title}
      </h1>
      <Card className="w-full max-w-[640px] mx-auto pt-6 ">
        <CardContent>
          <div
            ref={containerRef}
            className="relative w-full h-[300px] md:h-[400px] overflow-hidden cursor-ew-resize rounded-lg"
          >
            <Image
              src={t.imageComparison.before.src}
              alt={t.imageComparison.before.alt}
              fill
              className="object-cover rounded-lg"
            />
            <div
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              className="absolute top-0 left-0 right-0 bottom-0 rounded-lg overflow-hidden"
            >
              <Image
                src={t.imageComparison.after.src}
                alt={t.imageComparison.after.alt}
                fill
                className="object-cover rounded-lg"
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
