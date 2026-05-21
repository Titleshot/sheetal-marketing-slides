import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SYSTEMS = [
  { en: 'Social media', ne: 'सामाजिक media' },
  { en: 'AI recommendations', ne: 'AI सिफारिस' },
  { en: 'Influencers', ne: 'Influencers' },
  { en: 'Algorithms', ne: 'Algorithms' },
  { en: 'Reels', ne: 'Reels' },
  { en: 'Notifications', ne: 'सूचना' },
  { en: 'Creators', ne: 'Creators' },
  { en: 'Live interaction', ne: 'Live' },
  { en: 'Digital communities', ne: 'समुदाय' },
  { en: 'Personalized feeds', ne: 'Personal feed' },
]

export default function Slide53ModernDigitalEngagement() {
  return (
    <motion.section
      className="slide-frame slide-focus slide53-frame dig-atmo-finale relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 53: Modern digital engagement ecosystem"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="dig-atmo-layer dig-atmo-finale-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide53-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow dig-eyebrow">
          Slide 53
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title dig-title-glow">
          MODERN DIGITAL ENGAGEMENT ECOSYSTEM
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक Digital Engagement Ecosystem
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def slide53-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern marketing became a continuous digital interaction system.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजको Marketing continuous digital interaction system बनेको छ।
          </p>
        </motion.div>

        <motion.div
          className="dig-mega-eco slide53-eco mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.32, ease: EASE }}
        >
          <motion.div
            className="dig-mega-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          >
            <div className="dig-mega-core-glow" aria-hidden />
            <p className="dig-mega-core-en">Customer</p>
            <p className="font-nepali dig-mega-core-ne">ग्राहक</p>
          </motion.div>
          <div className="dig-mega-grid">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.en}
                className="dig-mega-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.055, duration: 0.5, ease: EASE }}
              >
                <span className="dig-mega-node-pulse" aria-hidden />
                <p className="dig-mega-node-en">{sys.en}</p>
                <p className="font-nepali dig-mega-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="slide53-bottom mx-auto w-full max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.95, ease: EASE }}
        >
          <div className="dig-finale-line dig-finale-line-primary">
            <p className="dig-finale-en">
              Modern brands stay connected through continuous digital engagement.
            </p>
            <p className="font-nepali dig-finale-ne">
              आजका Brand हरू continuous digital engagement मार्फत जोडिन्छन्।
            </p>
          </div>
          <motion.div
            className="dig-emotional-reveal"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.15, ease: EASE }}
          >
            <p className="dig-emotional-en">
              Marketing is no longer only about selling.
              <br />
              It is about staying inside people&apos;s daily digital life.
            </p>
            <p className="font-nepali dig-emotional-ne">
              आजको Marketing केवल बेच्ने कुरा होइन।
              <br />
              यो मानिसको दैनिक digital जीवनभित्र रहने कुरा हो।
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
