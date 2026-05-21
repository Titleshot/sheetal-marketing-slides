import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXPECTATION = [
  { en: 'Advertisements', ne: 'विज्ञापन' },
  { en: 'Promises', ne: 'वाचा' },
  { en: 'Online photos', ne: 'अनलाइन फोटो' },
  { en: 'Brand image', ne: 'Brand image' },
]

const EXPERIENCE = [
  { en: 'Actual quality', ne: 'वास्तविक गुणस्तर' },
  { en: 'Delivery', ne: 'डेलिभरी' },
  { en: 'Service', ne: 'सेवा' },
  { en: 'Support', ne: 'सहयोग' },
]

const OUTCOMES = [
  { en: 'Experience > Expectation → Delight', ne: 'Experience राम्रो → खुशी', tone: 'delight' },
  { en: 'Experience = Expectation → Satisfaction', ne: 'बराबर → सन्तुष्टि', tone: 'satisfy' },
  { en: 'Experience < Expectation → Disappointment', ne: 'कमजोर → निराशा', tone: 'disappoint' },
]

export default function Slide42ExpectationExperience() {
  return (
    <motion.section
      className="slide-frame slide-focus slide42-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 42: Expectation vs experience"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide42-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 42
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          EXPECTATION vs EXPERIENCE
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          अपेक्षा vs अनुभव
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customer satisfaction depends heavily on whether the actual experience matches
            expectations.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहक सन्तुष्टि वास्तविक अनुभवले अपेक्षा पूरा गर्‍यो कि गरेन भन्ने कुरामा निर्भर हुन्छ।
          </p>
        </motion.div>

        <div className="csat-split mx-auto w-full max-w-4xl shrink-0">
          <motion.div
            className="csat-split-panel csat-split-expect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
          >
            <p className="csat-split-heading">Expectation</p>
            <p className="font-nepali csat-split-heading-ne">अपेक्षा</p>
            <SplitList items={EXPECTATION} delay={0.42} />
          </motion.div>

          <motion.div
            className="csat-outcomes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
          >
            {OUTCOMES.map((o, i) => (
              <motion.p
                key={o.en}
                className={`csat-outcome csat-outcome-${o.tone}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.62 + i * 0.12, duration: 0.5, ease: EASE }}
              >
                <span className="csat-outcome-en">{o.en}</span>
                <span className="font-nepali csat-outcome-ne">{o.ne}</span>
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="csat-split-panel csat-split-real"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.45, ease: EASE }}
          >
            <p className="csat-split-heading">Real experience</p>
            <p className="font-nepali csat-split-heading-ne">वास्तविक अनुभव</p>
            <SplitList items={EXPERIENCE} delay={0.52} />
          </motion.div>
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="slide-focus-line-en text-amber-200/90">Overpromising can destroy trust.</p>
          <p className="font-nepali slide-focus-line-ne">धेरै promise गर्नुले trust तोड्न सक्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function SplitList({ items, delay }) {
  return (
    <ul className="csat-split-list">
      {items.map((item, i) => (
        <motion.li
          key={item.en}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * 0.07, duration: 0.45, ease: EASE }}
        >
          <span className="csat-split-bullet" aria-hidden />
          <span>
            <span className="csat-split-item-en">{item.en}</span>
            <span className="font-nepali csat-split-item-ne">{item.ne}</span>
          </span>
        </motion.li>
      ))}
    </ul>
  )
}
