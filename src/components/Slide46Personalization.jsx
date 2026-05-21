import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PLATFORMS = [
  { en: 'Netflix picks', ne: 'Netflix' },
  { en: 'Spotify playlists', ne: 'Spotify' },
  { en: 'Amazon suggestions', ne: 'Amazon' },
  { en: 'TikTok feed', ne: 'TikTok' },
  { en: 'YouTube recommendations', ne: 'YouTube' },
]

export default function Slide46Personalization() {
  return (
    <motion.section
      className="slide-frame slide-focus slide46-frame crl-atmo-ai relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 46: Personalization"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crl-atmo-layer crl-atmo-ai-layer pointer-events-none absolute inset-0" aria-hidden />
      <div className="crl-ai-stream pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {[0, 1, 2].map((n) => (
          <motion.div
            key={n}
            className="crl-ai-stream-line"
            animate={{ x: ['-30%', '130%'] }}
            transition={{ duration: 8 + n * 2, repeat: Infinity, ease: 'linear', delay: n * 1.2 }}
          />
        ))}
      </div>

      <div className="slide-inner slide-focus-layout slide46-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 46
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          PERSONALIZATION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          व्यक्तिगत अनुभव
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def slide46-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern businesses try to understand each customer individually.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका Business हरू प्रत्येक ग्राहकलाई व्यक्तिगत रूपमा बुझ्न खोज्छन्।
          </p>
        </motion.div>

        <motion.div
          className="crl-personal-hub slide46-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.34, ease: EASE }}
        >
          <motion.div
            className="crl-personal-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.75, ease: EASE }}
          >
            <div className="crl-personal-core-glow" aria-hidden />
            <p className="crl-personal-core-en">Customer</p>
            <p className="font-nepali crl-personal-core-ne">ग्राहक</p>
            <p className="crl-personal-core-tag">AI-adaptive</p>
          </motion.div>
          <div className="crl-personal-ring">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.en}
                className="crl-personal-chip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48 + i * 0.09, duration: 0.6, ease: EASE }}
              >
                <span className="crl-personal-chip-glow" aria-hidden />
                <p className="crl-personal-chip-en">{p.en}</p>
                <p className="font-nepali crl-personal-chip-ne">{p.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="slide46-bottom mx-auto w-full max-w-3xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.88, duration: 0.85, ease: EASE }}
        >
          <div className="crl-insight-box crl-insight-box-ai">
            <p className="crl-insight-en">
              Customers feel more connected when experiences feel personal.
            </p>
            <p className="font-nepali crl-insight-ne">
              Experience personal लाग्दा ग्राहक अझ जोडिएको महसुस गर्छन्।
            </p>
          </div>
          <footer className="slide-focus-footer-line slide46-footer">
            <p className="slide-focus-line-en">Personalization increases engagement and loyalty.</p>
            <p className="font-nepali slide-focus-line-ne">
              Personalization ले engagement र loyalty बढाउँछ।
            </p>
          </footer>
        </motion.div>
      </div>
    </motion.section>
  )
}
