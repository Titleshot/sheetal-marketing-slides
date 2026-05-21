import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const LOGISTICS = [
  { en: 'Warehouses', ne: 'गोदाम' },
  { en: 'Delivery trucks', ne: 'ट्रक' },
  { en: 'E-commerce', ne: 'E-commerce' },
  { en: 'Supermarkets', ne: 'Supermarket' },
  { en: 'Mobile apps', ne: 'Mobile app' },
  { en: 'Shipping systems', ne: 'Shipping' },
  { en: 'Global networks', ne: 'Global' },
]

const EXAMPLES = [
  { en: 'Amazon logistics', ne: 'Amazon' },
  { en: 'Daraz delivery', ne: 'Daraz' },
  { en: 'Food delivery', ne: 'Food app' },
  { en: 'Retail stores', ne: 'Retail' },
]

export default function Slide77PlaceDistribution() {
  return (
    <motion.section
      className="slide-frame slide-focus slide77-frame mix-atmo-place relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 77: Place and distribution"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-place-layer pointer-events-none absolute inset-0" aria-hidden />
      <div className="mix-place-routes pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="mix-place-route mix-place-route-a"
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="mix-place-route mix-place-route-b"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </div>

      <div className="slide-inner slide-focus-layout slide77-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-place">
          Slide 77 · Place
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-place">
          PLACE / DISTRIBUTION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Place / Distribution
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Products must be available where customers want them.</p>
          <p className="font-nepali slide-focus-def-ne">Product ग्राहकलाई चाहिएको ठाउँमा उपलब्ध हुनुपर्छ।</p>
        </motion.div>

        <motion.div
          className="mix-place-hub mx-auto w-full max-w-4xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <div className="mix-place-core">
            <p className="mix-place-core-en">Global distribution</p>
            <p className="font-nepali mix-place-core-ne">विश्वव्यापी वितरण</p>
          </div>
          <div className="mix-place-grid">
            {LOGISTICS.map((node, i) => (
              <motion.div
                key={node.en}
                className="mix-place-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <span className="mix-place-node-dot" aria-hidden />
                <p className="mix-place-node-en">{node.en}</p>
                <p className="font-nepali mix-place-node-ne">{node.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mix-insight-box mix-insight-place mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">Convenience and accessibility strongly affect buying behavior.</p>
          <p className="font-nepali mix-insight-ne">
            Convenience र accessibility ले buying behavior लाई धेरै असर गर्छ।
          </p>
        </motion.div>

        <div className="mix-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mix-example-chip mix-example-chip-place"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: EASE }}
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
          transition={{ delay: 1.02, ease: EASE }}
        >
          <p className="mix-finale-en">Great products fail if customers cannot access them easily.</p>
          <p className="font-nepali mix-finale-ne">सजिलै उपलब्ध नभए राम्रो Product पनि असफल हुन सक्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
