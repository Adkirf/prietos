'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'
import type { Dictionary } from '@/app/[lang]/dictionaries';
import {
  project1_1,
  project1_2,
  project1_3,
  project1_4,
  project1_5,
  project2_1,
  project2_2,
  project2_3,
  project2_4,
  project3_1,
  project3_2,
  project3_3,
} from '@/lib/assets'

type ProjectImage = {
  src: StaticImageData
  alt: string
  width: number
  height: number
}

type Project = {
  title: string
  images: ProjectImage[]
}

// Create a mapping of project images with proper typing
const PROJECT_IMAGES: Record<number, ProjectImage[]> = {
  1: [
    { ...project1_1, width: project1_1.src.width, height: project1_1.src.height },
    { ...project1_2, width: project1_2.src.width, height: project1_2.src.height },
    { ...project1_3, width: project1_3.src.width, height: project1_3.src.height },
    { ...project1_4, width: project1_4.src.width, height: project1_4.src.height },
    { ...project1_5, width: project1_5.src.width, height: project1_5.src.height },
  ],
  2: [
    { ...project2_1, width: project2_1.src.width, height: project2_1.src.height },
    { ...project2_2, width: project2_2.src.width, height: project2_2.src.height },
    { ...project2_3, width: project2_3.src.width, height: project2_3.src.height },
    { ...project2_4, width: project2_4.src.width, height: project2_4.src.height },
  ],
  3: [
    { ...project3_1, width: project3_1.src.width, height: project3_1.src.height },
    { ...project3_2, width: project3_2.src.width, height: project3_2.src.height },
    { ...project3_3, width: project3_3.src.width, height: project3_3.src.height },
  ],
}

export function ImageGallery({ dict }: { dict: Dictionary }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [activeProject, setActiveProject] = useState(0)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Create projects array using assets and translations
    const loadedProjects = dict.projects.list.map((project, index: number) => ({
      title: project.title,
      images: PROJECT_IMAGES[index + 1] || []
    }))
    setProjects(loadedProjects)
  }, [dict])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefs.current.findIndex(ref => ref === entry.target)
          if (index !== -1) {
            setActiveProject(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [projects])

  return (
    <div className="bg-background text-foreground">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              projectRefs.current[index] = el;
            }
          }}
          className="mb-16"
        >
          <ProjectSection project={project} isActive={index === activeProject} projectIndex={index} lang="en" />
        </div>
      ))}
    </div>
  )
}

// Update ProjectSection props to receive dict instead of using getTranslations
const ProjectSection = ({ project, isActive, projectIndex, lang }: {
  project: Project
  isActive: boolean
  projectIndex: number
  lang: string
}) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = imageRefs.current.map((ref) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'scale-100')
                entry.target.classList.remove('opacity-0', 'scale-95')
              } else {
                entry.target.classList.add('opacity-0', 'scale-95')
                entry.target.classList.remove('opacity-100', 'scale-100')
              }
            })
          },
          { threshold: 0.1 }
        )
        observer.observe(ref)
        return observer
      }
      return null
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [project.images])

  return (
    <section className="mb-16 relative">
      <div className='sticky top-10 z-20 bg-background text-foreground flex items-end justify-bottom h-[17vh]'>
        <h2
          className={`text-2xl font-bold m transition-all duration-300 ${isActive
            ? 'opacity-100 translate-y-0'
            : 'sm:opacity-0 opacity-100 sm:translate-y-4 translate-y-0'
            }`}
        >
          {project.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.images.map((image, index) => (
          <Link href={`/${lang}/projects/${projectIndex}/${index}`} key={index} scroll={false}>
            <div
              ref={(el: HTMLDivElement | null) => {
                if (el) imageRefs.current[index] = el;
              }}
              className="opacity-0 scale-95 transition-all duration-1000 ease-out"
            >
              <div className="relative w-full" style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}>
                <Image
                  src={image.src}
                  alt={`${project.title} - Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
