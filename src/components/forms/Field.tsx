import { type ReactNode } from 'react';

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export default function Field({ label, htmlFor, error, children, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-midway-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm font-medium text-midway-red">{error}</p>}
    </div>
  );
}

export const inputClass =
  'w-full rounded-xl border border-midway-navy/15 bg-white px-4 py-2.5 text-midway-navy placeholder:text-midway-navy/40 focus:border-midway-red focus:outline-none focus:ring-2 focus:ring-midway-red/20';
