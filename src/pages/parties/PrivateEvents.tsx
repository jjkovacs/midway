import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import PhotoGallery from '../../components/ui/PhotoGallery';
import RequestInfoForm from '../../components/forms/RequestInfoForm';
import { privatePackages } from '../../data/parties';
import { heroImages, galleryImages } from '../../assets/images/images';
import { CheckCircle2 } from 'lucide-react';

export default function PrivateEvents() {
  return (
    <>
      <PageMeta
        title="Private & Corporate Events"
        description="Host your next corporate event or private party at Midway with Tent Rental, Teambuilder, or All American BBQ packages."
      />

      <Hero
        image={heroImages.privateEvents}
        eyebrow="Book a Party"
        title="Private & corporate events"
        subtitle="Midway is the perfect place to satisfy everyone's idea of fun in your group — from Go-Kart racing to our award-winning mini golf courses."
      >
        <Button to="#book_now" variant="primary">
          Book a Party Now
        </Button>
      </Hero>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Packages" title="The best parties are at Midway" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {privatePackages.map((pkg) => (
              <Card key={pkg.name} className="relative flex flex-col p-8">
                {pkg.badge && (
                  <Badge color="red" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {pkg.badge}
                  </Badge>
                )}
                <h3 className="font-heading text-xl font-bold text-midway-navy">{pkg.name}</h3>
                <p className="mt-2 font-display text-4xl text-midway-red">
                  {pkg.price}
                  {pkg.priceUnit && <span className="text-lg text-midway-navy/50">{pkg.priceUnit}</span>}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-midway-navy/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-midway-red" />
                      {f}
                    </li>
                  ))}
                </ul>
                {pkg.note && <p className="mt-4 text-xs italic text-midway-navy/50">{pkg.note}</p>}
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-midway-navy/60">
            There are minimum age and height restrictions for several attractions. Outside food, picnic baskets,
            coolers, and other outside food are allowed but need to be pre-approved by Midway management.
          </p>
        </div>
      </section>

      <section className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Come and join the fun!" className="mb-10" />
          <PhotoGallery images={galleryImages['private-events']} altPrefix="Private event" />
        </div>
      </section>

      <section id="book_now" className="section bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Request Info" title="Book Your Event Now" className="mb-10" />
          <RequestInfoForm defaultEventType="Private / Corporate Event" />
        </div>
      </section>
    </>
  );
}
