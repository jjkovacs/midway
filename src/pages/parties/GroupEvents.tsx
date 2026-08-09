import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import PhotoGallery from '../../components/ui/PhotoGallery';
import RequestInfoForm from '../../components/forms/RequestInfoForm';
import { heroImages, galleryImages } from '../../assets/images/images';

export default function GroupEvents() {
  return (
    <>
      <PageMeta
        title="Group Events"
        description="Have an event that doesn't fit our standard packages? Midway's party specialists will help build a custom group event for you."
      />

      <Hero
        image={heroImages.groupEvents}
        eyebrow="Book a Party"
        title="Throw a party to remember"
        subtitle="Midway takes pride in hosting many different types of events. If our birthday, corporate, or field trip packages aren't quite what you're looking for, let's build something custom."
      >
        <Button to="#book_now" variant="primary">
          Book a Party Now
        </Button>
        <Button to="/park-info/faqs" variant="outline">
          FAQs
        </Button>
      </Hero>

      <section className="section bg-white">
        <div className="container-page max-w-3xl text-center">
          <SectionHeading
            eyebrow="Custom Events"
            title="The best parties are at Midway"
            subtitle="Contact one of our party specialists and we'll do our best to turn your dream event into an amazing reality — whatever the size or occasion."
          />
        </div>
      </section>

      <section className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Come and join the fun!" className="mb-10" />
          <PhotoGallery images={galleryImages['group-events']} altPrefix="Group event" />
        </div>
      </section>

      <section id="book_now" className="section bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Request Info" title="Book Your Group Event Now" className="mb-10" />
          <RequestInfoForm defaultEventType="Group Event" />
        </div>
      </section>
    </>
  );
}
