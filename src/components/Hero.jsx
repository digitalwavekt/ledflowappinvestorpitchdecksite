import { motion } from 'framer-motion';
import {
  Brain, ShieldCheck, Users, CreditCard, Bell, Shield,
  ArrowRight, Sparkles, TrendingUp, MessageSquare, BarChart3, Settings
} from 'lucide-react';

const badges = [
  { icon: Brain, label: 'AI Lead Scoring' },
  { icon: ShieldCheck, label: 'Verified Clients' },
  { icon: Users, label: 'Designer Marketplace' },
  { icon: CreditCard, label: 'Credit-Based Access' },
  { icon: Bell, label: 'Real-Time Notifications' },
  { icon: Shield, label: 'Admin Verification' },
];

const mockupCards = [
  {
    icon: MessageSquare,
    title: 'Client App',
    desc: 'Post requirements, get matched',
    color: 'from-electric-blue/20 to-electric-blue/5',
    border: 'border-electric-blue/20',
    iconColor: 'text-electric-blue',
  },
  {
    icon: BarChart3,
    title: 'Designer Dashboard',
    desc: 'Buy leads, track earnings',
    color: 'from-electric-purple/20 to-electric-purple/5',
    border: 'border-electric-purple/20',
    iconColor: 'text-electric-purple',
  },
  {
    icon: Settings,
    title: 'Admin Control',
    desc: 'Verify, monitor, manage',
    color: 'from-electric-teal/20 to-electric-teal/5',
    border: 'border-electric-teal/20',
    iconColor: 'text-electric-teal',
  },
  {
    icon: Sparkles,
    title: 'AI Lead Engine',
    desc: 'Score, match, predict',
    color: 'from-gold/20 to-gold/5',
    border: 'border-gold/20',
    iconColor: 'text-gold',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-electric-purple/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-teal/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-slate-300">
                Backed by <span className="text-white">Digital Wave IT Solutions</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              LeadFlow —{' '}
              <span className="gradient-text">AI-Powered</span>{' '}
              Verified Leads for Designers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl"
            >
              Helping designers connect with genuine clients, verified project leads, and
              budget-matched opportunities through smart AI scoring, secure workflows, and a
              trusted marketplace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#platform"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300"
              >
                Explore Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#invest"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                Contact for Investment
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300"
                >
                  <badge.icon className="w-3.5 h-3.5 text-electric-blue" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Mockup Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {mockupCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className={`glass-card-hover p-6 ${card.border} border bg-gradient-to-br ${card.color}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 ${card.iconColor}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass-card px-4 py-3 glow-blue"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-electric-blue" />
                <span className="text-sm font-semibold">98% Lead Accuracy</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card px-4 py-3 glow-purple"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-electric-purple" />
                <span className="text-sm font-semibold">500+ Designers Onboard</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
