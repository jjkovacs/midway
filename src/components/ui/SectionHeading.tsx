import { type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  theme?: 'navy' | 'light';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'navy',
  className = '',
}: SectionHeadingProps) {
  const isLight = theme === 'light';
  return (
    <div className={cn(align === 'center' ? 'mx-auto text-center' : 'text-left', 'max-w-2xl', className)}>
      {eyebrow && (
        <p
          className={`mb-3 font-heading text-sm font-bold uppercase tracking-[0.2em] ${
            isLight ? 'text-midway-gold' : 'text-midway-red'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl md:text-5xl ${isLight ? 'text-white' : 'text-midway-navy'}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${isLight ? 'text-white/80' : 'text-midway-navy/70'}`}>{subtitle}</p>
      )}
    </div>
  );
}
