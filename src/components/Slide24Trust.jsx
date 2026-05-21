import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const BROKEN = [
  { en: 'Fake ads', ne: 'झूटा विज्ञापन' },
  { en: 'Scams', ne: 'ठगी' },
  { en: 'Poor quality', ne: 'कमजोर गुणस्तर' },
  { en: 'Negative reviews', ne: 'नराम्रो समीक्षा' },
]

const TRUSTED = [
  { en: 'Consistency', ne: 'निरन्तरता' },
  { en: 'Honesty', ne: 'इमानदारी' },
  { en: 'Quality', ne: 'गुणस्तर' },
  { en: 'Customer care', ne: 'ग्राहक हेरचाह' },
]

export default function Slide24Trust() {
  return (
    <motion.section
      className="slide-frame slide-focus slide24-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 24: Trust"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06)_0%,transparent_60%)]" />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide24-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 24
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          TRUST
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          विश्वास
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-message mx-auto max-w-2xl">
          <p className="slide-focus-message-en">Without trust, marketing collapses.</p>
          <p className="font-nepali slide-focus-message-ne">विश्वास बिना Marketing टिक्दैन।</p>
        </motion.div>

        <div className="trust-scene mx-auto w-full max-w-4xl shrink-0">
          <motion.div
            className="trust-panel trust-panel-broken"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            <p className="trust-panel-title">Broken trust</p>
            <p className="font-nepali trust-panel-title-ne">टुटेको विश्वास</p>
            <ul className="trust-panel-list">
              {BROKEN.map((item, i) => (
                <motion.li
                  key={item.en}
                  className="trust-item-broken"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{
                    opacity: {
                      delay: 0.45 + i * 0.08,
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <span className="trust-bullet trust-bullet-broken" aria-hidden />
                  <span>
                    <span className="trust-item-en">{item.en}</span>
                    <span className="font-nepali trust-item-ne">{item.ne}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <TrustBridge delay={0.55} />

          <motion.div
            className="trust-panel trust-panel-strong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            <p className="trust-panel-title text-gold-300/90">Trusted brands</p>
            <p className="font-nepali trust-panel-title-ne">विश्वासिला Brand</p>
            <ul className="trust-panel-list">
              {TRUSTED.map((item, i) => (
                <motion.li
                  key={item.en}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: EASE }}
                >
                  <span className="trust-bullet trust-bullet-strong" aria-hidden />
                  <span>
                    <span className="trust-item-en">{item.en}</span>
                    <span className="font-nepali trust-item-ne">{item.ne}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en font-medium text-red-200/85">
            One bad experience can destroy years of trust.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            एउटा खराब अनुभवले वर्षौंको विश्वास तोड्न सक्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function TrustBridge({ delay }) {
  return (
    <motion.div
      className="trust-bridge"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      <motion.div
        className="trust-bridge-glow"
        animate={{ opacity: [0.35, 0.85, 0.4] }}
        transition={{ duration: 3, delay: delay + 0.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg className="trust-bridge-svg" viewBox="0 0 200 72" fill="none" aria-hidden>
        <motion.path
          d="M12 56 Q100 8 188 56"
          stroke="rgba(201,162,39,0.25)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: delay + 0.15, ease: EASE }}
        />
        <motion.path
          d="M12 56 Q100 8 188 56"
          stroke="rgba(201,162,39,0.75)"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: delay + 0.35, ease: EASE }}
        />
      </svg>
      <p className="trust-bridge-label">TRUST</p>
      <p className="font-nepali trust-bridge-label-ne">विश्वास</p>
      <div className="trust-bridge-ends flex justify-between px-2 text-[10px] uppercase tracking-widest text-white/35">
        <span>Customer</span>
        <span>Brand</span>
      </div>
    </motion.div>
  )
}
