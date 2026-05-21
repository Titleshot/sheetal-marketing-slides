import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const VIRAL = [
  { en: 'Viral reels', ne: 'Viral reels' },
  { en: 'Memes', ne: 'Memes' },
  { en: 'Influencers', ne: 'Influencers' },
  { en: 'Trends', ne: 'Trends' },
  { en: 'Hashtags', ne: 'Hashtags' },
  { en: 'Shares', ne: 'Shares' },
  { en: 'Reactions', ne: 'Reactions' },
  { en: 'Creator economy', ne: 'Creator economy' },
]

const EXAMPLES = [
  { en: 'TikTok viral', ne: 'TikTok' },
  { en: 'YouTube creators', ne: 'YouTube' },
  { en: 'IG influencers', ne: 'Instagram' },
  { en: 'Meme culture', ne: 'Memes' },
]

export default function Slide52ContentViralityInfluencers() {
  return (
    <motion.section
      className="slide-frame slide-focus slide52-frame dig-atmo-viral relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 52: Content, virality and influencers"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="dig-atmo-layer dig-atmo-viral-layer pointer-events-none absolute inset-0" aria-hidden />
      <motion.div
        className="dig-viral-wave dig-viral-wave-1 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
        animate={{ scale: [0.6, 1.4], opacity: [0.35, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.div
        className="dig-viral-wave dig-viral-wave-2 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
        animate={{ scale: [0.5, 1.3], opacity: [0.25, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
      />

      <div className="slide-inner slide-focus-layout slide52-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow dig-eyebrow">
          Slide 52
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title dig-title-glow">
          CONTENT, VIRALITY & INFLUENCERS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Content, Viral Trends र Influencers
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            People now spread marketing messages faster than companies themselves.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आज मानिसहरूले नै marketing message छिटो फैलाउँछन्।
          </p>
        </motion.div>

        <motion.div
          className="dig-viral-burst mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <motion.div
            className="dig-viral-core"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="dig-viral-metric">+2.4M</p>
            <p className="dig-viral-metric-label">shares</p>
          </motion.div>
          <div className="dig-viral-grid">
            {VIRAL.map((v, i) => (
              <motion.div
                key={v.en}
                className="dig-viral-chip"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <p className="dig-viral-chip-en">{v.en}</p>
                <p className="font-nepali dig-viral-chip-ne">{v.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="dig-insight-box dig-insight-viral mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="dig-insight-en">Content spreads emotionally before it spreads logically.</p>
          <p className="font-nepali dig-insight-ne">Content पहिले emotionally फैलिन्छ, अनि logically।</p>
        </motion.div>

        <div className="dig-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="dig-example-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: EASE }}
            >
              <p className="dig-example-en">{ex.en}</p>
              <p className="font-nepali dig-example-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="dig-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, ease: EASE }}
        >
          <p className="dig-finale-en">
            Influencers and creators became powerful modern marketers.
          </p>
          <p className="font-nepali dig-finale-ne">
            आज influencers र creators शक्तिशाली marketers बनेका छन्।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
