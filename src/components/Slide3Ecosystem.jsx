import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import { EASE, reveal } from './motion'

const STEPS = [
  { label: 'Customer', ne: 'मानिसलाई बुझ्ने' },
  { label: 'Value', ne: 'समस्या समाधान' },
  { label: 'Trust', ne: 'विश्वास निर्माण' },
  { label: 'Relationship', ne: 'सम्बन्ध कायम' },
  { label: 'Loyalty', ne: 'ग्राहक फर्किने' },
]

export default function Slide3Ecosystem() {
  return (
    <motion.section
      className="slide-frame slide3-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 3: Marketing ecosystem"
    >
      <SlideBackdrop glow="wide" />

      <div className="slide-inner slide3-layout relative z-10 flex w-full flex-col items-center justify-center px-4 md:px-8">
        <motion.header {...reveal(0.1, 12)} className="mb-5 shrink-0 text-center md:mb-6">
          <p className="slide-eyebrow mb-2 text-xs uppercase tracking-[0.35em] text-gold-400/60 md:text-sm">
            Slide 3
          </p>
          <h2 className="slide-title text-2xl font-semibold text-white md:text-4xl">
            The Marketing Ecosystem
          </h2>
          <p className="font-nepali slide-subtitle mt-1.5 text-gold-200/75 md:text-xl">
            मार्केटिङको परिक्रमा
          </p>
        </motion.header>

        <div className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-y-5 md:flex-nowrap md:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <motion.div
                className="flex w-[8.5rem] flex-col items-center text-center sm:w-32 md:min-w-[8.5rem] lg:min-w-[9.5rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.35 + i * 0.14, ease: EASE }}
              >
                <motion.div
                  className="relative mb-2.5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-400/40 bg-gold-400/[0.1] md:mb-3 md:h-[5.5rem] md:w-[5.5rem]"
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(201,162,39,0)',
                      '0 0 32px rgba(201,162,39,0.35)',
                      '0 0 0 rgba(201,162,39,0)',
                    ],
                  }}
                  transition={{ duration: 2.5, delay: i * 0.35, repeat: Infinity }}
                >
                  <span className="text-xl font-semibold text-gold-400 md:text-3xl">{i + 1}</span>
                </motion.div>
                <p className="text-base font-semibold uppercase tracking-wide text-white md:text-2xl">
                  {step.label}
                </p>
                <p className="font-nepali mt-0.5 text-sm text-gold-200/70 md:text-base">{step.ne}</p>
              </motion.div>

              {i < STEPS.length - 1 && <FlowPulse delay={0.5 + i * 0.2} />}
            </div>
          ))}
        </div>

        <motion.p
          className="mt-6 max-w-xl text-center text-sm text-white/45 md:mt-7 md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          Value flows — one step leads to the next.
        </motion.p>
      </div>
    </motion.section>
  )
}

function FlowPulse({ delay }) {
  return (
    <div className="relative mx-0.5 hidden h-2 w-6 overflow-hidden rounded-full bg-gold-400/15 md:mx-1 md:block md:w-10 lg:w-14">
      <motion.div
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold-400/90 to-transparent"
        initial={{ left: '-50%' }}
        animate={{ left: ['-50%', '120%'] }}
        transition={{ duration: 1.8, delay, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
