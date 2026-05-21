import { motion } from 'framer-motion'

export default function SlideNav({ current, onPrev, onNext, total, onOpenToc }) {
  const progress = total > 0 ? ((current + 1) / total) * 100 : 0

  return (
    <nav
      className="slide-nav-mini fixed bottom-4 left-4 z-50 sm:bottom-5 sm:left-5"
      aria-label="Slide navigation"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/12 bg-black/88 px-1.5 py-1 shadow-lg backdrop-blur-md sm:gap-1.5 sm:px-2 sm:py-1.5">
        <NavButton direction="prev" disabled={current === 0} onClick={onPrev} />

        <button
          type="button"
          onClick={onOpenToc}
          className="flex min-w-[3.25rem] flex-col items-center gap-1 px-1.5 py-0.5 transition hover:opacity-90 sm:min-w-[3.5rem]"
          aria-label={`Slide ${current + 1} of ${total}. Open table of contents.`}
          title="Table of contents (T)"
        >
          <span className="text-[10px] font-semibold tabular-nums tracking-wide text-gold-300/90 sm:text-[11px]">
            {current + 1}
            <span className="text-white/35">/</span>
            {total}
          </span>
          <span
            className="relative h-1 w-14 overflow-hidden rounded-full bg-white/15 sm:w-16"
            role="progressbar"
            aria-valuenow={current + 1}
            aria-valuemin={1}
            aria-valuemax={total}
          >
            <motion.span
              className="absolute inset-y-0 left-0 block rounded-full bg-gold-400"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </button>

        <NavButton direction="next" disabled={current === total - 1} onClick={onNext} />
      </div>
    </nav>
  )
}

function NavButton({ direction, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm text-white/75 transition hover:bg-white/10 hover:text-gold-200 disabled:pointer-events-none disabled:opacity-25 sm:h-9 sm:w-9"
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  )
}
