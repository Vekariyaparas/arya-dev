import { useEffect, useState } from 'react'

function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false)
    }, 650)

    return () => window.clearTimeout(timer)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-white transition-opacity duration-300"
      role="status"
      aria-label="Loading page"
    >
      <div className="relative h-16 w-16" aria-hidden="true">
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-white/15 border-t-brandColor" />
        <span className="absolute inset-2 animate-[spin_1.2s_linear_infinite_reverse] rounded-full border-[3px] border-white/20 border-b-limeGreen" />
      </div>
    </div>
  )
}

export default PageLoader