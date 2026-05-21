import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

export default function Slide83CompleteMarketingMixEcosystem() {
  return (
    <motion.section
      className="slide-frame slide-focus slide83-frame mix-atmo-ecosystem relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 83: Complete marketing mix ecosystem"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-ecosystem-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide83-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow">
          Slide 83
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow">
          THE COMPLETE MARKETING MIX ECOSYSTEM
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          पूर्ण Marketing Mix Ecosystem
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Successful marketing happens when all 4Ps work together.</p>
          <p className="font-nepali slide-focus-def-ne">सफल Marketing तब हुन्छ जब 4Ps मिलेर काम गर्छन्।</p>
        </motion.div>

        <motion.div
          className="mix-complete-eco mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.95, ease: EASE }}
        >
          <motion.div
            className="mix-complete-branch mix-complete-branch-product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.6, ease: EASE }}
          >
            <span className="mix-complete-letter" aria-hidden>
              P₁
            </span>
            <p className="mix-complete-branch-en">Product</p>
            <p className="font-nepali mix-complete-branch-ne">Product</p>
          </motion.div>
          <motion.div
            className="mix-complete-branch mix-complete-branch-price"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
          >
            <span className="mix-complete-letter" aria-hidden>
              P₂
            </span>
            <p className="mix-complete-branch-en">Price</p>
            <p className="font-nepali mix-complete-branch-ne">Price</p>
          </motion.div>
          <motion.div
            className="mix-complete-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.46, duration: 0.8, ease: EASE }}
          >
            <div className="mix-complete-core-glow" aria-hidden />
            <p className="mix-complete-core-en">Customer</p>
            <p className="font-nepali mix-complete-core-ne">ग्राहक</p>
          </motion.div>
          <motion.div
            className="mix-complete-branch mix-complete-branch-promo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.58, duration: 0.6, ease: EASE }}
          >
            <span className="mix-complete-letter" aria-hidden>
              P₄
            </span>
            <p className="mix-complete-branch-en">Promotion</p>
            <p className="font-nepali mix-complete-branch-ne">Promotion</p>
          </motion.div>
          <motion.div
            className="mix-complete-branch mix-complete-branch-place"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.66, duration: 0.6, ease: EASE }}
          >
            <span className="mix-complete-letter" aria-hidden>
              P₃
            </span>
            <p className="mix-complete-branch-en">Place</p>
            <p className="font-nepali mix-complete-branch-ne">Place</p>
          </motion.div>
          <div className="mix-complete-flow mix-complete-flow-a" aria-hidden />
          <div className="mix-complete-flow mix-complete-flow-b" aria-hidden />
        </motion.div>

        <motion.div
          className="mix-formula-box mx-auto max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.78, duration: 0.85, ease: EASE }}
        >
          <p className="mix-formula-en">Product + Price + Place + Promotion = Marketing Success</p>
          <p className="font-nepali mix-formula-ne">
            Product + Price + Place + Promotion = Marketing Success
          </p>
        </motion.div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.92, ease: EASE }}
        >
          <p className="mix-finale-en">The 4Ps must stay balanced and connected.</p>
          <p className="font-nepali mix-finale-ne">4Ps balanced र connected हुनुपर्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
