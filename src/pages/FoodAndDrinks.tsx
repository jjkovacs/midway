import PageMeta from '../components/layout/PageMeta';
import Hero from '../components/ui/Hero';
import Card from '../components/ui/Card';
import { foodMenu } from '../data/food';
import { heroImages } from '../assets/images/images';

export default function FoodAndDrinks() {
  return (
    <>
      <PageMeta
        title="Food & Drinks"
        description="Refuel between rides at Midway's Snack Shack and Long Drive Grill — burgers, snacks, ice cream, and drinks for the whole family."
      />

      <Hero
        image={heroImages.food}
        size="md"
        eyebrow="Refuel & Refresh"
        title="Food & Drinks"
        subtitle="From the Snack Shack to the Long Drive Grill, there's plenty to keep the whole family fueled up for more fun."
      />

      <section className="section bg-white">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {foodMenu.map((category) => (
            <Card key={category.name} className="p-8">
              <h3 className="font-heading text-xl font-bold text-midway-navy">{category.name}</h3>
              <ul className="mt-4 divide-y divide-midway-navy/10">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-midway-navy/80">{item.name}</span>
                    {item.price && <span className="font-heading font-bold text-midway-red">{item.price}</span>}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
