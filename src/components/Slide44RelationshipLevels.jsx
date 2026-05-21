import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const LEVELS = [
  {
    en: 'Basic relationship',
    ne: 'आधारभूत सम्बन्ध',
    descEn: 'Only selling',
    descNe: 'केवल बिक्री',
    tier: 1,
  },
  {
    en: 'Responsive relationship',
    ne: 'प्रतिक्रियात्मक सम्बन्ध',
    descEn: 'Responding when needed',
    descNe: 'आवश्यक पर्दा प्रतिक्रिया दिने',
    tier: 2,
  },
  {
    en: 'Proactive relationship',
    ne: 'सक्रिय सम्बन्ध',
    descEn: 'Actively helping customers',
    descNe: 'आफैं ग्राहकलाई सहयोग गर्ने',
    tier: 3,
  },
  {
    en: 'Partnership',
    ne: 'साझेदारी',
    descEn: 'Long-term trusted relationship',
    descNe: 'लामो trusted सम्बन्ध',
    tier: 4,
    highlight: true,
  },
]

export default function Slide44RelationshipLevels() {
  return (
    <motion.section
      className="slide-frame slide-focus slide44-frame crl-atmo-future relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 44: Customer relationship levels"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />
      <div className="crl-atmo-layer crl-atmo-future-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide44-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 44
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          CUSTOMER RELATIONSHIP LEVELS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सम्बन्धका स्तरहरू
        </motion.p>

        <motion.div {...reveal(0.26)} className="crl-hook mx-auto max-w-2xl">
          <p className="crl-hook-en">How deeply can a business connect with customers?</p>
          <p className="font-nepali crl-hook-ne">Business ले ग्राहकसँग कति गहिरो सम्बन्ध बनाउन सक्छ?</p>
        </motion.div>

        <div className="crl-ladder mx-auto w-full max-w-xl shrink-0">
          <div className="crl-ladder-rail" aria-hidden>
            <motion.div
              className="crl-ladder-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="crl-ladder-steps">
            {LEVELS.map((level, i) => (
              <motion.li
                key={level.en}
                className={`crl-ladder-step crl-ladder-tier-${level.tier}${
                  level.highlight ? ' crl-ladder-step-final' : ''
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.12, duration: 0.65, ease: EASE }}
              >
                <span className="crl-ladder-dot" aria-hidden />
                <div>
                  <p className="crl-ladder-en">{level.en}</p>
                  <p className="font-nepali crl-ladder-ne">{level.ne}</p>
                  <p className="crl-ladder-desc-en">{level.descEn}</p>
                  <p className="font-nepali crl-ladder-desc-ne">{level.descNe}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.footer
          className="crl-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="crl-finale-en">
            Modern brands aim for long-term partnerships, not one-time sales.
          </p>
          <p className="font-nepali crl-finale-ne">
            आजका Brand हरू एकपटकको बिक्री होइन, long-term partnership चाहन्छन्।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
