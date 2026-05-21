import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXAMPLES = [
  { en: 'Apple', ne: 'Apple' },
  { en: 'Sony', ne: 'Sony' },
  { en: 'Luxury watches', ne: 'लक्जरी घडी' },
  { en: 'High-end cameras', ne: 'प्रिमियम क्यामेरा' },
]

export default function Slide28ProductConcept() {
  return (
    <motion.section
      className="slide-frame slide-focus slide28-frame mo-atmo-product relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 28: Product concept"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />
      <div className="mo-atmo-layer mo-atmo-product-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide28-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 28
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          PRODUCT CONCEPT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          उत्पादन गुणस्तर अवधारणा
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customers prefer products with the best quality, features, and performance.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकहरूले उत्कृष्ट quality र performance भएका सामान मन पराउँछन्।
          </p>
        </motion.div>

        <motion.div
          className="mo-lux-showcase mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
        >
          <div className="mo-lux-ring" />
          <div className="mo-lux-device">
            <div className="mo-lux-edge mo-lux-edge-t" />
            <div className="mo-lux-edge mo-lux-edge-r" />
            <div className="mo-lux-screen">
              <div className="mo-lux-precision" />
            </div>
            <div className="mo-lux-badge">Premium</div>
          </div>
        </motion.div>

        <motion.div
          className="mo-philosophy-box mo-philosophy-product mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
        >
          <p className="mo-philosophy-en">If the product is exceptional, customers will come.</p>
          <p className="font-nepali mo-philosophy-ne">
            Product उत्कृष्ट भयो भने ग्राहक आफैं आउँछन्।
          </p>
        </motion.div>

        <div className="mo-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mo-chip mo-chip-product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62 + i * 0.07, duration: 0.5, ease: EASE }}
            >
              <p className="mo-chip-en">{ex.en}</p>
              <p className="font-nepali mo-chip-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.9, ease: EASE }}
        >
          <p className="slide-focus-line-en">This concept focuses heavily on product excellence.</p>
          <p className="font-nepali slide-focus-line-ne">
            यो अवधारणाले Product quality लाई धेरै महत्व दिन्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
