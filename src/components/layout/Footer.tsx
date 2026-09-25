import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { footerLinks, navGroups, primaryLinks, siteInfo } from '../../data/nav';
import NewsletterForm from '../forms/NewsletterForm';
import { FacebookIcon, TwitterIcon } from '../ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-midway-navy pb-24 pt-16 text-white/80 lg:pb-16">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="mb-4 inline-flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}images/midway-logo.png`}
              alt="Midway Sports &amp; Entertainment — Celebrating 75 Years"
              className="h-16 w-auto"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed">
            Detroit's outdoor fun spot since {siteInfo.founded} — go-karts, mini golf, a Toptracer driving range,
            batting cages, bumper cars, a bungy dome, and rock climbing, all in one place.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-midway-red"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={siteInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-midway-red"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-midway-gold">
              {group.label}
            </p>
            <ul className="space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-midway-gold">Visit Us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-midway-red" />
              <a href={siteInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {siteInfo.address}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-midway-red" />
              <a href={siteInfo.phoneRaw} className="hover:text-white">
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-midway-red" />
              <a href={`mailto:${siteInfo.email}`} className="hover:text-white">
                {siteInfo.email}
              </a>
            </li>
          </ul>
          <ul className="mt-4 space-y-2 text-sm">
            {primaryLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-14 rounded-2xl bg-white/5 p-6 md:flex md:items-center md:justify-between md:p-8">
        <div className="mb-4 md:mb-0">
          <p className="font-display text-xl text-white">Join Our eClub</p>
          <p className="text-sm text-white/60">Get the latest updates and promotional offers straight to your inbox.</p>
        </div>
        <div className="md:w-96">
          <NewsletterForm />
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks
            .filter((l) => l.to.includes('policy') || l.to.includes('terms'))
            .map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-white">
                {link.label}
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
