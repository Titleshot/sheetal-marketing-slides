import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PRODUCTS = [
  { id: 'iphone', name: 'iPhone', Icon: PhoneIcon, delay: 0.5 },
  { id: 'nike', name: 'Nike Shoes', Icon: ShoeIcon, delay: 0.72 },
  { id: 'coke', name: 'Coca-Cola', Icon: BottleIcon, delay: 0.94 },
  { id: 'laptop', name: 'Laptop', Icon: LaptopIcon, delay: 1.16 },
]

export default function Slide12Products() {
  return (
    <motion.section
      className="slide-frame slide-focus slide12-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 12: Products"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 12
        </motion.p>
        <motion.h1 {...reveal(0.12, 14)} className="slide-focus-title slide-focus-title-xl">
          PRODUCTS
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          भौतिक सामान
        </motion.p>

        <motion.div {...reveal(0.38, 12)} className="slide-focus-def max-w-2xl">
          <p className="slide-focus-def-en">
            Products are physical items customers can see, touch, and own.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            देख्न, छुन र आफ्नो बनाउन सकिने वस्तुहरूलाई Products भनिन्छ।
          </p>
        </motion.div>

        <div className="mo-product-grid w-full max-w-4xl shrink-0">
          {PRODUCTS.map((p) => (
            <motion.article
              key={p.id}
              className="mo-product-card group"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: p.delay, ease: EASE }}
            >
              <motion.div
                className="mo-product-card-inner"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, delay: p.delay + 0.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.04, transition: { duration: 0.35 } }}
              >
                <div className="mo-product-glow" aria-hidden />
                <div className="mo-product-icon">
                  <p.Icon className="h-9 w-9 md:h-10 md:w-10" />
                </div>
                <p className="mo-product-name">{p.name}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line shrink-0"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.45, ease: EASE }}
        >
          <p className="slide-focus-line-en">Products solve physical needs and emotional desires.</p>
          <p className="font-nepali slide-focus-line-ne">
            Products ले आवश्यकता र भावना दुवै पूरा गर्न सक्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="9" y="3" width="14" height="26" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <rect x="11" y="5" width="10" height="18" rx="1" fill="currentColor" fillOpacity="0.1" />
    </svg>
  )
}

function ShoeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M4 20c3-1.5 7-2.5 12-2.5s9 1 12 2.5v3H4v-3z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.08" />
    </svg>
  )
}

function BottleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M14 4h4v4l2 4v14a4 4 0 01-8 0V12l2-4V4z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.06" />
      <ellipse cx="16" cy="22" rx="4" ry="2" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}

function LaptopIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="8" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 24h26" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
