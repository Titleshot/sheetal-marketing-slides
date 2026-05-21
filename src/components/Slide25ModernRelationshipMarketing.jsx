import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const TOUCHPOINTS = [
  { id: 'netflix', label: 'Netflix recommendations', ne: 'सिफारिस', slot: 'rm-slot-tl' },
  { id: 'tiktok', label: 'TikTok algorithm', ne: 'एल्गोरिदम', slot: 'rm-slot-tc' },
  { id: 'amazon', label: 'Amazon personalization', ne: 'व्यक्तिगत अनुभव', slot: 'rm-slot-tr' },
  { id: 'starbucks', label: 'Starbucks rewards', ne: 'पुरस्कार', slot: 'rm-slot-ml' },
  { id: 'loyalty', label: 'Loyalty memberships', ne: 'सदस्यता', slot: 'rm-slot-mr' },
  { id: 'email', label: 'Email follow-ups', ne: 'फलो-अप', slot: 'rm-slot-bc' },
]

export default function Slide25ModernRelationshipMarketing() {
  return (
    <motion.section
      className="slide-frame slide-focus slide25-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 25: Modern relationship marketing"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide25-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 25
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          MODERN RELATIONSHIP MARKETING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक सम्बन्ध आधारित Marketing
        </motion.p>

        <div className="rm-hub mx-auto w-full max-w-3xl shrink-0">
          <div className="rm-hub-grid">
            {TOUCHPOINTS.map((item, i) => (
              <motion.article
                key={item.id}
                className={`rm-hub-card ${item.slot}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 + i * 0.08, duration: 0.6, ease: EASE }}
              >
                <p className="rm-hub-en">{item.label}</p>
                <p className="font-nepali rm-hub-ne">{item.ne}</p>
              </motion.article>
            ))}

            <motion.div
              className="rm-hub-center rm-slot-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            >
              <div className="rm-hub-center-glow" />
              <svg viewBox="0 0 80 120" className="rm-silhouette" aria-hidden>
                <ellipse
                  cx="40"
                  cy="16"
                  rx="13"
                  ry="14"
                  fill="rgba(255,255,255,0.08)"
                  stroke="rgba(201,162,39,0.55)"
                  strokeWidth="1.2"
                />
                <path
                  d="M40 30 L40 78 M40 46 L24 64 M40 46 L56 64 M40 78 L30 104 M40 78 L50 104"
                  stroke="rgba(201,162,39,0.65)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <p className="rm-center-label">Customer</p>
              <p className="font-nepali rm-center-label-ne">ग्राहक</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="slide-focus-message mx-auto max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.7, ease: EASE }}
        >
          <p className="slide-focus-message-en">
            Today brands try to stay connected with customers continuously.
          </p>
          <p className="font-nepali slide-focus-message-ne">
            आजका Brand हरू ग्राहकसँग लगातार जोडिन खोज्छन्।
          </p>
        </motion.div>

        <motion.footer
          className="slide-focus-final mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1, ease: EASE }}
        >
          <p className="slide-focus-final-en">
            Great marketing builds relationships that last.
          </p>
          <p className="font-nepali slide-focus-final-ne">
            राम्रो Marketing ले टिकाउ सम्बन्ध निर्माण गर्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
