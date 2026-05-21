import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const STORIES = [
  { en: 'Nike inspiration', ne: 'Nike' },
  { en: 'Apple emotion', ne: 'Apple' },
  { en: 'Coca-Cola moments', ne: 'Coke' },
  { en: 'Cinematic storytelling', ne: 'Cinematic' },
  { en: 'Family & memory', ne: 'Memory' },
  { en: 'Brand feeling', ne: 'Feeling' },
]

const EXAMPLES = [
  { en: 'Hero journeys', ne: 'Hero' },
  { en: 'Emotional ads', ne: 'Emotion' },
  { en: 'Brand films', ne: 'Film' },
  { en: 'Human stories', ne: 'Story' },
]

export default function Slide80AdvertisingStorytelling() {
  return (
    <motion.section
      className="slide-frame slide-focus slide80-frame mix-atmo-story relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 80: Advertising and storytelling"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-story-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide80-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-promo">
          Slide 80
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-promo">
          ADVERTISING & STORYTELLING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Advertising र Storytelling
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Stories influence emotions more powerfully than facts alone.</p>
          <p className="font-nepali slide-focus-def-ne">Story ले केवल fact भन्दा धेरै emotion influence गर्छ।</p>
        </motion.div>

        <motion.div
          className="mix-story-stage mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.9, ease: EASE }}
        >
          <div className="mix-story-frame">
            <motion.div
              className="mix-story-light"
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
            <p className="mix-story-frame-label">Brand stories → Human emotion</p>
            <p className="font-nepali mix-story-frame-label-ne">Brand story → मानवीय भावना</p>
          </div>
          <div className="mix-story-grid">
            {STORIES.map((s, i) => (
              <motion.div
                key={s.en}
                className="mix-story-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <span className="mix-story-card-glow" aria-hidden />
                <p className="mix-story-card-en">{s.en}</p>
                <p className="font-nepali mix-story-card-ne">{s.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mix-insight-box mix-insight-story mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">People remember feelings more than information.</p>
          <p className="font-nepali mix-insight-ne">मानिसहरूले जानकारीभन्दा भावना धेरै सम्झिन्छन्।</p>
        </motion.div>

        <div className="mix-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mix-example-chip mix-example-chip-promo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="mix-example-en">{ex.en}</p>
              <p className="font-nepali mix-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.02, ease: EASE }}
        >
          <p className="mix-finale-en">Great advertising creates emotional memory.</p>
          <p className="font-nepali mix-finale-ne">राम्रो Advertising ले emotional memory बनाउँछ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
