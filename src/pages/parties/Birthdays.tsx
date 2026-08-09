import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import PhotoGallery from '../../components/ui/PhotoGallery';
import RequestInfoForm from '../../components/forms/RequestInfoForm';
import { birthdayPackages, birthdayAddOns, birthdayIncludes } from '../../data/parties';
import { heroImages, galleryImages } from '../../assets/images/images';
import { CheckCircle2 } from 'lucide-react';

export default function Birthdays() {
  return (
    <>
      <PageMeta
        title="Birthday Parties"
        description="Throw the perfect birthday party at Midway — Tent Rental, A Pak, and B Pak packages include pizza, pop, and play wristbands."
      />

      <Hero
        image={heroImages.birthdays}
        eyebrow="Book a Party"
        title="Throw a party to remember"
        subtitle="Midway Birthday Parties are the best way for your kids to celebrate their special day. All you do is relax — we do all the work."
      >
        <Button to="#book_now" variant="primary">
          Book a Party Now
        </Button>
      </Hero>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Packages" title="The best birthdays are at Midway" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {birthdayPackages.map((pkg) => (
              <Card key={pkg.name} className="relative flex flex-col p-8">
                {pkg.badge && (
                  <Badge color="red" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {pkg.badge}
                  </Badge>
                )}
                <h3 className="font-heading text-xl font-bold text-midway-navy">{pkg.name}</h3>
                <p className="mt-2 font-display text-4xl text-midway-red">{pkg.price}</p>
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

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="p-8">
              <h3 className="font-heading text-lg font-bold text-midway-navy">Party Extras (Add-Ons)</h3>
              <p className="mt-1 text-xs text-midway-navy/50">Only applies to A Pak and B Pak — cannot be combined with Tent Rental.</p>
              <ul className="mt-4 space-y-2">
                {birthdayAddOns.map((addon) => (
                  <li key={addon} className="text-midway-navy/75">
                    • {addon}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="bg-midway-navy p-8 text-white" hover={false}>
              <h3 className="font-heading text-lg font-bold text-midway-gold">Both Packages Include</h3>
              <ul className="mt-4 space-y-2">
                {birthdayIncludes.map((item) => (
                  <li key={item} className="text-white/80">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Come and join the fun!" className="mb-10" />
          <PhotoGallery images={galleryImages.birthdays} altPrefix="Birthday party" />
        </div>
      </section>

      <section id="book_now" className="section bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Request Info" title="Book Your Party Now" className="mb-10" />
          <RequestInfoForm defaultEventType="Birthday Party (A Pak)" />
        </div>
      </section>
    </>
  );
}
