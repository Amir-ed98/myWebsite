import { useRef } from 'react';
import { useGSAPScrollAnimation } from '@/hooks/useGSAPScroll';
import SectionTitle from '@/components/SectionTitle';
import GlassBadge from '@/components/GlassBadge';
import DNAHelix from '@/components/DNAHelix';
import { GraduationCap } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoPanelRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const sciPanelRef = useRef<HTMLDivElement>(null);

  useGSAPScrollAnimation(infoPanelRef, 'panel');
  useGSAPScrollAnimation(narrativeRef, 'beam');
  useGSAPScrollAnimation(sciPanelRef, 'panel');

  const highlightKeywords = (text: string) => {
    const keywords = ['bioinformatics', 'data science', 'AI', 'machine learning', 'deep learning', 'Python', 'Django (DRF)', 'FastAPI'];
    let result = text;
    keywords.forEach((kw) => {
      result = result.replace(
        new RegExp(kw, 'gi'),
        `<span style="color: var(--cyan); font-weight: 600;">${kw}</span>`
      );
    });
    return result;
  };

  const bioText = `I have a strong background in science with a Diploma in Mathematics and Physics, a Bachelor's in Molecular and Cellular Biology, and a Master's in Human Genetics. My journey with programming started back in high school, and over the last seven years, I've grown from a junior to a senior-level expert in bioinformatics, data science, AI, machine learning, and deep learning. I work with Python, R, Django (DRF) and FastAPI, and I'm passionate about combining computer science and engineering with biology, genetics, and physics to solve exciting and challenging problems.`;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative"
      style={{ padding: 'var(--space-section) 0' }}
    >
      <DNAHelix opacity={0.4} />

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: 'var(--container-max)', padding: '0 var(--container-pad)' }}
      >
        <SectionTitle title="ABOUT" sectionId="SECTION 01 — PROFILE" />

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8">
          {/* Left - Info Panel */}
          <div ref={infoPanelRef}>
            <div
              className="p-6 lg:p-8"
              style={{
                background: 'var(--bg-panel)',
                backgroundImage: 'var(--holo-gradient)',
                border: '1px solid var(--cyan-mid)',
                boxShadow: 'var(--shadow-panel), var(--holo-shadow)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
              <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
              <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
              <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

              {/* Personal Details */}
              <h3
                className="font-display text-lg mb-4"
                style={{ color: 'var(--cyan)' }}
              >
                PERSONAL
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-label" style={{ color: 'var(--text-tertiary-color)' }}>BIRTHDAY</span>
                  <span className="font-body text-sm" style={{ color: 'var(--text-primary-color)' }}>22ND MAY 1998</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label" style={{ color: 'var(--text-tertiary-color)' }}>LOCATION</span>
                  <span className="font-body text-sm" style={{ color: 'var(--text-primary-color)' }}>IRAN — AVAILABLE WORLDWIDE REMOTE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label" style={{ color: 'var(--text-tertiary-color)' }}>STATUS</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-status-pulse"
                      style={{ background: '#00E676' }}
                    />
                    <span className="font-body text-sm" style={{ color: 'var(--text-primary-color)' }}>OPEN TO OPPORTUNITIES</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6" style={{ height: '1px', background: 'var(--cyan-dim)' }} />

              {/* Education */}
              <h3
                className="font-display text-lg mb-4"
                style={{ color: 'var(--cyan)' }}
              >
                EDUCATION
              </h3>
              <div className="space-y-4">
                {[
                  { degree: 'Diploma of Science in Mathematics & Physics', school: 'Modarres High School' },
                  { degree: 'Bachelor of Science in Molecular and Cellular Biology', school: 'Azad University, Biology Faculty' },
                  { degree: 'Master of Science in Human Genetics', school: 'Azad University, Biology Faculty' },
                ].map((edu, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <GraduationCap size={16} style={{ color: 'var(--cyan)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p className="font-body text-sm font-semibold" style={{ color: 'var(--text-primary-color)' }}>
                        {edu.degree}
                      </p>
                      <p className="font-mono text-[10px] tracking-wide" style={{ color: 'var(--text-secondary-color)' }}>
                        {edu.school}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Narrative + Scientific Background */}
          <div className="space-y-8">
            <div ref={narrativeRef}>
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                  color: 'var(--text-primary-color)',
                  lineHeight: 1.8,
                }}
                dangerouslySetInnerHTML={{ __html: highlightKeywords(bioText) }}
              />
            </div>

            {/* Scientific Background Panel */}
            <div ref={sciPanelRef}>
              <div
                className="p-6"
                style={{
                  background: 'var(--bg-panel)',
                  backgroundImage: 'var(--holo-gradient)',
                  border: '1px solid var(--cyan-mid)',
                  boxShadow: 'var(--shadow-panel), var(--holo-shadow)',
                  position: 'relative',
                }}
              >
                <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
                <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
                <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
                <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

                <h3
                  className="font-display text-base mb-4"
                  style={{ color: 'var(--cyan)' }}
                >
                  SCIENTIFIC BACKGROUND & COMPUTER SCIENCE
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex flex-wrap gap-2">
                    {['MATHEMATICS & STATISTICS', 'BIOLOGY & GENETICS', 'BIOCHEMISTRY', 'BIOPHYSICS'].map((tag) => (
                      <GlassBadge key={tag} variant="skill">{tag}</GlassBadge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['DATA STRUCTURES', 'ALGORITHMS', 'COMPUTATIONAL BIOLOGY'].map((tag) => (
                      <GlassBadge key={tag} variant="skill">{tag}</GlassBadge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
