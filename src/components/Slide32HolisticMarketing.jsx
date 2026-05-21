import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const LEFT_NODES = [
  { id: 'customers', en: 'Customers', ne: 'ग्राहक' },
  { id: 'communication', en: 'Communication', ne: 'सञ्चार' },
  { id: 'relationships', en: 'Relationships', ne: 'सम्बन्ध' },
  { id: 'experience', en: 'Experience', ne: 'अनुभव' },
  { id: 'data', en: 'Data', ne: 'डाटा' },
]

const RIGHT_NODES = [
  { id: 'employees', en: 'Employees', ne: 'कर्मचारी' },
  { id: 'society', en: 'Society', ne: 'समाज' },
  { id: 'technology', en: 'Technology', ne: 'प्रविधि' },
  { id: 'digital', en: 'Digital systems', ne: 'डिजिटल' },
  { id: 'trust', en: 'Trust', ne: 'विश्वास' },
]

export default function Slide32HolisticMarketing() {
  return (
    <motion.section
      className="slide-frame slide-focus slide32-frame adv-atmo-holistic relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 32: Holistic marketing concept"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="adv-atmo-layer adv-atmo-holistic-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide32-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 32
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          HOLISTIC MARKETING CONCEPT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          समग्र Marketing अवधारणा
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Everything in marketing is interconnected.</p>
          <p className="font-nepali slide-focus-def-ne">Marketing मा सबै कुरा एकअर्कासँग जोडिएको हुन्छ।</p>
        </motion.div>

        <motion.div
          className="adv-holistic-eco mx-auto w-full shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          <motion.div
            className="adv-holistic-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
          >
            <p className="adv-holistic-core-en">Brand core</p>
            <p className="font-nepali adv-holistic-core-ne">Brand को केन्द्र</p>
          </motion.div>

          <div className="adv-holistic-matrix">
            {LEFT_NODES.map((left, i) => {
              const right = RIGHT_NODES[i]
              return (
                <HolisticRow
                  key={left.id}
                  left={left}
                  right={right}
                  index={i}
                  delay={0.45 + i * 0.07}
                />
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="adv-philosophy-box adv-philosophy-holistic mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
        >
          <p className="adv-philosophy-en">Every part of business affects customer experience.</p>
          <p className="font-nepali adv-philosophy-ne">
            Business को प्रत्येक भागले Customer Experience लाई असर गर्छ।
          </p>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
        >
          <p className="slide-focus-line-en">Modern marketing works as one connected ecosystem.</p>
          <p className="font-nepali slide-focus-line-ne">
            आजको Marketing एउटा interconnected ecosystem जस्तै काम गर्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function HolisticRow({ left, right, index, delay }) {
  return (
    <div className="adv-holistic-row">
      <motion.div
        className="adv-holistic-card adv-holistic-card-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.55, ease: EASE }}
      >
        <p className="adv-holistic-card-en">{left.en}</p>
        <p className="font-nepali adv-holistic-card-ne">{left.ne}</p>
      </motion.div>

      <div className="adv-holistic-link" aria-hidden>
        <span className="adv-holistic-link-bar" />
        <span className="adv-holistic-link-dot" style={{ animationDelay: `${index * 0.2}s` }} />
        <span className="adv-holistic-link-bar" />
      </div>

      <motion.div
        className="adv-holistic-card adv-holistic-card-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.04, duration: 0.55, ease: EASE }}
      >
        <p className="adv-holistic-card-en">{right.en}</p>
        <p className="font-nepali adv-holistic-card-ne">{right.ne}</p>
      </motion.div>
    </div>
  )
}
