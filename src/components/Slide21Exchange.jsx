import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const CUSTOMER_GIVES = [
  { en: 'Money', ne: 'पैसा' },
  { en: 'Time', ne: 'समय' },
  { en: 'Attention', ne: 'ध्यान' },
  { en: 'Trust', ne: 'विश्वास' },
]

const BUSINESS_GIVES = [
  { en: 'Product', ne: 'उत्पादन' },
  { en: 'Service', ne: 'सेवा' },
  { en: 'Solution', ne: 'समाधान' },
  { en: 'Experience', ne: 'अनुभव' },
]

export default function Slide21Exchange() {
  return (
    <motion.section
      className="slide-frame slide-focus slide21-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 21: Exchange"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide21-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 21
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          EXCHANGE
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          विनिमय
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Exchange happens when customers and businesses give something valuable to each other.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            जब ग्राहक र व्यवसायले एकअर्कालाई मूल्यवान कुरा दिन्छन्, त्यसलाई Exchange भनिन्छ।
          </p>
        </motion.div>

        <div className="ex-flow mx-auto w-full max-w-4xl shrink-0">
          <ExchangeColumn
            title="Customer gives"
            titleNe="ग्राहकले दिन्छ"
            items={CUSTOMER_GIVES}
            side="customer"
            delay={0.38}
          />
          <ExchangeCenter delay={0.5} />
          <ExchangeColumn
            title="Business gives"
            titleNe="व्यवसायले दिन्छ"
            items={BUSINESS_GIVES}
            side="business"
            delay={0.45}
          />
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.75, ease: EASE }}
        >
          <p className="slide-focus-line-en">
            Marketing exists because exchange creates value for both sides.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            दुवै पक्षलाई फाइदा हुने भएकाले Exchange सम्भव हुन्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function ExchangeColumn({ title, titleNe, items, side, delay }) {
  return (
    <motion.div
      className={`ex-col ex-col-${side}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      <p className="ex-col-title">{title}</p>
      <p className="font-nepali ex-col-title-ne">{titleNe}</p>
      <ul className="ex-col-list">
        {items.map((item, i) => (
          <motion.li
            key={item.en}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.08 + i * 0.06, duration: 0.45, ease: EASE }}
          >
            <span className="ex-bullet" aria-hidden />
            <span>
              <span className="ex-item-en">{item.en}</span>
              <span className="font-nepali ex-item-ne">{item.ne}</span>
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function ExchangeCenter({ delay }) {
  return (
    <motion.div
      className="ex-center flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      aria-hidden
    >
      <div className="ex-center-pulse" />
      <svg className="ex-arrows-svg" viewBox="0 0 120 80" fill="none">
        <defs>
          <linearGradient id="ex-arrow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(201,162,39,0.35)" />
            <stop offset="50%" stopColor="rgba(201,162,39,0.95)" />
            <stop offset="100%" stopColor="rgba(201,162,39,0.35)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M8 40 H92 M82 32 L92 40 L82 48"
          stroke="url(#ex-arrow-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: [0.45, 1, 0.45] }}
          transition={{
            pathLength: { duration: 1.2, delay: delay + 0.15, ease: EASE },
            opacity: { duration: 2.5, delay: delay + 0.3, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.path
          d="M112 40 H28 M38 32 L28 40 L38 48"
          stroke="url(#ex-arrow-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: [0.45, 1, 0.45] }}
          transition={{
            pathLength: { duration: 1.2, delay: delay + 0.35, ease: EASE },
            opacity: { duration: 2.5, delay: delay + 0.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      </svg>
    </motion.div>
  )
}
