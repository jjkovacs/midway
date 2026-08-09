import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { inputClass } from './Field';
import Button from '../ui/Button';

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
});

type FormValues = z.infer<typeof schema>;

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // TODO: Connect to a real email marketing service (e.g., Mailchimp, Klaviyo).
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.info('eClub signup (not yet wired to a backend):', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm font-semibold text-midway-gold">
        <CheckCircle2 className="h-5 w-5" /> You're on the list — welcome to the eClub!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 sm:flex-row">
      <div className="flex-1">
        <input
          type="email"
          placeholder="you@email.com"
          className={`${inputClass} bg-white/10 text-white placeholder:text-white/50 border-white/20 focus:ring-midway-gold/30`}
          {...register('email')}
        />
        {errors.email && <p className="mt-1 text-xs font-medium text-midway-gold">{errors.email.message}</p>}
      </div>
      <Button type="submit" variant="gold" disabled={isSubmitting}>
        {isSubmitting ? 'Joining…' : 'Join the eClub'}
      </Button>
    </form>
  );
}
