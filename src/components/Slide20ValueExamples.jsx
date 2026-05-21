import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const BRANDS = [
  {
    id: 'apple',
    name: 'APPLE',
    value: 'Identity + smooth experience',
    ne: 'पहिचान र सहज अनुभव',
    accent: 'border-white/20 bg-gradient-to-b from-white/[0.08] to-transparent',
    glow: 'rgba(255,255,255,0.12)',
    delay: 0.42,
  },
  {
    id: 'pathao',
    name: 'PATHAO',
    value: 'Convenience + time saving',
    ne: 'सुविधा र समय बचत',
    accent: 'border-emerald-500/25 bg-gradient-to-b from-emerald-500/[0.1] to-transparent',
    glow: 'rgba(16,185,129,0.18)',
    delay: 0.55,
  },
  {
    id: 'daraz',
    name: 'DARAZ',
    value: 'Variety + delivery access',
    ne: 'विविधता र डेलिभरी',
    accent: 'border-orange-500/25 bg-gradient-to-b from-orange-500/[0.1] to-transparent',
    glow: 'rgba(249,115,22,0.18)',
    delay: 0.68,
  },
  {
    id: 'starbucks',
    name: 'STARBUCKS',
    value: 'Atmosphere + lifestyle',
    ne: 'वातावरण र जीवनशैली',
    accent: 'border-emerald-700/25 bg-gradient-to-b from-emerald-800/[0.12] to-transparent',
    glow: 'rgba(5,150,105,0.15)',
    delay: 0.81,
  },
  {
    id: 'netflix',
    name: 'NETFLIX',
    value: 'Entertainment + personalization',
    ne: 'मनोरञ्जन र व्यक्तिगत अनुभव',
    accent: 'border-red-500/25 bg-gradient-to-b from-red-500/[0.1] to-transparent',
    glow: 'rgba(239,68,68,0.18)',
    delay: 0.94,
  },
]

export default function Slide20ValueExamples() {
  return (
    <motion.section
      className="slide-frame slide-focus slide20-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 20: Value in the real world"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide20-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 20
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          VALUE IN THE REAL WORLD
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          वास्तविक जीवनमा Customer Value
        </motion.p>

        <div className="vw-brand-grid mo-brand-grid cv-value-grid mx-auto w-full max-w-5xl shrink-0">
          {BRANDS.map((brand) => (
            <motion.article
              key={brand.id}
              className={`vw-brand-card mo-brand-card relative overflow-hidden rounded-xl border text-center ${brand.accent}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: brand.delay, ease: EASE }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${brand.glow} 0%, transparent 70%)` }}
                animate={{ opacity: [0.3, 0.65, 0.3] }}
                transition={{ duration: 3.5, delay: brand.delay, repeat: Infinity }}
              />
              <p className="vw-brand-name relative font-bold tracking-[0.12em] text-white">
                {brand.name}
              </p>
              <p className="vw-brand-value relative mt-2 leading-snug text-gold-200/88">
                Value: {brand.value}
              </p>
              <p className="font-nepali vw-brand-ne relative mt-1.5 text-gold-300/60">{brand.ne}</p>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="slide-focus-final mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: EASE }}
        >
          <p className="slide-focus-final-en">
            Great marketing does not end after selling. It continues through value and satisfaction.
          </p>
          <p className="font-nepali slide-focus-final-ne">
            राम्रो Marketing बिक्रीपछि सकिँदैन। यो Value र Satisfaction मार्फत अगाडि बढ्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
