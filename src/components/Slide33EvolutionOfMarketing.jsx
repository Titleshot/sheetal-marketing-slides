import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const STAGES = [
  { en: 'Production', ne: 'उत्पादन', tone: 'adv-evo-prod' },
  { en: 'Product', ne: 'उत्पादन गुणस्तर', tone: 'adv-evo-product' },
  { en: 'Selling', ne: 'बिक्री', tone: 'adv-evo-selling' },
  { en: 'Marketing', ne: 'Marketing', tone: 'adv-evo-marketing' },
  { en: 'Societal', ne: 'सामाजिक', tone: 'adv-evo-societal' },
  { en: 'Holistic', ne: 'समग्र', tone: 'adv-evo-holistic', final: true },
]

export default function Slide33EvolutionOfMarketing() {
  return (
    <motion.section
      className="slide-frame slide-focus slide33-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 33: Evolution of marketing"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide33-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 33
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          EVOLUTION OF MARKETING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Marketing को विकास
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Marketing evolved from simple selling into understanding humans and society.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Marketing सामान्य बिक्रीबाट मानिस र समाज बुझ्ने दिशातर्फ विकसित भयो।
          </p>
        </motion.div>

        <div className="adv-evo-timeline mx-auto w-full max-w-md shrink-0">
          <div className="adv-evo-rail" aria-hidden>
            <motion.div
              className="adv-evo-flow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.6, delay: 0.38, ease: EASE }}
              style={{ transformOrigin: 'top center' }}
            />
          </div>
          <ul className="adv-evo-steps">
            {STAGES.map((stage, i) => (
              <motion.li
                key={stage.en}
                className={`adv-evo-step ${stage.tone} ${stage.final ? 'adv-evo-step-final' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.11, duration: 0.6, ease: EASE }}
              >
                <span className="adv-evo-dot" aria-hidden />
                <div>
                  <p className="adv-evo-en">{stage.en}</p>
                  <p className="font-nepali adv-evo-ne">{stage.ne}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
        >
          <p className="slide-focus-line-en">Marketing became more human-centered over time.</p>
          <p className="font-nepali slide-focus-line-ne">
            समयसँगै Marketing अझ human-centered बन्दै गयो।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
