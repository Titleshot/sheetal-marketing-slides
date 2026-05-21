import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const NEW_CUSTOMERS = [
  { en: 'Expensive ads', ne: 'महँगो विज्ञापन' },
  { en: 'Uncertainty', ne: 'अनिश्चितता' },
  { en: 'Heavy competition', ne: 'प्रतिस्पर्धा' },
]

const LOYAL_CUSTOMERS = [
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Repeat purchases', ne: 'फेरि किनमेल' },
  { en: 'Recommendations', ne: 'सिफारिस' },
  { en: 'Loyalty', ne: 'वफादारी' },
]

export default function Slide38WhyRelationshipsMatter() {
  return (
    <motion.section
      className="slide-frame slide-focus slide38-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 38: Why customer relationships matter"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide38-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 38
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          WHY CUSTOMER RELATIONSHIPS MATTER
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सम्बन्ध किन महत्वपूर्ण छ?
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Keeping existing customers is often more valuable than constantly finding new ones.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            नयाँ ग्राहक खोज्नुभन्दा पुराना ग्राहकलाई टिकाइराख्नु धेरै मूल्यवान हुन्छ।
          </p>
        </motion.div>

        <div className="crm-compare mx-auto w-full max-w-4xl shrink-0">
          <motion.div
            className="crm-compare-panel crm-compare-cold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
          >
            <p className="crm-compare-heading">New customers</p>
            <p className="font-nepali crm-compare-heading-ne">नयाँ ग्राहक खोज्दै</p>
            <CompareList items={NEW_CUSTOMERS} delay={0.42} />
          </motion.div>

          <motion.div
            className="crm-compare-panel crm-compare-warm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.48, ease: EASE }}
          >
            <motion.div
              className="crm-compare-glow pointer-events-none absolute inset-0"
              animate={{ opacity: [0.3, 0.65, 0.35] }}
              transition={{ duration: 4, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="crm-compare-heading relative">Loyal returning customers</p>
            <p className="font-nepali crm-compare-heading-ne relative">वफादार ग्राहक</p>
            <CompareList items={LOYAL_CUSTOMERS} delay={0.55} />
          </motion.div>
        </div>

        <motion.div
          className="crm-formula mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
        >
          <p className="crm-formula-en">
            Trust <span className="crm-formula-arrow">→</span> Loyalty{' '}
            <span className="crm-formula-arrow">→</span> Long-term success
          </p>
          <p className="font-nepali crm-formula-ne">विश्वास → Loyalty → दीर्घकालीन सफलता</p>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="slide-focus-line-en">Loyal customers become the foundation of strong brands.</p>
          <p className="font-nepali slide-focus-line-ne">Loyal ग्राहकहरू नै सफल Brand को आधार बन्छन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function CompareList({ items, delay }) {
  return (
    <ul className="crm-compare-list">
      {items.map((item, i) => (
        <motion.li
          key={item.en}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * 0.07, duration: 0.45, ease: EASE }}
        >
          <span className="crm-compare-bullet" aria-hidden />
          <span>
            <span className="crm-compare-item-en">{item.en}</span>
            <span className="font-nepali crm-compare-item-ne">{item.ne}</span>
          </span>
        </motion.li>
      ))}
    </ul>
  )
}
