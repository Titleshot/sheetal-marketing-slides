import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXAMPLES = [
  { en: 'Cheap airlines', ne: 'सस्तो एयरलाइन' },
  { en: 'Mass production factories', ne: 'थोक उत्पादन' },
  { en: 'Xiaomi early strategy', ne: 'Xiaomi रणनीति' },
  { en: 'Budget brands', ne: 'बजेट ब्रान्ड' },
]

export default function Slide27ProductionConcept() {
  return (
    <motion.section
      className="slide-frame slide-focus slide27-frame mo-atmo-production relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 27: Production concept"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mo-atmo-layer mo-atmo-production-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide27-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 27
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          PRODUCTION CONCEPT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          उत्पादन अवधारणा
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customers prefer products that are affordable and easily available.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकहरूले सस्तो र सजिलै पाइने सामान मन पराउँछन्।
          </p>
        </motion.div>

        <motion.div
          className="mo-prod-visual mx-auto w-full max-w-lg shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.38, ease: EASE }}
        >
          <ProductionScene />
        </motion.div>

        <motion.div
          className="mo-philosophy-box mo-philosophy-production mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        >
          <p className="mo-philosophy-en">Produce more. Reduce cost. Sell everywhere.</p>
          <p className="font-nepali mo-philosophy-ne">धेरै उत्पादन गर। लागत घटाऊ। सबै ठाउँमा बेच।</p>
        </motion.div>

        <div className="mo-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mo-chip mo-chip-production"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.5, ease: EASE }}
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
          transition={{ duration: 0.85, delay: 0.85, ease: EASE }}
        >
          <p className="slide-focus-line-en">This concept focuses on efficiency and availability.</p>
          <p className="font-nepali slide-focus-line-ne">
            यो अवधारणा efficiency र availability मा केन्द्रित हुन्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function ProductionScene() {
  return (
    <div className="mo-prod-scene" aria-hidden>
      <div className="mo-prod-factory">
        <div className="mo-prod-light mo-prod-light-a" />
        <div className="mo-prod-light mo-prod-light-b" />
        <div className="mo-prod-conveyor">
          <div className="mo-prod-belt" />
          <div className="mo-prod-box mo-prod-box-1" />
          <div className="mo-prod-box mo-prod-box-2" />
          <div className="mo-prod-box mo-prod-box-3" />
        </div>
        <div className="mo-prod-counter">
          <span className="mo-prod-counter-label">Output</span>
          <span className="mo-prod-counter-value">24,800</span>
        </div>
      </div>
    </div>
  )
}
