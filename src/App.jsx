import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SLIDES } from './slides/registry'
import SlideNav from './components/SlideNav'
import PresentationToggle from './components/PresentationToggle'
import TableOfContents from './components/TableOfContents'

const STORAGE_KEY = 'sheetal-presentation-mode'
const SLIDE_KEY = 'sheetal-current-slide'
const SCROLL_EDGE = 64

function getSlideMain() {
  return document.querySelector('.slide-main')
}

export default function App() {
  const slideMainRef = useRef(null)
  const [presentationMode, setPresentationMode] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === null ? true : saved === 'true'
  })

  const [currentSlide, setCurrentSlide] = useState(() => {
    const saved = Number(localStorage.getItem(SLIDE_KEY))
    return Number.isFinite(saved) && saved >= 0 && saved < SLIDES.length ? saved : 0
  })

  const [tocOpen, setTocOpen] = useState(false)

  const goToSlide = useCallback((index) => {
    setCurrentSlide(Math.max(0, Math.min(SLIDES.length - 1, index)))
  }, [])

  const scrollWithinSlide = useCallback((direction) => {
    const main = slideMainRef.current ?? getSlideMain()
    if (!main) return false

    if (direction === 'down') {
      const atBottom =
        main.scrollTop + main.clientHeight >= main.scrollHeight - SCROLL_EDGE
      if (atBottom) return false
      main.scrollBy({ top: main.clientHeight * 0.85, behavior: 'smooth' })
      return true
    }

    if (main.scrollTop <= SCROLL_EDGE) return false
    main.scrollBy({ top: -main.clientHeight * 0.85, behavior: 'smooth' })
    return true
  }, [])

  const goNext = useCallback(() => {
    if (!scrollWithinSlide('down')) {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, goToSlide, scrollWithinSlide])

  const goPrev = useCallback(() => {
    if (!scrollWithinSlide('up')) {
      goToSlide(currentSlide - 1)
    }
  }, [currentSlide, goToSlide, scrollWithinSlide])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(presentationMode))
  }, [presentationMode])

  useEffect(() => {
    localStorage.setItem(SLIDE_KEY, String(currentSlide))
  }, [currentSlide])

  useEffect(() => {
    const main = slideMainRef.current ?? getSlideMain()
    main?.scrollTo({ top: 0, behavior: 'auto' })
  }, [currentSlide])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (tocOpen && e.key === 'Escape') {
        setTocOpen(false)
        return
      }

      if (e.key === 't' || e.key === 'T') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          setTocOpen((open) => !open)
        }
        return
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
        return
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev, tocOpen])

  const { Component } = SLIDES[currentSlide]

  return (
    <>
      <main
        ref={slideMainRef}
        className={`slide-main flex h-[100dvh] h-[100svh] bg-black p-3 sm:p-4 md:p-6 ${
          presentationMode ? 'presentation-mode' : ''
        }`}
      >
        <div className="slide-shell mx-auto w-full shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={SLIDES[currentSlide].id}
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Component />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <TableOfContents
        slides={SLIDES}
        current={currentSlide}
        onSelect={goToSlide}
        open={tocOpen}
        onOpenChange={setTocOpen}
      />

      <SlideNav
        current={currentSlide}
        onPrev={goPrev}
        onNext={goNext}
        total={SLIDES.length}
        onOpenToc={() => setTocOpen(true)}
      />
      <PresentationToggle
        enabled={presentationMode}
        onToggle={() => setPresentationMode((on) => !on)}
      />
    </>
  )
}
