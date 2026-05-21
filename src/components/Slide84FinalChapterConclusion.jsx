import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const JOURNEY = [
  { en: 'Human needs', ne: 'मानवीय आवश्यकता', tone: 'mix-journey-1' },
  { en: 'Customer psychology', ne: 'Customer Psychology', tone: 'mix-journey-2' },
  { en: 'Value creation', ne: 'Value Creation', tone: 'mix-journey-3' },
  { en: 'Relationships', ne: 'Relationships', tone: 'mix-journey-4' },
  { en: 'Engagement', ne: 'Engagement', tone: 'mix-journey-5' },
  { en: 'Loyalty', ne: 'Loyalty', tone: 'mix-journey-6' },
  { en: 'Marketing mix', ne: 'Marketing Mix', tone: 'mix-journey-7' },
  { en: 'Modern marketing ecosystem', ne: 'आधुनिक Ecosystem', tone: 'mix-journey-8', final: true },
]

export default function Slide84FinalChapterConclusion() {
  return (
    <motion.section
      className="slide-frame slide-focus slide84-frame mix-atmo-chapter-finale relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 84: Final chapter conclusion"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-chapter-finale-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide84-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow">
          Slide 84 · Finale
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl mix-title-glow mix-title-finale">
          THE EVOLUTION OF MODERN MARKETING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक Marketing को विकास
        </motion.p>

        <motion.div {...reveal(0.24)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Marketing evolved from simple selling into understanding human psychology, relationships, and
            value creation.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Marketing सामान्य बिक्रीबाट मानिसको psychology, relationship र value creation बुझ्ने दिशातर्फ
            विकसित भयो।
          </p>
        </motion.div>

        <div className="mix-chapter-timeline mx-auto w-full max-w-lg shrink-0">
          <div className="mix-chapter-rail" aria-hidden>
            <motion.div
              className="mix-chapter-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.8, delay: 0.32, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="mix-chapter-steps">
            {JOURNEY.map((stage, i) => (
              <motion.li
                key={stage.en}
                className={`mix-chapter-step ${stage.tone} ${stage.final ? 'mix-chapter-step-final' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.36 + i * 0.09, duration: 0.55, ease: EASE }}
              >
                <span className="mix-chapter-dot" aria-hidden />
                <div>
                  <p className="mix-chapter-en">{stage.en}</p>
                  <p className="font-nepali mix-chapter-ne">{stage.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="mix-chapter-emotional mx-auto max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 1, ease: EASE }}
        >
          <p className="mix-chapter-emotional-en">
            Modern marketing is the art of understanding humans, creating value, and building lasting
            connections.
          </p>
          <p className="font-nepali mix-chapter-emotional-ne">
            आजको Marketing भनेको मानिसलाई बुझ्ने, value सिर्जना गर्ने र lasting connection बनाउने कला हो।
          </p>
        </motion.div>

        <motion.div
          className="mix-chapter-closing mx-auto max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.1, ease: EASE }}
        >
          <p className="mix-chapter-closing-en">
            Great marketing does not only sell products. It shapes experiences, emotions, and human
            behavior.
          </p>
          <p className="font-nepali mix-chapter-closing-ne">
            राम्रो Marketing केवल Product बेच्दैन। यसले experience, emotion र human behavior लाई प्रभाव
            पार्छ।
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
