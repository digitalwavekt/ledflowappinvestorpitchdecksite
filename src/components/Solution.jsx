import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  CheckCircle2, ShieldCheck, Brain, Wallet, CreditCard,
  ClipboardList, UserCheck, Activity, MessageSquare, TrendingUp
} from 'lucide-react';

const solutions = [
  { icon: ShieldCheck, text: 'Verified project leads with admin approval' },
  { icon: Brain, text: 'AI-based lead scoring and quality prediction' },
  { icon: UserCheck, text: 'Smart designer-to-client matching' },
  { icon: Wallet, text: 'Budget-based designer recommendations' },
  { icon: CreditCard, text: 'Credit-based lead purchase system' },
  { icon: ClipboardList, text: 'Structured client requirement collection' },
  { icon: UserCheck, text: 'Multi-layer admin verification' },
  { icon: Activity, text: 'Real-time lead status tracking' },
  { icon: MessageSquare, text: 'Secure in-platform communication' },
  { icon: TrendingUp, text: 'Scalable designer marketplace ecosystem' },
];

export default function Solution() {
  const [ref, isInView] = useInView();

  return (
    <section id="solution" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 via-transparent to-electric-purple/5 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium mb-6">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              One Platform.{' '}
              <span className="gradient-text">Every Problem Solved.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              LeadFlow is a unified ecosystem where verified leads, AI intelligence, and
              transparent workflows come together to create a trusted marketplace for designers
              and clients alike.
            </p>
            <div className="glass-card p-6 gradient-border">
              <p className="text-slate-300 italic leading-relaxed">
                "We did not just build a lead board. We built an intelligent pipeline that
                validates, scores, matches, and converts — so designers focus on creating, and
                clients find the perfect match without guesswork."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center text-white font-bold text-sm">
                  DW
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Digital Wave IT Solutions</p>
                  <p className="text-slate-500 text-xs">Founding Team</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <item.icon className="w-4 h-4 text-slate-500 mb-2" />
                  <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
