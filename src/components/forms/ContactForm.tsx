import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Field, { inputClass } from './Field';
import Button from '../ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Please add a subject'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // TODO: Connect to a real backend or form service (e.g., Formspree, Netlify Forms, custom API).
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info('Contact form submission (not yet wired to a backend):', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-midway-cream p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-midway-red" />
        <h3 className="font-display text-2xl text-midway-navy">Thanks for reaching out!</h3>
        <p className="text-midway-navy/70">
          We've received your message and a member of our team will be in touch soon.
        </p>
        <Button variant="outline-navy" onClick={() => setSubmitted(false)} type="button">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <Field label="Your Name" htmlFor="name" error={errors.name?.message}>
        <input id="name" className={inputClass} placeholder="Jane Smith" {...register('name')} />
      </Field>
      <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClass} placeholder="jane@email.com" {...register('email')} />
      </Field>
      <Field label="Phone (optional)" htmlFor="phone" error={errors.phone?.message}>
        <input id="phone" className={inputClass} placeholder="(313) 555-0100" {...register('phone')} />
      </Field>
      <Field label="Subject" htmlFor="subject" error={errors.subject?.message}>
        <input id="subject" className={inputClass} placeholder="Question about pricing" {...register('subject')} />
      </Field>
      <Field label="Message" htmlFor="message" error={errors.message?.message} className="sm:col-span-2">
        <textarea id="message" rows={5} className={inputClass} placeholder="How can we help?" {...register('message')} />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
