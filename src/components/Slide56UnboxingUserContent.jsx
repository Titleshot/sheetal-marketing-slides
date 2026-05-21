import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const CONTENT = [
  { en: 'Unboxing videos', ne: 'Unboxing' },
  { en: 'Reaction videos', ne: 'Reaction' },
  { en: 'TikTok reviews', ne: 'TikTok' },
  { en: 'Instagram stories', ne: 'Stories' },
  { en: 'Customer photos', ne: 'Photos' },
  { en: 'YouTube reactions', ne: 'YouTube' },
]

export default function Slide56UnboxingUserContent() {
  return (
    <motion.section
      className="slide-frame slide-focus slide56-frame cgm-atmo-creator relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 56: Unboxing, reactions and user content"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cgm-atmo-layer cgm-atmo-creator-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide56-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cgm-eyebrow">
          Slide 56
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cgm-title-glow">
          UNBOXING, REACTIONS & USER CONTENT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Unboxing, Reactions र User Content
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customers now create entertaining marketing content around products and experiences.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका ग्राहकहरूले Product र experience वरिपरि entertaining content बनाउँछन्।
          </p>
        </motion.div>

        <div className="cgm-creator-grid mx-auto grid w-full max-w-4xl shrink-0 grid-cols-2 gap-2.5 lg:grid-cols-3">
          {CONTENT.map((c, i) => (
            <motion.div
              key={c.en}
              className="cgm-creator-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.36 + i * 0.09, duration: 0.6, ease: EASE }}
            >
              <span className="cgm-creator-play" aria-hidden />
              <motion.span
                className="cgm-creator-engagement"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15 }}
              >
                ▲ 12K
              </motion.span>
              <p className="cgm-creator-en">{c.en}</p>
              <p className="font-nepali cgm-creator-ne">{c.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cgm-insight-box cgm-insight-creator mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.85, ease: EASE }}
        >
          <p className="cgm-insight-en">
            People enjoy watching real experiences from real users.
          </p>
          <p className="font-nepali cgm-insight-ne">
            मानिसहरूले वास्तविक प्रयोगकर्ताको अनुभव हेर्न मन पराउँछन्।
          </p>
        </motion.div>

        <motion.footer
          className="cgm-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.98, ease: EASE }}
        >
          <p className="cgm-finale-en">
            User-generated content feels more authentic than advertisements.
          </p>
          <p className="font-nepali cgm-finale-ne">
            User-generated content विज्ञापनभन्दा बढी authentic लाग्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
