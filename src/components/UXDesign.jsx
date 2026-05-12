import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FileText, Wallet, Search, CreditCard, Bell,
  Smartphone, Zap, Eye, Layout
} from 'lucide-react';

const uxItems = [
  { icon: FileText, title: 'Simple Client Form', desc: 'One-page requirement form with AI guidance — no technical knowledge needed.' },
  { icon: Wallet, title: 'Budget-Friendly Recommendations', desc: 'Clients see designers matched to their exact budget range instantly.' },
  { icon: Search, title: 'Easy Designer Discovery', desc: 'Filter by skill, budget, rating, and availability with smart search.' },
  { icon: Eye, title: 'Clear Lead Cards', desc: 'Every lead displays score, budget, timeline, and category at a glance.' },
  { icon: Smartphone, title: 'Mobile-First Dashboard', desc: 'Fully responsive dashboards optimized for phones, tablets, and desktops.' },
  { icon: Bell, title: 'Real-Time Notifications', desc: 'Instant alerts for new leads, messages, approvals, and status updates.' },
  { icon: CreditCard, title: 'Simple Credit Purchase', desc: 'One-click credit top-up with transparent pricing and history.' },
  { icon: Layout, title: 'Transparent Lead Details', desc: 'Full project details, client info, and AI score before any purchase.' },
  { icon: Zap, title: 'Clean Professional Interface', desc: 'Minimal, distraction-free UI designed for speed and clarity.' },
];

export default function UXDesign() {
  const [ref, isInView] = useInView();

  return (
    <section id="ux" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-teal/5 via-transparent to-electric-blue/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium mb-6">
            User Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Designed for <span className="gradient-text">Humans</span>, Not Engineers
          </h2>
          <p className="text-lg text-slate-400">
            Every screen, every interaction, every flow is designed to be intuitive, fast, and
            delightful — whether you are a designer, client, or admin.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uxItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-electric-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
