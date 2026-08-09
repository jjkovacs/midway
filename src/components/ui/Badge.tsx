import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  color?: 'red' | 'gold' | 'navy';
  className?: string;
}

const colorClass: Record<NonNullable<BadgeProps['color']>, string> = {
  red: 'bg-midway-red text-white',
  gold: 'bg-midway-gold text-midway-navy',
  navy: 'bg-midway-navy text-white',
};

export default function Badge({ children, color = 'gold', className = '' }: BadgeProps) {
  return <span className={`badge ${colorClass[color]} ${className}`}>{children}</span>;
}
