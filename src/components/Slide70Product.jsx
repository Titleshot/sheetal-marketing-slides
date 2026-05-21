import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PRODUCTS = [
  { en: 'iPhone', ne: 'iPhone', tag: 'Tech' },
  { en: 'Nike shoes', ne: 'Nike', tag: 'Sport' },
  { en: 'Coca-Cola', ne: 'Coca-Cola', tag: 'Drink' },
  { en: 'Gaming console', ne: 'Gaming', tag: 'Play' },
  { en: 'Premium watch', ne: 'Watch', tag: 'Luxury' },
]

export default function Slide70Product() {
  return (
    <motion.section
      className="slide-frame slide-focus slide70-frame mix-atmo-product relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 70: Product"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-product-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide70-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-product">
          Slide 70 · Product
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl mix-title-glow mix-title-product">
          PRODUCT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Product
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            A product is not only a physical object. It includes quality, design, experience, and
            identity.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Product केवल सामान मात्र होइन। यसमा quality, design, experience र identity पनि पर्छ।
          </p>
        </motion.div>

        <div className="mix-showcase mx-auto grid w-full max-w-4xl shrink-0 grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.en}
              className="mix-showcase-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 + i * 0.08, duration: 0.6, ease: EASE }}
            >
              <span className="mix-showcase-edge" aria-hidden />
              <span className="mix-showcase-tag">{p.tag}</span>
              <p className="mix-showcase-en">{p.en}</p>
              <p className="font-nepali mix-showcase-ne">{p.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mix-insight-box mix-insight-product mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">
            People often buy meaning and experience, not just products.
          </p>
          <p className="font-nepali mix-insight-ne">
            मानिसहरूले केवल Product होइन, meaning र experience पनि किन्छन्।
          </p>
        </motion.div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, ease: EASE }}
        >
          <p className="mix-finale-en">
            A great product solves problems while creating emotional value.
          </p>
          <p className="font-nepali mix-finale-ne">
            राम्रो Product ले समस्या समाधानसँगै emotional value पनि दिन्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
