import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const ORBIT_ITEMS = [
  { label: 'Phone', Icon: PhoneIcon, angle: 0 },
  { label: 'Coffee', Icon: CoffeeIcon, angle: 51 },
  { label: 'Shoes', Icon: ShoeIcon, angle: 103 },
  { label: 'Taxi', Icon: TaxiIcon, angle: 154 },
  { label: 'Stream', Icon: StreamIcon, angle: 206 },
  { label: 'Hotel', Icon: HotelIcon, angle: 257 },
  { label: 'Luxury', Icon: SparkleIcon, angle: 309 },
]

export default function Slide11MarketOfferings() {
  return (
    <motion.section
      className="slide-frame slide-focus slide11-frame relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 11: Market offerings"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />

      <div className="slide-inner slide-focus-layout slide11-layout relative z-10">
        <motion.p {...reveal(0, 8)} className="slide-focus-eyebrow">
          Slide 11
        </motion.p>
        <motion.h1 {...reveal(0.12, 12)} className="slide-focus-title">
          MARKET OFFERINGS
        </motion.h1>
        <motion.p {...reveal(0.25, 10)} className="slide-focus-subtitle font-nepali">
          बजारका प्रस्तावहरू
        </motion.p>

        <motion.div {...reveal(0.38, 10)} className="slide-focus-def max-w-2xl">
          <p className="slide-focus-def-en">
            Businesses exist to satisfy human wants and needs.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            मानिसको आवश्यकता र चाहना पूरा गर्न व्यवसाय अस्तित्वमा हुन्छ।
          </p>
        </motion.div>

        <div className="slide11-orbit-stage">
          <div className="slide11-orbit-disk">
            <motion.svg
              className="slide11-orbit-track pointer-events-none absolute inset-0"
              viewBox="0 0 200 200"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(201,162,39,0.2)" strokeWidth="0.75" strokeDasharray="4 6" />
            </motion.svg>

            <motion.div
              className="slide11-orbit-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
            >
              {ORBIT_ITEMS.map((item, i) => (
                <OrbitNode key={item.label} item={item} index={i} />
              ))}
            </motion.div>

            <motion.div
              className="slide11-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
            >
              <motion.div
                className="slide11-center-glow"
                animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
              <svg viewBox="0 0 80 140" className="slide11-silhouette" aria-hidden>
                <ellipse cx="40" cy="18" rx="14" ry="16" fill="rgba(255,255,255,0.1)" stroke="rgba(201,162,39,0.5)" strokeWidth="1.2" />
                <path
                  d="M40 34 L40 88 M40 52 L22 72 M40 52 L58 72 M40 88 L28 118 M40 88 L52 118"
                  stroke="rgba(201,162,39,0.6)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        <motion.footer
          className="slide-focus-quote-block shrink-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 2.1, ease: EASE }}
        >
          <p className="slide-focus-line-en font-medium not-italic">
            Modern businesses offer more than physical products.
          </p>
          <p className="font-nepali slide-focus-line-ne">
            आजका व्यवसायहरूले केवल सामान मात्र बेच्दैनन्।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function OrbitNode({ item, index }) {
  return (
    <div className="slide11-orbit-node" style={{ '--orbit-angle': `${item.angle}deg` }}>
      <motion.div
        className="slide11-orbit-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{
          opacity: { delay: 0.55 + index * 0.1, duration: 0.65, ease: EASE },
          y: { duration: 3.5 + index * 0.2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="slide11-orbit-icon">
          <item.Icon className="slide11-orbit-icon-svg" />
        </div>
        <span className="slide11-orbit-label">{item.label}</span>
      </motion.div>
    </div>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function CoffeeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 10h11v6a4 4 0 01-4 4H9a4 4 0 01-4-4v-6z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 11h2a2 2 0 010 4h-2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function ShoeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 14c3-1.5 7-2 12-1.5s7 0.5 9 1.5v3H3v-3z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function TaxiIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="10" width="18" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function StreamIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 9l4 3-4 3V9z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

function HotelIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V8l8-4 8 4v12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="9" y="12" width="6" height="8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function SparkleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}
