import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  CreditCard, Calendar, Star, Building2, HeadphonesIcon,
  Percent, Handshake, Megaphone
} from 'lucide-react';

const revenueStreams = [
  {
    icon: CreditCard,
    title: 'Designer Credit Packages',
    desc: 'Designers buy credits to unlock and claim verified leads. Credits are the core transactional currency.',
    highlight: 'Primary Revenue',
  },
  {
    icon: Calendar,
    title: 'Monthly Subscriptions',
    desc: 'Recurring monthly plans for designers with bundled credits, priority access, and analytics.',
    highlight: 'Recurring Revenue',
  },
  {
    icon: Star,
    title: 'Premium Verified Leads',
    desc: 'Higher-quality, exclusive leads sold at premium credit rates for top-tier designers.',
    highlight: 'High Margin',
  },
  {
    icon: Building2,
    title: 'Featured Designer Listings',
    desc: 'Paid featured placement on homepage and category pages for increased visibility.',
    highlight: 'Advertising',
  },
  {
    icon: Building2,
    title: 'Agency Plans',
    desc: 'B2B plans for design agencies managing multiple designers under one account.',
    highlight: 'B2B Growth',
  },
  {
    icon: HeadphonesIcon,
    title: 'Client Premium Support',
    desc: 'Paid concierge service for clients who want hand-picked designer recommendations.',
    highlight: 'Service Revenue',
  },
  {
    icon: Percent,
    title: 'Project Closure Commission',
    desc: 'Future revenue stream: small commission on projects successfully closed through the platform.',
    highlight: 'Future Stream',
  },
  {
    icon: Handshake,
    title: 'B2B Partnerships',
    desc: 'White-label and API partnerships with creative agencies, ed-tech, and job platforms.',
    highlight: 'Enterprise',
  },
  {
    icon: Megaphone,
    title: 'Promoted Listings',
    desc: 'Sponsored designer profiles and lead promotions for maximum exposure.',
    highlight: 'Advertising',
  },
];

export default function BusinessModel() {
  const [ref, isInView] = useInView();

  return (
    <section id="business" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-electric-purple/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Business Model
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Multiple <span className="gradient-text">Revenue Streams</span>
          </h2>
          <p className="text-lg text-slate-400">
            Diversified monetization strategy with 9+ revenue channels — built for profitability
            from day one and long-term sustainability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card-hover p-8 group relative overflow-hidden"
            >
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium">
                  {item.highlight}
                </span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
