import { useRef, useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  isPrimary?: boolean;
  note?: string;
}

export default function SkillBar({ name, percentage, isPrimary = false, note }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), 100);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef} className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="3" fill="var(--cyan)" />
            <circle cx="8" cy="8" r="6" stroke="var(--cyan-dim)" strokeWidth="1" />
          </svg>
          <span
            className="font-mono text-sm"
            style={{ color: 'var(--text-secondary-color)' }}
          >
            {name}
          </span>
          {note && (
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-tertiary-color)' }}>
              ({note})
            </span>
          )}
        </div>
        <span
          className="font-mono text-xs"
          style={{ color: 'var(--cyan)' }}
        >
          {percentage}%
        </span>
      </div>
      <div
        className="w-full rounded-full"
        style={{ height: '6px', background: 'var(--bg-void)' }}
      >
        <div
          className="rounded-full relative"
          style={{
            height: '6px',
            width: `${width}%`,
            background: 'linear-gradient(to right, var(--cyan), #00B8D4)',
            transition: 'width 1.2s ease-out',
            boxShadow: isPrimary ? 'var(--glow-cyan-border)' : 'none',
          }}
        />
      </div>
    </div>
  );
}
