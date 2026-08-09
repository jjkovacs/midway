import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import PhotoGallery from '../../components/ui/PhotoGallery';
import RequestInfoForm from '../../components/forms/RequestInfoForm';
import { fieldTripInfo } from '../../data/parties';
import { heroImages, galleryImages } from '../../assets/images/images';
import { CheckCircle2 } from 'lucide-react';

export default function FieldTrips() {
  return (
    <>
      <PageMeta
        title="Field Trips"
        description="Schools, parks & rec's, teams, churches, camps, and scouts — book a field trip at Midway with unlimited rides and lunch included."
      />

      <Hero
        image={heroImages.fieldTrips}
        eyebrow="School & Youth Group Field Trips"
        title="The best field trips are at Midway"
        subtitle="Schools, Parks & Rec's, Teams, Churches, Camps, Scouts — our 3-hour unlimited rides wristband and lunch package makes Midway the ideal spot for your summer outing."
      >
        <Button to="#book_now" variant="primary">
          Book Now
        </Button>
      </Hero>

      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Card className="p-8">
            <h3 className="font-heading text-xl font-bold text-midway-navy">Pricing</h3>
            <p className="mt-2 font-display text-4xl text-midway-red">
              {fieldTripInfo.price} <span className="text-lg text-midway-navy/50">{fieldTripInfo.priceUnit}</span>
            </p>
            <ul className="mt-6 space-y-3">
              {fieldTripInfo.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-midway-navy/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-midway-red" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-midway-navy/50">$300 non-refundable deposit required.</p>
          </Card>
          <Card className="p-8">
            <h3 className="font-heading text-xl font-bold text-midway-navy">Lunch Included</h3>
            <ul className="mt-6 space-y-3">
              {fieldTripInfo.lunch.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-midway-navy/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-midway-red" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="container-page mt-8">
          <Card className="bg-midway-navy p-8 text-white" hover={false}>
            <h3 className="font-heading text-lg font-bold text-midway-gold">Booking Details</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {fieldTripInfo.bookingDetails.map((detail) => (
                <li key={detail} className="text-sm text-white/80">
                  • {detail}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Come and join the fun!" className="mb-10" />
          <PhotoGallery images={galleryImages['field-trips']} altPrefix="Field trip" />
        </div>
      </section>

      <section id="book_now" className="section bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Request Info" title="Book Your Field Trip Now" className="mb-10" />
          <RequestInfoForm defaultEventType="Field Trip" />
        </div>
      </section>
    </>
  );
}
