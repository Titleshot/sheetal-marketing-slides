import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SYSTEMS = [
  { en: 'Creators', ne: 'Creators' },
  { en: 'Reviews', ne: 'Reviews' },
  { en: 'Influencers', ne: 'Influencers' },
  { en: 'Comments', ne: 'कमेन्ट' },
  { en: 'Recommendations', ne: 'सिफारिस' },
  { en: 'Social sharing', ne: 'Sharing' },
  { en: 'Reactions', ne: 'Reactions' },
  { en: 'Hashtags', ne: 'Hashtags' },
  { en: 'Viral content', ne: 'Viral' },
  { en: 'Communities', ne: 'समुदाय' },
]

export default function Slide58ModernSocialProof() {
  return (
    <motion.section
      className="slide-frame slide-focus slide58-frame cgm-atmo-finale relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 58: Modern social proof ecosystem"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cgm-atmo-layer cgm-atmo-finale-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide58-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cgm-eyebrow">
          Slide 58
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cgm-title-glow">
          MODERN SOCIAL PROOF ECOSYSTEM
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक Social Proof Ecosystem
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def slide58-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern marketing spreads through people influencing each other continuously.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजको Marketing मानिसहरूले एकअर्कालाई influence गर्दै फैलिन्छ।
          </p>
        </motion.div>

        <motion.div
          className="cgm-social-eco slide58-eco mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.32, ease: EASE }}
        >
          <motion.div
            className="cgm-social-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          >
            <div className="cgm-social-core-glow" aria-hidden />
            <p className="cgm-social-core-en">Human community</p>
            <p className="font-nepali cgm-social-core-ne">मानव समुदाय</p>
          </motion.div>
          <div className="cgm-social-grid">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.en}
                className="cgm-social-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.055, duration: 0.5, ease: EASE }}
              >
                <motion.span
                  className="cgm-social-pulse"
                  aria-hidden
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.12 }}
                />
                <p className="cgm-social-node-en">{sys.en}</p>
                <p className="font-nepali cgm-social-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="slide58-bottom mx-auto w-full max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.95, ease: EASE }}
        >
          <div className="cgm-finale-line cgm-finale-line-primary">
            <p className="cgm-finale-en">People trust people more than advertisements.</p>
            <p className="font-nepali cgm-finale-ne">मानिसहरूले विज्ञापनभन्दा मानिसलाई बढी विश्वास गर्छन्।</p>
          </div>
          <motion.div
            className="cgm-emotional-reveal"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.15, ease: EASE }}
          >
            <p className="cgm-emotional-en">
              Modern marketing grows through social proof, trust, and emotional sharing.
            </p>
            <p className="font-nepali cgm-emotional-ne">
              आजको Marketing social proof, trust र emotional sharing मार्फत बढ्छ।
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
