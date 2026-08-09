import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ridePolicies } from '../../data/hours';
import { ShieldCheck } from 'lucide-react';

export default function RidePolicies() {
  return (
    <>
      <PageMeta
        title="Ride Policies"
        description="Height, age, and weight requirements for Midway's Go-Karts, Spin Zone, Bungy Dome, Rock Wall, and Batting Cages."
      />

      <Hero
        size="md"
        eyebrow="Park Info"
        title="Ride Policies"
        subtitle="Safety first! Here's what to know before you ride."
      />

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Restrictions" title="Height, Age & Weight Requirements" className="mb-12" />
          <div className="grid gap-6 sm:grid-cols-2">
            {ridePolicies.map((policy) => (
              <Card key={policy.name} className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-midway-red" />
                  <h3 className="font-heading text-xl font-bold text-midway-navy">{policy.name}</h3>
                </div>
                <ul className="space-y-2">
                  {policy.rules.map((rule) => (
                    <li key={rule} className="text-midway-navy/75">
                      • {rule}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button to="/park-info/pricing" variant="primary">
              View All Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
