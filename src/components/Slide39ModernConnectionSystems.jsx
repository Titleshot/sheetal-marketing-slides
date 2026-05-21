import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SYSTEMS = [
  { en: 'Loyalty apps', ne: 'Loyalty app' },
  { en: 'Memberships', ne: 'सदस्यता' },
  { en: 'Push notifications', ne: 'सूचना' },
  { en: 'AI recommendations', ne: 'AI सिफारिस' },
  { en: 'Rewards', ne: 'पुरस्कार' },
  { en: 'Personalized email', ne: 'इमेल' },
  { en: 'Smart experiences', ne: 'स्मार्ट अनुभव' },
]

const EXAMPLES = [
  { en: 'Starbucks rewards', ne: 'Starbucks' },
  { en: 'Amazon alerts', ne: 'Amazon' },
  { en: 'Netflix picks', ne: 'Netflix' },
  { en: 'Delivery apps', ne: 'Delivery' },
]

export default function Slide39ModernConnectionSystems() {
  return (
    <motion.section
      className="slide-frame slide-focus slide39-frame crm-atmo-connect relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 39: Modern customer connection systems"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crm-atmo-layer crm-atmo-connect-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide39-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 39
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          MODERN CUSTOMER CONNECTION SYSTEMS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक ग्राहक सम्बन्ध प्रणालीहरू
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Today brands use technology to stay connected continuously.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका Brand हरू technology प्रयोग गरेर ग्राहकसँग लगातार जोडिन्छन्।
          </p>
        </motion.div>

        <motion.div
          className="crm-connect-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          <motion.div
            className="crm-connect-customer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
          >
            <div className="crm-connect-glow" aria-hidden />
            <svg viewBox="0 0 80 100" className="crm-connect-silhouette" aria-hidden>
              <ellipse cx="40" cy="14" rx="12" ry="13" fill="rgba(255,255,255,0.06)" stroke="rgba(201,162,39,0.55)" strokeWidth="1.2" />
              <path d="M40 27 L40 68 M40 42 L26 58 M40 42 L54 58 M40 68 L32 92 M40 68 L48 92" stroke="rgba(201,162,39,0.65)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            </svg>
            <p className="crm-connect-label">Customer</p>
          </motion.div>

          <div className="crm-connect-grid">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.en}
                className="crm-connect-tile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <p className="crm-connect-tile-en">{sys.en}</p>
                <p className="font-nepali crm-connect-tile-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="crm-philosophy crm-philosophy-connect mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
        >
          <p className="crm-philosophy-en">Modern marketing is continuous connection.</p>
          <p className="font-nepali crm-philosophy-ne">आजको Marketing भनेको continuous connection हो।</p>
        </motion.div>

        <div className="crm-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="crm-chip crm-chip-connect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="crm-chip-en">{ex.en}</p>
              <p className="font-nepali crm-chip-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="crm-finale-insight mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.15, ease: EASE }}
        >
          <p className="crm-finale-insight-en">
            The strongest brands stay inside the customer&apos;s daily life.
          </p>
          <p className="font-nepali crm-finale-insight-ne">
            सफल Brand हरू ग्राहकको दैनिक जीवनभित्र रहन्छन्।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
