import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const ACQUIRE = [
  { en: 'Expensive ads', ne: 'महँगो विज्ञापन' },
  { en: 'High competition', ne: 'प्रतिस्पर्धा' },
  { en: 'Uncertainty', ne: 'अनिश्चितता' },
]

const RETAIN = [
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Familiarity', ne: 'चिनजान' },
  { en: 'Loyalty', ne: 'Loyalty' },
  { en: 'Repeat business', ne: 'फेरि किनमेल' },
]

export default function Slide61CustomerRetention() {
  return (
    <motion.section
      className="slide-frame slide-focus slide61-frame cap-atmo-retain relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 61: Customer retention"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cap-atmo-layer cap-atmo-retain-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide61-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cap-eyebrow">
          Slide 61
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cap-title-glow">
          CUSTOMER RETENTION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहकलाई टिकाइराख्ने प्रक्रिया
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Keeping existing customers is often easier and cheaper than finding new customers.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            पुराना ग्राहकलाई टिकाइराख्नु नयाँ ग्राहक खोज्नुभन्दा सजिलो र सस्तो हुन्छ।
          </p>
        </motion.div>

        <div className="cap-retain-split mx-auto grid w-full max-w-4xl shrink-0 gap-3 lg:grid-cols-2">
          <motion.div
            className="cap-retain-panel cap-retain-panel-chaos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36, duration: 0.65, ease: EASE }}
          >
            <p className="cap-retain-heading">Searching for new customers</p>
            <p className="font-nepali cap-retain-heading-ne">नयाँ ग्राहक खोज्दै</p>
            <ul className="cap-retain-list">
              {ACQUIRE.map((item, i) => (
                <motion.li
                  key={item.en}
                  animate={{ x: [0, 3, -2, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                >
                  <p className="cap-retain-item-en">{item.en}</p>
                  <p className="font-nepali cap-retain-item-ne">{item.ne}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="cap-retain-panel cap-retain-panel-stable"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.44, duration: 0.65, ease: EASE }}
          >
            <p className="cap-retain-heading">Retaining existing customers</p>
            <p className="font-nepali cap-retain-heading-ne">पुराना ग्राहक टिकाइराख्ने</p>
            <ul className="cap-retain-list">
              {RETAIN.map((item, i) => (
                <motion.li
                  key={item.en}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.52 + i * 0.08, duration: 0.5, ease: EASE }}
                >
                  <p className="cap-retain-item-en">{item.en}</p>
                  <p className="font-nepali cap-retain-item-ne">{item.ne}</p>
                </motion.li>
              ))}
            </ul>
            <motion.span
              className="cap-stability-pulse"
              aria-hidden
              animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        <motion.div
          className="cap-insight-box cap-insight-stable mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="cap-insight-en">Retention creates stability.</p>
          <p className="font-nepali cap-insight-ne">Retention ले स्थिरता ल्याउँछ।</p>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en">Successful brands focus heavily on customer retention.</p>
          <p className="font-nepali slide-focus-line-ne">सफल Brand हरू customer retention मा धेरै ध्यान दिन्छन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
