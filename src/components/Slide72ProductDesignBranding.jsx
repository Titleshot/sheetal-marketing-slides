import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const BRANDING = [
  { en: 'Apple packaging', ne: 'Apple packaging' },
  { en: 'Nike branding', ne: 'Nike' },
  { en: 'Luxury perfume', ne: 'Perfume' },
  { en: 'Minimal design', ne: 'Minimal' },
  { en: 'Logo systems', ne: 'Logo' },
]

const FOCUS = [
  { en: 'Emotional attraction', ne: 'आकर्षण' },
  { en: 'First impression', ne: 'पहिलो प्रभाव' },
  { en: 'Aesthetics', ne: 'सौन्दर्य' },
  { en: 'Identity', ne: 'पहिचान' },
]

export default function Slide72ProductDesignBranding() {
  return (
    <motion.section
      className="slide-frame slide-focus slide72-frame mix-atmo-brand relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 72: Product design and branding"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="mix-atmo-layer mix-atmo-brand-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide72-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow mix-eyebrow mix-eyebrow-product">
          Slide 72
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title mix-title-glow mix-title-product">
          PRODUCT DESIGN & BRANDING
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Product Design र Branding
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Design and branding strongly influence customer emotions and perception.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            Design र Branding ले ग्राहकको भावना र perception लाई धेरै असर गर्छ।
          </p>
        </motion.div>

        <div className="mix-brand-grid mx-auto grid w-full max-w-4xl shrink-0 gap-3 lg:grid-cols-[1fr_1.1fr]">
          <div className="mix-brand-cards">
            {BRANDING.map((b, i) => (
              <motion.div
                key={b.en}
                className="mix-brand-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.36 + i * 0.08, duration: 0.55, ease: EASE }}
              >
                <span className="mix-brand-shine" aria-hidden />
                <p className="mix-brand-card-en">{b.en}</p>
                <p className="font-nepali mix-brand-card-ne">{b.ne}</p>
              </motion.div>
            ))}
          </div>
          <div className="mix-brand-focus">
            {FOCUS.map((f, i) => (
              <motion.div
                key={f.en}
                className="mix-brand-focus-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48 + i * 0.07, duration: 0.5, ease: EASE }}
              >
                <p className="mix-brand-focus-en">{f.en}</p>
                <p className="font-nepali mix-brand-focus-ne">{f.ne}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mix-insight-box mix-insight-brand mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.85, ease: EASE }}
        >
          <p className="mix-insight-en">People judge products emotionally before logically.</p>
          <p className="font-nepali mix-insight-ne">
            मानिसहरूले Product लाई पहिले emotionally अनि पछि logically judge गर्छन्।
          </p>
        </motion.div>

        <motion.footer
          className="mix-finale-line mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.98, ease: EASE }}
        >
          <p className="mix-finale-en">
            Strong branding creates recognition, trust, and emotional connection.
          </p>
          <p className="font-nepali mix-finale-ne">
            राम्रो Branding ले recognition, trust र emotional connection बनाउँछ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
