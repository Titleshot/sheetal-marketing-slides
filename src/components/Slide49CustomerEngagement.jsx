import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const ORBIT = [
  { en: 'Social media', ne: 'सामाजिक media' },
  { en: 'Reels', ne: 'Reels' },
  { en: 'Notifications', ne: 'सूचना' },
  { en: 'Videos', ne: 'भिडियो' },
  { en: 'Comments', ne: 'कमेन्ट' },
  { en: 'Likes', ne: 'लाइक' },
  { en: 'Digital touch', ne: 'डिजिटल interaction' },
]

export default function Slide49CustomerEngagement() {
  return (
    <motion.section
      className="slide-frame slide-focus slide49-frame dig-atmo-attention relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 49: Customer engagement"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="dig-atmo-layer dig-atmo-attention-layer pointer-events-none absolute inset-0" aria-hidden />
      <div className="dig-scan-lines pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="dig-scan-line"
          animate={{ y: ['-10%', '110%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="slide-inner slide-focus-layout slide49-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow dig-eyebrow">
          Slide 49
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl dig-title-glow">
          CUSTOMER ENGAGEMENT
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक Engagement
        </motion.p>

        <motion.div {...reveal(0.26)} className="dig-hook mx-auto max-w-2xl">
          <p className="dig-hook-en">Why do some brands stay inside our mind every single day?</p>
          <p className="font-nepali dig-hook-ne">किन केही Brand हरू हाम्रो दिमागमा हरेक दिन रहिरहन्छन्?</p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def slide49-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern brands continuously interact with customers to maintain attention and emotional
            connection.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका Brand हरू attention र emotional connection कायम राख्न लगातार interact गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="dig-attention-orbit mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
        >
          <motion.div
            className="dig-attention-ring"
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          />
          <div className="dig-orbit-satellites">
            {ORBIT.map((item, i) => (
              <motion.div
                key={item.en}
                className="dig-orbit-sat"
                style={{ '--dig-i': i }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.55, ease: EASE }}
              >
                <motion.span
                  className="dig-notif-dot"
                  aria-hidden
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
                />
                <p className="dig-orbit-sat-en">{item.en}</p>
                <p className="font-nepali dig-orbit-sat-ne">{item.ne}</p>
              </motion.div>
            ))}
          </div>
          <div className="dig-attention-core">
            <motion.div
              className="dig-attention-core-inner"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="dig-attention-core-glow" aria-hidden />
              <p className="dig-attention-core-en">Human</p>
              <p className="dig-attention-core-en dig-attention-core-en-line2">attention</p>
              <p className="font-nepali dig-attention-core-ne">मानवीय attention</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.footer
          className="dig-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="dig-finale-en">
            In the digital world, attention has become one of the most valuable resources.
          </p>
          <p className="font-nepali dig-finale-ne">
            Digital दुनियाँमा attention सबैभन्दा मूल्यवान resources मध्ये एक बनेको छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
