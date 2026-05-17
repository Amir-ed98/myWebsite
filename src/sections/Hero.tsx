import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AuroraBackground from '@/components/AuroraBackground';
import { Download, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const auroraContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Avatar entrance
    gsap.fromTo(
      avatarRef.current,
      { opacity: 0, scale: 0.8, rotation: -10 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
    );

    // Name character stagger
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, stagger: 0.03, duration: 0.5, delay: 0.3, ease: 'power3.out' }
      );
    }

    // Role entrance
    gsap.fromTo(
      roleRef.current,
      { opacity: 0, letterSpacing: '0.5em' },
      { opacity: 1, letterSpacing: '0.35em', duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Bio entrance
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
    );

    // CTA buttons
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, delay: 0.75, ease: 'power3.out' }
      );
    }

    // Floating badges
    gsap.fromTo(
      [badge1Ref.current, badge2Ref.current],
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, stagger: 0.2, duration: 0.6, delay: 0.9, ease: 'power3.out' }
    );

    // Aurora fade on scroll
    if (auroraContainerRef.current && !isReducedMotion) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200',
        scrub: true,
        onUpdate: (self) => {
          if (auroraContainerRef.current) {
            auroraContainerRef.current.style.opacity = String(1 - self.progress * 0.7);
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const nameText = 'AMIR MAJNOON';

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Aurora Background */}
      <div ref={auroraContainerRef} className="absolute inset-0 z-[-1]">
        <AuroraBackground />
      </div>

      {/* Scan-line overlay */}
      <div
        className="absolute inset-0 z-0 scan-line-overlay"
      />

      {/* Content */}
      <div
        className="relative z-10 w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
        style={{
          maxWidth: 'var(--container-max)',
          padding: 'var(--container-pad)',
          paddingTop: '100px',
        }}
      >
        {/* Left column - Avatar */}
        <div className="relative flex-shrink-0">
          {/* Avatar hexagon */}
          <div
            ref={avatarRef}
            className="relative animate-hex-drift"
            style={{
              width: 'clamp(200px, 25vw, 300px)',
              height: 'clamp(200px, 25vw, 300px)',
            }}
          >
            <div
              data-augmented-ui="tl-clip tr-clip br-clip bl-clip l-clip r-clip"
              style={
                {
                  '--aug-border': '2px',
                  '--aug-border-bg': 'var(--cyan)',
                  '--aug-inset': '2px',
                  '--aug-inset-bg': 'var(--bg-void)',
                  width: '100%',
                  height: '100%',
                  boxShadow: '0 0 40px rgba(0, 229, 255, 0.4), 0 0 80px rgba(0, 229, 255, 0.1)',
                } as React.CSSProperties
              }
            >
              <img
                src="./assets/hero-avatar.jpg"
                alt="Amir Majnoon"
                className="w-full h-full object-cover"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              />
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-[25%] w-1.5 h-1.5" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-[25%] w-1.5 h-1.5" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-[25%] w-1.5 h-1.5" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-[25%] w-1.5 h-1.5" style={{ background: 'var(--cyan)' }} />
          </div>

          {/* Floating badge 1 */}
          <div
            ref={badge1Ref}
            className="absolute -top-4 -left-8 animate-float"
          >
            <span
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1.5 rounded-sm"
              style={{
                background: 'var(--alert-dim)',
                border: '1px solid rgba(255, 45, 85, 0.3)',
                color: 'var(--alert)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--alert)' }} />
              AVAILABLE FOR REMOTE
            </span>
          </div>

          {/* Floating badge 2 */}
          <div
            ref={badge2Ref}
            className="absolute -bottom-4 -right-8 animate-float-delayed"
          >
            <span
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1.5 rounded-sm"
              style={{
                background: 'rgba(0, 229, 255, 0.08)',
                border: '1px solid var(--cyan-dim)',
                color: 'var(--cyan)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              7+ YEARS EXPERIENCE
            </span>
          </div>
        </div>

        {/* Right column - Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <h1
            ref={nameRef}
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: 'var(--cyan)',
              textShadow: '0 0 40px rgba(0, 229, 255, 0.4), 0 0 80px rgba(0, 229, 255, 0.1)',
              lineHeight: 1.1,
            }}
          >
            {nameText.split('').map((char, i) => (
              <span key={i} className="char inline-block" style={{ minWidth: char === ' ' ? '0.3em' : 'auto' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          {/* Divider line */}
          <div
            className="mt-4 animate-pulse-glow"
            style={{
              width: '120px',
              height: '2px',
              background: 'var(--cyan)',
            }}
          />

          <p
            ref={roleRef}
            className="font-mono mt-4"
            style={{
              fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
              color: 'var(--text-secondary-color)',
              letterSpacing: '0.35em',
            }}
          >
            PYTHON, BACKEND DEVELOPER, AI ENGINEER & BIOINFORMATICS ENGINEER
          </p>

          <p
            ref={bioRef}
            className="mt-8 font-body"
            style={{
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              color: 'var(--text-primary-color)',
              lineHeight: 1.7,
            }}
          >
            I have a strong background in science with a Diploma in Mathematics and Physics, a Bachelor's in Molecular and Cellular Biology, and a Master's in Human Genetics. My journey with programming started back in high school, and over the last seven years, I've grown from a junior to a senior-level expert in bioinformatics, data science, AI, machine learning, and deep learning. I work with Python, R, Django (DRF) and FastAPI, and I'm passionate about combining computer science and engineering with biology, genetics, and physics to solve exciting and challenging problems.
            <span
              className="inline-block ml-0.5"
              style={{
                width: '2px',
                height: '1em',
                background: 'var(--cyan)',
                animation: 'caret-blink 1s step-end infinite',
                verticalAlign: 'text-bottom',
              }}
            />
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 mt-8">
            <a
              href="./assets/resume.pdf"
              download
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase px-7 py-3 transition-all duration-300 hover:shadow-[var(--glow-cyan-border)]"
              style={{
                color: 'var(--cyan)',
                border: '1px solid var(--cyan-mid)',
                background: 'transparent',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
                e.currentTarget.style.borderColor = 'var(--cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--cyan-mid)';
              }}
            >
              <Download size={16} />
              DOWNLOAD CV
            </a>
            <button
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase px-7 py-3 transition-all duration-300 cursor-pointer"
              style={{
                color: 'var(--alert)',
                border: '1px solid rgba(255, 45, 85, 0.4)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 45, 85, 0.1)';
                e.currentTarget.style.borderColor = 'var(--alert)';
                e.currentTarget.style.boxShadow = 'var(--glow-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 45, 85, 0.4)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Mail size={16} />
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
