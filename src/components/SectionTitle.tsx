import { useRef } from 'react';
import { useGSAPScrollAnimation } from '@/hooks/useGSAPScroll';

interface SectionTitleProps {
  title: string;
  sectionId: string;
  className?: string;
}

export default function SectionTitle({ title, sectionId, className = '' }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAPScrollAnimation(ref, 'beam');

  return (
    <div ref={ref} className={`mb-10 ${className}`}>
      <h2
        className="font-display neon-glow"
        style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          color: 'var(--cyan)',
          textShadow: 'var(--glow-cyan)',
        }}
      >
        {title}
      </h2>
      <div
        className="mt-3"
        style={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(to right, var(--cyan), transparent)',
        }}
      />
      <p
        className="font-label mt-2"
        style={{ color: 'var(--text-tertiary-color)' }}
      >
        {sectionId}
      </p>
    </div>
  );
}
