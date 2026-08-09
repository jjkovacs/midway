import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, MapPin } from 'lucide-react';
import { navGroups, primaryLinks, siteInfo } from '../../data/nav';
import Button from '../ui/Button';

export default function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-midway-navy/60 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <Link to="/" onClick={onClose} className="font-display text-2xl text-midway-navy">
                Midway
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="rounded-full p-2 text-midway-navy hover:bg-midway-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 font-heading text-xs font-bold uppercase tracking-widest text-midway-red">
                    {group.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    {group.links.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `rounded-lg px-3 py-2 font-medium ${
                            isActive ? 'bg-midway-cream text-midway-red' : 'text-midway-navy hover:bg-midway-cream'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <p className="mb-2 font-heading text-xs font-bold uppercase tracking-widest text-midway-red">More</p>
                <div className="flex flex-col gap-1">
                  {primaryLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `rounded-lg px-3 py-2 font-medium ${
                          isActive ? 'bg-midway-cream text-midway-red' : 'text-midway-navy hover:bg-midway-cream'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3 border-t border-midway-navy/10 pt-6">
              <a href={siteInfo.phoneRaw} className="flex items-center gap-2 text-midway-navy">
                <Phone className="h-4 w-4 text-midway-red" /> {siteInfo.phone}
              </a>
              <a
                href={siteInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-midway-navy"
              >
                <MapPin className="h-4 w-4 text-midway-red" /> {siteInfo.address}
              </a>
              <Button to="/fun-cards" className="w-full" onClick={onClose}>
                Buy a Fun Card
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
