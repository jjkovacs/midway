import { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, MapPin } from 'lucide-react';
import { navGroups, primaryLinks, siteInfo } from '../../data/nav';
import Button from '../ui/Button';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Utility bar */}
      <div
        className={`hidden bg-midway-navy text-white transition-all duration-300 md:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-page flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={siteInfo.phoneRaw} className="flex items-center gap-2 hover:text-midway-gold">
              <Phone className="h-4 w-4" /> {siteInfo.phone}
            </a>
            <a
              href={siteInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-midway-gold"
            >
              <MapPin className="h-4 w-4" /> {siteInfo.address}
            </a>
          </div>
          <p className="font-heading font-semibold uppercase tracking-wide text-midway-gold">{siteInfo.tagline}</p>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container-page flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <img
              src="/images/midway-logo.png"
              alt="Midway Sports &amp; Entertainment — Celebrating 75 Years"
              className="h-14 w-auto md:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-semibold text-midway-navy hover:bg-midway-cream hover:text-midway-red"
                  aria-expanded={openGroup === group.label}
                >
                  {group.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openGroup === group.label ? 'rotate-180' : ''}`}
                  />
                </button>
                {openGroup === group.label && (
                  <div className="absolute left-0 top-full w-64 pt-2">
                    <div className="overflow-hidden rounded-xl border border-midway-navy/10 bg-white py-2 shadow-card-hover">
                      {group.links.map((link) => (
                        <RouterNavLink
                          key={link.to}
                          to={link.to}
                          className={({ isActive }) =>
                            `block px-5 py-2.5 text-sm font-medium hover:bg-midway-cream hover:text-midway-red ${
                              isActive ? 'text-midway-red' : 'text-midway-navy'
                            }`
                          }
                        >
                          {link.label}
                        </RouterNavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {primaryLinks.map((link) => (
              <RouterNavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 font-heading text-sm font-semibold hover:bg-midway-cream hover:text-midway-red ${
                    isActive ? 'text-midway-red' : 'text-midway-navy'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/fun-cards" variant="primary" className="hidden md:inline-flex">
              Buy a Fun Card
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              className="rounded-full p-2 text-midway-navy hover:bg-midway-cream lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
