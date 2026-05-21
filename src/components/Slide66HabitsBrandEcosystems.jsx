import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const ROUTINES = [
  { en: 'Morning coffee', ne: 'बिहानको coffee', time: 'AM' },
  { en: 'TikTok scroll', ne: 'TikTok' },
  { en: 'Netflix at night', ne: 'Netflix', time: 'PM' },
  { en: 'Apple sync', ne: 'Apple' },
  { en: 'Amazon convenience', ne: 'Amazon' },
  { en: 'Food delivery', ne: 'Delivery' },
]

export default function Slide66HabitsBrandEcosystems() {
  return (
    <motion.section
      className="slide-frame slide-focus slide66-frame loy-atmo-habit relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 66: Habits and brand ecosystems"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="loy-atmo-layer loy-atmo-habit-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide66-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow loy-eyebrow">
          Slide 66
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title loy-title-glow">
          HABITS & BRAND ECOSYSTEMS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Habit र Brand Ecosystem
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Strong brands become part of customers&apos; daily routines and habits.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            सफल Brand हरू ग्राहकको दैनिक habit र routine को हिस्सा बन्छन्।
          </p>
        </motion.div>

        <motion.div
          className="loy-routine-loop mx-auto w-full max-w-4xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <div className="loy-routine-track" aria-hidden>
            <motion.div
              className="loy-routine-flow"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              {[...ROUTINES, ...ROUTINES].map((r, i) => (
                <div key={`${r.en}-${i}`} className="loy-routine-card">
                  {r.time && <span className="loy-routine-time">{r.time}</span>}
                  <p className="loy-routine-en">{r.en}</p>
                  <p className="font-nepali loy-routine-ne">{r.ne}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.p
            className="loy-routine-loop-label"
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↻ Daily behavioral loop
          </motion.p>
        </motion.div>

        <motion.div
          className="loy-insight-box loy-insight-habit mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="loy-insight-en">
            The more a brand becomes part of daily life, the stronger loyalty becomes.
          </p>
          <p className="font-nepali loy-insight-ne">
            Brand दैनिक जीवनको हिस्सा जति बन्छ, loyalty त्यति बलियो हुन्छ।
          </p>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en">
            Modern ecosystems create convenience, familiarity, and habit.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            Modern ecosystem ले convenience, familiarity र habit निर्माण गर्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
