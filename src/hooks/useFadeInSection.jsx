import { useState, useRef, useEffect } from 'react'

export default function useFadeInSection(options = { threshold: 0.1 }) {
  const domRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (domRef.current) {
      observer.observe(domRef.current)
    }
    return () => observer && observer.disconnect()
  }, [options])

  return [domRef, isVisible]
}
