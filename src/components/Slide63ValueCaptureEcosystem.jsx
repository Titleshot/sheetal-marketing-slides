import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SYSTEMS = [
  { en: 'Satisfaction', ne: 'सन्तुष्टि' },
  { en: 'Retention', ne: 'Retention' },
  { en: 'Subscriptions', ne: 'Subscription' },
  { en: 'Repeat purchase', ne: 'फेरि किनमेल' },
  { en: 'Recommendations', ne: 'सिफारिस' },
  { en: 'Referrals', ne: 'Referral' },
  { en: 'Loyalty', ne: 'Loyalty' },
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Emotional connection', ne: 'भावनात्मक सम्बन्ध' },
  { en: 'Brand community', ne: 'Brand समुदाय' },
]

const FORMULA = [
  { en: 'Satisfaction', ne: 'सन्तुष्टि' },
  { en: 'Retention', ne: 'Retention' },
  { en: 'Loyalty', ne: 'Loyalty' },
  { en: 'Growth', ne: 'Growth', result: true },
]

export default function Slide63ValueCaptureEcosystem() {
  return (
    <motion.section
      className="slide-frame slide-focus slide63-frame cap-atmo-finale relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 63: Value capture ecosystem"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cap-atmo-layer cap-atmo-finale-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide63-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cap-eyebrow">
          Slide 63
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cap-title-glow">
          VALUE CAPTURE ECOSYSTEM
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Value Capture Ecosystem
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def slide63-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Long-term business success comes from continuous customer relationships.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            दीर्घकालीन Business सफलता continuous customer relationship बाट आउँछ।
          </p>
        </motion.div>

        <motion.div
          className="cap-eco-hub slide63-eco mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.32, ease: EASE }}
        >
          <motion.div
            className="cap-eco-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          >
            <div className="cap-eco-core-glow" aria-hidden />
            <p className="cap-eco-core-en">Loyal customer</p>
            <p className="font-nepali cap-eco-core-ne">Loyal ग्राहक</p>
          </motion.div>
          <div className="cap-eco-grid">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.en}
                className="cap-eco-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.055, duration: 0.5, ease: EASE }}
              >
                <motion.span
                  className="cap-eco-node-glow"
                  aria-hidden
                  animate={{ opacity: [0.25, 0.75, 0.25] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.12 }}
                />
                <p className="cap-eco-node-en">{sys.en}</p>
                <p className="font-nepali cap-eco-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="cap-formula-row mx-auto max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          {FORMULA.map((part, i) => (
            <div key={part.en} className="cap-formula-segment">
              {i > 0 && <span className="cap-formula-arrow" aria-hidden>→</span>}
              <div className={part.result ? 'cap-formula-part cap-formula-result' : 'cap-formula-part'}>
                <p className="cap-formula-part-en">{part.en}</p>
                <p className="font-nepali cap-formula-part-ne">{part.ne}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="slide63-bottom mx-auto w-full max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.95, ease: EASE }}
        >
          <div className="cap-finale-line cap-finale-line-primary">
            <p className="cap-finale-en">
              Great businesses grow by building lasting customer relationships.
            </p>
            <p className="font-nepali cap-finale-ne">सफल Business हरू टिकाउ ग्राहक सम्बन्धबाट बढ्छन्।</p>
          </div>
          <motion.div
            className="cap-emotional-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.12, ease: EASE }}
          >
            <p className="cap-emotional-en">
              Modern marketing is not about one sale.
              <br />
              It is about long-term human connection.
            </p>
            <p className="font-nepali cap-emotional-ne">
              आजको Marketing एकपटकको बिक्री होइन।
              <br />
              यो long-term human connection हो।
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
