import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

export default function Slide69MarketingMixIntro() {
  return (
    <motion.section
      className="slide-frame slide-focus slide69-frame mix-atmo-engine relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 69: Marketing mix 4Ps intro"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-engine-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide69-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow">
          Slide 69
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl mix-title-glow">
          MARKETING MIX (4Ps)
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Marketing Mix (4Ps)
        </motion.p>

        <motion.div {...reveal(0.26)} className="mix-hook mx-auto max-w-2xl">
          <p className="mix-hook-en">How do businesses actually execute marketing?</p>
          <p className="font-nepali mix-hook-ne">Business हरूले वास्तवमा Marketing कसरी लागू गर्छन्?</p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses use the Marketing Mix framework to create and deliver value.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business हरूले value सिर्जना र deliver गर्न Marketing Mix प्रयोग गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="mix-fourps-grid mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
        >
          <motion.div
            className="mix-fourps-branch mix-fourps-branch-product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
          >
            <span className="mix-fourps-letter" aria-hidden>
              P₁
            </span>
            <p className="mix-fourps-branch-en">Product</p>
            <p className="font-nepali mix-fourps-branch-ne">Product</p>
          </motion.div>
          <motion.div
            className="mix-fourps-branch mix-fourps-branch-price"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.58, duration: 0.6, ease: EASE }}
          >
            <span className="mix-fourps-letter" aria-hidden>
              P₂
            </span>
            <p className="mix-fourps-branch-en">Price</p>
            <p className="font-nepali mix-fourps-branch-ne">Price</p>
          </motion.div>
          <motion.div
            className="mix-fourps-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.75, ease: EASE }}
          >
            <div className="mix-fourps-core-glow" aria-hidden />
            <p className="mix-fourps-core-en">Marketing Mix</p>
            <p className="font-nepali mix-fourps-core-ne">Marketing Mix</p>
          </motion.div>
          <motion.div
            className="mix-fourps-branch mix-fourps-branch-promo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.66, duration: 0.6, ease: EASE }}
          >
            <span className="mix-fourps-letter" aria-hidden>
              P₄
            </span>
            <p className="mix-fourps-branch-en">Promotion</p>
            <p className="font-nepali mix-fourps-branch-ne">Promotion</p>
          </motion.div>
          <motion.div
            className="mix-fourps-branch mix-fourps-branch-place"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.74, duration: 0.6, ease: EASE }}
          >
            <span className="mix-fourps-letter" aria-hidden>
              P₃
            </span>
            <p className="mix-fourps-branch-en">Place</p>
            <p className="font-nepali mix-fourps-branch-ne">Place</p>
          </motion.div>
        </motion.div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="mix-finale-en">The 4Ps work together to create successful marketing.</p>
          <p className="font-nepali mix-finale-ne">सफल Marketing बनाउन 4Ps मिलेर काम गर्छन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
