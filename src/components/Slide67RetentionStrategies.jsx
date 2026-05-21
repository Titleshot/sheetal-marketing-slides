import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const STRATEGIES = [
  { en: 'Loyalty rewards', ne: 'Reward' },
  { en: 'Subscriptions', ne: 'Subscription' },
  { en: 'Memberships', ne: 'सदस्यता' },
  { en: 'Personalization', ne: 'Personalization' },
  { en: 'Customer care', ne: 'सहयोग' },
  { en: 'Convenience', ne: 'सुविधा' },
  { en: 'AI recommendations', ne: 'AI' },
  { en: 'Exclusive offers', ne: 'Exclusive' },
  { en: 'Notifications', ne: 'सूचना' },
]

const EXAMPLES = [
  { en: 'Netflix', ne: 'Netflix' },
  { en: 'Airline miles', ne: 'Airline' },
  { en: 'Starbucks', ne: 'Starbucks' },
  { en: 'Amazon Prime', ne: 'Prime' },
]

const FORMULA = [
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Value', ne: 'Value' },
  { en: 'Convenience', ne: 'Convenience' },
  { en: 'Retention', ne: 'Retention', result: true },
]

export default function Slide67RetentionStrategies() {
  return (
    <motion.section
      className="slide-frame slide-focus slide67-frame loy-atmo-strategy relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 67: Retention strategies"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="loy-atmo-layer loy-atmo-strategy-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide67-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow loy-eyebrow">
          Slide 67
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title loy-title-glow">
          RETENTION STRATEGIES
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Retention Strategy हरू
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses use strategies to keep customers connected long-term.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business हरूले ग्राहकलाई long-term जोडेर राख्न विभिन्न strategy प्रयोग गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="loy-retain-dash mx-auto w-full max-w-4xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.8, ease: EASE }}
        >
          <div className="loy-retain-dash-header">
            <span className="loy-retain-shield" aria-hidden />
            <span className="loy-retain-dash-title">Retention Intelligence</span>
            <span className="font-nepali loy-retain-dash-title-ne">स्मार्ट प्रणाली</span>
          </div>
          <div className="loy-retain-grid">
            {STRATEGIES.map((s, i) => (
              <motion.div
                key={s.en}
                className="loy-retain-tile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <p className="loy-retain-tile-en">{s.en}</p>
                <p className="font-nepali loy-retain-tile-ne">{s.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="loy-formula-row mx-auto max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.78, duration: 0.85, ease: EASE }}
        >
          {FORMULA.map((part, i) => (
            <div key={part.en} className="loy-formula-segment">
              {i > 0 && <span className="loy-formula-op" aria-hidden>+</span>}
              <div className={part.result ? 'loy-formula-part loy-formula-result' : 'loy-formula-part'}>
                <p className="loy-formula-part-en">{part.en}</p>
                <p className="font-nepali loy-formula-part-ne">{part.ne}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="loy-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="loy-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="loy-example-en">{ex.en}</p>
              <p className="font-nepali loy-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="loy-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.02, ease: EASE }}
        >
          <p className="loy-finale-en">Retention systems reduce customer loss and strengthen loyalty.</p>
          <p className="font-nepali loy-finale-ne">
            Retention system ले customer loss घटाएर loyalty बलियो बनाउँछ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
