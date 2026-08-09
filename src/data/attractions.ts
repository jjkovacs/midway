export interface AttractionInfoItem {
  label: string;
}

export interface Attraction {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  price: string;
  priceNote?: string;
  description: string;
  longDescription?: string;
  infoItems: string[];
  heroImage: string;
  thumbImage: string;
  gallery: string[];
  accentColor: 'red' | 'navy' | 'gold';
}

export const attractions: Attraction[] = [
  {
    slug: 'go-karts',
    name: 'Go-Karts',
    shortName: 'Go-Karts',
    tagline: 'Unleash your inner speed demon',
    price: '$12.00',
    description:
      "If you have a need for speed, our race track is the perfect track for you! Fast speeds and countless tight turns really put your driving skills to the test. We have Single Karts and Double Karts to ensure the whole family can enjoy the thrill of the race.",
    longDescription:
      "There's no question that our Go-Karts will be a blast — the only question is who's going to get the bragging rights that come with 1st place?",
    infoItems: [
      'Ride is 4 minutes long',
      'Single Go-Karts – $12.00',
      'Must be 56" tall to drive a single kart',
      'Double Go-Karts – $12.00',
      'Must be 18 years old to drive a double kart',
      'Must be 36" tall to ride along in a double kart',
    ],
    heroImage: 'go-karts/hero.jpg',
    thumbImage: 'go-karts/thumb.jpg',
    gallery: ['go-karts/1.jpg', 'go-karts/2.jpg', 'go-karts/3.jpg', 'go-karts/4.jpg'],
    accentColor: 'red',
  },
  {
    slug: 'spin-zone',
    name: 'Spin Zone Bumper Cars',
    shortName: 'Spin Zone',
    tagline: "It's full speed ahead",
    price: '$10.00',
    description:
      'These are not your everyday bumper cars. Spin Zone cars are equipped with two spin zones that, when bumped, send the car into a spin! Controlled with a simple joystick, driving a bumper car has never been easier.',
    longDescription:
      "With music bumping and a laser light show flashing, you'll be right in the center of the coolest party in town. Time to send your opponents spinning!",
    infoItems: [
      'Ride is 4 minutes long',
      'Single Bumper Car – $10.00',
      'Must be 44" tall to drive a single bumper car',
      'Double Bumper Car – $10.00',
      'Must be 18 years old to drive a double bumper car',
      'Must be 36" tall to ride along in a double bumper car',
    ],
    heroImage: 'spin-zone/hero.jpg',
    thumbImage: 'spin-zone/thumb.jpg',
    gallery: ['spin-zone/1.jpg', 'spin-zone/2.jpg', 'spin-zone/3.jpg', 'spin-zone/4.jpg'],
    accentColor: 'gold',
  },
  {
    slug: 'bungy-dome',
    name: 'Bungy Dome',
    shortName: 'Bungy Dome',
    tagline: "It's your time to fly",
    price: '$10.00',
    description:
      "Our enormous Bungy Dome is sure to catch your eye, and as soon as you try this exhilarating trampoline experience, we're sure it will catch your heart too. Get strapped in and get ready to launch up to 25 feet into the sky!",
    longDescription:
      'With the ability to do front flips and backflips, our Bungy Dome is guaranteed to deliver fun for thrill-seekers of every age.',
    infoItems: [
      'Ride is 4 minutes long',
      'Bungy Dome – $10.00',
      'Must be 40" tall to ride',
      'Must weigh between 40 & 200 pounds to ride',
      'Must be in good physical condition to ride',
    ],
    heroImage: 'bungy-dome/hero.jpg',
    thumbImage: 'bungy-dome/thumb.jpg',
    gallery: ['bungy-dome/1.jpg', 'bungy-dome/2.jpg', 'bungy-dome/3.jpg', 'bungy-dome/4.jpg'],
    accentColor: 'navy',
  },
  {
    slug: 'rock-climbing',
    name: 'Rock Climbing',
    shortName: 'Rock Climbing',
    tagline: 'Push yourself to the limit',
    price: '$10.00',
    description:
      "Looking to get your heart racing? We've got you covered! Choose from any of our three different climbing routes, find a good foothold, race to the top, and whatever you do — don't look down!",
    longDescription: 'With three different levels of difficulty, this experience is great for climbers of any skill level.',
    infoItems: [
      'Each ride is 2 climbing attempts',
      'Rock Wall – $10.00',
      'Must be 40" tall to climb',
      'Must weigh between 40 & 200 pounds to climb',
      'Must be in good physical condition to climb',
    ],
    heroImage: 'rock-climbing/hero.jpg',
    thumbImage: 'rock-climbing/thumb.jpg',
    gallery: ['rock-climbing/1.jpg', 'rock-climbing/2.jpg', 'rock-climbing/3.jpg'],
    accentColor: 'red',
  },
  {
    slug: 'mini-golf',
    name: 'Mini Golf',
    shortName: 'Mini Golf',
    tagline: 'Land a hole-in-one',
    price: '$12.00',
    description:
      "Our 18-hole courses are an adventurer's dream! Featuring pirate ships, sea monsters, waterfalls, and palm trees, you'll feel like you've slipped into a Caribbean adventure as you play through a scenic landscape.",
    longDescription: 'Full of twists and obstacles, our courses are a fun and challenging experience for players of all skill levels!',
    infoItems: [
      '18 Holes (Regular) – $12.00',
      '18 Holes (Children 5 & under) – $7.00',
      'Last round sold 1 hour prior to closing',
    ],
    heroImage: 'mini-golf/hero.jpg',
    thumbImage: 'mini-golf/thumb.jpg',
    gallery: ['mini-golf/1.jpg', 'mini-golf/2.jpg', 'mini-golf/3.jpg', 'mini-golf/4.jpg'],
    accentColor: 'gold',
  },
  {
    slug: 'golf-driving-range',
    name: 'Golf Driving Range',
    shortName: 'Driving Range',
    tagline: 'Take a swing at greatness',
    price: 'From $12.00',
    description:
      "Midway's signature driving range started in 1951 and still stands today at over 300 yards long, with distance targets for every skill level. Our range features 50 stalls, including sheltered tees so you can practice rain or shine.",
    longDescription:
      'If artificial turf isn\'t to your liking, we also feature a high-quality grass area in the summer that is open to all customers. Come on out and start chasing your dreams of golf domination!',
    infoItems: [
      'Small Basket – $12.00 (approx. 45 balls)',
      'Medium Basket – $15.00 (approx. 75 balls)',
      'Large Basket – $17.00 (approx. 100 balls)',
      'Full club set rental – $20.00',
      'Grass area closes at dusk',
    ],
    heroImage: 'driving-range/hero.jpg',
    thumbImage: 'driving-range/thumb.jpg',
    gallery: ['driving-range/1.jpg', 'driving-range/2.jpg', 'driving-range/3.jpg', 'driving-range/4.jpg'],
    accentColor: 'navy',
  },
  {
    slug: 'batting-cages',
    name: 'Batting Cages',
    shortName: 'Batting Cages',
    tagline: 'Knock it out of the park',
    price: '$5.00',
    description:
      "Midway's batting cages are the perfect place for individual or team practice sessions, or for those who just want to \"hit a few.\" We offer batting helmets and bats, or you're welcome to bring your own.",
    longDescription:
      'Our slow pitch softball, fast pitch softball, and baseball pitching machines replicate speeds from 30mph up to 75mph. Don\'t forget to test your arm at our speed pitch station and see how much heat your fastball brings.',
    infoItems: [
      '30-pitch round – $5.00',
      'Cages 1–3: Slow Pitch Softball (25–30mph)',
      'Cage 4 & 8: Slow Pitch Hardball (40–45mph)',
      'Cages 5–6: Fast Pitch Hardball (70–75mph) / Fast Pitch Softball (55–60mph)',
      'Cage 7: Medium Pitch Hardball (50–60mph)',
      'Must be at least 50°F outside to operate',
    ],
    heroImage: 'batting-cages/hero.jpg',
    thumbImage: 'batting-cages/thumb.jpg',
    gallery: ['batting-cages/1.jpg', 'batting-cages/2.jpg', 'batting-cages/3.jpg'],
    accentColor: 'red',
  },
];

export const getAttractionBySlug = (slug: string) => attractions.find((a) => a.slug === slug);

export const toptracerModes = [
  {
    name: 'My Practice',
    description:
      'Our most popular mode — see live data for every club in your bag, including carry distance, ball speed, launch angle, and trajectory, so you can dial in your swing.',
  },
  {
    name: 'Virtual Golf',
    description:
      'Take your game to the course on more than 20 iconic layouts from around the world — including Torrey Pines, Pebble Beach, and St. Andrews.',
  },
  {
    name: 'Long Drive',
    description:
      'Show off your power from the tee box and see your name climb our weekly and all-time Long Drive leaderboard.',
  },
  {
    name: 'Closest to the Pin',
    description: 'Test your touch around the greens with a variety of approach shots and prove who has the best short game.',
  },
  {
    name: 'Toptracer 30',
    description:
      'A full analysis of your game across a variety of shots — perfect for tracking your handicap over time (or try T-12 for a quicker version).',
  },
  {
    name: 'Angry Birds',
    description:
      'Launch your favorite Angry Birds characters through 8 chapters of virtual destruction — a family-favorite game mode for golfers of all skill levels.',
  },
  {
    name: 'Go Fish',
    description: "A relaxing, points-based game that's the perfect way to introduce kids to golf.",
  },
];
