export interface HoursBlock {
  group: string;
  schedule: { days: string; time: string }[];
}

export const hoursBlocks: HoursBlock[] = [
  {
    group: 'Golf Range, Mini Golf & Batting Cages',
    schedule: [
      { days: 'Sunday – Thursday', time: '9am – 10pm' },
      { days: 'Friday & Saturday', time: '9am – 11pm' },
    ],
  },
  {
    group: 'Go-Karts, Spin Zone, Bungy Dome & Rock Climbing',
    schedule: [
      { days: 'Monday – Thursday', time: '1pm – 10pm' },
      { days: 'Friday', time: '1pm – 11pm' },
      { days: 'Saturday', time: '11am – 11pm' },
      { days: 'Sunday', time: '11am – 10pm' },
    ],
  },
];

export const hoursNotes = [
  'All hours are weather permitting.',
  'Must be 50°F or warmer for batting cages.',
  'Please call (313) 277-9156 for up-to-date information on attraction hours.',
  'Guests must exit the park 30 minutes after closing time.',
];

export interface RidePolicy {
  name: string;
  rules: string[];
}

export const ridePolicies: RidePolicy[] = [
  {
    name: 'Go-Karts',
    rules: [
      'Single rider must be 56" tall to drive the kart',
      'Double-kart driver must be 18 years old',
      'Double-kart passenger must be 36" tall to ride along',
    ],
  },
  {
    name: 'Spin Zone & Bumper Cars',
    rules: [
      'Single rider must be 44" tall to drive the car',
      'Double-car driver must be 18 years old',
      'Double-car passenger must be 36" tall to ride along',
    ],
  },
  {
    name: 'Bungy Dome & Rock Wall',
    rules: ['Must be at least 40" tall', 'Must weigh between 40 & 200 pounds', 'Must be in good physical condition'],
  },
  {
    name: 'Batting Cages',
    rules: [
      'Batters must be at least 40" tall',
      'Helmets must be worn and are available at the cages',
      'Check posted speeds outside each cage before entering',
    ],
  },
];
