import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const TOOLS = [
  { en: 'CRM software', ne: 'CRM सफ्टवेयर' },
  { en: 'Mobile apps', ne: 'मोबाइल app' },
  { en: 'Emails', ne: 'इमेल' },
  { en: 'Support chat', ne: 'च्याट सहयोग' },
  { en: 'Memberships', ne: 'सदस्यता' },
  { en: 'Push notifications', ne: 'सूचना' },
  { en: 'Websites', ne: 'वेबसाइट' },
  { en: 'Loyalty cards', ne: 'Loyalty card' },
]

export default function Slide45RelationshipTools() {
  return (
    <motion.section
      className="slide-frame slide-focus slide45-frame crl-atmo-dashboard relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 45: Customer relationship tools"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crl-atmo-layer crl-atmo-dashboard-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide45-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 45
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          CUSTOMER RELATIONSHIP TOOLS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सम्बन्ध उपकरणहरू
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses use tools and systems to stay connected with customers.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business हरू ग्राहकसँग जोडिन विभिन्न tools प्रयोग गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="crl-orbit-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.34, ease: EASE }}
        >
          <div className="crl-orbit-ring" aria-hidden />
          <div className="crl-orbit-grid">
            {TOOLS.slice(0, 3).map((tool, i) => (
              <motion.div
                key={tool.en}
                className="crl-orbit-tool"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.06, duration: 0.55, ease: EASE }}
              >
                <span className="crl-orbit-pulse" aria-hidden />
                <p className="crl-orbit-tool-en">{tool.en}</p>
                <p className="font-nepali crl-orbit-tool-ne">{tool.ne}</p>
              </motion.div>
            ))}
            <motion.div
              key={TOOLS[3].en}
              className="crl-orbit-tool"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.54, duration: 0.55, ease: EASE }}
            >
              <span className="crl-orbit-pulse" aria-hidden />
              <p className="crl-orbit-tool-en">{TOOLS[3].en}</p>
              <p className="font-nepali crl-orbit-tool-ne">{TOOLS[3].ne}</p>
            </motion.div>
            <motion.div
              className="crl-orbit-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.48, duration: 0.8, ease: EASE }}
            >
              <div className="crl-orbit-center-glow" aria-hidden />
              <p className="crl-orbit-center-en">Customer</p>
              <p className="font-nepali crl-orbit-center-ne">ग्राहक</p>
            </motion.div>
            <motion.div
              key={TOOLS[4].en}
              className="crl-orbit-tool"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.56, duration: 0.55, ease: EASE }}
            >
              <span className="crl-orbit-pulse" aria-hidden />
              <p className="crl-orbit-tool-en">{TOOLS[4].en}</p>
              <p className="font-nepali crl-orbit-tool-ne">{TOOLS[4].ne}</p>
            </motion.div>
            {TOOLS.slice(5, 8).map((tool, i) => (
              <motion.div
                key={tool.en}
                className="crl-orbit-tool"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.55, ease: EASE }}
              >
                <span className="crl-orbit-pulse" aria-hidden />
                <p className="crl-orbit-tool-en">{tool.en}</p>
                <p className="font-nepali crl-orbit-tool-ne">{tool.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.footer
          className="crl-insight-box mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.85, ease: EASE }}
        >
          <p className="crl-insight-en">
            Technology helps businesses maintain relationships continuously.
          </p>
          <p className="font-nepali crl-insight-ne">
            Technology ले Business लाई लगातार सम्बन्ध कायम राख्न मद्दत गर्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
