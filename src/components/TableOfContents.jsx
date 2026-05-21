import { useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from './motion'

export default function TableOfContents({ slides, current, onSelect, open, onOpenChange }) {
  const grouped = useMemo(() => groupSlidesBySection(slides), [slides])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onOpenChange])

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className="toc-fab fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-gold-400/30 bg-black/85 px-3 py-2 text-gold-200/90 shadow-lg backdrop-blur-md transition hover:border-gold-400/50 hover:bg-black hover:text-gold-100 sm:right-6 sm:top-6 sm:px-4 sm:py-2.5"
        aria-label="Open table of contents"
        aria-expanded={open}
        aria-controls="presentation-toc-panel"
      >
        <TocIcon className="h-4 w-4 shrink-0 sm:h-[1.1rem] sm:w-[1.1rem]" />
        <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] xs:inline sm:text-xs">
          Contents
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="toc-backdrop fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              aria-label="Close table of contents"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => onOpenChange(false)}
            />

            <motion.aside
              id="presentation-toc-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Table of contents"
              className="toc-panel fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-gold-400/20 bg-black/95 shadow-2xl backdrop-blur-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <header className="toc-panel-header flex shrink-0 items-start justify-between gap-4 border-b border-white/[0.08] px-5 py-5 sm:px-6">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold-400/65 sm:text-xs">
                    Table of Contents
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Introduction to Marketing
                  </h2>
                  <p className="font-nepali mt-1 text-sm text-gold-200/60">
                    {slides.length} slides
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-gold-400/35 hover:text-gold-200"
                  aria-label="Close table of contents"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </header>

              <nav className="toc-panel-nav min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4 sm:px-4">
                {grouped.map((group, gi) => (
                  <div key={group.section} className={gi > 0 ? 'mt-6' : ''}>
                    <p className="toc-section-label px-2 pb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-gold-400/50">
                      {group.section}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((slide, i) => {
                        const index = slide.index
                        const isActive = index === current
                        return (
                          <motion.li
                            key={slide.id}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + gi * 0.04 + i * 0.03, duration: 0.35, ease: EASE }}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                onSelect(index)
                                onOpenChange(false)
                              }}
                              className={`toc-item group flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition sm:py-3 ${
                                isActive
                                  ? 'border border-gold-400/35 bg-gold-400/[0.1] shadow-gold-glow'
                                  : 'border border-transparent hover:border-white/10 hover:bg-white/[0.04]'
                              }`}
                              aria-current={isActive ? 'true' : undefined}
                            >
                              <span
                                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold tabular-nums ${
                                  isActive
                                    ? 'bg-gold-400/20 text-gold-300'
                                    : 'bg-white/[0.06] text-white/45 group-hover:text-white/70'
                                }`}
                              >
                                {index + 1}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span
                                  className={`block text-sm font-medium leading-snug sm:text-[0.95rem] ${
                                    isActive ? 'text-gold-100' : 'text-white/88'
                                  }`}
                                >
                                  {slide.title}
                                </span>
                                {slide.titleNe && (
                                  <span className="font-nepali mt-0.5 block text-xs leading-snug text-gold-300/55">
                                    {slide.titleNe}
                                  </span>
                                )}
                              </span>
                              {isActive && (
                                <span className="mt-1 shrink-0 text-[10px] uppercase tracking-wider text-gold-400/80">
                                  Now
                                </span>
                              )}
                            </button>
                          </motion.li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </nav>

              <footer className="toc-panel-footer shrink-0 border-t border-white/[0.08] px-5 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/30 sm:px-6">
                Slide {current + 1} of {slides.length}
              </footer>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function groupSlidesBySection(slides) {
  const groups = []
  let currentSection = null

  slides.forEach((slide, index) => {
    const section = slide.section || 'Slides'
    if (section !== currentSection) {
      currentSection = section
      groups.push({ section, items: [] })
    }
    groups[groups.length - 1].items.push({ ...slide, index })
  })

  return groups
}

function TocIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 7h14M5 12h14M5 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="19" cy="17" r="1.5" fill="currentColor" />
    </svg>
  )
}

function CloseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
