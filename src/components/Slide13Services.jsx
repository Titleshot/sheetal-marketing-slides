import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SERVICES = [
  { id: 'pathao', name: 'Pathao ride', ne: 'सवारी सेवा', Icon: RideIcon, delay: 0.48 },
  { id: 'hotel', name: 'Hotel service', ne: 'होटल सेवा', Icon: HotelIcon, delay: 0.62 },
  { id: 'netflix', name: 'Netflix', ne: 'स्ट्रिमिङ', Icon: StreamIcon, delay: 0.76 },
  { id: 'consult', name: 'Consultancy', ne: 'परामर्श', Icon: ConsultIcon, delay: 0.9 },
  { id: 'delivery', name: 'Food delivery', ne: 'खाना डेलिभरी', Icon: DeliveryIcon, delay: 1.04 },
]

export default function Slide13Services() {
  return (
    <motion.section
      className="slide-frame slide-focus slide13-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 13: Services"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide13-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 13
        </motion.p>
        <motion.h1 {...reveal(0.12, 14)} className="slide-focus-title slide-focus-title-xl">
          SERVICES
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          सेवाहरू
        </motion.p>

        <motion.div {...reveal(0.35, 12)} className="slide-focus-def max-w-2xl">
          <p className="slide-focus-def-en">
            Services are activities or benefits offered to customers.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            ग्राहकलाई प्रदान गरिने सुविधा वा कार्यलाई Services भनिन्छ।
          </p>
        </motion.div>

        <div className="slide13-split grid w-full max-w-5xl shrink-0 grid-cols-1 gap-4 md:grid-cols-[1fr_1.1fr_1fr] md:gap-5">
          <motion.div
            className="mo-service-col flex flex-col gap-3 md:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            {SERVICES.slice(0, 2).map((s) => (
              <ServiceTile key={s.id} service={s} />
            ))}
          </motion.div>

          <motion.div
            className="mo-service-highlight flex flex-col items-center justify-center rounded-xl border border-gold-400/30 bg-gradient-to-b from-gold-400/[0.1] to-transparent px-5 py-6 md:px-6 md:py-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 shadow-[0_0_32px_rgba(201,162,39,0.2)]" />
            <p className="text-base font-semibold leading-snug text-white md:text-lg">
              You cannot touch a service — but you can experience it.
            </p>
            <p className="font-nepali mt-2 text-sm leading-snug text-gold-200/75 md:text-base">
              Service लाई छुन सकिँदैन, तर अनुभव गर्न सकिन्छ।
            </p>
          </motion.div>

          <motion.div
            className="mo-service-col flex flex-col gap-3 md:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            {SERVICES.slice(2).map((s) => (
              <ServiceTile key={s.id} service={s} />
            ))}
          </motion.div>
        </div>

        <motion.footer
          className="slide-focus-footer-line mt-2 shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.9, ease: EASE }}
        >
          <p className="slide-focus-line-en">Great service creates trust.</p>
          <p className="font-nepali slide-focus-line-ne">राम्रो Service ले विश्वास निर्माण गर्छ।</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function ServiceTile({ service }) {
  return (
    <motion.div
      className="mo-service-tile group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 transition-colors hover:border-gold-400/35 md:px-4 md:py-3.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: service.delay, ease: EASE }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold-400/25 bg-gold-400/[0.08] text-gold-400 md:h-12 md:w-12">
        <service.Icon className="h-5 w-5 md:h-6 md:w-6" />
      </div>
      <div className="min-w-0 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-white/90 md:text-base">
          {service.name}
        </p>
        <p className="font-nepali text-xs text-gold-300/60 md:text-sm">{service.ne}</p>
      </div>
    </motion.div>
  )
}

function RideIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 17 L12 9 L15 12 L17 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function HotelIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V8l8-4 8 4v12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function StreamIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 9l4 3-4 3V9z" fill="currentColor" fillOpacity="0.35" />
    </svg>
  )
}

function ConsultIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 20c0-4 3-6 6-6s6 2 6 6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function DeliveryIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 8h12v8H3V8z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M15 10h4l3 4v2h-7v-6z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
