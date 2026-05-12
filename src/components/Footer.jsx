import { Zap } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Client Module', href: '#platform' },
    { label: 'Designer Module', href: '#platform' },
    { label: 'Admin Panel', href: '#platform' },
    { label: 'AI Lead Engine', href: '#ai' },
  ],
  Company: [
    { label: 'Mission & Vision', href: '#mission' },
    { label: 'Business Model', href: '#business' },
    { label: 'Social Impact', href: '#impact' },
    { label: 'Invest', href: '#invest' },
  ],
  Resources: [
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Technology', href: '#scalability' },
    { label: 'Trust & Safety', href: '#trust' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Lead<span className="gradient-text">Flow</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              AI-powered verified lead generation and marketplace platform for designers.
              Connecting genuine clients with trusted creative professionals.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-500">
                <span className="text-slate-300">Digital Wave IT Solutions Pvt. Ltd.</span>
              </p>
              <p className="text-slate-500">Jaipur, Rajasthan, India</p>
              <a href="mailto:contact2digitalwaveitsolutions@gmail.com" className="text-electric-blue hover:underline block">
                contact2digitalwaveitsolutions@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Digital Wave IT Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            LeadFlow for Designers — A Digital Wave IT Solutions Product
          </p>
        </div>
      </div>
    </footer>
  );
}
