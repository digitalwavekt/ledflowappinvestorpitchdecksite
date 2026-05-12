import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  TrendingUp, Users, Brain, Wallet, Layers,
  Building2, CreditCard, Globe, ArrowRight, Sparkles
} from 'lucide-react';

const opportunities = [
  { icon: TrendingUp, title: 'Growing Design Demand', desc: 'Digital design services market is expanding at 15%+ CAGR globally and 25%+ in India.' },
  { icon: Users, title: 'Creator Economy Boom', desc: 'Freelance and creator economy is one of the fastest-growing sectors post-pandemic.' },
  { icon: Brain, title: 'AI Differentiation', desc: 'AI-powered marketplace is a blue-ocean opportunity with very few competitors in India.' },
  { icon: Wallet, title: 'Multiple Revenue Streams', desc: '9+ monetization channels ensure diversified, resilient income from day one.' },
  { icon: Layers, title: 'Scalable SaaS + Marketplace', desc: 'Hybrid model combining SaaS subscriptions with marketplace commissions for maximum LTV.' },
  { icon: Building2, title: 'B2B + B2C Opportunity', desc: 'Serves both individual designers and agencies — two high-value customer segments.' },
  { icon: CreditCard, title: 'Credit-Based Monetization', desc: 'Proven micro-transaction model with high conversion and low churn potential.' },
  { icon: Globe, title: 'Full Creative Ecosystem', desc: 'Roadmap expands from design leads to a complete creative services marketplace.' },
];

export default function Investor() {
  const [ref, isInView] = useInView();

  return (
    <section id="invest" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-electric-blue/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Investor Opportunity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Invest</span> in LeadFlow?
          </h2>
          <p className="text-lg text-slate-400">
            We are building India's most trusted AI-powered lead marketplace for designers —
            a massive addressable market with strong fundamentals and clear differentiation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass-card p-10 lg:p-14 gradient-border text-center"
        >
          <Sparkles className="w-10 h-10 text-gold mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Partner with us to build India's most trusted AI-powered lead marketplace for designers.
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We are currently seeking seed investment and strategic partnerships. Join us in
            reshaping how India's creative professionals find work and how businesses find design talent.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy-900 rounded-xl font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
          >
            Contact for Investment
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
