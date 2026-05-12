import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  SearchX, AlertTriangle, Wallet, Clock, EyeOff, Frown
} from 'lucide-react';

const problems = [
  {
    icon: SearchX,
    title: 'Hard to Find Genuine Clients',
    desc: 'Designers struggle to find real, paying clients. Most platforms are flooded with low-intent inquiries that waste valuable time.',
  },
  {
    icon: AlertTriangle,
    title: 'Fake & Low-Quality Leads',
    desc: 'Many leads are fake, spam, or from non-serious buyers. Designers spend hours filtering through noise with no returns.',
  },
  {
    icon: Wallet,
    title: 'Budget Mismatch Confusion',
    desc: 'Clients do not know which designer fits their budget. Pricing confusion creates delays, abandoned projects, and frustration.',
  },
  {
    icon: Clock,
    title: 'Time Wasted on Unverified Inquiries',
    desc: 'Designers waste hours responding to unverified inquiries, negotiating with ghost clients, and chasing dead-end conversations.',
  },
  {
    icon: EyeOff,
    title: 'Small Designers Lack Visibility',
    desc: 'Talented small designers and freelancers lack digital visibility. Big agencies dominate while quality talent stays hidden.',
  },
  {
    icon: Frown,
    title: 'Clients Need Trusted Solutions Fast',
    desc: 'Clients need quick, trusted, and budget-friendly design solutions but have no reliable way to find the right creative partner.',
  },
];

export default function Problem() {
  const [ref, isInView] = useInView();

  return (
    <section id="problem" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Designers & Clients{' '}
            <span className="text-red-400">Struggle Today</span>
          </h2>
          <p className="text-lg text-slate-400">
            The creative services market is broken. Designers chase ghosts. Clients gamble on talent.
            Nobody wins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card-hover p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-red-400" />
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
