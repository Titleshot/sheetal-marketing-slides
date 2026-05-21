import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const CHANNELS = [
  { en: 'Advertising', ne: 'Advertising' },
  { en: 'Social media', ne: 'Social' },
  { en: 'Website', ne: 'Website' },
  { en: 'Packaging', ne: 'Packaging' },
  { en: 'Customer service', ne: 'Service' },
  { en: 'Email marketing', ne: 'Email' },
  { en: 'Influencer campaigns', ne: 'Influencer' },
  { en: 'Mobile apps', ne: 'App' },
]

export default function Slide82IntegratedMarketingCommunication() {
  return (
    <motion.section
      className="slide-frame slide-focus slide82-frame mix-atmo-imc relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 82: Integrated marketing communication"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-imc-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide82-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-promo">
          Slide 82
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-promo">
          INTEGRATED MARKETING COMMUNICATION (IMC)
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Integrated Marketing Communication
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">All brand communication should work together consistently.</p>
          <p className="font-nepali slide-focus-def-ne">
            Brand को सबै communication एकअर्कासँग मिलेर consistent हुनुपर्छ।
          </p>
        </motion.div>

        <motion.div
          className="mix-imc-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.95, ease: EASE }}
        >
          <div className="mix-imc-row mix-imc-row-top">
            {CHANNELS.slice(0, 4).map((ch, i) => (
              <motion.div
                key={ch.en}
                className="mix-imc-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-imc-sync" aria-hidden />
                <p className="mix-imc-node-en">{ch.en}</p>
                <p className="font-nepali mix-imc-node-ne">{ch.ne}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mix-imc-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.85, ease: EASE }}
          >
            <div className="mix-imc-core-glow" aria-hidden />
            <p className="mix-imc-core-en">Brand message</p>
            <p className="font-nepali mix-imc-core-ne">Brand सन्देश</p>
          </motion.div>
          <div className="mix-imc-row mix-imc-row-bottom">
            {CHANNELS.slice(4, 8).map((ch, i) => (
              <motion.div
                key={ch.en}
                className="mix-imc-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-imc-sync" aria-hidden />
                <p className="mix-imc-node-en">{ch.en}</p>
                <p className="font-nepali mix-imc-node-ne">{ch.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mix-insight-box mix-insight-imc mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">Consistency builds trust and recognition.</p>
          <p className="font-nepali mix-insight-ne">Consistency ले trust र recognition बनाउँछ।</p>
        </motion.div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: EASE }}
        >
          <p className="mix-finale-en">Modern brands communicate through many connected channels.</p>
          <p className="font-nepali mix-finale-ne">आजका Brand हरू धेरै interconnected channel मार्फत communicate गर्छन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
