import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SYSTEMS = [
  { en: 'One-click ordering', ne: 'One-click' },
  { en: 'Food delivery', ne: 'Food delivery' },
  { en: 'Instant streaming', ne: 'Streaming' },
  { en: 'Mobile apps', ne: 'Mobile app' },
  { en: 'AI recommendations', ne: 'AI' },
  { en: 'Same-day delivery', ne: 'Same-day' },
  { en: 'Subscriptions', ne: 'Subscription' },
  { en: 'Smart notifications', ne: 'सूचना' },
  { en: 'Digital wallets', ne: 'Wallet' },
]

const EXAMPLES = [
  { en: 'Amazon Prime', ne: 'Amazon' },
  { en: 'Pathao Food', ne: 'Pathao' },
  { en: 'Netflix', ne: 'Netflix' },
  { en: 'Mobile banking', ne: 'Banking' },
]

export default function Slide78ModernConvenienceEcosystem() {
  return (
    <motion.section
      className="slide-frame slide-focus slide78-frame mix-atmo-convenience relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 78: Modern convenience ecosystem"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-convenience-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide78-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-place">
          Slide 78
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-place">
          MODERN CONVENIENCE ECOSYSTEM
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक Convenience Ecosystem
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern businesses compete by making life easier and faster for customers.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका Business हरू ग्राहकको जीवन सजिलो र छिटो बनाएर प्रतिस्पर्धा गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="mix-convenience-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.32, ease: EASE }}
        >
          <div className="mix-convenience-row mix-convenience-row-top">
            {SYSTEMS.slice(0, 3).map((sys, i) => (
              <motion.div
                key={sys.en}
                className="mix-convenience-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-convenience-flash" aria-hidden />
                <p className="mix-convenience-node-en">{sys.en}</p>
                <p className="font-nepali mix-convenience-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mix-convenience-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          >
            <div className="mix-convenience-core-glow" aria-hidden />
            <p className="mix-convenience-core-en">Customer</p>
            <p className="font-nepali mix-convenience-core-ne">ग्राहक</p>
          </motion.div>
          <div className="mix-convenience-row mix-convenience-row-mid">
            {SYSTEMS.slice(3, 6).map((sys, i) => (
              <motion.div
                key={sys.en}
                className="mix-convenience-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-convenience-flash" aria-hidden />
                <p className="mix-convenience-node-en">{sys.en}</p>
                <p className="font-nepali mix-convenience-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
          <div className="mix-convenience-row mix-convenience-row-bottom">
            {SYSTEMS.slice(6, 9).map((sys, i) => (
              <motion.div
                key={sys.en}
                className="mix-convenience-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.58 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-convenience-flash" aria-hidden />
                <p className="mix-convenience-node-en">{sys.en}</p>
                <p className="font-nepali mix-convenience-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mix-insight-box mix-insight-convenience mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">
            Convenience became one of the most powerful modern marketing advantages.
          </p>
          <p className="font-nepali mix-insight-ne">
            Convenience आजको सबैभन्दा शक्तिशाली marketing advantage मध्ये एक बनेको छ।
          </p>
        </motion.div>

        <div className="mix-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mix-example-chip mix-example-chip-place"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="mix-example-en">{ex.en}</p>
              <p className="font-nepali mix-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, ease: EASE }}
        >
          <p className="mix-finale-en">The easier the experience feels, the stronger customer adoption becomes.</p>
          <p className="font-nepali mix-finale-ne">Experience जति सजिलो हुन्छ, customer adoption त्यति बढ्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
