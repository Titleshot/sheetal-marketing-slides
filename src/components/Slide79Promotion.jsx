import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const CHANNELS = [
  { en: 'Advertisements', ne: 'विज्ञापन' },
  { en: 'Billboards', ne: 'Billboard' },
  { en: 'Social campaigns', ne: 'Social' },
  { en: 'Notifications', ne: 'सूचना' },
  { en: 'Videos', ne: 'Video' },
  { en: 'Influencer content', ne: 'Influencer' },
  { en: 'Digital promotions', ne: 'Digital' },
]

const EXAMPLES = [
  { en: 'TV & digital ads', ne: 'Ads' },
  { en: 'Instagram campaigns', ne: 'Instagram' },
  { en: 'Push alerts', ne: 'Alerts' },
  { en: 'Brand videos', ne: 'Video' },
]

export default function Slide79Promotion() {
  return (
    <motion.section
      className="slide-frame slide-focus slide79-frame mix-atmo-promo relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 79: Promotion"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-promo-layer pointer-events-none absolute inset-0" aria-hidden />
      <div className="mix-promo-waves pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="mix-promo-wave mix-promo-wave-a"
          animate={{ opacity: [0.12, 0.45, 0.12] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="mix-promo-wave mix-promo-wave-b"
          animate={{ opacity: [0.08, 0.35, 0.08] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
      </div>

      <div className="slide-inner slide-focus-layout slide79-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-promo">
          Slide 79 · Promotion
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl mix-title-glow mix-title-promo">
          PROMOTION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Promotion / प्रवर्द्धन
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Promotion is how businesses communicate, persuade, and attract attention.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Promotion भनेको Business ले ग्राहकसँग communicate गर्ने र attention आकर्षित गर्ने प्रक्रिया हो।
          </p>
        </motion.div>

        <motion.div
          className="mix-promo-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.9, ease: EASE }}
        >
          <div className="mix-promo-row mix-promo-row-top">
            {CHANNELS.slice(0, 3).map((ch, i) => (
              <motion.div
                key={ch.en}
                className="mix-promo-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-promo-signal" aria-hidden />
                <p className="mix-promo-node-en">{ch.en}</p>
                <p className="font-nepali mix-promo-node-ne">{ch.ne}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mix-promo-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          >
            <div className="mix-promo-core-glow" aria-hidden />
            <p className="mix-promo-core-en">Brand</p>
            <p className="font-nepali mix-promo-core-ne">ब्रान्ड</p>
          </motion.div>
          <div className="mix-promo-row mix-promo-row-mid">
            {CHANNELS.slice(3, 5).map((ch, i) => (
              <motion.div
                key={ch.en}
                className="mix-promo-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-promo-signal" aria-hidden />
                <p className="mix-promo-node-en">{ch.en}</p>
                <p className="font-nepali mix-promo-node-ne">{ch.ne}</p>
              </motion.div>
            ))}
          </div>
          <div className="mix-promo-row mix-promo-row-bottom">
            {CHANNELS.slice(5, 7).map((ch, i) => (
              <motion.div
                key={ch.en}
                className="mix-promo-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.56 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <span className="mix-promo-signal" aria-hidden />
                <p className="mix-promo-node-en">{ch.en}</p>
                <p className="font-nepali mix-promo-node-ne">{ch.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mix-insight-box mix-insight-promo mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">Promotion connects brands with human attention.</p>
          <p className="font-nepali mix-insight-ne">Promotion ले Brand लाई मानिसको attention सँग जोड्छ।</p>
        </motion.div>

        <div className="mix-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="mix-example-chip mix-example-chip-promo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: EASE }}
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
          transition={{ delay: 1, ease: EASE }}
        >
          <p className="mix-finale-en">Even great products fail if people never notice them.</p>
          <p className="font-nepali mix-finale-ne">मानिसहरूले notice नगरे राम्रो Product पनि असफल हुन सक्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
