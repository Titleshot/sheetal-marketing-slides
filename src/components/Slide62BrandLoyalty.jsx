import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const BRANDS = [
  { en: 'Apple ecosystem', ne: 'Apple' },
  { en: 'Nike fans', ne: 'Nike' },
  { en: 'Starbucks regulars', ne: 'Starbucks' },
  { en: 'Coca-Cola identity', ne: 'Coca-Cola' },
  { en: 'Gaming communities', ne: 'Gaming' },
]

export default function Slide62BrandLoyalty() {
  return (
    <motion.section
      className="slide-frame slide-focus slide62-frame cap-atmo-loyalty relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 62: Brand loyalty"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cap-atmo-layer cap-atmo-loyalty-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide62-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cap-eyebrow">
          Slide 62
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cap-title-glow">
          BRAND LOYALTY
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Brand प्रति Loyalty
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Some customers develop emotional attachment and trust toward specific brands.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            केही ग्राहकहरूले विशेष Brand प्रति emotional attachment र trust बनाउँछन्।
          </p>
        </motion.div>

        <motion.div
          className="cap-loyalty-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <div className="cap-loyalty-human">
            <div className="cap-loyalty-human-glow" aria-hidden />
            <p className="cap-loyalty-human-en">Human</p>
            <p className="font-nepali cap-loyalty-human-ne">मानिस</p>
          </div>
          <div className="cap-loyalty-links" aria-hidden>
            {BRANDS.map((_, i) => (
              <motion.span
                key={i}
                className="cap-loyalty-link"
                style={{ '--cap-link-i': i }}
                animate={{ opacity: [0.15, 0.55, 0.15] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
          <div className="cap-loyalty-brands">
            {BRANDS.map((b, i) => (
              <motion.div
                key={b.en}
                className="cap-loyalty-brand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.09, duration: 0.6, ease: EASE }}
              >
                <p className="cap-loyalty-brand-en">{b.en}</p>
                <p className="font-nepali cap-loyalty-brand-ne">{b.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="cap-insight-box cap-insight-warm mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <p className="cap-insight-en">Loyalty is stronger than simple satisfaction.</p>
          <p className="font-nepali cap-insight-ne">Loyalty सामान्य satisfaction भन्दा अझ बलियो हुन्छ।</p>
        </motion.div>

        <motion.footer
          className="cap-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: EASE }}
        >
          <p className="cap-finale-en">Strong brands become part of people&apos;s identity and habits.</p>
          <p className="font-nepali cap-finale-ne">सफल Brand हरू मानिसको identity र habit को हिस्सा बन्छन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
