import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXAMPLES = [
  { en: 'Netflix recommendations', ne: 'सिफारिस' },
  { en: 'TikTok algorithm', ne: 'एल्गोरिदम' },
  { en: 'Spotify personalization', ne: 'व्यक्तिगत प्लेलिस्ट' },
  { en: 'Amazon suggestions', ne: 'सुझाव' },
]

const DATA_NODES = [
  { label: 'Needs', x: '12%', y: '18%' },
  { label: 'Emotion', x: '78%', y: '22%' },
  { label: 'Behavior', x: '18%', y: '72%' },
  { label: 'Value', x: '72%', y: '68%' },
]

export default function Slide30MarketingConcept() {
  return (
    <motion.section
      className="slide-frame slide-focus slide30-frame mo-atmo-marketing relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 30: Marketing concept"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mo-atmo-layer mo-atmo-marketing-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide30-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 30
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          MARKETING CONCEPT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक Marketing अवधारणा
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Business success comes from understanding and satisfying customer needs better than
            competitors.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकको आवश्यकता राम्रोसँग बुझेर पूरा गर्दा Business सफल हुन्छ।
          </p>
        </motion.div>

        <motion.div
          className="mo-mkt-intel mx-auto w-full max-w-md shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
        >
          <div className="mo-mkt-scene">
            <svg className="mo-mkt-flows" viewBox="0 0 320 200" aria-hidden>
              <motion.path
                d="M160 100 L60 45 M160 100 L260 55 M160 100 L70 155 M160 100 L250 150"
                stroke="rgba(201,162,39,0.35)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
              />
            </svg>
            {DATA_NODES.map((node, i) => (
              <motion.div
                key={node.label}
                className="mo-mkt-node"
                style={{ left: node.x, top: node.y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: EASE }}
              >
                {node.label}
              </motion.div>
            ))}
            <div className="mo-mkt-human">
              <svg viewBox="0 0 80 100" className="mo-mkt-silhouette">
                <ellipse
                  cx="40"
                  cy="14"
                  rx="12"
                  ry="13"
                  fill="rgba(255,255,255,0.06)"
                  stroke="rgba(201,162,39,0.55)"
                  strokeWidth="1.2"
                />
                <path
                  d="M40 27 L40 68 M40 42 L26 58 M40 42 L54 58 M40 68 L32 92 M40 68 L48 92"
                  stroke="rgba(201,162,39,0.6)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <p className="mo-mkt-human-label">Customer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mo-philosophy-box mo-philosophy-marketing mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
        >
          <p className="mo-philosophy-en">Understand humans first.</p>
          <p className="font-nepali mo-philosophy-ne">पहिले मानिसलाई बुझ।</p>
        </motion.div>

        <div className="mo-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mo-chip mo-chip-marketing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.68 + i * 0.07, duration: 0.5, ease: EASE }}
            >
              <p className="mo-chip-en">{ex.en}</p>
              <p className="font-nepali mo-chip-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
        >
          <p className="slide-focus-line-en">
            Modern marketing focuses on customer satisfaction, not pressure selling.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            आजको Marketing दबाब होइन, Customer Satisfaction मा केन्द्रित हुन्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
