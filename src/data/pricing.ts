export interface FunCardTier {
  spend: string;
  get: string;
  bonus: string;
  badge?: 'Popular' | 'Best Deal';
}

export const funCardTiers: FunCardTier[] = [
  { spend: '$25', get: '$30', bonus: '$5 Bonus Cash' },
  { spend: '$50', get: '$65', bonus: '$15 Bonus Cash', badge: 'Popular' },
  { spend: '$100', get: '$140', bonus: '$40 Bonus Cash' },
  { spend: '$200', get: '$300', bonus: '$100 Bonus Cash', badge: 'Best Deal' },
];

export const allDayWristband = {
  price: '$40',
  includes: [
    'Unlimited rides on the Go-Karts',
    'Unlimited rides on the Spin Zone',
    'Unlimited rides on the Bungy Dome',
    'Unlimited rides on the Rock Climbing Wall',
    'Unlimited rounds of Mini Golf',
  ],
  note: 'All Day Wristbands are sold in person at our Main Lobby only and cannot be purchased on a Fun Card or online.',
};

export interface ParkPrice {
  name: string;
  price: string;
  blurb: string;
  to: string;
}

export const parkPrices: ParkPrice[] = [
  { name: 'Go Karts', price: '$12.00', blurb: 'Our Go Kart track is legendary, with high speeds and tight turns that test your driving skills!', to: '/attractions/go-karts' },
  { name: 'Spin Zone', price: '$10.00', blurb: 'Music bumping and a laser light show flashing — the best party in town!', to: '/attractions/spin-zone' },
  { name: 'Bungy Dome', price: '$10.00', blurb: 'Get strapped in and launch up to 25 feet into the sky!', to: '/attractions/bungy-dome' },
  { name: 'Rock Climbing', price: '$10.00', blurb: 'Choose your route, find a foothold, and race to the top!', to: '/attractions/rock-climbing' },
  { name: 'Mini Golf', price: '$12.00', blurb: 'Pirate ships, sea monsters, waterfalls, and palm trees await!', to: '/attractions/mini-golf' },
  { name: 'Mini Golf – Kids 5 & Under', price: '$7.00', blurb: 'A fun experience for players of every age and skill level.', to: '/attractions/mini-golf' },
  { name: 'Batting Cages', price: '$5.00', blurb: 'The perfect place for practice sessions or to just hit a few.', to: '/attractions/batting-cages' },
];

export interface RangeBasket {
  name: string;
  price: string;
  blurb: string;
}

export const rangeBaskets: RangeBasket[] = [
  { name: 'Small Basket', price: '$12.00', blurb: 'Approx. 45 balls — the perfect tune-up before heading out for a round.' },
  { name: 'Medium Basket', price: '$15.00', blurb: 'Approx. 75 balls — ideal for working the kinks out of your swing.' },
  { name: 'Large Basket', price: '$17.00', blurb: 'Approx. 100 balls — great for groups or golfers who want to swing all day.' },
  { name: 'Club Rental', price: '$2.00', blurb: "Don't have a club? We've got sizes for everyone." },
];

export interface SnackItem {
  name: string;
  price: string;
}

export const snackMenu: SnackItem[] = [
  { name: 'Water', price: '$3.00' },
  { name: 'Pop, Gatorade & Lemonade', price: '$4.00' },
  { name: 'Red Bull', price: '$5.00' },
  { name: 'Mini Melts Ice Cream', price: '$6.00' },
  { name: 'Nachos with Cheese', price: '$6.00' },
  { name: 'Extra Cheese Cup', price: '$2.00' },
  { name: 'Cotton Candy, Popcorn & Candy', price: '$3.00' },
  { name: 'Beef Jerky', price: '$4.00' },
  { name: 'Chips', price: '$2.00' },
  { name: 'Pop Tart & Chewy Bar', price: '$1.00' },
];

export const club1951 = {
  name: 'The 1951 Club',
  monthlyPrice: '$20/month',
  description:
    'Our Midway Golf 1951 Club membership gives you 25% off every basket of golf balls throughout the season (March–October), plus early access to the range one hour before general admission. For most regulars, membership pays for itself in just 5 visits a month — and you can cancel anytime.',
  perks: [
    '25% off every basket, all season long',
    'Early access — 1 hour before general admission',
    'Cancel anytime, no long-term contract',
  ],
};
