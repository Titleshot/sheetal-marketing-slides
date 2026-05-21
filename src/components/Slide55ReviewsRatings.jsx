import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const REVIEWS = [
  { en: 'Google reviews', ne: 'Google', stars: 5 },
  { en: 'Amazon ratings', ne: 'Amazon', stars: 5 },
  { en: 'Daraz reviews', ne: 'Daraz', stars: 4 },
  { en: 'Restaurant stars', ne: 'Restaurant', stars: 5 },
  { en: 'Customer feedback', ne: 'Feedback', stars: 5 },
]

function StarRow({ count }) {
  return (
    <span className="cgm-stars" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'cgm-star cgm-star-on' : 'cgm-star'}>
          ★
        </span>
      ))}
    </span>
  )
}

export default function Slide55ReviewsRatings() {
  return (
    <motion.section
      className="slide-frame slide-focus slide55-frame cgm-atmo-trust relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 55: Reviews and ratings"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="cgm-atmo-layer cgm-atmo-trust-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide55-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow cgm-eyebrow">
          Slide 55
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title cgm-title-glow">
          REVIEWS & RATINGS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          Reviews र Ratings
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Customers trust other customers more than advertisements.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकहरूले विज्ञापनभन्दा अन्य ग्राहकलाई बढी विश्वास गर्छन्।
          </p>
        </motion.div>

        <div className="cgm-review-grid mx-auto grid w-full max-w-4xl shrink-0 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.en}
              className="cgm-review-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 + i * 0.1, duration: 0.6, ease: EASE }}
            >
              <motion.div
                className="cgm-review-trust"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
              >
                Verified
              </motion.div>
              <StarRow count={r.stars} />
              <p className="cgm-review-en">{r.en}</p>
              <p className="font-nepali cgm-review-ne">{r.ne}</p>
              <p className="cgm-review-quote">Great experience!</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cgm-insight-box cgm-insight-trust mx-auto max-w-2xl shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.85, ease: EASE }}
        >
          <p className="cgm-insight-en">Reviews became modern trust signals.</p>
          <p className="font-nepali cgm-insight-ne">Reviews आधुनिक trust signal बने।</p>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, ease: EASE }}
        >
          <p className="slide-focus-line-en">One positive review can attract many customers.</p>
          <p className="font-nepali slide-focus-line-ne">एउटा राम्रो review ले धेरै ग्राहक आकर्षित गर्न सक्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
