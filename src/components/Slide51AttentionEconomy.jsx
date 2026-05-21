import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const COMPETITORS = [
  { en: 'Ads', ne: 'विज्ञापन' },
  { en: 'Reels', ne: 'Reels' },
  { en: 'Notifications', ne: 'सूचना' },
  { en: 'Content', ne: 'Content' },
  { en: 'Influencers', ne: 'Influencers' },
  { en: 'Brands', ne: 'Brand' },
  { en: 'Apps', ne: 'Apps' },
]

export default function Slide51AttentionEconomy() {
  return (
    <motion.section
      className="slide-frame slide-focus slide51-frame dig-atmo-battle relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 51: The attention economy"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="dig-atmo-layer dig-atmo-battle-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide51-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow dig-eyebrow">
          Slide 51
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl dig-title-glow">
          THE ATTENTION ECONOMY
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Attention Economy
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern companies compete for human attention, not just money.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका कम्पनीहरू केवल पैसाको लागि होइन, attention को लागि पनि प्रतिस्पर्धा गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="dig-battle-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.34, ease: EASE }}
        >
          <div className="dig-battle-beams" aria-hidden>
            {COMPETITORS.map((_, i) => (
              <motion.span
                key={i}
                className="dig-battle-beam"
                style={{ '--dig-beam-i': i }}
                animate={{ opacity: [0.15, 0.7, 0.15] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.12 }}
              />
            ))}
          </div>
          <motion.div
            className="dig-battle-core"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="dig-battle-core-glow" aria-hidden />
            <p className="dig-battle-core-en">Attention</p>
            <p className="font-nepali dig-battle-core-ne">ध्यान केन्द्र</p>
          </motion.div>
          <div className="dig-battle-grid">
            {COMPETITORS.map((c, i) => (
              <motion.div
                key={c.en}
                className="dig-battle-pull"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.07, duration: 0.5, ease: EASE }}
              >
                <motion.span
                  className="dig-battle-notif"
                  aria-hidden
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                />
                <p className="dig-battle-pull-en">{c.en}</p>
                <p className="font-nepali dig-battle-pull-ne">{c.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="dig-insight-box dig-insight-intense mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="dig-insight-en">Screen time became a modern business battlefield.</p>
          <p className="font-nepali dig-insight-ne">Screen time आधुनिक business battlefield बनेको छ।</p>
        </motion.div>

        <motion.footer
          className="dig-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.98, ease: EASE }}
        >
          <p className="dig-finale-en">
            The longer brands keep attention, the stronger their influence becomes.
          </p>
          <p className="font-nepali dig-finale-ne">
            Brand ले जति धेरै attention राख्न सक्छ, त्यति धेरै influence बढ्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
