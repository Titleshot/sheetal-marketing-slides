import { motion } from 'framer-motion'
import SlideBackdrop from './SlideBackdrop'
import FloatingParticles from './FloatingParticles'
import { EASE, reveal } from './motion'

const SYSTEMS = [
  { en: 'AI recommendations', ne: 'AI सिफारिस' },
  { en: 'Loyalty systems', ne: 'Loyalty' },
  { en: 'Mobile apps', ne: 'मोबाइल app' },
  { en: 'Social engagement', ne: 'सामाजिक engagement' },
  { en: 'Notifications', ne: 'सूचना' },
  { en: 'CRM systems', ne: 'CRM' },
  { en: 'Personalized offers', ne: 'व्यक्तिगत offer' },
  { en: 'Memberships', ne: 'सदस्यता' },
  { en: 'Customer support', ne: 'सहयोग' },
  { en: 'Digital communities', ne: 'डिजिटल समुदाय' },
]

export default function Slide48ModernRelationshipEcosystem() {
  return (
    <motion.section
      className="slide-frame slide-focus slide48-frame crl-atmo-eco relative w-full overflow-visible rounded-sm bg-black shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Slide 48: Modern customer relationship ecosystem"
    >
      <SlideBackdrop glow="wide" />
      <FloatingParticles />
      <div className="crl-atmo-layer crl-atmo-eco-layer pointer-events-none absolute inset-0" aria-hidden />
      <div className="crl-eco-pathways pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="crl-eco-path crl-eco-path-a"
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="crl-eco-path crl-eco-path-b"
          animate={{ opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </div>

      <div className="slide-inner slide-focus-layout slide48-layout relative z-10">
        <motion.p {...reveal(0)} className="slide-focus-eyebrow">
          Slide 48
        </motion.p>
        <motion.h1 {...reveal(0.1)} className="slide-focus-title">
          MODERN CUSTOMER RELATIONSHIP ECOSYSTEM
        </motion.h1>
        <motion.p {...reveal(0.18)} className="slide-focus-subtitle font-nepali">
          आधुनिक ग्राहक सम्बन्ध प्रणाली
        </motion.p>

        <motion.div {...reveal(0.26)} className="slide-focus-def slide48-def mx-auto max-w-3xl">
          <p className="slide-focus-def-en">
            Modern marketing creates continuous customer connection through technology,
            personalization, and engagement.
          </p>
          <p className="font-nepali slide-focus-def-ne">
            आजको Marketing ले technology, personalization र engagement मार्फत continuous customer
            connection बनाउँछ।
          </p>
        </motion.div>

        <motion.div
          className="crl-mega-eco slide48-eco mx-auto shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.32, ease: EASE }}
        >
          <motion.div
            className="crl-mega-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          >
            <div className="crl-mega-core-glow" aria-hidden />
            <p className="crl-mega-core-en">Customer</p>
            <p className="font-nepali crl-mega-core-ne">ग्राहक</p>
          </motion.div>
          <div className="crl-mega-grid">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.en}
                className="crl-mega-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 + i * 0.06, duration: 0.55, ease: EASE }}
              >
                <p className="crl-mega-node-en">{sys.en}</p>
                <p className="font-nepali crl-mega-node-ne">{sys.ne}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.footer
          className="crl-finale-line crl-finale-line-eco slide48-finale mx-auto shrink-0 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.05, ease: EASE }}
        >
          <p className="crl-finale-en">
            Modern marketing is not a one-time interaction.
            <br />
            It is a continuous relationship ecosystem.
          </p>
          <p className="font-nepali crl-finale-ne">
            आजको Marketing एकपटकको interaction होइन।
            <br />
            यो continuous relationship ecosystem हो।
          </p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
