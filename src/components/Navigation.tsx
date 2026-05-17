import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: 'var(--bg-panel-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--cyan-dim)',
        height: '64px',
      }}
    >
      <div
        className="flex items-center justify-between h-full mx-auto px-6"
        style={{ maxWidth: 'var(--container-max)' }}
      >
        <span
          className="font-display text-xs tracking-[0.18em]"
          style={{ color: 'var(--cyan)' }}
        >
          AMIR MAJNOON
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-150 bg-transparent border-none cursor-pointer"
              style={{
                color: activeSection === link.href ? 'var(--cyan)' : 'var(--text-secondary-color)',
                textShadow: activeSection === link.href ? 'var(--glow-cyan-border)' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  activeSection === link.href ? 'var(--cyan)' : 'var(--text-secondary-color)';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: 'var(--cyan)' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden flex flex-col gap-4 p-6"
          style={{
            background: 'var(--bg-panel-glass)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--cyan-dim)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-mono text-sm tracking-[0.12em] uppercase text-left bg-transparent border-none cursor-pointer"
              style={{ color: activeSection === link.href ? 'var(--cyan)' : 'var(--text-secondary-color)' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
