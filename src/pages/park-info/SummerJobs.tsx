import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import JobApplicationForm from '../../components/forms/JobApplicationForm';
import { jobPositions } from '../../data/food';
import { siteInfo } from '../../data/nav';
import { CheckCircle2 } from 'lucide-react';

export default function SummerJobs() {
  return (
    <>
      <PageMeta
        title="Summer Jobs"
        description="Midway Sports & Entertainment is hiring Ride Operators, Cashiers, and Maintenance Crew for the season. Apply today!"
      />

      <Hero
        size="md"
        eyebrow="Now Hiring"
        title="Looking for the perfect seasonal job?"
        subtitle="Every year Midway fills seasonal positions across the park — ride operators, cash handlers, sweeps, and more."
      />

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Open Positions" title="Join the Crew Today" className="mb-12" />
          <div className="grid gap-6 sm:grid-cols-3">
            {jobPositions.map((job) => (
              <Card key={job.title} className="p-8">
                <h3 className="font-heading text-xl font-bold text-midway-navy">{job.title}</h3>
                <p className="mt-2 text-sm text-midway-navy/70">{job.description}</p>
                <ul className="mt-4 space-y-2">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-midway-navy/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-midway-red" />
                      {req}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-midway-cream">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Apply Now" title="Apply Below and Join the Crew" className="mb-10" />
          <Card className="p-8 md:p-10">
            <JobApplicationForm />
          </Card>
          <p className="mt-6 text-center text-sm text-midway-navy/60">
            Prefer to apply in person or by mail? Drop off or mail your application to: Attn: Hiring Manager, {siteInfo.address}, or call {siteInfo.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
