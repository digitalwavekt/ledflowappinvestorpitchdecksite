import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  UserCheck, FileImage, ShieldCheck, Shield, Lock,
  CreditCard, AlertCircle, Star, Activity, Workflow
} from 'lucide-react';

const trustItems = [
  { icon: UserCheck, title: 'Designer Profile Verification', desc: 'Every designer goes through a multi-step verification process before accessing the platform.' },
  { icon: FileImage, title: 'Portfolio Review', desc: 'Admin team reviews designer portfolios to ensure quality standards and authenticity.' },
  { icon: ShieldCheck, title: 'Lead Quality Checks', desc: 'Every lead is screened for intent, budget clarity, and project feasibility before approval.' },
  { icon: Shield, title: 'Admin Approval', desc: 'No lead goes live without admin verification — ensuring only genuine opportunities reach designers.' },
  { icon: Lock, title: 'Spam Protection', desc: 'Multi-layer spam detection filters out bots, duplicate entries, and fraudulent submissions.' },
  { icon: CreditCard, title: 'Payment Transparency', desc: 'Clear credit pricing, purchase history, and refund policies with full transparency.' },
  { icon: AlertCircle, title: 'Complaint System', desc: 'Built-in dispute resolution and complaint tracking for both clients and designers.' },
  { icon: Star, title: 'Designer Rating System', desc: 'Clients rate designers post-project, building a reputation layer that rewards quality work.' },
  { icon: Activity, title: 'Lead Status Tracking', desc: 'Real-time visibility into where every lead stands — from inquiry to closure.' },
  { icon: Workflow, title: 'Secure Platform Workflow', desc: 'End-to-end encrypted workflows protect sensitive project and payment data.' },
];

export default function Trust() {
  const [ref, isInView] = useInView();

  return (
    <section id="trust" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric-teal/10 border border-electric-teal/20 text-electric-teal text-sm font-medium mb-6">
            Trust & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built on <span className="gradient-text">Trust</span> & Verification
          </h2>
          <p className="text-lg text-slate-400">
            Every interaction on LeadFlow is backed by rigorous verification, transparent
            processes, and a commitment to protecting both designers and clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-teal/10 border border-electric-teal/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-electric-teal" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
