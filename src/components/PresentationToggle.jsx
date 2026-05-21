export default function PresentationToggle({ enabled, onToggle, embedded = false }) {
  if (embedded) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white/[0.04] backdrop-blur-md transition-colors hover:border-gold-400/50 sm:h-10 sm:w-10 ${
          enabled
            ? 'border-gold-400/45 text-gold-300'
            : 'border-white/10 text-white/40'
        }`}
        aria-pressed={enabled}
        aria-label={enabled ? 'Larger text on' : 'Larger text off'}
        title="Toggle larger text for projector"
      >
        <PresentationIcon className="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-black/80 backdrop-blur-md transition-colors hover:border-gold-400/50 hover:bg-black sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 ${
        enabled
          ? 'border-gold-400/45 text-gold-300'
          : 'border-white/15 text-white/40'
      }`}
      aria-pressed={enabled}
      aria-label={enabled ? 'Larger text on' : 'Larger text off'}
      title="Toggle larger text for projector"
    >
      <PresentationIcon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" />
    </button>
  )
}

function PresentationIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M9 9h6M9 12.5h4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity={0.85}
      />
    </svg>
  )
}
