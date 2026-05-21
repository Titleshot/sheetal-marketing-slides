import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const UGC = [
  { en: 'Reviews', ne: 'Reviews' },
  { en: 'TikTok videos', ne: 'TikTok' },
  { en: 'Instagram posts', ne: 'Instagram' },
  { en: 'YouTube reactions', ne: 'YouTube' },
  { en: 'Comments', ne: 'कमेन्ट' },
  { en: 'Hashtags', ne: 'Hashtags' },
  { en: 'Shares', ne: 'Shares' },
  { en: 'Memes', ne: 'Memes' },
]

export default function Slide54ConsumerGeneratedMarketing() {
  return (
    <motion.section
      className="slide-frame slide-focus slide54-frame cgm-atmo-burst relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 54: Consumer generated marketing"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cgm-atmo-layer cgm-atmo-burst-layer pointer-events-none absolute inset-0" aria-hidden />
      <div className="slide-inner slide-focus-layout slide54-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cgm-eyebrow">
          Slide 54
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl cgm-title-glow">
          CONSUMER GENERATED MARKETING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          उपभोक्ताद्वारा सिर्जित Marketing
        </motion.p>

        <motion.div {...reveal(0.26)} className="cgm-hook mx-auto max-w-2xl">
          <p className="cgm-hook-en">What happens when customers become marketers themselves?</p>
          <p className="font-nepali cgm-hook-ne">जब ग्राहक आफैं marketer बन्छन्, तब के हुन्छ?</p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def slide54-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern consumers now create and spread marketing content themselves.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजका ग्राहकहरूले आफैं Marketing content बनाउने र फैलाउने गर्छन्।
          </p>
        </motion.div>

        <motion.div
          className="cgm-burst-hub mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
        >
          <div className="cgm-burst-ripples" aria-hidden>
            <motion.div
              className="cgm-burst-ripple"
              animate={{ scale: [0.6, 1.35], opacity: [0.35, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.div
              className="cgm-burst-ripple"
              animate={{ scale: [0.55, 1.25], opacity: [0.25, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
            />
          </div>
          <div className="cgm-burst-row cgm-burst-row-top">
            {UGC.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.en}
                className="cgm-burst-ray"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <p className="cgm-burst-ray-en">{item.en}</p>
                <p className="font-nepali cgm-burst-ray-ne">{item.ne}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="cgm-burst-core-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.7, ease: EASE }}
          >
            <motion.div
              className="cgm-burst-core"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="cgm-burst-core-glow" aria-hidden />
              <p className="cgm-burst-core-en">Customer</p>
              <p className="font-nepali cgm-burst-core-ne">ग्राहक</p>
            </motion.div>
          </motion.div>
          <div className="cgm-burst-row cgm-burst-row-bottom">
            {UGC.slice(4, 8).map((item, i) => (
              <motion.div
                key={item.en}
                className="cgm-burst-ray"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 + i * 0.07, duration: 0.55, ease: EASE }}
              >
                <p className="cgm-burst-ray-en">{item.en}</p>
                <p className="font-nepali cgm-burst-ray-ne">{item.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.footer
          className="cgm-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="cgm-finale-en">Marketing is no longer controlled only by companies.</p>
          <p className="font-nepali cgm-finale-ne">आजको Marketing केवल कम्पनीहरूले मात्र नियन्त्रण गर्दैनन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
