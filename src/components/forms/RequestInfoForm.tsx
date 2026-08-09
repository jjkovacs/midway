import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Field, { inputClass } from './Field';
import Button from '../ui/Button';

const eventTypes = [
  'Birthday Party (A Pak)',
  'Birthday Party (B Pak)',
  'Private / Corporate Event',
  'Field Trip',
  'Group Event',
  'Tent Rental',
] as const;

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  eventType: z.enum(eventTypes),
  organization: z.string().optional(),
  date: z.string().min(1, 'Please choose a date'),
  time: z.string().min(1, 'Please choose a time'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  groupSize: z.number({ error: 'Please enter your group size' }).min(1, 'Please enter your group size'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function RequestInfoForm({ defaultEventType }: { defaultEventType?: (typeof eventTypes)[number] }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { eventType: defaultEventType ?? eventTypes[0] },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: Connect to a real backend / booking system (e.g., the same scheduler system used today).
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info('Party request submission (not yet wired to a backend):', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-midway-cream p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-midway-red" />
        <h3 className="font-display text-2xl text-midway-navy">Request sent!</h3>
        <p className="text-midway-navy/70">
          One of our party specialists will reach out shortly to help plan your event.
        </p>
        <Button variant="outline-navy" onClick={() => setSubmitted(false)} type="button">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <Field label="Your Name" htmlFor="name" error={errors.name?.message}>
        <input id="name" className={inputClass} placeholder="Jane Smith" {...register('name')} />
      </Field>
      <Field label="Event Type" htmlFor="eventType" error={errors.eventType?.message}>
        <select id="eventType" className={inputClass} {...register('eventType')}>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Company / Organization (optional)" htmlFor="organization">
        <input id="organization" className={inputClass} placeholder="Acme Inc." {...register('organization')} />
      </Field>
      <Field label="Group Size" htmlFor="groupSize" error={errors.groupSize?.message}>
        <input
          id="groupSize"
          type="number"
          min={1}
          className={inputClass}
          placeholder="25"
          {...register('groupSize', { valueAsNumber: true })}
        />
      </Field>
      <Field label="Date of Event" htmlFor="date" error={errors.date?.message}>
        <input id="date" type="date" className={inputClass} {...register('date')} />
      </Field>
      <Field label="Time of Event" htmlFor="time" error={errors.time?.message}>
        <input id="time" type="time" className={inputClass} {...register('time')} />
      </Field>
      <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
        <input id="phone" className={inputClass} placeholder="(313) 555-0100" {...register('phone')} />
      </Field>
      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClass} placeholder="jane@email.com" {...register('email')} />
      </Field>
      <Field label="Message (optional)" htmlFor="message" className="sm:col-span-2">
        <textarea id="message" rows={4} className={inputClass} placeholder="Tell us more about your event…" {...register('message')} />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Request More Info'}
        </Button>
      </div>
    </form>
  );
}
