import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  CheckCircle2, Circle, Rocket, Brain, Star, Bot,
  MessageSquare, CreditCard, Globe
} from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Verified Lead Marketplace',
    icon: Rocket,
    status: 'current',
    items: [
      'Client requirement form with structured fields',
      'Designer registration and onboarding',
      'Admin lead review and approval workflow',
      'Credit-based lead access system',
      'Basic AI lead scoring implementation',
      'Lead purchase history tracking',
      'Real-time notification system',
      'Designer dashboard with earnings view',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'AI Lead Scoring & Matching',
    icon: Brain,
    status: 'upcoming',
    items: [
      'Advanced AI lead quality scoring (0-100)',
      'Budget-to-designer matching algorithm',
      'Skill-based designer recommendation engine',
      'Fake and spam lead detection system',
      'Project urgency scoring',
      'Conversion probability prediction',
      'Enhanced lead filtering and sorting',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Designer Portfolio & Ranking',
    icon: Star,
    status: 'upcoming',
    items: [
      'Public designer profile pages',
      'Portfolio upload and showcase',
      'Client ratings and reviews system',
      'Verified designer badge program',
      'Featured designer listings',
      'Performance-based ranking algorithm',
      'Category-based visibility boost',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Client AI Assistant',
    icon: Bot,
    status: 'upcoming',
    items: [
      'AI chatbot for project requirement collection',
      'Natural language project brief generation',
      'Smart budget range suggestions',
      'Best service package recommendations',
      'Timeline expectation explanations',
      'Simplified hiring for non-technical users',
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Secure Communication & Tracking',
    icon: MessageSquare,
    status: 'upcoming',
    items: [
      'Built-in client-designer chat system',
      'Project milestone creation and tracking',
      'Status update and progress tracking',
      'Document and file sharing',
      'Admin dispute resolution support',
      'Automated notifications and reminders',
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Subscription & Growth Tools',
    icon: CreditCard,
    status: 'upcoming',
    items: [
      'Monthly designer subscription plans',
      'Premium lead package tiers',
      'Featured listing promotions',
      'Advanced analytics dashboard',
      'Lead conversion tracking',
      'Business growth insights and reports',
      'B2B agency partnership plans',
    ],
  },
  {
    phase: 'Phase 7',
    title: 'Multi-Service Creative Marketplace',
    icon: Globe,
    status: 'upcoming',
    items: [
      'UI/UX design services',
      'Graphic design and illustration',
      'Logo and brand identity design',
      'Complete branding packages',
      'Website design and development',
      'Mobile app design',
      'Social media creatives',
      'Video editing and motion graphics',
      'Animation and 3D design',
      'Full creative services ecosystem',
    ],
  },
];

export default function Roadmap() {
  const [ref, isInView] = useInView();

  return (
    <section id="roadmap" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Product Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Phase-Wise</span> Journey
          </h2>
          <p className="text-lg text-slate-400">
            A clear, execution-focused roadmap from MVP to full creative marketplace — built
            for sustainable growth and investor confidence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-electric-purple to-gold lg:-translate-x-px" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full border-2 border-navy-900 z-10 lg:-translate-x-2 mt-6">
                  <div className={`w-full h-full rounded-full ${
                    phase.status === 'current'
                      ? 'bg-electric-blue shadow-lg shadow-electric-blue/50'
                      : 'bg-slate-600'
                  }`} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Content Card */}
                <div className="pl-12 lg:pl-0 lg:w-1/2">
                  <div className={`glass-card p-6 lg:p-8 ${
                    phase.status === 'current' ? 'gradient-border glow-blue' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        phase.status === 'current'
                          ? 'bg-electric-blue/20 text-electric-blue'
                          : 'bg-white/5 text-slate-400'
                      }`}>
                        <phase.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                          phase.status === 'current' ? 'text-electric-blue' : 'text-slate-500'
                        }`}>
                          {phase.phase}
                        </span>
                        <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      </div>
                      {phase.status === 'current' && (
                        <span className="ml-auto px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-medium">
                          In Progress
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2.5">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                          {phase.status === 'current' ? (
                            <CheckCircle2 className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
