'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ShareComponent } from './ShareComponent'
import { getTranslations } from '@/lib/utils'
import { Button } from './ui/button'

interface ImageViewerProps {
    projectId: number
    imageIndex: number
    lang: string
}

export function ImageViewer({ projectId, imageIndex, lang }: ImageViewerProps) {
    const [project, setProject] = useState<any>(null)
    const router = useRouter()
    const t = getTranslations(lang)

    useEffect(() => {
        setProject(t.projects.list[projectId])
    }, [projectId, t])

    if (!project) return null

    const currentImage = project.images[imageIndex]
    const totalImages = project.images.length

    const handlePrevious = () => {
        if (imageIndex > 0) {
            router.push(`/${lang}/projects/${projectId}/${imageIndex - 1}`)
        }
    }

    const handleNext = () => {
        if (imageIndex < totalImages - 1) {
            router.push(`/${lang}/projects/${projectId}/${imageIndex + 1}`)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full max-w-3xl aspect-video mb-4">
                <Image
                    src={currentImage.src}
                    alt={`${project.title} - Image ${imageIndex + 1}`}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="flex justify-between w-full max-w-3xl mb-4">
                <Button onClick={handlePrevious} disabled={imageIndex === 0}>
                    Previous
                </Button>
                <span>
                    {imageIndex + 1} / {totalImages}
                </span>
                <Button onClick={handleNext} disabled={imageIndex === totalImages - 1}>
                    Next
                </Button>
            </div>
            <ShareComponent projectId={projectId} imageIndex={imageIndex}>
                <Button variant="outline">Share</Button>
            </ShareComponent>
        </div>
    )
}
