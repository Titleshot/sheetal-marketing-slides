import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const PAIRS = [
  { left: { en: 'Trust', ne: 'विश्वास' }, right: { en: 'Communication', ne: 'सञ्चार' } },
  { left: { en: 'Support', ne: 'सहयोग' }, right: { en: 'Personalization', ne: 'व्यक्तिगत अनुभव' } },
  { left: { en: 'Loyalty', ne: 'वफादारी' }, right: { en: 'Engagement', ne: 'सहभागिता' } },
]

export default function Slide35ManagingCustomerRelationships() {
  return (
    <motion.section
      className="slide-frame slide-focus slide35-frame crm-atmo-intro relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 35: Managing customer relationships intro"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crm-atmo-layer crm-atmo-intro-layer pointer-events-none absolute inset-0" aria-hidden />

      <div className="slide-inner slide-focus-layout slide-layout-dense slide35-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 35
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title slide-focus-title-xl">
          MANAGING CUSTOMER RELATIONSHIPS
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          ग्राहक सम्बन्ध व्यवस्थापन
        </motion.p>

        <motion.div {...reveal(0.26)} className="crm-hook mx-auto max-w-2xl">
          <p className="crm-hook-en">
            Why do successful brands keep customers connected for years?
          </p>
          <p className="font-nepali crm-hook-ne">
            किन सफल Brand हरूले ग्राहकलाई वर्षौंसम्म जोडेर राख्छन्?
          </p>
        </motion.div>

        <motion.div {...reveal(0.34)} className="slide-focus-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern businesses focus on building long-term customer relationships.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आधुनिक व्यवसायहरूले ग्राहकसँग लामो सम्बन्ध निर्माण गर्न ध्यान दिन्छन्।
          </p>
        </motion.div>

        <motion.div
          className="crm-rel-eco mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        >
          <motion.div
            className="crm-rel-customer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
          >
            <svg viewBox="0 0 80 100" className="crm-rel-silhouette" aria-hidden>
              <ellipse cx="40" cy="14" rx="12" ry="13" fill="rgba(255,255,255,0.06)" stroke="rgba(201,162,39,0.55)" strokeWidth="1.2" />
              <path d="M40 27 L40 68 M40 42 L26 58 M40 42 L54 58 M40 68 L32 92 M40 68 L48 92" stroke="rgba(201,162,39,0.65)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            </svg>
            <p className="crm-rel-customer-en">Customer</p>
            <p className="font-nepali crm-rel-customer-ne">ग्राहक</p>
          </motion.div>

          <div className="crm-rel-matrix">
            {PAIRS.map((pair, i) => (
              <CrmRelRow key={pair.left.en} pair={pair} index={i} delay={0.52 + i * 0.08} />
            ))}
          </div>
        </motion.div>

        <motion.footer
          className="slide-focus-footer-line mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        >
          <p className="slide-focus-line-en">Strong relationships create long-term business success.</p>
          <p className="font-nepali slide-focus-line-ne">
            मजबुत सम्बन्धले दीर्घकालीन Business सफलता ल्याउँछ।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}

function CrmRelRow({ pair, index, delay }) {
  return (
    <div className="crm-rel-row">
      <motion.div className="crm-rel-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: 0.55, ease: EASE }}>
        <p className="crm-rel-card-en">{pair.left.en}</p>
        <p className="font-nepali crm-rel-card-ne">{pair.left.ne}</p>
      </motion.div>
      <div className="crm-rel-link" aria-hidden>
        <span className="crm-rel-link-bar" />
        <span className="crm-rel-link-dot" style={{ animationDelay: `${index * 0.25}s` }} />
        <span className="crm-rel-link-bar" />
      </div>
      <motion.div className="crm-rel-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.04, duration: 0.55, ease: EASE }}>
        <p className="crm-rel-card-en">{pair.right.en}</p>
        <p className="font-nepali crm-rel-card-ne">{pair.right.ne}</p>
      </motion.div>
    </div>
  )
}
