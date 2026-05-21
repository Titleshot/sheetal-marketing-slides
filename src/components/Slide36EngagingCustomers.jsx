import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const CHANNELS = [
  { en: 'TikTok reels', ne: 'TikTok' },
  { en: 'Instagram posts', ne: 'Instagram' },
  { en: 'YouTube content', ne: 'YouTube' },
  { en: 'Comments', ne: 'कमेन्ट' },
  { en: 'Reactions', ne: 'प्रतिक्रिया' },
  { en: 'Live streams', ne: 'लाइभ' },
]

const EXAMPLES = [
  { en: 'TikTok trends', ne: 'Trends' },
  { en: 'Instagram brand pages', ne: 'Brand pages' },
  { en: 'YouTube creators', ne: 'Creators' },
  { en: 'Interactive polls', ne: 'Polls' },
]

export default function Slide36EngagingCustomers() {
  return (
    <motion.section
      className="slide-frame slide-focus slide36-frame crm-atmo-engage relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 36: Engaging customers"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crm-atmo-layer crm-atmo-engage-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide36-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 36
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          ENGAGING CUSTOMERS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहकलाई जोडेर राख्ने
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Modern brands constantly interact with customers.</p>
          <p className="font-nepali slide-focus-def-ne">आजका Brand हरू लगातार ग्राहकसँग interact गर्छन्।</p>
        </motion.div>

        <div className="crm-engage-stage mx-auto w-full max-w-3xl shrink-0">
          <div className="crm-engage-grid">
            {CHANNELS.map((ch, i) => (
              <motion.div
                key={ch.en}
                className="crm-engage-tile"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.55, 1, 0.6] }}
                transition={{
                  opacity: { delay: 0.38 + i * 0.1, duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                }}
                style={{ '--engage-i': i }}
              >
                <span className="crm-engage-icon" aria-hidden>◆</span>
                <p className="crm-engage-en">{ch.en}</p>
                <p className="font-nepali crm-engage-ne">{ch.ne}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="crm-engage-flow"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        <motion.div
          className="crm-philosophy crm-philosophy-engage mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
        >
          <p className="crm-philosophy-en">Attention creates engagement.</p>
          <p className="font-nepali crm-philosophy-ne">Attention ले engagement बनाउँछ।</p>
        </motion.div>

        <div className="crm-example-chips mx-auto grid w-full max-w-3xl shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.en}
              className="crm-chip crm-chip-engage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 + i * 0.07, duration: 0.5, ease: EASE }}
            >
              <p className="crm-chip-en">{ex.en}</p>
              <p className="font-nepali crm-chip-ne">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en">Brands that stay visible stay remembered.</p>
          <p className="font-nepali slide-focus-line-ne">सधैं देखिने Brand हरू धेरै सम्झिन्छन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
