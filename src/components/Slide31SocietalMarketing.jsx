import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const EXAMPLES = [
  { en: 'Eco-friendly brands', ne: 'पर्यावरणमैत्री Brand' },
  { en: 'Sustainable packaging', ne: 'टिकाउ प्याकेजिङ' },
  { en: 'Ethical sourcing', ne: 'नैतिक स्रोत' },
  { en: 'Social responsibility', ne: 'सामाजिक जिम्मेवारी' },
]

export default function Slide31SocietalMarketing() {
  return (
    <motion.section
      className="slide-frame slide-focus slide31-frame adv-atmo-societal relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 31: Societal marketing concept"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="adv-atmo-layer adv-atmo-societal-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide31-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 31
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          SOCIETAL MARKETING CONCEPT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          सामाजिक Marketing अवधारणा
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses should satisfy customers while also protecting society and the environment.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Business ले ग्राहकलाई सन्तुष्ट पार्नुका साथै समाज र वातावरणको पनि ध्यान दिनुपर्छ।
          </p>
        </motion.div>

        <motion.div
          className="adv-earth-scene mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.38, ease: EASE }}
        >
          <div className="adv-earth-orbit-ring" aria-hidden />
          <svg className="adv-earth-globe" viewBox="0 0 200 200" aria-hidden>
            <defs>
              <radialGradient id="adv-earth-grad" cx="40%" cy="35%">
                <stop offset="0%" stopColor="rgba(74, 222, 128, 0.45)" />
                <stop offset="45%" stopColor="rgba(59, 130, 246, 0.35)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.2)" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="72" fill="url(#adv-earth-grad)" stroke="rgba(201, 162, 39, 0.35)" strokeWidth="1.5" />
            <ellipse cx="100" cy="100" rx="72" ry="24" fill="none" stroke="rgba(74, 222, 128, 0.25)" strokeWidth="0.75" transform="rotate(-18 100 100)" />
            <ellipse cx="100" cy="100" rx="72" ry="24" fill="none" stroke="rgba(201, 162, 39, 0.2)" strokeWidth="0.75" transform="rotate(24 100 100)" />
            <path d="M55 95 Q100 70 145 100 Q100 130 55 95" fill="rgba(74, 222, 128, 0.15)" stroke="rgba(74, 222, 128, 0.3)" strokeWidth="0.75" />
          </svg>
          <div className="adv-earth-network" aria-hidden />
        </motion.div>

        <motion.div
          className="adv-philosophy-box adv-philosophy-societal mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
        >
          <p className="adv-philosophy-en">Good business should help both people and the planet.</p>
          <p className="font-nepali adv-philosophy-ne">
            राम्रो Business ले मानिस र पृथ्वी दुवैलाई फाइदा पुर्‍याउनुपर्छ।
          </p>
        </motion.div>

        <div className="adv-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="adv-chip adv-chip-societal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62 + i * 0.07, duration: 0.5, ease: EASE }}
            >
              <p className="adv-chip-en">{ex.en}</p>
              <p className="font-nepali adv-chip-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en">
            Modern customers increasingly support responsible brands.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            आजका ग्राहकहरूले जिम्मेवार Brand हरूलाई बढी समर्थन गर्छन्।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
