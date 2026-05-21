import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const COLUMNS = [
  {
    id: 'needs',
    title: 'NEEDS',
    traits: ['Survival', 'Basic', 'Necessary'],
    examplesEn: 'Food, water, shelter',
    examplesNe: 'खाना, पानी, बास',
    delay: 0.45,
    accent: 'border-white/15 bg-white/[0.03]',
  },
  {
    id: 'wants',
    title: 'WANTS',
    traits: ['Emotion', 'Identity', 'Lifestyle'],
    examplesEn: 'iPhone, Nike, premium coffee',
    examplesNe: 'iPhone, Nike, premium coffee',
    delay: 0.65,
    accent: 'border-gold-400/25 bg-gold-400/[0.06]',
  },
  {
    id: 'demands',
    title: 'DEMANDS',
    traits: ['Want + Money', 'Purchase action', 'Market opportunity'],
    examplesEn: 'Paid orders, bookings, checkout',
    examplesNe: 'भुक्तानी, अर्डर, बुकिङ',
    delay: 0.85,
    accent: 'border-gold-400/40 bg-gradient-to-b from-gold-400/[0.12] to-transparent',
  },
]

export default function Slide10Comparison() {
  return (
    <motion.section
      className="slide-frame slide-focus slide10-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 10: Needs vs Wants vs Demands"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide10-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 10
        </motion.p>
        <motion.h1 {...reveal(0.12, 12)} className="slide-focus-title slide10-title">
          NEEDS vs WANTS vs DEMANDS
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          आवश्यकता vs चाहना vs माग
        </motion.p>

        <div className="slide10-columns grid w-full max-w-5xl flex-1 min-h-0 grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {COLUMNS.map((col) => (
            <motion.article
              key={col.id}
              className={`nw-compare-col flex min-h-0 flex-col rounded-xl border px-4 py-4 md:py-5 ${col.accent}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: col.delay, ease: EASE }}
            >
              <h3 className="nw-compare-heading">{col.title}</h3>
              <ul className="nw-compare-traits mt-3 flex-1 space-y-1.5">
                {col.traits.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
              <div className="mt-4 border-t border-white/[0.08] pt-3 text-left">
                <p className="nw-compare-ex-en">{col.examplesEn}</p>
                <p className="font-nepali nw-compare-ex-ne">{col.examplesNe}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="slide-focus-final shrink-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.35, ease: EASE }}
        >
          <p className="slide-focus-final-en">
            Marketing succeeds when businesses understand all three.
          </p>
          <p className="font-nepali slide-focus-final-ne">
            यी तीनै कुरा बुझ्दा मात्र Marketing सफल हुन्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
