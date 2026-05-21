import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const CRM_FEATURES = [
  { en: 'Customer profiles', ne: 'ग्राहक प्रोफाइल' },
  { en: 'Purchase history', ne: 'किनमेल इतिहास' },
  { en: 'Recommendations', ne: 'सिफारिस' },
  { en: 'Follow-ups', ne: 'फलो-अप' },
  { en: 'Personalized suggestions', ne: 'व्यक्तिगत सुझाव' },
  { en: 'Support systems', ne: 'सहयोग प्रणाली' },
]

const EXAMPLES = [
  { en: 'Amazon', ne: 'Amazon' },
  { en: 'Netflix', ne: 'Netflix' },
  { en: 'Spotify', ne: 'Spotify' },
  { en: 'Starbucks', ne: 'Starbucks' },
]

export default function Slide37CRM() {
  return (
    <motion.section
      className="slide-frame slide-focus slide37-frame crm-atmo-dashboard relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 37: Customer relationship management"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crm-atmo-layer crm-atmo-dashboard-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide37-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 37
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          CUSTOMER RELATIONSHIP MANAGEMENT (CRM)
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सम्बन्ध व्यवस्थापन प्रणाली
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses use customer information to build better relationships.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business हरूले ग्राहकको जानकारी प्रयोग गरेर राम्रो सम्बन्ध बनाउँछन्।
          </p>
        </motion.div>

        <motion.div
          className="crm-dashboard mx-auto w-full max-w-4xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.35, ease: EASE }}
        >
          <div className="crm-dashboard-header">
            <span className="crm-dashboard-dot crm-dashboard-dot-live" />
            <span className="crm-dashboard-title">CRM Intelligence</span>
            <span className="font-nepali crm-dashboard-title-ne">स्मार्ट प्रणाली</span>
          </div>
          <div className="crm-dashboard-grid">
            {CRM_FEATURES.map((f, i) => (
              <motion.div
                key={f.en}
                className="crm-dash-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <span className="crm-dash-line" aria-hidden />
                <p className="crm-dash-en">{f.en}</p>
                <p className="font-nepali crm-dash-ne">{f.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="crm-philosophy crm-philosophy-crm mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
        >
          <p className="crm-philosophy-en">
            Modern businesses try to understand every customer personally.
          </p>
          <p className="font-nepali crm-philosophy-ne">
            आजका Business हरू प्रत्येक ग्राहकलाई व्यक्तिगत रूपमा बुझ्न खोज्छन्।
          </p>
        </motion.div>

        <div className="crm-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="crm-chip crm-chip-crm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="crm-chip-en">{ex.en}</p>
              <p className="font-nepali crm-chip-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
        >
          <p className="slide-focus-line-en">CRM helps businesses create personalized experiences.</p>
          <p className="font-nepali slide-focus-line-ne">CRM ले personalized experience बनाउन मद्दत गर्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
