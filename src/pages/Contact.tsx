import PageMeta from '../components/layout/PageMeta';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ContactForm from '../components/forms/ContactForm';
import { siteInfo } from '../data/nav';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactCards = [
  { icon: MapPin, title: 'Our Location', value: siteInfo.address, href: siteInfo.mapsUrl, external: true },
  { icon: Phone, title: 'Call Us Today', value: siteInfo.phone, href: siteInfo.phoneRaw, external: true },
  { icon: Mail, title: 'Email Us Now', value: siteInfo.email, href: `mailto:${siteInfo.email}`, external: true },
];

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Midway Sports & Entertainment — call, email, or send us a message and we'll get back to you soon."
      />

      <Hero size="md" eyebrow="We'd Love to Hear From You" title="Contact Us" subtitle="Get in touch" />

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading align="left" eyebrow="Send a Message" title="Get in Touch" className="mb-8" />
            <ContactForm />
          </div>
          <div className="flex flex-col gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="p-6">
                  <Icon className="h-8 w-8 text-midway-red" />
                  <h3 className="mt-3 font-heading font-bold text-midway-navy">{card.title}</h3>
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="mt-1 block text-midway-navy/70 hover:text-midway-red"
                  >
                    {card.value}
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-midway-cream pb-16">
        <div className="container-page overflow-hidden rounded-2xl shadow-card">
          <iframe
            title="Midway Sports & Entertainment location map"
            src="https://maps.google.com/maps?q=22381%20Van%20Born%20Rd.%20Taylor,%20MI%2048180&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
