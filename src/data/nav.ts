export interface NavLink {
  label: string;
  to: string;
}

export interface NavGroup {
  label: string;
  to?: string;
  links: NavLink[];
}

export const attractionLinks: NavLink[] = [
  { label: 'Go-Karts', to: '/attractions/go-karts' },
  { label: 'Spin Zone Bumper Cars', to: '/attractions/spin-zone' },
  { label: 'Bungy Dome', to: '/attractions/bungy-dome' },
  { label: 'Rock Climbing', to: '/attractions/rock-climbing' },
  { label: 'Mini Golf', to: '/attractions/mini-golf' },
  { label: 'Golf Driving Range', to: '/attractions/golf-driving-range' },
  { label: 'Batting Cages', to: '/attractions/batting-cages' },
];

export const parkInfoLinks: NavLink[] = [
  { label: 'Pricing', to: '/park-info/pricing' },
  { label: 'Hours & Directions', to: '/park-info/hours-and-directions' },
  { label: 'Ride Policies', to: '/park-info/ride-policies' },
  { label: 'FAQs & Fun Tips', to: '/park-info/faqs' },
  { label: 'Summer Jobs', to: '/park-info/summer-jobs' },
];

export const partyLinks: NavLink[] = [
  { label: 'Birthday Parties', to: '/parties/birthdays' },
  { label: 'Private & Corporate Events', to: '/parties/private-events' },
  { label: 'Field Trips', to: '/parties/field-trips' },
  { label: 'Group Events', to: '/parties/group-events' },
];

export const navGroups: NavGroup[] = [
  { label: 'Attractions', links: attractionLinks },
  { label: 'Park Info', links: parkInfoLinks },
  { label: 'Parties', links: partyLinks },
];

export const primaryLinks: NavLink[] = [
  { label: 'Fun Cards', to: '/fun-cards' },
  { label: 'Food & Drinks', to: '/food-and-drinks' },
  { label: 'Contact Us', to: '/contact' },
];

export const footerLinks: NavLink[] = [
  { label: 'FAQs & Fun Tips', to: '/park-info/faqs' },
  { label: 'Summer Jobs', to: '/park-info/summer-jobs' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-conditions' },
];

export const siteInfo = {
  name: 'Midway Sports & Entertainment',
  shortName: 'Midway',
  phone: '(313) 277-9156',
  phoneRaw: 'tel:+13132779156',
  email: 'mail@midwayfun.com',
  address: '22381 Van Born Rd., Taylor, MI 48180',
  mapsUrl: 'https://maps.google.com/?q=22381+Van+Born+Rd.+Taylor,+MI+48180',
  facebook: 'https://www.facebook.com/midwayfun',
  twitter: 'https://twitter.com/MidwayFun',
  tagline: "Detroit's Outdoor Fun Spot Since 1951",
  founded: 1951,
};
