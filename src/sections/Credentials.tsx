import { useRef } from 'react';
import { useGSAPScrollAnimation } from '@/hooks/useGSAPScroll';
import SectionTitle from '@/components/SectionTitle';
import GlassBadge from '@/components/GlassBadge';
import { Globe, Award, Mic } from 'lucide-react';

const certificates = [
  { name: 'Machine Learning in Python', issuer: '365 DataScience' },
  { name: 'Deep Learning with TensorFlow2', issuer: '365 DataScience' },
  { name: 'CNNs with TensorFlow2', issuer: '365 DataScience' },
  { name: 'Data Cleaning & Preprocessing with Pandas', issuer: '365 DataScience' },
  { name: 'Introduction Jupyter Notebook', issuer: '365 DataScience' },
  { name: 'TTC (Teacher Training Course)', issuer: '' },
  { name: 'Diploma of English (as second language)', issuer: '' },
];

const events = [
  {
    title: 'Applications of Python in Biology',
    type: 'Seminar',
    date: '3RD JAN 2024',
    description: 'In collaboration with Cellular & Molecular Biology Community, Fundamental Science Faculty, Islamic Azad University of Mashhad',
  },
  {
    title: 'Bioinformatics: Applications of Python & AI in Bio-Medical Science',
    type: 'Webinar',
    date: '8TH JUN 2025',
    description: 'Zista-BioTech: In collaboration with Sharif University of Technology, National Institute of Genetic Engineering and Biotechnology, Islamic Azad Medical University of Tehran',
  },
];

export default function Credentials() {
  const langRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  useGSAPScrollAnimation(langRef, 'panel');
  useGSAPScrollAnimation(certRef, 'panel');
  useGSAPScrollAnimation(eventsRef, 'panel');

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
      id="credentials"
      className="relative"
      style={{ padding: 'var(--space-section) 0' }}
    >
      {/* Divider */}
      <div
        className="mx-auto mb-16"
        style={{
          maxWidth: 'var(--container-max)',
          padding: '0 var(--container-pad)',
        }}
      >
        <div style={{ height: '1px', background: 'var(--cyan-dim)' }} />
      </div>

      <div
        className="relative z-10 mx-auto"
        style={{ maxWidth: 'var(--container-max)', padding: '0 var(--container-pad)' }}
      >
        <SectionTitle title="CREDENTIALS" sectionId="SECTION 05 — RECOGNITION" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <div ref={langRef} className="p-6" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

            <h3 className="font-display text-base mb-4" style={{ color: 'var(--cyan)' }}>LANGUAGES</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe size={18} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                <div className="flex-1">
                  <span className="font-body text-sm" style={{ color: 'var(--text-primary-color)' }}>Persian (Farsi)</span>
                </div>
                <GlassBadge variant="cyan">NATIVE</GlassBadge>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                <div className="flex-1">
                  <span className="font-body text-sm" style={{ color: 'var(--text-primary-color)' }}>English</span>
                </div>
                <GlassBadge variant="skill">2ND LANGUAGE — FLUENT</GlassBadge>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div ref={certRef} className="p-6" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

            <h3 className="font-display text-base mb-4" style={{ color: 'var(--cyan)' }}>CERTIFICATES</h3>
            <div className="space-y-3">
              {certificates.map((cert, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Award size={14} style={{ color: 'var(--cyan)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p className="font-body text-sm" style={{ color: 'var(--text-primary-color)' }}>
                      {cert.name}
                    </p>
                    {cert.issuer && (
                      <p className="font-mono text-[10px]" style={{ color: 'var(--text-secondary-color)' }}>
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div ref={eventsRef} className="p-6" style={panelBaseStyle}>
            <div className="absolute top-0 left-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: 'var(--alert)' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: 'var(--cyan)' }} />

            <h3 className="font-display text-base mb-4" style={{ color: 'var(--cyan)' }}>SPEAKING EVENTS</h3>
            <div className="space-y-4">
              {events.map((evt, i) => (
                <div key={i}>
                  {i > 0 && <div className="mb-4" style={{ height: '1px', background: 'var(--cyan-dim)' }} />}
                  <div className="flex items-start gap-2">
                    <Mic size={16} style={{ color: 'var(--alert)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p className="font-body text-sm font-semibold" style={{ color: 'var(--text-primary-color)' }}>
                        {evt.title}
                      </p>
                      <p className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--text-tertiary-color)' }}>
                        {evt.date} | {evt.type}
                      </p>
                      <p className="font-body text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-secondary-color)' }}>
                        {evt.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
