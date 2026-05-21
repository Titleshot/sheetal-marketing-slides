import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const GIVES = [
  { label: 'Money', ne: 'पैसा', Icon: MoneyIcon },
  { label: 'Time', ne: 'समय', Icon: TimeIcon },
  { label: 'Effort', ne: 'मेहनत', Icon: EffortIcon },
  { label: 'Trust', ne: 'विश्वास', Icon: TrustIcon },
]

const RECEIVES = [
  { label: 'Benefit', ne: 'फाइदा', Icon: BenefitIcon },
  { label: 'Convenience', ne: 'सुविधा', Icon: ConvenienceIcon },
  { label: 'Emotion', ne: 'भावना', Icon: EmotionIcon },
  { label: 'Identity', ne: 'पहिचान', Icon: IdentityIcon },
  { label: 'Solution', ne: 'समाधान', Icon: SolutionIcon },
]

export default function Slide16CustomerValue() {
  return (
    <motion.section
      className="slide-frame slide-focus slide16-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 16: Customer value"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide16-layout relative z-10">
        <div className="slide16-intro mx-auto w-full text-center">
          <motion.p {...reveal(0)} className="slide-focus-eyebrow">
            Slide 16
          </motion.p>
          <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl leading-tight">
            CUSTOMER VALUE
          </motion.h1>
          <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
            ग्राहक मूल्य
          </motion.p>

          <motion.div {...reveal(0.26)} className="cv-question mx-auto max-w-2xl">
            <p className="text-base font-medium text-white/90 md:text-lg">
              What makes a customer feel something is worth buying?
            </p>
            <p className="font-nepali mt-1 text-sm text-gold-200/75 md:text-base">
              ग्राहकलाई कुनै कुरा किन्न लायक छ भन्ने महसुस किन हुन्छ?
            </p>
          </motion.div>

          <motion.div {...reveal(0.34)} className="slide-focus-def mx-auto max-w-3xl">
            <p className="slide-focus-def-en">
              Customer value is the difference between what a customer receives and what they
              give up.
            </p>
            <p className="font-nepali slide-focus-def-ne">
              ग्राहकले पाएको फाइदा र तिरेको मूल्य/समय/मेहनत बीचको तुलना नै Customer Value हो।
            </p>
          </motion.div>
        </div>

        <div className="slide16-main-grid mx-auto w-full shrink-0">
          <div className="slide16-scale-cell flex items-center justify-center">
            <BalanceScaleVisual />
          </div>
          <ScaleColumn
            className="slide16-give-cell"
            title="Customer gives"
            titleNe="ग्राहकले दिन्छ"
            items={GIVES}
            side="give"
            delay={0.45}
          />
          <ScaleColumn
            className="slide16-receive-cell"
            title="Customer receives"
            titleNe="ग्राहकले पाउँछ"
            items={RECEIVES}
            side="receive"
            delay={0.52}
          />
        </div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.65, ease: EASE }}
        >
          <p className="slide-focus-line-en">High value feels bigger than the price.</p>
          <p className="font-nepali slide-focus-line-ne">
            जब पाएको फाइदा मूल्यभन्दा ठूलो लाग्छ, त्यही Customer Value हो।
          </p>
        </motion.footer>

        <div className="slide-scroll-spacer" aria-hidden />
      </div>
    </motion.section>
  )
}

function ScaleColumn({ className = '', title, titleNe, items, side, delay }) {
  return (
    <motion.div
      className={`cv-scale-col ${className} rounded-xl border px-3 py-2 md:px-3.5 md:py-2.5 ${
        side === 'give'
          ? 'border-white/12 bg-white/[0.03]'
          : 'border-gold-400/25 bg-gold-400/[0.06]'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      <p className="cv-col-title font-bold uppercase tracking-wider text-white/50">{title}</p>
      <p className="font-nepali cv-col-title-ne text-gold-300/55">{titleNe}</p>
      <ul className="mt-2.5">
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            className="flex items-center gap-2 py-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.08 + i * 0.05, duration: 0.45, ease: EASE }}
          >
            <span className="cv-item-icon flex shrink-0 items-center justify-center rounded-md border border-gold-400/20 bg-black/40 text-gold-400/90">
              <item.Icon className="cv-item-icon-svg" />
            </span>
            <span className="min-w-0">
              <span className="cv-item-label block font-medium leading-snug text-white/85">{item.label}</span>
              <span className="font-nepali cv-item-ne block leading-snug text-gold-300/50">{item.ne}</span>
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function BalanceScaleVisual() {
  return (
    <motion.div
      className="relative mx-auto flex h-14 w-full max-w-[7.5rem] items-end justify-center md:h-16 md:max-w-[8.5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
    >
      <svg viewBox="0 0 280 120" className="h-full w-full" aria-hidden>
        <path d="M140 25 L140 75" stroke="rgba(201,162,39,0.5)" strokeWidth="2" />
        <path d="M60 75 L220 75" stroke="rgba(201,162,39,0.45)" strokeWidth="2" />
        <path d="M140 75 L60 55 M140 75 L220 45" stroke="rgba(201,162,39,0.35)" strokeWidth="1.5" />
        <ellipse
          cx="60"
          cy="48"
          rx="28"
          ry="8"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
        />
        <ellipse
          cx="220"
          cy="38"
          rx="32"
          ry="10"
          fill="rgba(201,162,39,0.12)"
          stroke="rgba(201,162,39,0.45)"
          strokeWidth="1"
        />
        <rect x="125" y="75" width="30" height="8" rx="2" fill="rgba(201,162,39,0.2)" />
      </svg>
      <p className="absolute -bottom-3 left-1/2 w-max -translate-x-1/2 text-[8px] uppercase tracking-[0.3em] text-gold-400/50 md:text-[9px]">
        Value balance
      </p>
    </motion.div>
  )
}

function MoneyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 8v8M9 10h4a2 2 0 010 4h-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function TimeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function EffortIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 18c2-4 4-6 4-10 0-4 2-6 4-6s4 2 4 6c0 4 2 6 4 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TrustIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4l7 3v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function BenefitIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 14l4 4 12-12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ConvenienceIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function EmotionIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9 10h.01M15 10h.01M9 15c1 2 5 2 6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function IdentityIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 20c0-4 3-6 6-6s6 2 6 6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function SolutionIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
