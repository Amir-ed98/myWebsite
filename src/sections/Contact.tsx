import { useRef } from 'react';
import { useGSAPScrollAnimation } from '@/hooks/useGSAPScroll';
import SectionTitle from '@/components/SectionTitle';
import { Phone, Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const contacts = [
  {
    icon: Phone,
    label: 'PHONE NUMBERS',
    values: ['+98 901 032 1997', '+98 933 468 2177'],
    hrefs: ['tel:+989010321997', 'tel:+989334682177'],
  },
  {
    icon: Mail,
    label: 'EMAIL',
    values: ['amir.e.majnoon@gmail.com'],
    hrefs: ['mailto:amir.e.majnoon@gmail.com'],
  },
  {
    icon: Github,
    label: 'GITHUB',
    values: ['Amir-ed98'],
    hrefs: ['https://github.com/Amir-ed98'],
  },
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    values: ['in/amir-e-majnoon'],
    hrefs: ['https://linkedin.com/in/amir-e-majnoon'],
  },
  {
    icon: Twitter,
    label: 'X',
    values: ['@AmireMajnoon'],
    hrefs: ['https://x.com/AmireMajnoon'],
  },
];

const socials = [
  { icon: Github, href: 'https://github.com/Amir-ed98', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/amir-e-majnoon', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AmireMajnoon', label: 'X' },
];

export default function Contact() {
  const infoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAPScrollAnimation(infoRef, 'panel');
  useGSAPScrollAnimation(ctaRef, 'panel');
  useGSAPScrollAnimation(footerRef, 'beam');

  const panelBaseStyle: React.CSSProperties = {
    background: 'var(--bg-panel)',
    backgroundImage: 'var(--holo-gradient)',
    border: '1px solid var(--cyan-mid)',
    boxShadow: 'var(--shadow-panel), var(--holo-shadow)',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <section
      id="contact"
      className="relative"
      style={{
        padding: 'var(--space-section) 0',
        minHeight: '60vh',
        background: 'var(--bg-void)',
      }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          zIndex: 0,
        }}
      />

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: 'var(--container-max)', padding: '0 var(--container-pad)' }}
      >
        <SectionTitle title="CONTACT" sectionId="SECTION 06 — CONNECT" />

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
          {/* Contact Info Panel */}
          <div ref={infoRef} className="p-6 lg:p-8" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

            <h3
              className="font-display text-lg mb-6"
              style={{ color: 'var(--cyan)' }}
            >
              GET IN TOUCH
            </h3>

            <div>
              {contacts.map((contact, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div style={{ height: '1px', background: 'var(--cyan-dim)' }} />
                  )}
                  <div className="py-4 group">
                    <a
                      href={contact.hrefs[0]}
                      target={contact.hrefs[0].startsWith('http') ? '_blank' : undefined}
                      rel={contact.hrefs[0].startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 no-underline transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <contact.icon
                        size={24}
                        className="flex-shrink-0 mt-0.5 transition-all duration-200"
                        style={{ color: 'var(--cyan)' }}
                      />
                      <div className="flex-1 min-w-0">
                        <span
                          className="font-mono text-[10px] tracking-wide block mb-1"
                          style={{ color: 'var(--text-secondary-color)' }}
                        >
                          {contact.label}
                        </span>
                        <div>
                          {contact.values.map((val, vi) => (
                            <span
                              key={vi}
                              className="font-body text-sm block transition-colors duration-200 group-hover:text-[var(--cyan)]"
                              style={{ color: 'var(--text-primary-color)' }}
                            >
                              {val}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Panel */}
          <div ref={ctaRef} className="p-6 lg:p-8 flex flex-col justify-center" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

            <h3
              className="font-display neon-glow mb-4"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: 'var(--cyan)',
                textShadow: 'var(--glow-cyan)',
              }}
            >
              LET'S BUILD SOMETHING EXTRAORDINARY
            </h3>

            <p
              className="font-body text-sm mb-8"
              style={{ color: 'var(--text-secondary-color)', lineHeight: 1.7 }}
            >
              Open to collaborations in AI, Bioinformatics, Back-End Development, and Scientific Computing.
            </p>

            <a
              href="mailto:amir.e.majnoon@gmail.com"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.12em] uppercase px-10 py-4 mb-6 transition-all duration-300 no-underline w-fit"
              style={{
                color: 'var(--cyan)',
                border: '2px solid var(--cyan)',
                background: 'rgba(0, 229, 255, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 229, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'var(--glow-cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Send size={16} />
              SEND EMAIL
            </a>

            <p
              className="font-mono text-[10px] tracking-wide mb-4"
              style={{ color: 'var(--text-tertiary-color)' }}
            >
              OR CONNECT ON SOCIALS
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition-all duration-200"
                  style={{ color: 'var(--text-secondary-color)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--cyan)';
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.5))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary-color)';
                    e.currentTarget.style.filter = 'none';
                  }}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div ref={footerRef} className="mt-20 text-center">
          <div
            className="mx-auto mb-6"
            style={{ height: '1px', maxWidth: 'var(--container-max)', background: 'var(--cyan-dim)' }}
          />
          <p className="font-mono text-[10px] tracking-wide" style={{ color: 'var(--text-tertiary-color)' }}>
            DESIGNED & BUILT BY AMIR MAJNOON
          </p>
          <p className="font-mono text-[10px] tracking-wide mt-1" style={{ color: 'var(--text-tertiary-color)' }}>
            &copy; 2025
          </p>
        </div>
      </div>
    </section>
  );
}
