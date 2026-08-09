import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Field, { inputClass } from './Field';
import Button from '../ui/Button';

const positions = ['Ride Operator', 'Cashier', 'Maintenance Crew'] as const;
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  position: z.enum(positions),
  startDate: z.string().min(1, 'Please choose an available start date'),
  availability: z.array(z.string()).min(1, 'Please select at least one day of availability'),
  experience: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function JobApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { position: positions[0], availability: [] },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: Connect to a real backend / applicant tracking system.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info('Job application submission (not yet wired to a backend):', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-midway-cream p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-midway-red" />
        <h3 className="font-display text-2xl text-midway-navy">Application received!</h3>
        <p className="text-midway-navy/70">Our hiring team will reach out if you're a good fit for the crew.</p>
        <Button variant="outline-navy" onClick={() => setSubmitted(false)} type="button">
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
        <input id="fullName" className={inputClass} placeholder="Jane Smith" {...register('fullName')} />
      </Field>
      <Field label="Position Applying For" htmlFor="position" error={errors.position?.message}>
        <select id="position" className={inputClass} {...register('position')}>
          {positions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClass} placeholder="jane@email.com" {...register('email')} />
      </Field>
      <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
        <input id="phone" className={inputClass} placeholder="(313) 555-0100" {...register('phone')} />
      </Field>
      <Field label="Available Start Date" htmlFor="startDate" error={errors.startDate?.message}>
        <input id="startDate" type="date" className={inputClass} {...register('startDate')} />
      </Field>
      <Field label="Relevant Experience (optional)" htmlFor="experience">
        <input id="experience" className={inputClass} placeholder="e.g. customer service, mechanical" {...register('experience')} />
      </Field>
      <Field label="Days Available" htmlFor="availability" error={errors.availability?.message} className="sm:col-span-2">
        <div className="flex flex-wrap gap-3">
          {days.map((day) => (
            <label
              key={day}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-midway-navy/15 px-4 py-2 text-sm font-medium text-midway-navy has-[:checked]:border-midway-red has-[:checked]:bg-midway-red has-[:checked]:text-white"
            >
              <input type="checkbox" value={day} className="hidden" {...register('availability')} />
              {day}
            </label>
          ))}
        </div>
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Submit Application'}
        </Button>
      </div>
    </form>
  );
}
