import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const TRANSACTION = [
  { en: 'Sell once', ne: 'एकपटक बेच्ने' },
  { en: 'Aggressive selling', ne: 'जबर्जस्ती बिक्री' },
  { en: 'Short-term profit', ne: 'छोटो अवधिको नाफा' },
  { en: 'No emotional connection', ne: 'भावनात्मक सम्बन्ध छैन' },
]

const RELATIONSHIP = [
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Customer care', ne: 'ग्राहक हेरचाह' },
  { en: 'Loyalty', ne: 'वफादारी' },
  { en: 'Repeat business', ne: 'फेरि किनमेल' },
  { en: 'Emotional connection', ne: 'भावनात्मक सम्बन्ध' },
]

export default function Slide23TransactionVsRelationship() {
  return (
    <motion.section
      className="slide-frame slide-focus slide23-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 23: Transaction vs relationship"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide23-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 23
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          TRANSACTION vs RELATIONSHIP
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          एकपटकको बिक्री vs लामो सम्बन्ध
        </motion.p>

        <div className="tr-split mx-auto w-full max-w-4xl shrink-0">
          <motion.div
            className="tr-panel tr-panel-cold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.32, ease: EASE }}
          >
            <p className="tr-panel-heading">Transaction thinking</p>
            <p className="font-nepali tr-panel-heading-ne">एकपटकको सोच</p>
            <ul className="tr-panel-list">
              {TRANSACTION.map((item, i) => (
                <motion.li
                  key={item.en}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.42 + i * 0.07, duration: 0.45, ease: EASE }}
                >
                  <span className="tr-bullet tr-bullet-cold" aria-hidden />
                  <span>
                    <span className="tr-item-en">{item.en}</span>
                    <span className="font-nepali tr-item-ne">{item.ne}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="tr-panel tr-panel-warm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.45, ease: EASE }}
          >
            <motion.div
              className="tr-panel-glow pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.35, 0.7, 0.45] }}
              transition={{ duration: 4, delay: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="tr-panel-heading relative">Relationship thinking</p>
            <p className="font-nepali tr-panel-heading-ne relative">सम्बन्धको सोच</p>
            <ul className="tr-panel-list relative">
              {RELATIONSHIP.map((item, i) => (
                <motion.li
                  key={item.en}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.07, duration: 0.45, ease: EASE }}
                >
                  <span className="tr-bullet tr-bullet-warm" aria-hidden />
                  <span>
                    <span className="tr-item-en">{item.en}</span>
                    <span className="font-nepali tr-item-ne">{item.ne}</span>
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
          <p className="slide-focus-line-en">
            Modern brands grow through relationships, not pressure.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            आजका Brand हरू दबाबले होइन, सम्बन्धले बढ्छन्।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
