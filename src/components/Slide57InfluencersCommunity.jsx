import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SPOKES = [
  { en: 'Followers', ne: 'Followers' },
  { en: 'Fans', ne: 'Fans' },
  { en: 'Communities', ne: 'समुदाय' },
  { en: 'Recommendations', ne: 'सिफारिस' },
  { en: 'Engagement', ne: 'Engagement' },
  { en: 'Emotional influence', ne: 'भावनात्मक प्रभाव' },
]

const EXAMPLES = [
  { en: 'YouTubers', ne: 'YouTube' },
  { en: 'TikTok creators', ne: 'TikTok' },
  { en: 'IG influencers', ne: 'Instagram' },
  { en: 'Streamers', ne: 'Gaming' },
]

export default function Slide57InfluencersCommunity() {
  return (
    <motion.section
      className="slide-frame slide-focus slide57-frame cgm-atmo-influence relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 57: Influencers and community power"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cgm-atmo-layer cgm-atmo-influence-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide57-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cgm-eyebrow">
          Slide 57
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cgm-title-glow">
          INFLUENCERS & COMMUNITY POWER
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Influencers र Community Power
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            People trust recommendations from creators, communities, and influencers.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            मानिसहरूले creators र community को recommendation लाई विश्वास गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="cgm-influence-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <div className="cgm-influence-spokes" aria-hidden>
            {SPOKES.map((_, i) => (
              <motion.span
                key={i}
                className="cgm-influence-spoke"
                style={{ '--cgm-spoke-i': i }}
                animate={{ opacity: [0.12, 0.55, 0.12] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
          <div className="cgm-influence-core">
            <motion.div
              className="cgm-influence-core-inner"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="cgm-influence-core-glow" aria-hidden />
              <p className="cgm-influence-core-en">Influencer</p>
              <p className="cgm-influence-core-sub">/ Creator</p>
              <p className="font-nepali cgm-influence-core-ne">प्रभावशाली सिर्जक</p>
            </motion.div>
          </div>
          <div className="cgm-influence-ring">
            {SPOKES.map((s, i) => (
              <motion.div
                key={s.en}
                className="cgm-influence-node"
                style={{ '--cgm-i': i }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.08, duration: 0.55, ease: EASE }}
              >
                <p className="cgm-influence-node-en">{s.en}</p>
                <p className="font-nepali cgm-influence-node-ne">{s.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="cgm-insight-box cgm-insight-influence mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="cgm-insight-en">Influence spreads emotionally through people.</p>
          <p className="font-nepali cgm-insight-ne">Influence मानिसमार्फत emotionally फैलिन्छ।</p>
        </motion.div>

        <div className="cgm-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="cgm-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="cgm-example-en">{ex.en}</p>
              <p className="font-nepali cgm-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="cgm-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.02, ease: EASE }}
        >
          <p className="cgm-finale-en">Communities became powerful marketing ecosystems.</p>
          <p className="font-nepali cgm-finale-ne">Community हरू शक्तिशाली marketing ecosystem बने।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
