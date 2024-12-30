import React from 'react'
import useFadeInSection from '@/hooks/useFadeInSection'

function FadeInSection({ children, delay }) {
  const [sectionRef, isVisible] = useFadeInSection({})

  const delayStyle = {
    transitionDelay: `${delay}s`
  }

  return (
    <div
      ref={sectionRef}
      style={delayStyle}
      className={`transition-all duration-[2000ms] ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'}`}>
      {children}
    </div>
  )
}

export default FadeInSection
