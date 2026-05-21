import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const JOURNEY = [
  { en: 'Buy', ne: 'किन्ने' },
  { en: 'Use', ne: 'प्रयोग गर्ने' },
  { en: 'Feel happy', ne: 'खुसी हुने' },
  { en: 'Return', ne: 'फेरि आउने' },
  { en: 'Recommend', ne: 'सिफारिस गर्ने' },
]

const EXAMPLES = [
  { label: 'Pathao on time', ne: 'समयमै आगमन' },
  { label: 'Daraz matches photo', ne: 'फोटो जस्तै सामान' },
  { label: 'iPhone smooth', ne: 'सहज अनुभव' },
  { label: 'Great hotel', ne: 'राम्रो सेवा' },
]

export default function Slide18CustomerSatisfaction() {
  return (
    <motion.section
      className="slide-frame slide-focus slide18-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 18: Customer satisfaction"
    >
      <SlideBackdrop glow="top" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide18-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 18
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          CUSTOMER SATISFACTION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सन्तुष्टि
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customer satisfaction is the feeling customers get when the product or service meets or
            exceeds expectations.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Product वा Service ले अपेक्षा पूरा गर्‍यो वा बढी दियो भने ग्राहक सन्तुष्ट हुन्छ।
          </p>
        </motion.div>

        <div className="cs-journey mx-auto w-full max-w-4xl shrink-0">
          <div className="cs-journey-track relative flex flex-wrap items-start justify-center gap-2 sm:gap-3 md:flex-nowrap md:justify-between md:gap-0">
            <motion.div
              className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent md:block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: EASE }}
            />
            {JOURNEY.map((step, i) => (
              <div key={step.en} className="flex items-center">
                <motion.div
                  className="cs-journey-step flex flex-col items-center px-1 md:px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.65, ease: EASE }}
                >
                  <motion.div
                    className="cs-journey-node flex items-center justify-center rounded-full border-2 border-gold-400/45 bg-gold-400/10"
                    animate={{
                      boxShadow: [
                        '0 0 0 rgba(201,162,39,0)',
                        '0 0 28px rgba(201,162,39,0.35)',
                        '0 0 0 rgba(201,162,39,0)',
                      ],
                    }}
                    transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
                  >
                    <span className="cs-journey-num font-bold text-gold-300">{i + 1}</span>
                  </motion.div>
                  <p className="cs-journey-label mt-2 font-semibold uppercase tracking-wide text-white/85">
                    {step.en}
                  </p>
                  <p className="font-nepali cs-journey-label-ne text-gold-300/60">{step.ne}</p>
                </motion.div>
                {i < JOURNEY.length - 1 && (
                  <span className="px-0.5 text-gold-400/45 md:hidden" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="cs-examples mx-auto grid w-full max-w-4xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
          {EXAMPLES.map((ex, i) => (
            <motion.div
              key={ex.label}
              className="cs-example-card rounded-lg border border-gold-400/22 bg-gold-400/[0.06] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 + i * 0.08, duration: 0.5, ease: EASE }}
            >
              <p className="cs-example-en font-medium text-white/85">{ex.label}</p>
              <p className="font-nepali cs-example-ne text-gold-300/60">{ex.ne}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
        >
          <p className="slide-focus-line-en">Satisfied customers become free marketers.</p>
          <p className="font-nepali slide-focus-line-ne">सन्तुष्ट ग्राहक आफैं Brand को प्रचारक बन्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
