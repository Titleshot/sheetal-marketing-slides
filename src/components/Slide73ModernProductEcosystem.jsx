import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SYSTEMS = [
  { en: 'Design', ne: 'Design' },
  { en: 'Quality', ne: 'Quality' },
  { en: 'Branding', ne: 'Branding' },
  { en: 'Packaging', ne: 'Packaging' },
  { en: 'Experience', ne: 'Experience' },
  { en: 'Customer support', ne: 'Support' },
  { en: 'Digital ecosystem', ne: 'Ecosystem' },
  { en: 'Emotional identity', ne: 'Identity' },
  { en: 'Community', ne: 'Community' },
  { en: 'Technology', ne: 'Technology' },
]

const EXAMPLES = [
  { en: 'Apple ecosystem', ne: 'Apple' },
  { en: 'Gaming ecosystems', ne: 'Gaming' },
  { en: 'Smart devices', ne: 'Smart' },
  { en: 'Subscriptions', ne: 'Sub' },
]

export default function Slide73ModernProductEcosystem() {
  return (
    <motion.section
      className="slide-frame slide-focus slide73-frame mix-atmo-eco relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 73: Modern product ecosystem"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-eco-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide73-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-product">
          Slide 73
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-product">
          MODERN PRODUCT ECOSYSTEM
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक Product Ecosystem
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def slide73-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern products combine functionality, experience, identity, and ecosystem connection.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका Product हरूले functionality, experience, identity र ecosystem लाई जोड्छन्।
          </p>
        </motion.div>

        <motion.div
          className="mix-product-eco mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.32, ease: EASE }}
        >
          <motion.div
            className="mix-product-eco-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          >
            <div className="mix-product-eco-glow" aria-hidden />
            <p className="mix-product-eco-core-en">Modern product</p>
            <p className="font-nepali mix-product-eco-core-ne">आधुनिक Product</p>
          </motion.div>
          <div className="mix-product-eco-grid">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.en}
                className="mix-product-eco-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.055, duration: 0.5, ease: EASE }}
              >
                <span className="mix-product-eco-sync" aria-hidden />
                <p className="mix-product-eco-node-en">{sys.en}</p>
                <p className="font-nepali mix-product-eco-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mix-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mix-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="mix-example-en">{ex.en}</p>
              <p className="font-nepali mix-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="slide73-bottom mx-auto w-full max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.95, ease: EASE }}
        >
          <div className="mix-finale-line mix-finale-line-primary">
            <p className="mix-finale-en">
              Modern products are no longer isolated objects.
              <br />
              They are connected experiences.
            </p>
            <p className="font-nepali mix-finale-ne">
              आजका Product हरू केवल अलग सामान होइनन्।
              <br />
              यी interconnected experience बनेका छन्।
            </p>
          </div>
          <motion.div
            className="mix-emotional-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.12, ease: EASE }}
          >
            <p className="mix-emotional-en">
              The strongest products become part of people&apos;s lifestyle and identity.
            </p>
            <p className="font-nepali mix-emotional-ne">
              सफल Product हरू मानिसको lifestyle र identity को हिस्सा बन्छन्।
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
