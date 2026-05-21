import { motion } from 'framer-motion'

const CARDS = [
  {
    id: 'iphone',
    label: 'iPhone',
    en: 'Is it only a phone?',
    ne: 'के यो केवल फोन मात्र हो?',
    icon: PhoneIcon,
    delay: 1.4,
  },
  {
    id: 'coffee',
    label: 'Premium Coffee',
    en: 'Why pay more for coffee?',
    ne: 'कफीको लागि धेरै पैसा किन?',
    icon: CoffeeIcon,
    delay: 1.85,
  },
  {
    id: 'nike',
    label: 'Nike Shoes',
    en: 'Is it just footwear?',
    ne: 'के यो केवल जुत्ता मात्र हो?',
    icon: ShoeIcon,
    delay: 2.3,
  },
  {
    id: 'decor',
    label: 'Luxury Decor',
    en: 'Why decorate with identity?',
    ne: 'आफ्नो पहिचानले room किन सजाउने?',
    icon: ZodiacIcon,
    delay: 2.75,
  },
]

export default function Slide1Hook() {
  return (
    <motion.section
      className="slide-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      aria-label="Slide 1: Why do people buy things they don't need?"
    >
      <SlideBackdrop />

      <div className="slide-inner slide1-layout relative z-10 flex w-full flex-col px-4 py-6 xs:px-5 xs:py-7 sm:px-8 sm:py-8">
        <div className="slide1-stack flex w-full min-h-0 flex-1 flex-col justify-center gap-4 xs:gap-5 md:gap-5 lg:gap-6">
          <SlideHeader />
          <SlideCards />
          <SlideFooter />
        </div>
      </div>
    </motion.section>
  )
}

function SlideBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,162,39,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
      <motion.div
        className="absolute left-1/2 top-[38%] h-40 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/5 blur-[72px] md:h-52 md:w-80 md:blur-[90px]"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
    </div>
  )
}

function SlideHeader() {
  return (
    <header className="slide-header shrink-0 text-center">
      <motion.p
        className="slide-eyebrow mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-400/70 xs:text-xs md:mb-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        Introduction to Marketing
      </motion.p>

      <motion.h1
        className="slide-title mx-auto max-w-4xl font-semibold tracking-tight text-white"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        WHY DO PEOPLE BUY THINGS THEY DON&apos;T ACTUALLY NEED?
      </motion.h1>

      <motion.p
        className="slide-subtitle font-nepali mx-auto mt-2 max-w-3xl font-medium leading-snug text-gold-200/80 md:mt-2.5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        मानिसहरू आफूलाई अत्यावश्यक नभएको कुरा पनि किन किन्छन्?
      </motion.p>

      <motion.div
        className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent md:mt-3"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      />
    </header>
  )
}

function SlideCards() {
  return (
    <div className="slide-cards-zone w-full shrink-0">
      {/* Mobile: swipe row */}
      <div className="-mx-4 w-full overflow-x-auto px-4 pb-1 scrollbar-none xs:-mx-5 xs:px-5 sm:-mx-8 sm:px-8 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
        <div className="flex w-max gap-3 snap-x snap-mandatory xs:gap-3.5 sm:gap-4 md:grid md:w-full md:grid-cols-4 md:gap-3 lg:gap-4">
          {CARDS.map((card) => (
            <QuestionCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SlideFooter() {
  return (
    <motion.footer
      className="slide-footer shrink-0 border-t border-white/[0.06] pt-4 text-center sm:pt-5 md:pt-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 3.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="slide-quote font-light italic tracking-wide text-white/90">
        &ldquo;Marketing begins when we understand human desire.&rdquo;
      </p>
      <p className="font-nepali slide-quote-ne mt-2 font-medium text-gold-300/80 md:mt-2">
        मानिसको चाहना बुझ्ने ठाउँबाट Marketing सुरु हुन्छ।
      </p>
    </motion.footer>
  )
}

function QuestionCard({ label, en, ne, icon: Icon, delay }) {
  return (
    <motion.article
      className="group relative w-[10.5rem] shrink-0 snap-center xs:w-[11.5rem] sm:w-[12.5rem] md:w-auto"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-gold-400/20 via-gold-400/5 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 md:rounded-xl" />

      <motion.div
        className="relative flex flex-col items-center justify-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-4 backdrop-blur-sm transition-all duration-500 group-hover:border-gold-400/40 group-hover:bg-white/[0.05] group-hover:shadow-gold-glow-lg max-md:min-h-[10rem] sm:max-md:min-h-[10.5rem] md:gap-2 md:rounded-xl md:px-3 md:py-3.5"
        whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      >
        <div className="card-icon-wrap relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/25 bg-gold-400/[0.08] text-gold-400 transition-all duration-500 group-hover:border-gold-400/50 group-hover:bg-gold-400/15 group-hover:shadow-gold-glow md:h-12 md:w-12">
          <div className="absolute inset-0 rounded-full bg-gold-400/25 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          <Icon className="relative h-6 w-6 md:h-6 md:w-6" />
        </div>

        <p className="card-label text-[10px] font-medium uppercase tracking-widest text-gold-400/60 xs:text-[11px]">
          {label}
        </p>

        <div className="text-center">
          <p className="card-question text-sm font-medium leading-snug text-white/95">
            {en}
          </p>
          <p className="card-question-ne font-nepali mt-1.5 text-xs leading-snug text-gold-200/70 md:mt-1">
            {ne}
          </p>
        </div>
      </motion.div>
    </motion.article>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="9" y="3" width="14" height="26" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.9" />
      <rect x="11" y="5" width="10" height="18" rx="1" fill="currentColor" opacity="0.08" />
      <circle cx="16" cy="24" r="1.2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function CoffeeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 12h14v8a5 5 0 01-5 5H11a5 5 0 01-5-5v-8z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.85"
      />
      <path d="M20 14h3a2.5 2.5 0 010 5h-3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 7c0-1.5 2-2.5 4-2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M14 6c0-1.5 2-2.5 4-2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <ellipse cx="13" cy="18" rx="4" ry="2" fill="currentColor" opacity="0.12" />
    </svg>
  )
}

function ShoeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M4 20c3-1.5 7-2.5 12-2.5s9 1 12 2.5v3H4v-3z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path d="M8 20V12a4 4 0 014-3.5h1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 10l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M22 8l2 1" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function ZodiacIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="6" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.85" />
      <circle cx="16" cy="15" r="5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 12v4l2.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="16" cy="15" r="1.5" fill="currentColor" opacity="0.25" />
    </svg>
  )
}
