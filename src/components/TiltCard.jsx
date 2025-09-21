import { useRef } from 'react'

export default function TiltCard({ className = '', children }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 12
    const rotateX = (0.5 - py) * 12
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  )
}


