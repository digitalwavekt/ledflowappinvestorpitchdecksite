import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Target, Eye, MapPin } from 'lucide-react';

export default function MissionVision() {
  const [ref, isInView] = useInView();

  return (
    <section id="mission" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Mission & <span className="gradient-text">Vision</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card p-10 gradient-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-electric-blue/10 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-electric-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                To make quality design services easier to access for clients and more profitable
                for genuine designers. We believe every creative professional deserves verified
                opportunities, and every client deserves transparent, budget-matched design
                partnerships.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-10 gradient-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-electric-purple/10 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-electric-purple/10 border border-electric-purple/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-electric-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                To build India's trusted AI-powered lead marketplace where every designer gets
                verified opportunities and every client finds the right creative professional
                within budget — creating a thriving, transparent creative economy.
              </p>
              <div className="mt-6 flex items-center gap-2 text-gold">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">India-first, globally scalable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
