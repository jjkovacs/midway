import PageMeta from '../components/layout/PageMeta';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { funCardTiers } from '../data/pricing';
import { CreditCard, RefreshCcw, Wallet } from 'lucide-react';

const howItWorks = [
  {
    icon: Wallet,
    title: 'Load Cash',
    body: 'Cash is loaded onto your card when you purchase a new one or recharge an existing one — in person at the front counter, or self-serve at our lobby iTeller.',
  },
  {
    icon: CreditCard,
    title: 'Swipe & Play',
    body: 'When you swipe your card, the price of the ride, game, or food/beverage is automatically deducted from your balance. No tickets, no tokens.',
  },
  {
    icon: RefreshCcw,
    title: 'Reload Anytime',
    body: "Running low? Reload your card online or in person any time — and your Fun Card balance never expires.",
  },
];

export default function FunCards() {
  return (
    <>
      <PageMeta
        title="Fun Cards"
        description="Buy, reload, or check the balance on your Midway Fun Card — one card for every ride, round, and snack in the park."
      />

      <Hero
        size="md"
        eyebrow="One Card, Every Attraction"
        title="Buy a Fun Card"
        subtitle="A Midway Fun Card is your pass to a great time — swipe it for any attraction in the park, plus food and drinks at the Snack Shack."
      >
        <Button to="https://midwaysports.icardinc.net/WebSales/home/NzAzNQ%3D%3D/l/4" external variant="primary">
          Buy Your Fun Card Now
        </Button>
      </Hero>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="How It Works" title="Cash and Bonus Cash, explained" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {howItWorks.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="p-8 text-center">
                  <Icon className="mx-auto h-10 w-10 text-midway-red" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-midway-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-midway-navy/70">{step.body}</p>
                </Card>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-midway-navy/60">
            There are two types of cash on your card: <strong>Cash</strong> (usable anywhere in the park, including
            food and drinks) and <strong>Bonus Cash</strong> (usable on rides and attractions only). Load one of the
            bonus deals below to get Bonus Cash on your card.
          </p>
        </div>
      </section>

      <section id="card_deals" className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Card Deals" title="Load Up & Save" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {funCardTiers.map((tier) => (
              <Card key={tier.spend} className="relative flex flex-col items-center gap-2 p-8 text-center">
                {tier.badge && (
                  <Badge color={tier.badge === 'Best Deal' ? 'red' : 'gold'} className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {tier.badge}
                  </Badge>
                )}
                <p className="font-heading text-sm font-semibold uppercase tracking-wide text-midway-navy/60">Spend {tier.spend}</p>
                <p className="font-display text-4xl text-midway-red">{tier.get}</p>
                <p className="font-heading font-semibold text-midway-gold">{tier.bonus}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="https://midwaysports.icardinc.net/WebSales/home/NzAzNQ%3D%3D/l/4" external variant="primary">
              Buy a Fun Card
            </Button>
            <Button to="https://midwaysports.icardinc.net/WebSales/home/NzAzNQ%3D%3D/l/4" external variant="outline-navy">
              Reload a Card
            </Button>
            <Button to="https://midwaysports.icardinc.net/WebSales/home/NzAzNQ%3D%3D/l/4" external variant="outline-navy">
              Check Balance
            </Button>
            <Button to="https://midwaysports.icardinc.net/WebSales/home/NzAzNQ%3D%3D/l/4" external variant="gold">
              Buy a Gift Card
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
