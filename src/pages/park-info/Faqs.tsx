import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Accordion from '../../components/ui/Accordion';
import ContactForm from '../../components/forms/ContactForm';
import { faqs } from '../../data/faqs';

export default function Faqs() {
  return (
    <>
      <PageMeta
        title="FAQs & Fun Tips"
        description="Everything you need to know about visiting Midway Sports & Entertainment — admission, weather policy, ride restrictions, dress code, and more."
      />

      <Hero
        size="md"
        eyebrow="Park Info"
        title="FAQs & Fun Tips"
        subtitle="Everything you need to know before you visit."
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </section>

      <section className="section bg-midway-cream">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="Still Curious?" title="Don't hesitate to ask" className="mb-10" />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
