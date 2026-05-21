import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const FACTORS = [
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Emotional safety', ne: 'भावनात्मक सुरक्षा' },
  { en: 'Habits', ne: 'बानी' },
  { en: 'Familiarity', ne: 'चिनजान' },
  { en: 'Identity', ne: 'पहिचान' },
  { en: 'Comfort', ne: 'आराम' },
  { en: 'Belonging', ne: 'सम्बन्ध' },
]

const EXAMPLES = [
  { en: 'Favorite café', ne: 'Café' },
  { en: 'Phone brand', ne: 'Phone' },
  { en: 'Trusted platform', ne: 'Platform' },
  { en: 'Gaming ecosystem', ne: 'Gaming' },
]

export default function Slide65PsychologyOfLoyalty() {
  return (
    <motion.section
      className="slide-frame slide-focus slide65-frame loy-atmo-psych relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 65: Psychology of loyalty"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="loy-atmo-layer loy-atmo-psych-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide65-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow loy-eyebrow">
          Slide 65
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title loy-title-glow">
          THE PSYCHOLOGY OF LOYALTY
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Loyalty को Psychology
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customers stay loyal because of emotional trust, habits, familiarity, and identity.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकहरू emotional trust, habit र familiarity का कारण loyal रहन्छन्।
          </p>
        </motion.div>

        <motion.div
          className="loy-psych-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <div className="loy-psych-core">
            <div className="loy-psych-core-glow" aria-hidden />
            <p className="loy-psych-core-en">Human mind</p>
            <p className="font-nepali loy-psych-core-ne">मानव मन</p>
          </div>
          <div className="loy-psych-grid">
            {FACTORS.map((f, i) => (
              <motion.div
                key={f.en}
                className="loy-psych-chip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.08, duration: 0.55, ease: EASE }}
              >
                <motion.span
                  className="loy-psych-pulse"
                  aria-hidden
                  animate={{ opacity: [0.25, 0.85, 0.25] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.15 }}
                />
                <p className="loy-psych-chip-en">{f.en}</p>
                <p className="font-nepali loy-psych-chip-ne">{f.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="loy-insight-box loy-insight-deep mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <p className="loy-insight-en">
            People often stay loyal to what feels emotionally safe and familiar.
          </p>
          <p className="font-nepali loy-insight-ne">
            मानिसहरू emotionally safe र familiar लाग्ने कुराप्रति loyal रहन्छन्।
          </p>
        </motion.div>

        <div className="loy-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="loy-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 + i * 0.06, duration: 0.5, ease: EASE }}
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
          transition={{ delay: 1.05, ease: EASE }}
        >
          <p className="loy-finale-en">Loyalty is deeply connected with human behavior and psychology.</p>
          <p className="font-nepali loy-finale-ne">Loyalty मानव व्यवहार र psychology सँग गहिरो सम्बन्धित हुन्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
