import { Phone, MapPin, Clock, CreditCard } from 'lucide-react';
import { siteInfo } from '../../data/nav';
import { Link } from 'react-router-dom';

const items = [
  { icon: Phone, label: 'Call', href: siteInfo.phoneRaw, external: true },
  { icon: MapPin, label: 'Directions', href: siteInfo.mapsUrl, external: true },
  { icon: Clock, label: 'Hours', href: '/park-info/hours-and-directions', external: false },
  { icon: CreditCard, label: 'Fun Cards', href: '/fun-cards', external: false },
];

export default function MobileActionBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-midway-navy/10 bg-white shadow-[0_-4px_20px_rgba(15,27,61,0.12)] lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="h-5 w-5 text-midway-red" />
            <span className="text-[11px] font-semibold text-midway-navy">{item.label}</span>
          </>
        );
        return item.external ? (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2.5"
          >
            {content}
          </a>
        ) : (
          <Link key={item.label} to={item.href} className="flex flex-col items-center justify-center gap-1 py-2.5">
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
