import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const NEED_CARDS = [
  { id: 'food', label: 'FOOD', ne: 'खाना', Icon: FoodIcon, delay: 0.55 },
  { id: 'shelter', label: 'SHELTER', ne: 'बास', Icon: ShelterIcon, delay: 0.8 },
  { id: 'transport', label: 'TRANSPORTATION', ne: 'यातायात', Icon: TransportIcon, delay: 1.05 },
]

export default function Slide7Needs() {
  return (
    <motion.section
      className="slide-frame slide-focus slide7-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 7: Needs"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 7
        </motion.p>
        <motion.h1 {...reveal(0.12, 14)} className="slide-focus-title slide-focus-title-xl">
          NEEDS
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          आवश्यकता
        </motion.p>

        <motion.div {...reveal(0.4, 12)} className="slide-focus-def max-w-2xl">
          <p className="slide-focus-def-en">
            Needs are basic things required for survival.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            जीवन चलाउन आवश्यक पर्ने आधारभूत कुराहरूलाई Needs भनिन्छ।
          </p>
        </motion.div>

        <div className="nw-cards-grid w-full max-w-4xl shrink-0">
          {NEED_CARDS.map((card) => (
            <motion.article
              key={card.id}
              className="nw-card group"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: card.delay, ease: EASE }}
            >
              <motion.div
                className="nw-card-inner"
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(201,162,39,0)',
                    '0 0 28px rgba(201,162,39,0.2)',
                    '0 0 0 rgba(201,162,39,0)',
                  ],
                }}
                transition={{ duration: 3, delay: card.delay, repeat: Infinity }}
              >
                <div className="nw-card-icon">
                  <card.Icon className="h-8 w-8 md:h-9 md:w-9" />
                </div>
                <p className="nw-card-label">{card.label}</p>
                <p className="font-nepali nw-card-ne">{card.ne}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line shrink-0"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
        >
          <p className="slide-focus-line-en">Without needs, survival becomes difficult.</p>
          <p className="font-nepali slide-focus-line-ne">Needs बिना जीवन कठिन हुन्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function FoodIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <ellipse cx="16" cy="18" rx="9" ry="5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 14c0-4 3-7 6-7s6 3 6 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function ShelterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M5 16 L16 6 L27 16" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <rect x="9" y="16" width="14" height="10" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.08" />
    </svg>
  )
}

function TransportIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="4" y="12" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="10" cy="24" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="22" cy="24" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 12 L12 8 L20 8 L24 12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}
