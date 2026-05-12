import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  MessageSquare, Brain, Target, ShieldCheck, Wallet,
  Package, TrendingUp, Filter, Zap, Clock, Users, Bot
} from 'lucide-react';

const aiFeatures = [
  {
    icon: MessageSquare,
    title: 'Smart Client Questioning',
    desc: 'AI asks clients intelligent, contextual questions to extract precise project requirements, budget, and timeline.',
  },
  {
    icon: Brain,
    title: 'Deep Project Understanding',
    desc: 'AI understands project type, complexity, deadline urgency, and creative scope from natural language inputs.',
  },
  {
    icon: Target,
    title: 'Designer Recommendations',
    desc: 'AI recommends the most suitable designers based on skills, portfolio, past performance, and availability.',
  },
  {
    icon: ShieldCheck,
    title: 'Lead Quality Scoring',
    desc: 'Every lead receives a quality score (0-100) so designers know exactly what they are buying into.',
  },
  {
    icon: ShieldCheck,
    title: 'Fake Lead Detection',
    desc: 'Advanced pattern recognition detects fake, spam, and low-intent leads before they reach designers.',
  },
  {
    icon: Wallet,
    title: 'Smart Pricing Suggestions',
    desc: 'AI suggests fair pricing ranges based on project scope, market rates, and designer experience level.',
  },
  {
    icon: Package,
    title: 'Package Recommendations',
    desc: 'AI helps clients choose the right service package by matching needs with predefined offerings.',
  },
  {
    icon: TrendingUp,
    title: 'Trust Building',
    desc: 'AI improves marketplace trust by ensuring only verified, high-quality interactions happen on the platform.',
  },
  {
    icon: Filter,
    title: 'Automated Filtering',
    desc: 'AI reduces manual filtering by 90% — designers see only leads that match their skills and preferences.',
  },
  {
    icon: Clock,
    title: 'Faster Admin Verification',
    desc: 'AI flags suspicious leads for admins, cutting verification time from hours to minutes.',
  },
];

export default function AIHelps() {
  const [ref, isInView] = useInView();

  return (
    <section id="ai" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-purple/5 via-transparent to-electric-blue/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium mb-6">
            AI Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="gradient-text">AI Powers</span> LeadFlow
          </h2>
          <p className="text-lg text-slate-400">
            Our AI engine is not just a feature — it is the brain of the platform. It learns,
            scores, matches, and protects at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card-hover p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-full blur-[50px] group-hover:bg-electric-blue/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 border border-electric-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 glass-card p-8 lg:p-10 gradient-border"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <p className="text-slate-400 text-sm">Lead Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">&lt;2s</div>
              <p className="text-slate-400 text-sm">AI Scoring Speed</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">85%</div>
              <p className="text-slate-400 text-sm">Fake Lead Detection</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">3x</div>
              <p className="text-slate-400 text-sm">Designer Conversion Lift</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
