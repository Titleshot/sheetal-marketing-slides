import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXPECTATION = ['Promise', 'Advertisement', 'Brand image', 'Reviews']
const REALITY = ['Product quality', 'Service experience', 'Delivery', 'Support']

export default function Slide17ExpectationReality() {
  return (
    <motion.section
      className="slide-frame slide-focus slide17-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 17: Expectation vs reality"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide17-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 17
        </motion.p>
        <motion.h1 {...reveal(0.08)} className="slide-focus-title slide-focus-title-xl">
          EXPECTATION vs REALITY
        </motion.h1>
        <motion.p {...reveal(0.16)} className="slide-focus-subtitle font-nepali">
          अपेक्षा vs वास्तविक अनुभव
        </motion.p>

        <motion.div {...reveal(0.24)} className="slide-focus-def mx-auto max-w-2xl">
          <p className="slide-focus-def-en">
            Customers compare what they expected with what they actually received.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकले आफूले सोचेको कुरा र वास्तविक अनुभवलाई तुलना गर्छन्।
          </p>
        </motion.div>

        <div className="er-columns mx-auto w-full max-w-4xl shrink-0">
          <ExpectationColumn items={EXPECTATION} delay={0.32} />
          <RealityColumn items={REALITY} delay={0.4} />
        </div>

        <motion.div
          className="er-result mx-auto w-full max-w-xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
        >
          <p className="er-result-line">
            If Reality ≥ Expectation → <span className="text-gold-300">Satisfaction</span>
          </p>
          <p className="er-result-line mt-2">
            If Reality &lt; Expectation → <span className="text-red-300/90">Dissatisfaction</span>
          </p>
          <div className="my-3 h-px bg-gradient-to-r from-transparent via-gold-400/35 to-transparent" />
          <p className="font-nepali er-result-ne">
            Reality राम्रो भयो भने सन्तुष्टि। Reality कमजोर भयो भने असन्तुष्टि।
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function ExpectationColumn({ items, delay }) {
  return (
    <motion.div
      className="er-panel er-expect"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      <p className="er-panel-title">Expectation</p>
      <p className="font-nepali er-panel-title-ne">अपेक्षा</p>
      <ul className="er-list">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 + i * 0.06, duration: 0.45, ease: EASE }}
          >
            <span className="er-bullet bg-white/40" aria-hidden />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function RealityColumn({ items, delay }) {
  return (
    <motion.div
      className="er-panel er-reality"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      <p className="er-panel-title text-gold-400/90">Reality</p>
      <p className="font-nepali er-panel-title-ne">वास्तविकता</p>
      <ul className="er-list">
        {items.map((item, i) => (
          <motion.li
            key={item}
            className="text-gold-100/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 + i * 0.06, duration: 0.45, ease: EASE }}
          >
            <span className="er-bullet bg-gold-400/70" aria-hidden />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
