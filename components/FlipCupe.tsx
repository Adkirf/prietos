'use client'

import { useState, useEffect, useCallback } from 'react'
import cubeVideo1 from '@/public/assets/cubeVideo1.mp4'
import cubeVideo2 from '@/public/assets/cubeVideo2.mp4'
import cubeVideo3 from '@/public/assets/cubeVideo3.mp4'
import cubeVideo4 from '@/public/assets/cubeVideo4.mp4'
import { Dictionary } from '@/app/[lang]/dictionaries'
import { useFont } from './context/FontProvider'

export default function FlipCube({ dict }: { dict: Dictionary }) {
  const [currentFace, setCurrentFace] = useState(0)
  const [lastInteraction, setLastInteraction] = useState(Date.now())
  const faces = ['front', 'right', 'back', 'left', 'top', 'bottom']
  const videos = [
    cubeVideo1,
    cubeVideo2,
    cubeVideo3,
    cubeVideo4,
    cubeVideo4,
    cubeVideo3
  ]

  const { font } = useFont();

  const handleRotate = useCallback(() => {
    setCurrentFace((prev) => (prev + 1) % faces.length)
    setLastInteraction(Date.now())
  }, [faces.length])

  // Auto-rotation effect
  useEffect(() => {
    const autoRotationInterval = setInterval(() => {
      const now = Date.now()
      if (now - lastInteraction >= 4000) { // 4 seconds
        handleRotate()
      }
    }, 4000)

    return () => clearInterval(autoRotationInterval)
  }, [lastInteraction, handleRotate])

  return (
    <section className={`flex ${font} min-h-[88vh] flex-col items-center justify-center gap-8 ${font.className}`}>
      <style jsx>{`
        .cube-container {
          perspective: 1000px;
          width: 250px;
          height: 250px;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .cube-container {
            width: 300px;
            height: 300px;
          }
        }

        @media (min-width: 1024px) {
          .cube-container {
            width: 350px;
            height: 350px;
          }
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 1s;
          transform: rotateX(-15deg) rotateY(15deg);
        }
        .cube.show-front { transform: rotateX(-15deg) rotateY(0deg); }
        .cube.show-right { transform: rotateX(-15deg) rotateY(-90deg); }
        .cube.show-back { transform: rotateX(-15deg) rotateY(-180deg); }
        .cube.show-left { transform: rotateX(-15deg) rotateY(90deg); }
        .cube.show-top { transform: rotateX(90deg) rotateY(0deg); }
        .cube.show-bottom { transform: rotateX(-90deg) rotateY(0deg); }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          overflow: hidden;
          border: 4px solid hsl(var(--primary));
          box-shadow: 0 0 20px hsl(var(--muted-foreground) / 0.3);
          background-color: hsl(var(--muted) / 0.1);
          border-radius: var(--radius);
        }

        .face:hover {
          border-color: hsl(var(--secondary));
        }

        .face video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--radius) - 4px);
        }

        .face.front { transform: rotateY(0deg) translateZ(130px); }
        .face.right { transform: rotateY(90deg) translateZ(130px); }
        .face.back { transform: rotateY(180deg) translateZ(130px); }
        .face.left { transform: rotateY(-90deg) translateZ(130px); }
        .face.top { transform: rotateX(90deg) translateZ(130px); }
        .face.bottom { transform: rotateX(-90deg) translateZ(130px); }

        @media (min-width: 768px) {
          .face.front { transform: rotateY(0deg) translateZ(155px); }
          .face.right { transform: rotateY(90deg) translateZ(155px); }
          .face.back { transform: rotateY(180deg) translateZ(155px); }
          .face.left { transform: rotateY(-90deg) translateZ(155px); }
          .face.top { transform: rotateX(90deg) translateZ(155px); }
          .face.bottom { transform: rotateX(-90deg) translateZ(155px); }
        }

        @media (min-width: 1024px) {
          .face.front { transform: rotateY(0deg) translateZ(180px); }
          .face.right { transform: rotateY(90deg) translateZ(180px); }
          .face.back { transform: rotateY(180deg) translateZ(180px); }
          .face.left { transform: rotateY(-90deg) translateZ(180px); }
          .face.top { transform: rotateX(90deg) translateZ(180px); }
          .face.bottom { transform: rotateX(-90deg) translateZ(180px); }
        }
      `}</style>
      <h1 className='mb-2'>
        {dict.whatWeDo.title}
      </h1>
      <div
        className="cube-container"
        onClick={handleRotate}
        onMouseMove={() => setLastInteraction(Date.now())} // Reset timer on mouse movement
        onTouchStart={() => setLastInteraction(Date.now())} // Reset timer on touch
      >
        <div className={`cube show-${faces[currentFace]}`}>
          {faces.map((face, index) => (
            <div key={face} className={`face ${face}`}>
              <video
                autoPlay
                muted
                loop
                playsInline
                src={videos[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}