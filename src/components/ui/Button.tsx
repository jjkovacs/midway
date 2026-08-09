import { type ButtonHTMLAttributes, type MouseEventHandler, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'gold' | 'outline' | 'outline-navy';

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
  'outline-navy': 'btn-outline-navy',
};

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  to?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  icon,
  to,
  external = false,
  type = 'button',
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(variantClass[variant], className);

  if (to && external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
        {icon}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
      {icon}
    </button>
  );
}
