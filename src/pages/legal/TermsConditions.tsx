import PageMeta from '../../components/layout/PageMeta';
import { siteInfo } from '../../data/nav';

export default function TermsConditions() {
  return (
    <>
      <PageMeta title="Terms & Conditions" description="Read Midway Sports & Entertainment's terms and conditions." />
      <div className="container-page section max-w-3xl">
        <h1 className="font-display text-4xl text-midway-navy">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-midway-navy/50">Last updated: {new Date().getFullYear()}</p>

        <div className="prose mt-8 max-w-none space-y-6 text-midway-navy/80">
          <p>
            By visiting {siteInfo.name} or using this website, you agree to the following placeholder terms. This
            copy should be replaced with counsel-reviewed legal terms prior to launch.
          </p>
          <h2 className="font-heading text-xl font-bold text-midway-navy">Ride Policies</h2>
          <p>
            All guests must comply with posted height, age, and weight restrictions for each attraction. See our{' '}
            <a href="/park-info/ride-policies" className="text-midway-red underline">
              Ride Policies
            </a>{' '}
            page for full details.
          </p>
          <h2 className="font-heading text-xl font-bold text-midway-navy">Fun Cards & Gift Cards</h2>
          <p>
            Fun Card balances do not expire. Fun Cards cannot be used to purchase All Day Wristbands. Lost or stolen
            cards are not eligible for refund or replacement of remaining balance.
          </p>
          <h2 className="font-heading text-xl font-bold text-midway-navy">Weather Policy</h2>
          <p>
            Midway is an outdoor park. Certain rides may be temporarily suspended due to weather. Fun Card balances
            remain valid for a future visit in the event of a weather-related closure.
          </p>
          <h2 className="font-heading text-xl font-bold text-midway-navy">Contact</h2>
          <p>
            Questions about these terms can be directed to {siteInfo.email} or {siteInfo.phone}.
          </p>
        </div>
      </div>
    </>
  );
}
