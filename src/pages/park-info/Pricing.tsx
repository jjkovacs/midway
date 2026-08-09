import PageMeta from '../../components/layout/PageMeta';
import Hero from '../../components/ui/Hero';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { funCardTiers, allDayWristband, parkPrices, rangeBaskets, snackMenu } from '../../data/pricing';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  return (
    <>
      <PageMeta
        title="Pricing"
        description="See pricing for Go-Karts, Mini Golf, the Driving Range, Batting Cages, Fun Cards, All Day Wristbands, and our Snack Shack menu."
      />

      <Hero
        size="md"
        eyebrow="Park Info"
        title="Pricing"
        subtitle="Pay as you go, or grab a Fun Card and an All Day Wristband to do it all."
      />

      {/* All day wristband */}
      <section className="section bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge color="red" className="mb-4">
              Stay &amp; Play All Day
            </Badge>
            <h2 className="font-display text-3xl text-midway-navy md:text-5xl">
              Get a wristband for just {allDayWristband.price}
            </h2>
            <ul className="mt-6 space-y-3">
              {allDayWristband.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-midway-navy/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-midway-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-midway-navy/60">{allDayWristband.note}</p>
          </div>
          <Card className="p-10 text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-midway-navy/60">All Day Wristband</p>
            <p className="mt-2 font-display text-6xl text-midway-red">{allDayWristband.price}</p>
            <p className="mt-2 text-midway-navy/60">per person, per day</p>
          </Card>
        </div>
      </section>

      {/* Fun card tiers */}
      <section id="card_deals" className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Fun Cards" title="Card Deals" subtitle="Load cash once, use it on any ride, round, or snack in the park." />
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
          <div className="mt-10 flex justify-center gap-4">
            <Button to="/fun-cards" variant="primary">
              Buy a Fun Card
            </Button>
            <Button to="/fun-cards" variant="outline-navy">
              Buy a Gift Card
            </Button>
          </div>
          <p className="mt-6 text-center text-sm text-midway-navy/50">
            When purchasing a Fun Card, it cannot be used to buy an All Day Wristband. All Day Wristbands are sold in
            person, in our Main Lobby, on the day of your visit only.
          </p>
        </div>
      </section>

      {/* Attraction prices */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Attractions" title="Park Prices" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parkPrices.map((item) => (
              <Card key={item.name} className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-midway-navy">{item.name}</h3>
                  <span className="font-display text-2xl text-midway-red">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-midway-navy/60">{item.blurb}</p>
                <Button to={item.to} variant="outline-navy" className="mt-4 w-full text-sm">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Driving range prices */}
      <section className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Golf" title="Driving Range Prices" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rangeBaskets.map((basket) => (
              <Card key={basket.name} className="p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-midway-navy">{basket.name}</h3>
                <p className="mt-2 font-display text-3xl text-midway-red">{basket.price}</p>
                <p className="mt-2 text-sm text-midway-navy/60">{basket.blurb}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-midway-navy/60">
            Golf Range Bonus Card: Spend $50, Get $65 · Spend $100, Get $140 · Spend $200, Get $300
          </p>
        </div>
      </section>

      {/* Snack shack */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Snack Shack" title="Snack Shack Prices" />
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-midway-navy/10 shadow-card">
            {snackMenu.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-midway-cream'}`}
              >
                <span className="font-medium text-midway-navy">{item.name}</span>
                <span className="font-heading font-bold text-midway-red">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
