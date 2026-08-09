import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { hoursBlocks, hoursNotes } from '../../data/hours';
import { siteInfo } from '../../data/nav';
import { Clock, MapPin } from 'lucide-react';

export default function HoursAndDirections() {
  return (
    <>
      <PageMeta
        title="Hours & Directions"
        description="Find Midway Sports & Entertainment's hours of operation and directions to our Taylor, MI location."
      />

      <Hero
        size="md"
        eyebrow="Park Info"
        title="Hours & Directions"
        subtitle="All hours are weather permitting — call ahead if conditions look questionable."
      />

      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {hoursBlocks.map((block) => (
            <Card key={block.group} className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-6 w-6 text-midway-red" />
                <h3 className="font-heading text-xl font-bold text-midway-navy">{block.group}</h3>
              </div>
              <ul className="divide-y divide-midway-navy/10">
                {block.schedule.map((s) => (
                  <li key={s.days} className="flex items-center justify-between py-3">
                    <span className="text-midway-navy/70">{s.days}</span>
                    <span className="font-semibold text-midway-navy">{s.time}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="container-page mt-8">
          <Card className="p-8">
            <ul className="space-y-2 text-sm text-midway-navy/70">
              {hoursNotes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="section bg-midway-cream">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Find Us" title="Get Directions" className="mb-6" />
            <p className="flex items-start gap-3 text-lg text-midway-navy/80">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-midway-red" />
              {siteInfo.address}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to={siteInfo.mapsUrl} external variant="primary">
                Get Directions
              </Button>
              <Button to={siteInfo.phoneRaw} external variant="outline-navy">
                {siteInfo.phone}
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Midway Sports & Entertainment location map"
              src="https://maps.google.com/maps?q=22381%20Van%20Born%20Rd.%20Taylor,%20MI%2048180&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-80 w-full border-0 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
