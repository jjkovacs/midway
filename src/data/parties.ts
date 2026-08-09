export interface PartyPackage {
  name: string;
  price: string;
  priceUnit?: string;
  features: string[];
  note?: string;
  badge?: string;
}

export const birthdayPackages: PartyPackage[] = [
  {
    name: 'Tent Rental',
    price: '$300',
    features: ['2-hour seating', 'Outside food & beverages allowed (no alcohol or on-site cooking)', 'Seating for 20 guests'],
    note: '$50 deposit required at least a week before your event.',
  },
  {
    name: 'B Pak',
    price: '$350',
    features: ['2-hour party', 'Seating for 20 guests', '2 large pizzas', '4 two-liters of pop', '10 play wristbands'],
    note: 'Wristbands include Go-Karts, Spin Zone, Bungy Dome, Rock Climbing & Mini Golf.',
  },
  {
    name: 'A Pak',
    price: '$600',
    badge: 'Most Popular',
    features: ['2-hour party', 'Seating for 20 guests', '4 large pizzas', '7 two-liters of pop', '20 play wristbands'],
    note: 'Wristbands include Go-Karts, Spin Zone, Bungy Dome, Rock Climbing & Mini Golf.',
  },
];

export const birthdayAddOns = ['$25 Large Pizza', '$6 2-Liter of Pop', '$30 Play Wristband'];

export const birthdayIncludes = [
  'Reserved, sheltered picnic tables for 2 hours',
  'Paper plates, cups & utensils included',
  'A dedicated party host for your event',
];

export const privatePackages: PartyPackage[] = [
  {
    name: 'Tent Rental',
    price: '$300',
    features: ['2-hour rental', 'Outside food & beverages allowed (no alcohol or on-site cooking)'],
    note: '$50 deposit required.',
  },
  {
    name: 'Teambuilder Package',
    price: '$28',
    priceUnit: '/ person',
    features: [
      'Minimum 25 people',
      'No charge for children under 5',
      'Private picnic area for 4 hours',
      'Unlimited rides: Go-Karts, Double Karts, Mini Golf, Driving Range, Spin Zone, Double Spin Zone, Rock Climbing, Bungy Dome',
    ],
    note: '$150 deposit required.',
  },
  {
    name: 'The All American BBQ Package',
    price: '$55',
    priceUnit: '/ person',
    badge: 'Full Catering',
    features: [
      'Minimum 50 people',
      'No charge for children under 5',
      'Private picnic area for 4 hours',
      'Unlimited rides: all attractions including Batting Cages',
      'Fully catered BBQ: 2 entrées, 2 sides & beverages',
    ],
    note: '$500 deposit required.',
  },
];

export const fieldTripInfo = {
  price: '$28',
  priceUnit: 'per person',
  includes: [
    'Unlimited rides wristband (3 hours) — excludes Batting Cages and the Golf Driving Range',
    'Go-Karts, Double Karts, Spin Zone Bumper Cars, Double Spin Zone, Bungy Dome, Rock Climbing, Miniature Golf',
  ],
  lunch: ['1 large slice of pizza (cheese or pepperoni)', 'Bag of potato chips', 'Can of pop'],
  bookingDetails: [
    'Reservations must be made in advance',
    'Minimum of 50 kids',
    'A $300 non-refundable deposit is due at time of booking',
    'Can be booked Monday–Friday, 11am–2pm or 12pm–3pm, May–August',
    'One adult group leader required for every ten students',
    'One free teacher/chaperone ticket for every ten students',
    'Additional adults or teachers are charged the $28 student rate',
    'A sheltered picnic area is provided for lunch',
    'Recommended for ages 6+, as most attractions require 40" height or taller',
    'Children 5 & under must be accompanied and supervised by a parent at all times',
  ],
};
