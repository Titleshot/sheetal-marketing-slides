import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const BRANDS = [
  {
    id: 'apple',
    name: 'APPLE',
    sells: 'sells identity',
    ne: 'पहिचान बेच्छ',
    accent: 'border-white/20 bg-gradient-to-b from-white/[0.08] to-transparent',
    glow: 'rgba(255,255,255,0.15)',
    delay: 0.42,
  },
  {
    id: 'nike',
    name: 'NIKE',
    sells: 'sells motivation',
    ne: 'प्रेरणा बेच्छ',
    accent: 'border-orange-500/25 bg-gradient-to-b from-orange-500/[0.1] to-transparent',
    glow: 'rgba(249,115,22,0.2)',
    delay: 0.55,
  },
  {
    id: 'starbucks',
    name: 'STARBUCKS',
    sells: 'sells atmosphere',
    ne: 'वातावरण बेच्छ',
    accent: 'border-emerald-600/25 bg-gradient-to-b from-emerald-600/[0.1] to-transparent',
    glow: 'rgba(5,150,105,0.2)',
    delay: 0.68,
  },
  {
    id: 'tiktok',
    name: 'TIKTOK',
    sells: 'sells attention & dopamine',
    ne: 'ध्यान र डोपामिन',
    accent: 'border-fuchsia-500/25 bg-gradient-to-b from-fuchsia-500/[0.1] to-transparent',
    glow: 'rgba(217,70,239,0.2)',
    delay: 0.81,
  },
  {
    id: 'pathao',
    name: 'PATHAO',
    sells: 'sells convenience',
    ne: 'सुविधा बेच्छ',
    accent: 'border-gold-400/30 bg-gradient-to-b from-gold-400/[0.12] to-transparent',
    glow: 'rgba(201,162,39,0.25)',
    delay: 0.94,
  },
]

export default function Slide15ModernMarketing() {
  return (
    <motion.section
      className="slide-frame slide-focus slide15-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 15: Modern marketing today"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide15-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 15
        </motion.p>
        <motion.h1 {...reveal(0.12, 12)} className="slide-focus-title">
          MODERN MARKETING TODAY
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          आजको Marketing
        </motion.p>

        <div className="mo-brand-grid w-full max-w-5xl flex-1 min-h-0">
          {BRANDS.map((brand) => (
            <motion.article
              key={brand.id}
              className={`mo-brand-card relative overflow-hidden rounded-xl border px-3 py-3 text-center md:px-4 md:py-4 ${brand.accent}`}
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: brand.delay, ease: EASE }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${brand.glow} 0%, transparent 70%)` }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3.5, delay: brand.delay, repeat: Infinity }}
              />
              <p className="relative text-sm font-bold tracking-[0.15em] text-white md:text-base">
                {brand.name}
              </p>
              <p className="relative mt-1.5 text-[11px] font-medium italic text-gold-200/90 md:text-sm">
                {brand.sells}
              </p>
              <p className="font-nepali relative mt-1 text-[10px] text-gold-300/55 md:text-xs">
                {brand.ne}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="slide-focus-final shrink-0 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.35, ease: EASE }}
        >
          <p className="slide-focus-final-en">
            Modern marketing is not about selling products.
            <br />
            It is about creating meaning.
          </p>
          <p className="font-nepali slide-focus-final-ne">
            आजको Marketing केवल सामान बेच्ने कुरा होइन। यसले अर्थ र अनुभव निर्माण गर्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
