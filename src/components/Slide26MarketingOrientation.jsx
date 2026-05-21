import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const BRANCHES = [
  { id: 'production', en: 'Production', ne: 'उत्पादन', tone: 'mo-branch-prod' },
  { id: 'product', en: 'Product', ne: 'उत्पादन गुणस्तर', tone: 'mo-branch-product' },
  { id: 'selling', en: 'Selling', ne: 'बिक्री', tone: 'mo-branch-selling' },
  { id: 'marketing', en: 'Marketing', ne: 'Marketing', tone: 'mo-branch-marketing' },
  { id: 'societal', en: 'Societal', ne: 'सामाजिक', tone: 'mo-branch-societal' },
]

export default function Slide26MarketingOrientation() {
  return (
    <motion.section
      className="slide-frame slide-focus slide26-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 26: Marketing orientation intro"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide26-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 26
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          MARKETING ORIENTATION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Marketing Orientation / Marketing अवधारणा
        </motion.p>

        <motion.div {...reveal(0.26)} className="mo-hook mx-auto max-w-2xl">
          <p className="mo-hook-en">Why do different companies market differently?</p>
          <p className="font-nepali mo-hook-ne">
            किन फरक कम्पनीहरूले फरक तरिकाले business गर्छन्?
          </p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Different companies believe in different ways of achieving success.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            सफलता हासिल गर्ने तरिका बारे फरक कम्पनीहरूको सोच फरक हुन्छ।
          </p>
        </motion.div>

        <div className="mo-branch-hub mx-auto w-full max-w-3xl shrink-0">
          <motion.div
            className="mo-branch-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42, ease: EASE }}
          >
            <p className="mo-branch-core-en">Business philosophy</p>
            <p className="font-nepali mo-branch-core-ne">व्यवसाय दर्शन</p>
          </motion.div>

          <ul className="mo-branch-list">
            {BRANCHES.map((b, i) => (
              <motion.li
                key={b.id}
                className={`mo-branch-node ${b.tone}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.52 + i * 0.1, duration: 0.65, ease: EASE }}
              >
                <span className="mo-branch-glow" aria-hidden />
                <span className="mo-branch-label-en">{b.en}</span>
                <span className="font-nepali mo-branch-label-ne">{b.ne}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 1.05, ease: EASE }}
        >
          <p className="slide-focus-line-en">The way a company thinks changes the way it markets.</p>
          <p className="font-nepali slide-focus-line-ne">
            कम्पनीको सोचले Marketing गर्ने तरिका बदल्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
