import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  image?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  size?: 'lg' | 'md';
  overlay?: 'dark' | 'gradient';
}

export default function Hero({ image, eyebrow, title, subtitle, children, size = 'lg', overlay = 'gradient' }: HeroProps) {
  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        size === 'lg' ? 'min-h-[68vh] md:min-h-[78vh]' : 'min-h-[42vh] md:min-h-[46vh]'
      }`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div
            className={`absolute inset-0 ${
              overlay === 'gradient'
                ? 'bg-gradient-to-t from-midway-navy via-midway-navy/70 to-midway-navy/20'
                : 'bg-midway-navy/60'
            }`}
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-midway-red via-midway-red-dark to-midway-navy" />
          <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-midway-gold/30 blur-3xl" />
          <div className="absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-midway-gold/20 blur-3xl" />
        </>
      )}
      <div className="absolute inset-0 bg-stripe-diag opacity-30" />
      <div className="container-page relative z-10 pb-12 pt-32 md:pb-16 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <span className="badge mb-4 inline-block bg-midway-gold text-midway-navy">{eyebrow}</span>
          )}
          <h1 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-white/90 md:text-xl">{subtitle}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
