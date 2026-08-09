import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';
import PageMeta from '../components/layout/PageMeta';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import AttractionCard from '../components/ui/AttractionCard';
import { attractions } from '../data/attractions';
import { funCardTiers, club1951 } from '../data/pricing';
import { heroImages, galleryImages, attractionThumb } from '../assets/images/images';
import { siteInfo } from '../data/nav';

export default function Home() {
  return (
    <>
      <PageMeta
        title="Detroit's Outdoor Fun Spot"
        description="Go-karts, mini golf, a Toptracer driving range, batting cages, bumper cars, a bungy dome, and rock climbing — all at Midway Sports & Entertainment in Taylor, MI."
      />

      <Hero
        image={heroImages.home}
        eyebrow={`Est. ${siteInfo.founded} · 75 Years Strong`}
        title="Summer fun for all ages"
        subtitle="Spend an hour or spend the day — there's something for everyone at Midway Sports & Entertainment."
      >
        <Button to="/fun-cards" variant="primary">
          Buy a Fun Card <ArrowRight className="h-4 w-4" />
        </Button>
        <Button to="/park-info/hours-and-directions" variant="outline">
          Plan Your Visit
        </Button>
      </Hero>

      {/* Attractions grid */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Rides & Attractions"
            title="Everything you need for a great day out"
            subtitle="For over 60 years, Midway has been one of Detroit's favorite family entertainment centers. Go-Karts, Mini Golf, a Golf Driving Range, Batting Cages, Bumper Cars, a Bungy Dome, and Rock Climbing — Midway has it all."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.slug} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* 1951 Club */}
      <section className="section bg-midway-cream">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge color="red" className="mb-4">
              Golf Membership
            </Badge>
            <h2 className="font-display text-3xl text-midway-navy md:text-5xl">Join {club1951.name}</h2>
            <p className="mt-4 text-midway-navy/70">{club1951.description}</p>
            <ul className="mt-6 space-y-3">
              {club1951.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-midway-navy">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-midway-red" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/attractions/golf-driving-range" variant="primary">
                Learn About the Range
              </Button>
              <span className="inline-flex items-center font-heading text-lg font-bold text-midway-navy">
                {club1951.monthlyPrice}
              </span>
            </div>
          </div>
          <Card className="overflow-hidden p-0">
            <img src={heroImages.drivingRange} alt="Golf driving range" className="h-80 w-full object-cover md:h-[26rem]" />
          </Card>
        </div>
      </section>

      {/* Toptracer highlight */}
      <section className="section bg-midway-navy text-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Card className="order-2 overflow-hidden p-0 lg:order-1" hover={false}>
            <img src={attractionThumb('golf-driving-range')} alt="Toptracer driving range technology" className="h-80 w-full object-cover md:h-[26rem]" />
          </Card>
          <div className="order-1 lg:order-2">
            <Badge color="gold" className="mb-4">
              Our Range Is Leveling Up
            </Badge>
            <h2 className="font-display text-3xl text-white md:text-5xl">Toptracer &amp; Power Tee at every stall</h2>
            <p className="mt-4 text-white/80">
              Every stall on our range is equipped with Toptracer technology, so you can compete against friends,
              play virtual games, and track your improvement over time. We've also added Power Tee automatic teeing
              to every stall, making the game more accessible for golfers of any experience level — plus our
              exclusive 13-stall Upper Deck for an elevated view of the course.
            </p>
            <Button to="/attractions/golf-driving-range" variant="gold" className="mt-8">
              Explore Toptracer Game Modes
            </Button>
          </div>
        </div>
      </section>

      {/* Fun Cards */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fun Cards"
            title="One card. Every attraction."
            subtitle="Skip the pocketful of tickets and tokens — load a Fun Card and swipe your way through every ride, round, and snack in the park."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {funCardTiers.map((tier) => (
              <Card key={tier.spend} className="relative flex flex-col items-center gap-2 p-8 text-center">
                {tier.badge && (
                  <Badge color={tier.badge === 'Best Deal' ? 'red' : 'gold'} className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {tier.badge}
                  </Badge>
                )}
                <p className="font-heading text-sm font-semibold uppercase tracking-wide text-midway-navy/60">
                  Spend {tier.spend}
                </p>
                <p className="font-display text-4xl text-midway-red">{tier.get}</p>
                <p className="font-heading font-semibold text-midway-gold">{tier.bonus}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button to="/fun-cards" variant="primary">
              Buy a Fun Card <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Book a party */}
      <section className="section bg-midway-red text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Badge color="navy" className="mb-4">
              Book Your Party
            </Badge>
            <h2 className="font-display text-3xl text-white md:text-5xl">Or private event</h2>
            <p className="mt-4 max-w-xl text-white/90">
              Every year Midway hosts birthday parties, corporate events, field trips, and private events for groups
              of all sizes looking for some summer fun. Our event packages make everything from planning to event
              day easy — check out our packages or contact a party specialist to make your party the hit of the
              summer!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/parties/birthdays" variant="outline">
                Birthday Parties
              </Button>
              <Button to="/parties/group-events" variant="gold">
                All Party Options
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-6 text-center">
              <Users className="h-8 w-8 text-midway-gold" />
              <p className="font-heading font-semibold">Groups of all sizes</p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-6 text-center">
              <Target className="h-8 w-8 text-midway-gold" />
              <p className="font-heading font-semibold">Packages for every budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Come and join the fun!" className="mb-12" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {galleryImages.home.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Midway guests having fun ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover shadow-card transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Now hiring */}
      <section className="section bg-midway-navy text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <Badge color="gold">Now Hiring</Badge>
          <h2 className="font-display text-3xl text-white md:text-5xl">Ride Operators, Cashiers &amp; Maintenance Crew</h2>
          <p className="max-w-xl text-white/80">
            Looking for a fun seasonal job? Join the Midway crew and help create great memories for families all
            summer long.
          </p>
          <Button to="/park-info/summer-jobs" variant="gold">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Contact strip */}
      <section className="section bg-midway-cream">
        <div className="container-page">
          <SectionHeading
            title="Ready to plan your visit?"
            subtitle={siteInfo.address}
            className="mb-8"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button to={siteInfo.phoneRaw} external variant="primary">
              {siteInfo.phone}
            </Button>
            <Button to="/park-info/hours-and-directions" variant="outline-navy">
              Hours &amp; Directions
            </Button>
            <Button to="/contact" variant="outline-navy">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
