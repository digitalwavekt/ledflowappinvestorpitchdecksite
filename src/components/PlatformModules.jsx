import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  Users, Palette, Shield, Brain,
  FileText, Layers, Calendar, Sparkles, Search,
  MessageSquare, Bell, BarChart3, CreditCard, Package,
  UserCheck, Eye, TrendingUp, AlertTriangle, Send,
  Bot, Lightbulb, Gauge, Filter, Target
} from 'lucide-react';

const modules = [
  {
    id: 'client',
    label: 'Client Module',
    icon: Users,
    color: 'electric-blue',
    items: [
      { icon: FileText, text: 'Post design requirements with structured forms' },
      { icon: Layers, text: 'Select service category (UI/UX, Logo, Branding, etc.)' },
      { icon: CreditCard, text: 'Add budget range and project timeline' },
      { icon: Sparkles, text: 'AI-guided requirement form for clarity' },
      { icon: Search, text: 'Get matched designer suggestions instantly' },
      { icon: Gauge, text: 'Track project and lead status in real-time' },
      { icon: MessageSquare, text: 'Communicate directly with selected designers' },
      { icon: Send, text: 'Easy inquiry flow with one-click actions' },
      { icon: Package, text: 'Budget-friendly designer options displayed' },
      { icon: Bell, text: 'Support assistance and notifications' },
    ],
  },
  {
    id: 'designer',
    label: 'Designer Module',
    icon: Palette,
    color: 'electric-purple',
    items: [
      { icon: UserCheck, text: 'Designer signup and secure login' },
      { icon: FileText, text: 'Profile and portfolio setup with media uploads' },
      { icon: Layers, text: 'Skill and category selection for better matching' },
      { icon: Search, text: 'Browse and view verified leads only' },
      { icon: Gauge, text: 'Lead score visibility before purchase' },
      { icon: CreditCard, text: 'Purchase leads using platform credits' },
      { icon: TrendingUp, text: 'Track lead status and conversion funnel' },
      { icon: MessageSquare, text: 'Manage client conversations in one place' },
      { icon: Bell, text: 'Real-time notifications for new leads' },
      { icon: BarChart3, text: 'Earnings and growth dashboard' },
      { icon: Package, text: 'Subscription and credit packages' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin Panel',
    icon: Shield,
    color: 'electric-teal',
    items: [
      { icon: Users, text: 'Complete user management system' },
      { icon: UserCheck, text: 'Designer profile verification workflow' },
      { icon: Eye, text: 'Lead review and approval process' },
      { icon: Gauge, text: 'Lead quality monitoring dashboard' },
      { icon: CreditCard, text: 'Payment and credit control center' },
      { icon: AlertTriangle, text: 'Complaint handling and dispute resolution' },
      { icon: BarChart3, text: 'Platform-wide analytics and insights' },
      { icon: Bell, text: 'Notification and broadcast management' },
      { icon: Target, text: 'Featured designer control and promotions' },
      { icon: Shield, text: 'Fraud prevention and security support' },
    ],
  },
  {
    id: 'ai',
    label: 'AI Lead Engine',
    icon: Brain,
    color: 'gold',
    items: [
      { icon: Gauge, text: 'Lead quality scoring (0-100)' },
      { icon: AlertTriangle, text: 'Fake and spam lead detection' },
      { icon: Wallet, text: 'Budget-fit matching algorithm' },
      { icon: Target, text: 'Designer skill-based matching' },
      { icon: Layers, text: 'Project category auto-classification' },
      { icon: Calendar, text: 'Project urgency prediction' },
      { icon: TrendingUp, text: 'Conversion probability scoring' },
      { icon: Lightbulb, text: 'Smart lead recommendations' },
      { icon: Bot, text: 'AI chatbot for client requirement collection' },
      { icon: Sparkles, text: 'AI assistance for designer outreach' },
    ],
  },
];

const colorMap = {
  'electric-blue': 'text-electric-blue border-electric-blue/20 bg-electric-blue/10',
  'electric-purple': 'text-electric-purple border-electric-purple/20 bg-electric-purple/10',
  'electric-teal': 'text-electric-teal border-electric-teal/20 bg-electric-teal/10',
  'gold': 'text-gold border-gold/20 bg-gold/10',
};

export default function PlatformModules() {
  const [activeTab, setActiveTab] = useState('client');
  const [ref, isInView] = useInView();
  const activeModule = modules.find((m) => m.id === activeTab);

  return (
    <section id="platform" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/20 text-electric-purple text-sm font-medium mb-6">
            Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Core <span className="gradient-text">Platform Modules</span>
          </h2>
          <p className="text-lg text-slate-400">
            Four interconnected modules powering the entire LeadFlow ecosystem — each designed
            for a specific user role with deep functionality.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                activeTab === mod.id
                  ? `${colorMap[mod.color]} shadow-lg`
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <mod.icon className="w-4 h-4" />
              {mod.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="glass-card p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorMap[activeModule.color]}`}>
                  <activeModule.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeModule.label}</h3>
                  <p className="text-slate-400 text-sm">
                    {activeModule.id === 'client' && 'Everything a client needs to find the perfect designer'}
                    {activeModule.id === 'designer' && 'Tools for designers to grow their business'}
                    {activeModule.id === 'admin' && 'Control center for platform operations'}
                    {activeModule.id === 'ai' && 'Intelligence layer powering the entire platform'}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeModule.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[activeModule.color]}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
