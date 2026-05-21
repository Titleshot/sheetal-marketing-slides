import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const LAYERS = [
  {
    en: 'Core product',
    ne: 'Core Product',
    descEn: 'Basic benefit',
    descNe: 'मूल लाभ',
    level: 1,
  },
  {
    en: 'Actual product',
    ne: 'Actual Product',
    descEn: 'Design, packaging, quality, branding',
    descNe: 'Design, packaging, quality',
    level: 2,
  },
  {
    en: 'Augmented product',
    ne: 'Augmented Product',
    descEn: 'Warranty, support, service, experience',
    descNe: 'Warranty, support, ecosystem',
    level: 3,
    highlight: true,
  },
]

export default function Slide71ProductLevels() {
  return (
    <motion.section
      className="slide-frame slide-focus slide71-frame mix-atmo-layers relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 71: Product levels"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-layers-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide71-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-product">
          Slide 71
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-product">
          PRODUCT LEVELS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Product का स्तरहरू
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">Modern products contain multiple layers of value.</p>
          <p className="font-nepali slide-focus-def-ne">आजका Product हरूमा विभिन्न स्तरको value हुन्छ।</p>
        </motion.div>

        <motion.div
          className="mix-layers-stack mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: EASE }}
        >
          <div className="mix-layers-core-label">
            <p className="mix-layers-core-en">Product core</p>
            <p className="font-nepali mix-layers-core-ne">Product केन्द्र</p>
          </div>
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.en}
              className={`mix-layer-ring mix-layer-ring-${layer.level}${
                layer.highlight ? ' mix-layer-ring-final' : ''
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 + i * 0.12, duration: 0.65, ease: EASE }}
            >
              <p className="mix-layer-en">{layer.en}</p>
              <p className="font-nepali mix-layer-ne">{layer.ne}</p>
              <p className="mix-layer-desc-en">{layer.descEn}</p>
              <p className="font-nepali mix-layer-desc-ne">{layer.descNe}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mix-example-box mx-auto max-w-md shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.7, ease: EASE }}
        >
          <p className="mix-example-title">iPhone example</p>
          <p className="mix-example-line">Communication → Premium device → Apple ecosystem + support</p>
          <p className="font-nepali mix-example-line-ne">सञ्चार → Premium → Ecosystem + support</p>
        </motion.div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, ease: EASE }}
        >
          <p className="mix-finale-en">Modern products deliver more than basic functionality.</p>
          <p className="font-nepali mix-finale-ne">आजका Product हरूले basic function भन्दा धेरै value दिन्छन्।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
