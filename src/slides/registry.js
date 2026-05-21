import Slide1Hook from '../components/Slide1Hook'
import Slide2WhatIsMarketing from '../components/Slide2WhatIsMarketing'
import Slide3Ecosystem from '../components/Slide3Ecosystem'
import Slide4OldVsModern from '../components/Slide4OldVsModern'
import Slide5Examples from '../components/Slide5Examples'
import Slide6HumanDesire from '../components/Slide6HumanDesire'
import Slide7Needs from '../components/Slide7Needs'
import Slide8Wants from '../components/Slide8Wants'
import Slide9Demands from '../components/Slide9Demands'
import Slide10Comparison from '../components/Slide10Comparison'
import Slide11MarketOfferings from '../components/Slide11MarketOfferings'
import Slide12Products from '../components/Slide12Products'
import Slide13Services from '../components/Slide13Services'
import Slide14Experiences from '../components/Slide14Experiences'
import Slide15ModernMarketing from '../components/Slide15ModernMarketing'
import Slide16CustomerValue from '../components/Slide16CustomerValue'
import Slide17ExpectationReality from '../components/Slide17ExpectationReality'
import Slide18CustomerSatisfaction from '../components/Slide18CustomerSatisfaction'
import Slide19CustomerDissatisfaction from '../components/Slide19CustomerDissatisfaction'
import Slide20ValueExamples from '../components/Slide20ValueExamples'
import Slide21Exchange from '../components/Slide21Exchange'
import Slide22Relationship from '../components/Slide22Relationship'
import Slide23TransactionVsRelationship from '../components/Slide23TransactionVsRelationship'
import Slide24Trust from '../components/Slide24Trust'
import Slide25ModernRelationshipMarketing from '../components/Slide25ModernRelationshipMarketing'
import Slide26MarketingOrientation from '../components/Slide26MarketingOrientation'
import Slide27ProductionConcept from '../components/Slide27ProductionConcept'
import Slide28ProductConcept from '../components/Slide28ProductConcept'
import Slide29SellingConcept from '../components/Slide29SellingConcept'
import Slide30MarketingConcept from '../components/Slide30MarketingConcept'
import Slide31SocietalMarketing from '../components/Slide31SocietalMarketing'
import Slide32HolisticMarketing from '../components/Slide32HolisticMarketing'
import Slide33EvolutionOfMarketing from '../components/Slide33EvolutionOfMarketing'
import Slide34ModernRealization from '../components/Slide34ModernRealization'
import Slide35ManagingCustomerRelationships from '../components/Slide35ManagingCustomerRelationships'
import Slide36EngagingCustomers from '../components/Slide36EngagingCustomers'
import Slide37CRM from '../components/Slide37CRM'
import Slide38WhyRelationshipsMatter from '../components/Slide38WhyRelationshipsMatter'
import Slide39ModernConnectionSystems from '../components/Slide39ModernConnectionSystems'
import Slide40CustomerSatisfactionLoop from '../components/Slide40CustomerSatisfactionLoop'
import Slide41WhatCreatesSatisfaction from '../components/Slide41WhatCreatesSatisfaction'
import Slide42ExpectationExperience from '../components/Slide42ExpectationExperience'
import Slide43SatisfactionToLoyalty from '../components/Slide43SatisfactionToLoyalty'
import Slide44RelationshipLevels from '../components/Slide44RelationshipLevels'
import Slide45RelationshipTools from '../components/Slide45RelationshipTools'
import Slide46Personalization from '../components/Slide46Personalization'
import Slide47LoyaltySystems from '../components/Slide47LoyaltySystems'
import Slide48ModernRelationshipEcosystem from '../components/Slide48ModernRelationshipEcosystem'
import Slide49CustomerEngagement from '../components/Slide49CustomerEngagement'
import Slide50DigitalSocialMarketing from '../components/Slide50DigitalSocialMarketing'
import Slide51AttentionEconomy from '../components/Slide51AttentionEconomy'
import Slide52ContentViralityInfluencers from '../components/Slide52ContentViralityInfluencers'
import Slide53ModernDigitalEngagement from '../components/Slide53ModernDigitalEngagement'
import Slide54ConsumerGeneratedMarketing from '../components/Slide54ConsumerGeneratedMarketing'
import Slide55ReviewsRatings from '../components/Slide55ReviewsRatings'
import Slide56UnboxingUserContent from '../components/Slide56UnboxingUserContent'
import Slide57InfluencersCommunity from '../components/Slide57InfluencersCommunity'
import Slide58ModernSocialProof from '../components/Slide58ModernSocialProof'
import Slide59CapturingValueIntro from '../components/Slide59CapturingValueIntro'
import Slide60CustomerLifetimeValue from '../components/Slide60CustomerLifetimeValue'
import Slide61CustomerRetention from '../components/Slide61CustomerRetention'
import Slide62BrandLoyalty from '../components/Slide62BrandLoyalty'
import Slide63ValueCaptureEcosystem from '../components/Slide63ValueCaptureEcosystem'
import Slide64CustomerLoyaltyIntro from '../components/Slide64CustomerLoyaltyIntro'
import Slide65PsychologyOfLoyalty from '../components/Slide65PsychologyOfLoyalty'
import Slide66HabitsBrandEcosystems from '../components/Slide66HabitsBrandEcosystems'
import Slide67RetentionStrategies from '../components/Slide67RetentionStrategies'
import Slide68LoyaltyLoop from '../components/Slide68LoyaltyLoop'
import Slide69MarketingMixIntro from '../components/Slide69MarketingMixIntro'
import Slide70Product from '../components/Slide70Product'
import Slide71ProductLevels from '../components/Slide71ProductLevels'
import Slide72ProductDesignBranding from '../components/Slide72ProductDesignBranding'
import Slide73ModernProductEcosystem from '../components/Slide73ModernProductEcosystem'
import Slide74Price from '../components/Slide74Price'
import Slide75PricingStrategies from '../components/Slide75PricingStrategies'
import Slide76PsychologyOfPrice from '../components/Slide76PsychologyOfPrice'
import Slide77PlaceDistribution from '../components/Slide77PlaceDistribution'
import Slide78ModernConvenienceEcosystem from '../components/Slide78ModernConvenienceEcosystem'
import Slide79Promotion from '../components/Slide79Promotion'
import Slide80AdvertisingStorytelling from '../components/Slide80AdvertisingStorytelling'
import Slide81EmotionalBranding from '../components/Slide81EmotionalBranding'
import Slide82IntegratedMarketingCommunication from '../components/Slide82IntegratedMarketingCommunication'
import Slide83CompleteMarketingMixEcosystem from '../components/Slide83CompleteMarketingMixEcosystem'
import Slide84FinalChapterConclusion from '../components/Slide84FinalChapterConclusion'

/**
 * Single source of truth for slides + TOC.
 * Add a new entry here when you create a slide — it appears in nav & TOC automatically.
 */
export const SLIDES = [
  {
    id: 'hook',
    title: 'Why Do People Buy?',
    titleNe: 'किन किन्छन् जुन चाहिदैन?',
    section: 'Introduction to Marketing',
    Component: Slide1Hook,
  },
  {
    id: 'what-is-marketing',
    title: 'What Is Marketing?',
    titleNe: 'Marketing के हो?',
    section: 'Introduction to Marketing',
    Component: Slide2WhatIsMarketing,
  },
  {
    id: 'ecosystem',
    title: 'The Marketing Ecosystem',
    titleNe: 'मार्केटिङको परिक्रमा',
    section: 'Introduction to Marketing',
    Component: Slide3Ecosystem,
  },
  {
    id: 'old-vs-modern',
    title: 'Old vs Modern Marketing',
    titleNe: 'पुरानो vs आधुनिक',
    section: 'Introduction to Marketing',
    Component: Slide4OldVsModern,
  },
  {
    id: 'examples',
    title: 'Real World Examples',
    titleNe: 'वास्तविक उदाहरण',
    section: 'Introduction to Marketing',
    Component: Slide5Examples,
  },
  {
    id: 'human-desire',
    title: 'Understanding Human Desire',
    titleNe: 'मानिसको चाहना बुझ्ने',
    section: 'Needs, Wants & Demands',
    Component: Slide6HumanDesire,
  },
  {
    id: 'needs',
    title: 'Needs',
    titleNe: 'आवश्यकता',
    section: 'Needs, Wants & Demands',
    Component: Slide7Needs,
  },
  {
    id: 'wants',
    title: 'Wants',
    titleNe: 'चाहना',
    section: 'Needs, Wants & Demands',
    Component: Slide8Wants,
  },
  {
    id: 'demands',
    title: 'Demands',
    titleNe: 'माग',
    section: 'Needs, Wants & Demands',
    Component: Slide9Demands,
  },
  {
    id: 'needs-wants-demands',
    title: 'Needs vs Wants vs Demands',
    titleNe: 'तुलना',
    section: 'Needs, Wants & Demands',
    Component: Slide10Comparison,
  },
  {
    id: 'market-offerings',
    title: 'Market Offerings',
    titleNe: 'बजारका प्रस्तावहरू',
    section: 'Products, Services & Experiences',
    Component: Slide11MarketOfferings,
  },
  {
    id: 'products',
    title: 'Products',
    titleNe: 'भौतिक सामान',
    section: 'Products, Services & Experiences',
    Component: Slide12Products,
  },
  {
    id: 'services',
    title: 'Services',
    titleNe: 'सेवाहरू',
    section: 'Products, Services & Experiences',
    Component: Slide13Services,
  },
  {
    id: 'experiences',
    title: 'Experiences',
    titleNe: 'अनुभवहरू',
    section: 'Products, Services & Experiences',
    Component: Slide14Experiences,
  },
  {
    id: 'modern-marketing',
    title: 'Modern Marketing Today',
    titleNe: 'आजको Marketing',
    section: 'Products, Services & Experiences',
    Component: Slide15ModernMarketing,
  },
  {
    id: 'customer-value',
    title: 'Customer Value',
    titleNe: 'ग्राहक मूल्य',
    section: 'Customer Value & Satisfaction',
    Component: Slide16CustomerValue,
  },
  {
    id: 'expectation-reality',
    title: 'Expectation vs Reality',
    titleNe: 'अपेक्षा vs वास्तविकता',
    section: 'Customer Value & Satisfaction',
    Component: Slide17ExpectationReality,
  },
  {
    id: 'customer-satisfaction',
    title: 'Customer Satisfaction',
    titleNe: 'ग्राहक सन्तुष्टि',
    section: 'Customer Value & Satisfaction',
    Component: Slide18CustomerSatisfaction,
  },
  {
    id: 'customer-dissatisfaction',
    title: 'Customer Dissatisfaction',
    titleNe: 'ग्राहक असन्तुष्टि',
    section: 'Customer Value & Satisfaction',
    Component: Slide19CustomerDissatisfaction,
  },
  {
    id: 'value-real-world',
    title: 'Value in the Real World',
    titleNe: 'वास्तविक Customer Value',
    section: 'Customer Value & Satisfaction',
    Component: Slide20ValueExamples,
  },
  {
    id: 'exchange',
    title: 'Exchange',
    titleNe: 'विनिमय',
    section: 'Exchange & Relationship',
    Component: Slide21Exchange,
  },
  {
    id: 'relationship',
    title: 'Relationship',
    titleNe: 'सम्बन्ध',
    section: 'Exchange & Relationship',
    Component: Slide22Relationship,
  },
  {
    id: 'transaction-vs-relationship',
    title: 'Transaction vs Relationship',
    titleNe: 'बिक्री vs सम्बन्ध',
    section: 'Exchange & Relationship',
    Component: Slide23TransactionVsRelationship,
  },
  {
    id: 'trust',
    title: 'Trust',
    titleNe: 'विश्वास',
    section: 'Exchange & Relationship',
    Component: Slide24Trust,
  },
  {
    id: 'modern-relationship-marketing',
    title: 'Modern Relationship Marketing',
    titleNe: 'सम्बन्ध आधारित Marketing',
    section: 'Exchange & Relationship',
    Component: Slide25ModernRelationshipMarketing,
  },
  {
    id: 'marketing-orientation-intro',
    title: 'Marketing Orientation',
    titleNe: 'Marketing अवधारणा',
    section: 'Marketing Orientation',
    Component: Slide26MarketingOrientation,
  },
  {
    id: 'production-concept',
    title: 'Production Concept',
    titleNe: 'उत्पादन अवधारणा',
    section: 'Marketing Orientation',
    Component: Slide27ProductionConcept,
  },
  {
    id: 'product-concept',
    title: 'Product Concept',
    titleNe: 'उत्पादन गुणस्तर अवधारणा',
    section: 'Marketing Orientation',
    Component: Slide28ProductConcept,
  },
  {
    id: 'selling-concept',
    title: 'Selling Concept',
    titleNe: 'बिक्री अवधारणा',
    section: 'Marketing Orientation',
    Component: Slide29SellingConcept,
  },
  {
    id: 'marketing-concept',
    title: 'Marketing Concept',
    titleNe: 'आधुनिक Marketing अवधारणा',
    section: 'Marketing Orientation',
    Component: Slide30MarketingConcept,
  },
  {
    id: 'societal-marketing',
    title: 'Societal Marketing Concept',
    titleNe: 'सामाजिक Marketing अवधारणा',
    section: 'Advanced Marketing Concepts & Evolution',
    Component: Slide31SocietalMarketing,
  },
  {
    id: 'holistic-marketing',
    title: 'Holistic Marketing Concept',
    titleNe: 'समग्र Marketing अवधारणा',
    section: 'Advanced Marketing Concepts & Evolution',
    Component: Slide32HolisticMarketing,
  },
  {
    id: 'evolution-of-marketing',
    title: 'Evolution of Marketing',
    titleNe: 'Marketing को विकास',
    section: 'Advanced Marketing Concepts & Evolution',
    Component: Slide33EvolutionOfMarketing,
  },
  {
    id: 'modern-realization',
    title: 'Modern Realization of Marketing',
    titleNe: 'आजको Marketing को वास्तविकता',
    section: 'Advanced Marketing Concepts & Evolution',
    Component: Slide34ModernRealization,
  },
  {
    id: 'managing-customer-relationships',
    title: 'Managing Customer Relationships',
    titleNe: 'ग्राहक सम्बन्ध व्यवस्थापन',
    section: 'Managing Customer Relationships',
    Component: Slide35ManagingCustomerRelationships,
  },
  {
    id: 'engaging-customers',
    title: 'Engaging Customers',
    titleNe: 'ग्राहकलाई जोडेर राख्ने',
    section: 'Managing Customer Relationships',
    Component: Slide36EngagingCustomers,
  },
  {
    id: 'crm-systems',
    title: 'Customer Relationship Management',
    titleNe: 'CRM प्रणाली',
    section: 'Managing Customer Relationships',
    Component: Slide37CRM,
  },
  {
    id: 'why-relationships-matter',
    title: 'Why Relationships Matter',
    titleNe: 'सम्बन्ध किन महत्वपूर्ण',
    section: 'Managing Customer Relationships',
    Component: Slide38WhyRelationshipsMatter,
  },
  {
    id: 'modern-connection-systems',
    title: 'Modern Connection Systems',
    titleNe: 'आधुनिक जोड प्रणाली',
    section: 'Managing Customer Relationships',
    Component: Slide39ModernConnectionSystems,
  },
  {
    id: 'customer-satisfaction-loop',
    title: 'Customer Satisfaction',
    titleNe: 'ग्राहक सन्तुष्टि',
    section: 'Customer Satisfaction',
    Component: Slide40CustomerSatisfactionLoop,
  },
  {
    id: 'what-creates-satisfaction',
    title: 'What Creates Satisfaction?',
    titleNe: 'सन्तुष्टि कसरी सिर्जना हुन्छ',
    section: 'Customer Satisfaction',
    Component: Slide41WhatCreatesSatisfaction,
  },
  {
    id: 'expectation-experience-satisfaction',
    title: 'Expectation vs Experience',
    titleNe: 'अपेक्षा vs अनुभव',
    section: 'Customer Satisfaction',
    Component: Slide42ExpectationExperience,
  },
  {
    id: 'satisfaction-to-loyalty',
    title: 'From Satisfaction to Loyalty',
    titleNe: 'सन्तुष्टिबाट Loyalty',
    section: 'Customer Satisfaction',
    Component: Slide43SatisfactionToLoyalty,
  },
  {
    id: 'customer-relationship-levels',
    title: 'Customer Relationship Levels',
    titleNe: 'ग्राहक सम्बन्धका स्तरहरू',
    section: 'Customer Relationship Levels & Tools',
    Component: Slide44RelationshipLevels,
  },
  {
    id: 'customer-relationship-tools',
    title: 'Customer Relationship Tools',
    titleNe: 'ग्राहक सम्बन्ध उपकरणहरू',
    section: 'Customer Relationship Levels & Tools',
    Component: Slide45RelationshipTools,
  },
  {
    id: 'personalization',
    title: 'Personalization',
    titleNe: 'व्यक्तिगत अनुभव',
    section: 'Customer Relationship Levels & Tools',
    Component: Slide46Personalization,
  },
  {
    id: 'loyalty-systems',
    title: 'Loyalty Systems',
    titleNe: 'Loyalty प्रणालीहरू',
    section: 'Customer Relationship Levels & Tools',
    Component: Slide47LoyaltySystems,
  },
  {
    id: 'modern-relationship-ecosystem',
    title: 'Modern Relationship Ecosystem',
    titleNe: 'आधुनिक ग्राहक सम्बन्ध प्रणाली',
    section: 'Customer Relationship Levels & Tools',
    Component: Slide48ModernRelationshipEcosystem,
  },
  {
    id: 'customer-engagement-intro',
    title: 'Customer Engagement',
    titleNe: 'ग्राहक Engagement',
    section: 'Customer Engagement & Digital Social',
    Component: Slide49CustomerEngagement,
  },
  {
    id: 'digital-social-media-marketing',
    title: 'Digital & Social Media Marketing',
    titleNe: 'Digital र Social Media Marketing',
    section: 'Customer Engagement & Digital Social',
    Component: Slide50DigitalSocialMarketing,
  },
  {
    id: 'attention-economy',
    title: 'The Attention Economy',
    titleNe: 'Attention Economy',
    section: 'Customer Engagement & Digital Social',
    Component: Slide51AttentionEconomy,
  },
  {
    id: 'content-virality-influencers',
    title: 'Content, Virality & Influencers',
    titleNe: 'Content र Influencers',
    section: 'Customer Engagement & Digital Social',
    Component: Slide52ContentViralityInfluencers,
  },
  {
    id: 'modern-digital-engagement-ecosystem',
    title: 'Modern Digital Engagement',
    titleNe: 'आधुनिक Digital Engagement',
    section: 'Customer Engagement & Digital Social',
    Component: Slide53ModernDigitalEngagement,
  },
  {
    id: 'consumer-generated-marketing',
    title: 'Consumer Generated Marketing',
    titleNe: 'उपभोक्ताद्वारा सिर्जित Marketing',
    section: 'Consumer Generated Marketing',
    Component: Slide54ConsumerGeneratedMarketing,
  },
  {
    id: 'reviews-ratings',
    title: 'Reviews & Ratings',
    titleNe: 'Reviews र Ratings',
    section: 'Consumer Generated Marketing',
    Component: Slide55ReviewsRatings,
  },
  {
    id: 'unboxing-user-content',
    title: 'Unboxing & User Content',
    titleNe: 'Unboxing र User Content',
    section: 'Consumer Generated Marketing',
    Component: Slide56UnboxingUserContent,
  },
  {
    id: 'influencers-community-power',
    title: 'Influencers & Community',
    titleNe: 'Influencers र Community',
    section: 'Consumer Generated Marketing',
    Component: Slide57InfluencersCommunity,
  },
  {
    id: 'modern-social-proof-ecosystem',
    title: 'Modern Social Proof',
    titleNe: 'आधुनिक Social Proof',
    section: 'Consumer Generated Marketing',
    Component: Slide58ModernSocialProof,
  },
  {
    id: 'capturing-value-intro',
    title: 'Capturing Value from Customers',
    titleNe: 'ग्राहकबाट Value प्राप्त गर्ने',
    section: 'Capturing Value from Customers',
    Component: Slide59CapturingValueIntro,
  },
  {
    id: 'customer-lifetime-value',
    title: 'Customer Lifetime Value',
    titleNe: 'ग्राहकको दीर्घकालीन मूल्य',
    section: 'Capturing Value from Customers',
    Component: Slide60CustomerLifetimeValue,
  },
  {
    id: 'customer-retention',
    title: 'Customer Retention',
    titleNe: 'ग्राहक Retention',
    section: 'Capturing Value from Customers',
    Component: Slide61CustomerRetention,
  },
  {
    id: 'brand-loyalty',
    title: 'Brand Loyalty',
    titleNe: 'Brand Loyalty',
    section: 'Capturing Value from Customers',
    Component: Slide62BrandLoyalty,
  },
  {
    id: 'value-capture-ecosystem',
    title: 'Value Capture Ecosystem',
    titleNe: 'Value Capture Ecosystem',
    section: 'Capturing Value from Customers',
    Component: Slide63ValueCaptureEcosystem,
  },
  {
    id: 'customer-loyalty-intro',
    title: 'Customer Loyalty',
    titleNe: 'ग्राहक Loyalty',
    section: 'Creating Customer Loyalty & Retention',
    Component: Slide64CustomerLoyaltyIntro,
  },
  {
    id: 'psychology-of-loyalty',
    title: 'Psychology of Loyalty',
    titleNe: 'Loyalty को Psychology',
    section: 'Creating Customer Loyalty & Retention',
    Component: Slide65PsychologyOfLoyalty,
  },
  {
    id: 'habits-brand-ecosystems',
    title: 'Habits & Brand Ecosystems',
    titleNe: 'Habit र Brand Ecosystem',
    section: 'Creating Customer Loyalty & Retention',
    Component: Slide66HabitsBrandEcosystems,
  },
  {
    id: 'retention-strategies',
    title: 'Retention Strategies',
    titleNe: 'Retention Strategy हरू',
    section: 'Creating Customer Loyalty & Retention',
    Component: Slide67RetentionStrategies,
  },
  {
    id: 'loyalty-loop',
    title: 'The Loyalty Loop',
    titleNe: 'Loyalty Loop',
    section: 'Creating Customer Loyalty & Retention',
    Component: Slide68LoyaltyLoop,
  },
  {
    id: 'marketing-mix-intro',
    title: 'Marketing Mix (4Ps)',
    titleNe: 'Marketing Mix (4Ps)',
    section: 'Marketing Mix (4Ps) — Batch A',
    Component: Slide69MarketingMixIntro,
  },
  {
    id: 'product-4p',
    title: 'Product',
    titleNe: 'Product',
    section: 'Marketing Mix (4Ps) — Batch A',
    Component: Slide70Product,
  },
  {
    id: 'product-levels',
    title: 'Product Levels',
    titleNe: 'Product का स्तरहरू',
    section: 'Marketing Mix (4Ps) — Batch A',
    Component: Slide71ProductLevels,
  },
  {
    id: 'product-design-branding',
    title: 'Product Design & Branding',
    titleNe: 'Design र Branding',
    section: 'Marketing Mix (4Ps) — Batch A',
    Component: Slide72ProductDesignBranding,
  },
  {
    id: 'modern-product-ecosystem',
    title: 'Modern Product Ecosystem',
    titleNe: 'आधुनिक Product Ecosystem',
    section: 'Marketing Mix (4Ps) — Batch A',
    Component: Slide73ModernProductEcosystem,
  },
  {
    id: 'price-4p',
    title: 'Price',
    titleNe: 'मूल्य',
    section: 'Marketing Mix (4Ps) — Batch B',
    Component: Slide74Price,
  },
  {
    id: 'pricing-strategies',
    title: 'Pricing Strategies',
    titleNe: 'Pricing Strategy हरू',
    section: 'Marketing Mix (4Ps) — Batch B',
    Component: Slide75PricingStrategies,
  },
  {
    id: 'psychology-of-price',
    title: 'The Psychology of Price',
    titleNe: 'Price को Psychology',
    section: 'Marketing Mix (4Ps) — Batch B',
    Component: Slide76PsychologyOfPrice,
  },
  {
    id: 'place-distribution',
    title: 'Place / Distribution',
    titleNe: 'Place / Distribution',
    section: 'Marketing Mix (4Ps) — Batch B',
    Component: Slide77PlaceDistribution,
  },
  {
    id: 'modern-convenience-ecosystem',
    title: 'Modern Convenience Ecosystem',
    titleNe: 'आधुनिक Convenience Ecosystem',
    section: 'Marketing Mix (4Ps) — Batch B',
    Component: Slide78ModernConvenienceEcosystem,
  },
  {
    id: 'promotion-4p',
    title: 'Promotion',
    titleNe: 'Promotion / प्रवर्द्धन',
    section: 'Marketing Mix (4Ps) — Final Batch',
    Component: Slide79Promotion,
  },
  {
    id: 'advertising-storytelling',
    title: 'Advertising & Storytelling',
    titleNe: 'Advertising र Storytelling',
    section: 'Marketing Mix (4Ps) — Final Batch',
    Component: Slide80AdvertisingStorytelling,
  },
  {
    id: 'emotional-branding',
    title: 'Emotional Branding',
    titleNe: 'Emotional Branding',
    section: 'Marketing Mix (4Ps) — Final Batch',
    Component: Slide81EmotionalBranding,
  },
  {
    id: 'integrated-marketing-communication',
    title: 'Integrated Marketing Communication (IMC)',
    titleNe: 'Integrated Marketing Communication',
    section: 'Marketing Mix (4Ps) — Final Batch',
    Component: Slide82IntegratedMarketingCommunication,
  },
  {
    id: 'complete-marketing-mix-ecosystem',
    title: 'The Complete Marketing Mix Ecosystem',
    titleNe: 'पूर्ण Marketing Mix Ecosystem',
    section: 'Marketing Mix (4Ps) — Final Batch',
    Component: Slide83CompleteMarketingMixEcosystem,
  },
  {
    id: 'final-chapter-conclusion',
    title: 'The Evolution of Modern Marketing',
    titleNe: 'आधुनिक Marketing को विकास',
    section: 'Marketing Mix (4Ps) — Final Batch',
    Component: Slide84FinalChapterConclusion,
  },
]

export const SLIDE_COUNT = SLIDES.length
