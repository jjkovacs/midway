/**
 * Centralized image map.
 *
 * TODO: Replace with real Midway Sports & Entertainment photography.
 * To swap in real photos, just change the path returned for the matching
 * key below — no other code needs to change since every page imports images
 * from this file only.
 *
 * All images are self-hosted static files under /public/images so they never
 * change on reload and never depend on a third-party image service being up.
 */

const base = import.meta.env.BASE_URL;

export const heroImages = {
  home: `${base}images/home-hero-go-karts.jpg`,
  goKarts: `${base}images/go-karts-hero.jpg`,
  spinZone: `${base}images/spin-zone-hero.jpg`,
  bungyDome: `${base}images/bungy-dome-hero.jpg`,
  rockClimbing: `${base}images/rock-climbing-hero.jpg`,
  miniGolf: `${base}images/mini-golf-hero.jpg`,
  drivingRange: `${base}images/driving-range-hero.jpg`,
  battingCages: `${base}images/batting-cages-hero.jpg`,
  birthdays: `${base}images/birthdays-hero.jpg`,
  privateEvents: `${base}images/private-events-hero.jpg`,
  fieldTrips: `${base}images/field-trips-hero.jpg`,
  groupEvents: `${base}images/group-events-hero.jpg`,
  food: `${base}images/food-hero.jpg`,
};

const attractionHero: Record<string, string> = {
  'go-karts': heroImages.goKarts,
  'spin-zone': heroImages.spinZone,
  'bungy-dome': heroImages.bungyDome,
  'rock-climbing': heroImages.rockClimbing,
  'mini-golf': heroImages.miniGolf,
  'golf-driving-range': heroImages.drivingRange,
  'batting-cages': heroImages.battingCages,
};

const galleryCount: Record<string, number> = {
  'go-karts': 4,
  'spin-zone': 4,
  'bungy-dome': 3,
  'rock-climbing': 3,
  'mini-golf': 3,
  'golf-driving-range': 4,
  'batting-cages': 3,
  birthdays: 4,
  'private-events': 4,
  'field-trips': 3,
  'group-events': 3,
  home: 6,
};

export const galleryImages: Record<string, string[]> = Object.fromEntries(
  Object.entries(galleryCount).map(([slug, count]) => [
    slug,
    Array.from({ length: count }, (_, i) => `${base}images/gallery/${slug}/${i + 1}.jpg`),
  ]),
);

// Reuse each attraction's hero photo as its home-page thumbnail for a consistent look.
export const attractionThumb = (slug: string) => attractionHero[slug] ?? heroImages.home;

export default { heroImages, galleryImages, attractionThumb };
