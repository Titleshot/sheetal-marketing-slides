import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const NEGATIVE_ITEMS = [
  { label: 'Bad reviews', ne: 'नराम्रो समीक्षा', Icon: StarIcon },
  { label: 'Complaints', ne: 'गुनासो', Icon: ComplaintIcon },
  { label: 'Refund requests', ne: 'फिर्ता माग', Icon: RefundIcon },
  { label: 'Lost trust', ne: 'विश्वास गुम्यो', Icon: TrustBrokenIcon },
  { label: 'Negative word of mouth', ne: 'नकारात्मक प्रचार', Icon: MouthIcon },
]

export default function Slide19CustomerDissatisfaction() {
  return (
    <motion.section
      className="slide-frame slide-focus slide19-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 19: Customer dissatisfaction"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,40,40,0.08)_0%,transparent_55%)]" />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide19-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 19
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          CUSTOMER DISSATISFACTION
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक असन्तुष्टि
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def mx-auto max-w-2xl">
          <p className="slide-focus-def-en">
            When reality fails to match expectation, customers feel disappointed.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            जब वास्तविक अनुभव अपेक्षाभन्दा कमजोर हुन्छ, ग्राहक निराश हुन्छ।
          </p>
        </motion.div>

        <div className="cd-review-wall cv-review-wall mx-auto grid w-full max-w-4xl shrink-0 grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
          {NEGATIVE_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              className="cd-review-card cv-review-card group relative overflow-hidden rounded-lg border border-red-400/15 bg-gradient-to-b from-red-950/30 to-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 + i * 0.08, duration: 0.65, ease: EASE }}
            >
              <div className="flex items-start gap-2.5">
                <span className="cd-review-icon flex shrink-0 items-center justify-center rounded-md border border-red-400/25 bg-red-400/10 text-red-300/80">
                  <item.Icon className="cd-review-icon-svg" />
                </span>
                <div className="min-w-0">
                  <p className="cd-review-label font-semibold text-white/80">{item.label}</p>
                  <p className="font-nepali cd-review-ne">{item.ne}</p>
                </div>
              </div>
              <motion.div
                className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-red-500/5 blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="cd-quote mx-auto max-w-2xl shrink-0 rounded-lg border border-white/10 bg-white/[0.03] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
        >
          <p className="cd-quote-en italic text-white/75">
            &ldquo;Product looked premium online, but arrived low quality.&rdquo;
          </p>
          <p className="font-nepali cd-quote-ne text-gold-300/60">
            Online मा राम्रो देखिएको सामान वास्तविकमा कमजोर आयो।
          </p>
        </motion.blockquote>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
        >
          <p className="slide-focus-line-en font-medium text-red-200/90">
            One bad experience can destroy years of trust.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            एउटा खराब अनुभवले वर्षौंको विश्वास तोड्न सक्छ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function ComplaintIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 8h12v8H6V8z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 10v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function RefundIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 8h12a4 4 0 010 8H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 12H4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function TrustBrokenIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4l7 3v5c0 4-2 7-7 8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 12l3 3 6-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function MouthIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 16c2 2 8 2 8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
