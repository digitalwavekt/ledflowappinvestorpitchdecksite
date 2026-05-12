import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  Boxes, Users, Server, Database, Shield,
  Radio, CreditCard, Brain, Cloud, Smartphone, MapPin
} from 'lucide-react';

const techStack = [
  { icon: Boxes, title: 'Modular Architecture', desc: 'Separate client, designer, and admin modules with clean API boundaries.' },
  { icon: Users, title: 'Role-Based Access', desc: 'JWT-secured authentication with granular permissions per user role.' },
  { icon: Server, title: 'API-First Backend', desc: 'RESTful API design ready for web, mobile, and third-party integrations.' },
  { icon: Database, title: 'MongoDB Scalable DB', desc: 'Document-based database designed for horizontal scaling and high throughput.' },
  { icon: Shield, title: 'JWT Authentication', desc: 'Stateless, secure token-based auth with refresh token rotation.' },
  { icon: Radio, title: 'Socket.io Real-Time', desc: 'WebSocket-powered notifications and live chat for instant updates.' },
  { icon: CreditCard, title: 'Razorpay Payments', desc: 'Seamless Indian payment gateway for credits, subscriptions, and purchases.' },
  { icon: Brain, title: 'AI Scoring Layer', desc: 'Pluggable AI service layer for lead scoring, matching, and recommendations.' },
  { icon: Cloud, title: 'Cloud Deployment', desc: 'Vercel for frontend, Render for backend — auto-scaling, zero-downtime deploys.' },
  { icon: Smartphone, title: 'Future Mobile App', desc: 'React Native mobile app planned for Phase 3 to expand reach.' },
  { icon: MapPin, title: 'Multi-City Expansion', desc: 'Geographic expansion planned across Tier 1, 2, and 3 Indian cities.' },
];

export default function Scalability() {
  const [ref, isInView] = useInView();

  return (
    <section id="scalability" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/20 text-electric-purple text-sm font-medium mb-6">
            Technology & Scale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built to <span className="gradient-text">Scale</span> Without Limits
          </h2>
          <p className="text-lg text-slate-400">
            Enterprise-grade architecture designed for growth. From 100 users to 100,000 —
            LeadFlow scales gracefully.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {techStack.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-11 h-11 rounded-lg bg-electric-purple/10 border border-electric-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-electric-purple" />
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
