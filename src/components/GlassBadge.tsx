import { cn } from '@/lib/utils';

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'alert' | 'skill';
  className?: string;
}

export default function GlassBadge({ children, variant = 'skill', className }: GlassBadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    cyan: {
      background: 'rgba(0, 229, 255, 0.08)',
      border: '1px solid var(--cyan-dim)',
      color: 'var(--cyan)',
    },
    alert: {
      background: 'var(--alert-dim)',
      border: '1px solid rgba(255, 45, 85, 0.3)',
      color: 'var(--alert)',
    },
    skill: {
      background: 'rgba(0, 229, 255, 0.05)',
      border: '1px solid var(--cyan-dim)',
      color: 'var(--text-secondary-color)',
    },
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-1 rounded-sm backdrop-blur-sm',
        className
      )}
      style={{
        ...styles[variant],
        backdropFilter: 'blur(4px)',
      }}
    >
      {children}
    </span>
  );
}
