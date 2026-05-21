import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PLATFORMS = [
  { en: 'TikTok', ne: 'TikTok' },
  { en: 'Instagram', ne: 'Instagram' },
  { en: 'YouTube', ne: 'YouTube' },
  { en: 'Facebook', ne: 'Facebook' },
  { en: 'Shorts', ne: 'Shorts' },
  { en: 'Reels', ne: 'Reels' },
  { en: 'Live streams', ne: 'Live' },
]

const FEED_ITEMS = [
  'New reel trending',
  'Friend liked your post',
  'Creator went live',
  'Ad in your feed',
  'Viral challenge',
]

export default function Slide50DigitalSocialMarketing() {
  return (
    <motion.section
      className="slide-frame slide-focus slide50-frame dig-atmo-feed relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 50: Digital and social media marketing"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="dig-atmo-layer dig-atmo-feed-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide50-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow dig-eyebrow">
          Slide 50
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title dig-title-glow">
          DIGITAL & SOCIAL MEDIA MARKETING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Digital र Social Media Marketing
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Businesses now use digital platforms to connect directly with customers.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका Business हरू ग्राहकसँग सीधा जोडिन digital platform प्रयोग गर्छन्।
          </p>
        </motion.div>

        <div className="dig-feed-stage mx-auto grid w-full max-w-4xl shrink-0 gap-3 lg:grid-cols-[1fr_1.1fr]">
          <div className="dig-platform-row">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.en}
                className="dig-platform-chip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.36 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <p className="dig-platform-en">{p.en}</p>
                <p className="font-nepali dig-platform-ne">{p.ne}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="dig-feed-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.7, ease: EASE }}
          >
            <div className="dig-feed-header">
              <span className="dig-feed-live" />
              <span className="dig-feed-label">Live feed</span>
            </div>
            <div className="dig-feed-track">
              <motion.div
                className="dig-feed-inner"
                animate={{ y: [0, '-50%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                {[...FEED_ITEMS, ...FEED_ITEMS].map((line, i) => (
                  <div key={`${line}-${i}`} className="dig-feed-card">
                    <span className="dig-feed-pulse" aria-hidden />
                    <p>{line}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="dig-insight-box dig-insight-fast mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.78, duration: 0.85, ease: EASE }}
        >
          <p className="dig-insight-en">Modern marketing happens where people spend their attention.</p>
          <p className="font-nepali dig-insight-ne">
            आजको Marketing त्यहीँ हुन्छ जहाँ मानिसहरूले आफ्नो attention दिन्छन्।
          </p>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en">
            Social media transformed marketing into continuous interaction.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            Social media ले Marketing लाई continuous interaction मा बदल्यो।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
