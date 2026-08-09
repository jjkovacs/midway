import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import PageMeta from '../layout/PageMeta';
import Hero from '../ui/Hero';
import Button from '../ui/Button';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import PhotoGallery from '../ui/PhotoGallery';
import type { Attraction } from '../../data/attractions';
import { toptracerModes } from '../../data/attractions';
import { heroImages, galleryImages } from '../../assets/images/images';
import { attractions } from '../../data/attractions';

const heroImageKeyMap: Record<string, keyof typeof heroImages> = {
  'go-karts': 'goKarts',
  'spin-zone': 'spinZone',
  'bungy-dome': 'bungyDome',
  'rock-climbing': 'rockClimbing',
  'mini-golf': 'miniGolf',
  'golf-driving-range': 'drivingRange',
  'batting-cages': 'battingCages',
};

export default function AttractionTemplate({ attraction }: { attraction: Attraction }) {
  const heroImage = heroImages[heroImageKeyMap[attraction.slug]];
  const gallery = galleryImages[attraction.slug] ?? [];
  const otherAttractions = attractions.filter((a) => a.slug !== attraction.slug).slice(0, 3);
  const isDrivingRange = attraction.slug === 'golf-driving-range';

  return (
    <>
      <PageMeta title={attraction.name} description={attraction.description} />

      <Hero image={heroImage} eyebrow={attraction.tagline} title={attraction.name} subtitle={attraction.description}>
        <Button to="/contact" variant="primary">
          Request More Info
        </Button>
        <Button to="/park-info/pricing" variant="outline">
          See All Prices
        </Button>
      </Hero>

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="About This Attraction" title={attraction.name} className="mb-6" />
            <p className="text-lg leading-relaxed text-midway-navy/80">{attraction.description}</p>
            {attraction.longDescription && (
              <p className="mt-4 text-lg leading-relaxed text-midway-navy/80">{attraction.longDescription}</p>
            )}
          </div>

          <Card className="h-fit p-8">
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-midway-red">Pricing &amp; Info</p>
            <p className="mt-2 font-display text-4xl text-midway-navy">{attraction.price}</p>
            <ul className="mt-6 space-y-3">
              {attraction.infoItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-midway-navy/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-midway-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/park-info/pricing" variant="primary" className="mt-8 w-full">
              See All Prices
            </Button>
          </Card>
        </div>
      </section>

      {isDrivingRange && (
        <section className="section bg-midway-navy text-white">
          <div className="container-page">
            <SectionHeading
              theme="light"
              eyebrow="Toptracer Experience"
              title="Every stall, powered by Toptracer"
              subtitle="Practice modes, virtual courses, and family-friendly games — there's something for every golfer."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {toptracerModes.map((mode) => (
                <div key={mode.name} className="rounded-2xl bg-white/5 p-6">
                  <h3 className="font-heading text-lg font-bold text-midway-gold">{mode.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{mode.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeading eyebrow="Gallery" title="Come and join the fun!" className="mb-10" />
            <PhotoGallery images={gallery} altPrefix={attraction.name} />
          </div>
        </section>
      )}

      <section className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Keep Exploring" title="More ways to play at Midway" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-3">
            {otherAttractions.map((other) => (
              <Link
                key={other.slug}
                to={`/attractions/${other.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-midway-red">{other.price}</p>
                <h3 className="mt-1 font-display text-2xl text-midway-navy">{other.shortName}</h3>
                <p className="mt-2 text-sm text-midway-navy/60">{other.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
