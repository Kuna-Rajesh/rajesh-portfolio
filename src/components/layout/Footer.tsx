import { GitFork, Link2, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const socials = [
  { href: 'https://github.com/kuna-rajesh',           icon: GitFork,  label: 'GitHub' },
  { href: 'https://linkedin.com/in/kuna-rajesh',      icon: Link2,    label: 'LinkedIn' },
  { href: 'mailto:rajeshkuna70@gmail.com',            icon: Mail,     label: 'Email' },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-auto border-t py-12"
      style={{ borderColor: 'var(--border-color)', background: 'var(--bg-surface)' }}
    >
      {/* Top ambient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)' }}
      />

      <div className="section-inner">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-xs"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  RK
                </div>
                <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                  Rajesh <span className="gradient-text">Kuna</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Java Backend Developer &amp; Spring Boot Architect specializing in microservices, cloud deployments, and GenAI integrations.
              </p>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 gradient-text">Navigation</h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="py-0.5 transition-colors duration-200 hover:text-[#6366f1]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 gradient-text">Contact</h4>
              <div className="space-y-2 text-xs">
                <a href="mailto:rajeshkuna70@gmail.com" className="flex items-center gap-2 transition-colors hover:text-[#6366f1]" style={{ color: 'var(--text-secondary)' }}>
                  <Mail className="w-3.5 h-3.5 text-[#6366f1] flex-shrink-0" />
                  <span>rajeshkuna70@gmail.com</span>
                </a>
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <Phone className="w-3.5 h-3.5 text-[#6366f1] flex-shrink-0" />
                  <span>+91 9553941055</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <MapPin className="w-3.5 h-3.5 text-[#6366f1] flex-shrink-0" />
                  <span>Hyderabad, SA &amp; Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
              Vibe coded with <Heart className="w-3 h-3 text-red-400 inline" /> using Next.js 15
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-xl glass flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
              <a
                href="#home"
                aria-label="Back to top"
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} Rajesh Kuna. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
