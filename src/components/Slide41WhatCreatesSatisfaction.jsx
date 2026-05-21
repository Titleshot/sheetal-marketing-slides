import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const FACTORS = [
  { en: 'Product quality', ne: 'उत्पादन गुणस्तर' },
  { en: 'Fast service', ne: 'छिटो सेवा' },
  { en: 'Customer support', ne: 'ग्राहक सहयोग' },
  { en: 'Fair price', ne: 'उचित मूल्य' },
  { en: 'Good experience', ne: 'राम्रो अनुभव' },
]

export default function Slide41WhatCreatesSatisfaction() {
  return (
    <motion.section
      className="slide-frame slide-focus slide41-frame csat-atmo-warm relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 41: What creates customer satisfaction"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="csat-atmo-layer csat-atmo-warm-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide41-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 41
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          WHAT CREATES CUSTOMER SATISFACTION?
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सन्तुष्टि कसरी सिर्जना हुन्छ?
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Customer satisfaction is influenced by many factors.</p>
          <p className="font-nepali slide-focus-def-ne">ग्राहक सन्तुष्टि धेरै कुराले प्रभावित हुन्छ।</p>
        </motion.div>

        <div className="csat-factor-grid mx-auto grid w-full max-w-4xl shrink-0 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {FACTORS.map((f, i) => (
            <motion.div
              key={f.en}
              className="csat-factor-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 + i * 0.1, duration: 0.65, ease: EASE }}
            >
              <span className="csat-factor-num" aria-hidden>
                {i + 1}
              </span>
              <p className="csat-factor-en">{f.en}</p>
              <p className="font-nepali csat-factor-ne">{f.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="csat-message-box mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.85, ease: EASE }}
        >
          <p className="csat-message-en">Customers remember how a business made them feel.</p>
          <p className="font-nepali csat-message-ne">Business ले कस्तो अनुभव दियो भन्ने कुरा ग्राहकले सम्झिन्छ।</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
