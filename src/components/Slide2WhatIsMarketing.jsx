import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import { EASE, reveal } from './motion'

export default function Slide2WhatIsMarketing() {
  return (
    <motion.section
      className="slide-frame slide2-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      aria-label="Slide 2: What is Marketing?"
    >
      <SlideBackdrop glow="top" />
      <Slide2Atmosphere />

      <div className="slide-inner slide2-layout relative z-10">
        <motion.p {...reveal(0, 10)} className="slide2-eyebrow">
          Slide 2
        </motion.p>

        <motion.h1 {...reveal(0.2, 14)} className="slide2-title">
          WHAT IS MARKETING?
        </motion.h1>

        <motion.p {...reveal(0.45, 12)} className="slide2-subtitle font-nepali">
          Marketing वास्तवमा के हो?
        </motion.p>

        <motion.div {...reveal(1.1, 14)} className="slide2-def">
          <p className="slide2-def-en">
            Marketing is understanding customer needs, creating value, and building long-term
            relationships.
          </p>
          <p className="slide2-def-ne font-nepali">
            Marketing भनेको ग्राहकको आवश्यकता बुझ्ने, value दिने, र सम्बन्ध बनाउने प्रक्रिया हो।
          </p>
        </motion.div>

        <motion.div
          className="slide2-quote-block"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 2.4, ease: EASE }}
        >
          <p className="slide2-quote-en">
            People don&apos;t buy products.
            <br />
            <span className="font-semibold text-white">
              They buy emotions, identity, convenience, and meaning.
            </span>
          </p>
          <motion.p
            className="slide2-quote-ne font-nepali"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.8 }}
          >
            मानिसहरूले केवल सामान किन्दैनन्। उनीहरूले भावना, पहिचान, सजिलोपन र अर्थ किन्छन्।
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function Slide2Atmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center opacity-40">
      <svg viewBox="0 0 400 280" className="h-[70%] w-[85%] max-w-lg" aria-hidden>
        <motion.circle
          cx="200"
          cy="140"
          r="90"
          fill="none"
          stroke="rgba(201,162,39,0.12)"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.circle
          cx="200"
          cy="140"
          r="60"
          fill="none"
          stroke="rgba(201,162,39,0.08)"
          strokeWidth="0.75"
          strokeDasharray="4 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 140px' }}
        />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const x1 = 200 + 60 * Math.cos(rad)
          const y1 = 140 + 60 * Math.sin(rad)
          const x2 = 200 + 95 * Math.cos(rad)
          const y2 = 140 + 95 * Math.sin(rad)
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(201,162,39,0.15)"
              strokeWidth="0.5"
            />
          )
        })}
        <ellipse cx="200" cy="200" rx="120" ry="28" fill="rgba(201,162,39,0.03)" />
      </svg>
    </div>
  )
}
