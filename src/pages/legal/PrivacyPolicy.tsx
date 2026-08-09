import PageMeta from '../../components/layout/PageMeta';
import { siteInfo } from '../../data/nav';

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy" description="Read Midway Sports & Entertainment's privacy policy." />
      <div className="container-page section max-w-3xl">
        <h1 className="font-display text-4xl text-midway-navy">Privacy Policy</h1>
        <p className="mt-4 text-sm text-midway-navy/50">Last updated: {new Date().getFullYear()}</p>

        <div className="prose mt-8 max-w-none space-y-6 text-midway-navy/80">
          <p>
            {siteInfo.name} ("Midway," "we," "us," or "our") respects your privacy. This placeholder policy outlines
            the general approach to information collected through this website and should be replaced with counsel-
            reviewed legal copy prior to launch.
          </p>
          <h2 className="font-heading text-xl font-bold text-midway-navy">Information We Collect</h2>
          <p>
            We may collect information you voluntarily provide through our contact, party request, job application,
            and newsletter forms, such as your name, email address, phone number, and event details.
          </p>
          <h2 className="font-heading text-xl font-bold text-midway-navy">How We Use Information</h2>
          <p>
            Information submitted through this site is used solely to respond to inquiries, process party or event
            requests, evaluate job applications, and send eClub communications you've opted into.
          </p>
          <h2 className="font-heading text-xl font-bold text-midway-navy">Contact Us</h2>
          <p>
            Questions about this policy can be directed to {siteInfo.email} or {siteInfo.phone}.
          </p>
        </div>
      </div>
    </>
  );
}
