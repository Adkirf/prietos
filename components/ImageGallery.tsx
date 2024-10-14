'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { getTranslations } from '@/lib/utils'

type ProjectImage = {
  src: string
  width: number
  height: number
}

type Project = {
  title: string
  images: ProjectImage[]
}

const ProjectSection = ({ project, isActive, projectIndex, lang }: { project: Project; isActive: boolean; projectIndex: number; lang: string }) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
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
    <div className="mb-16">
      <div className='sticky  top-0 z-20 bg-background text-foreground flex items-end justify-bottom h-[15vh]'>
        <h2
          className={`text-2xl font-bold m transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
    </div>
  )
}

export function ImageGallery({ params: { lang } }: { params: { lang: string } }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [activeProject, setActiveProject] = useState(0)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const t = getTranslations(lang);

  useEffect(() => {
    // Load projects from the translations
    const loadedProjects = t.projects.list as Project[]
    setProjects(loadedProjects)
  }, [t])

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
    <div className="container mx-auto px-4 py-8 bg-background text-foreground">
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
          <ProjectSection project={project} isActive={index === activeProject} projectIndex={index} lang={lang} />
        </div>
      ))}
    </div>
  )
}
