import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  TrendingUp, ShieldCheck, Eye, HeartHandshake, Wallet, Landmark
} from 'lucide-react';

const impacts = [
  {
    icon: TrendingUp,
    title: 'Better Earnings for Freelancers',
    desc: 'Helps freelance designers earn more by connecting them with verified, budget-aligned clients instead of chasing cold leads.',
  },
  {
    icon: ShieldCheck,
    title: 'Eliminates Fake Lead Waste',
    desc: 'Reduces the massive time and energy waste caused by fake, spam, and non-serious inquiries in the creative market.',
  },
  {
    icon: Eye,
    title: 'Digital Visibility for Small Designers',
    desc: 'Gives talented small designers and freelancers a professional digital presence they could never afford to build alone.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Creative Talent Discovery',
    desc: 'Helps clients find trusted, vetted creative professionals without the risk of hiring unknown freelancers.',
  },
  {
    icon: Wallet,
    title: 'Budget-Friendly Design Services',
    desc: 'Makes quality design accessible to startups, small businesses, and individuals with transparent pricing.',
  },
  {
    icon: Landmark,
    title: "Supports India's Freelance Economy",
    desc: "Contributes to India's growing gig and creator economy by creating a structured, trustworthy marketplace.",
  },
];

export default function SocialImpact() {
  const [ref, isInView] = useInView();

  return (
    <section id="impact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric-teal/10 border border-electric-teal/20 text-electric-teal text-sm font-medium mb-6">
            Social Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Creating <span className="gradient-text">Real Impact</span> Beyond Profit
          </h2>
          <p className="text-lg text-slate-400">
            LeadFlow is not just a business. It is a mission to empower India's creative
            workforce and democratize access to quality design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-electric-teal/10 border border-electric-teal/20 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-electric-teal" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
