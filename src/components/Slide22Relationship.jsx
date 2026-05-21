import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const STAGES = [
  { en: 'First purchase', ne: 'पहिलो किनमेल' },
  { en: 'Good experience', ne: 'राम्रो अनुभव' },
  { en: 'Trust', ne: 'विश्वास' },
  { en: 'Return customer', ne: 'फेरि आउने ग्राहक' },
  { en: 'Loyalty', ne: 'वफादारी', highlight: true },
]

export default function Slide22Relationship() {
  return (
    <motion.section
      className="slide-frame slide-focus slide22-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 22: Relationship"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide22-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 22
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          RELATIONSHIP
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          सम्बन्ध
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern businesses want long-term relationships, not one-time customers.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आधुनिक व्यवसायहरूले एकपटकको बिक्री होइन, लामो सम्बन्ध चाहन्छन्।
          </p>
        </motion.div>

        <div className="rel-timeline mx-auto w-full max-w-md shrink-0">
          <div className="rel-timeline-rail" aria-hidden>
            <motion.div
              className="rel-timeline-pulse"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: [0.5, 1, 0.65] }}
              transition={{
                scaleY: { duration: 1.4, delay: 0.4, ease: EASE },
                opacity: { duration: 2.8, delay: 0.8, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="rel-timeline-steps">
            {STAGES.map((stage, i) => (
              <motion.li
                key={stage.en}
                className={stage.highlight ? 'rel-step rel-step-final' : 'rel-step'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 + i * 0.12, duration: 0.6, ease: EASE }}
              >
                <span className="rel-step-node" aria-hidden />
                <div className="rel-step-text">
                  <p className="rel-step-en">{stage.en}</p>
                  <p className="font-nepali rel-step-ne">{stage.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="slide-focus-line-en">Trust turns customers into loyal supporters.</p>
          <p className="font-nepali slide-focus-line-ne">
            विश्वासले ग्राहकलाई loyal supporter बनाउँछ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
