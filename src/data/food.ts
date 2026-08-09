export interface MenuCategory {
  name: string;
  items: { name: string; price?: string }[];
}

export const foodMenu: MenuCategory[] = [
  {
    name: 'Snacks & Treats',
    items: [
      { name: 'Mini Melts Ice Cream', price: '$6.00' },
      { name: 'Nachos with Cheese', price: '$6.00' },
      { name: 'Extra Cheese Cup', price: '$2.00' },
      { name: 'Cotton Candy, Popcorn & Candy', price: '$3.00' },
      { name: 'Beef Jerky', price: '$4.00' },
      { name: 'Chips', price: '$2.00' },
      { name: 'Pop Tart & Chewy Bar', price: '$1.00' },
    ],
  },
  {
    name: 'Drinks',
    items: [
      { name: 'Water', price: '$3.00' },
      { name: 'Pop, Gatorade & Lemonade', price: '$4.00' },
      { name: 'Red Bull', price: '$5.00' },
    ],
  },
  {
    name: 'Long Drive Grill',
    items: [
      { name: 'Burgers, hot dogs & grill favorites' },
      { name: 'Fresh-cut fries & sides' },
      { name: 'Ask about our daily lunch special' },
    ],
  },
];

export const jobPositions = [
  {
    title: 'Ride Operators',
    description: 'Ride operators control and monitor attractions to ensure safety and provide a friendly experience worth coming back for.',
    requirements: ['Strong work ethic', 'Friendly attitude', 'Ability to be on your feet 4+ hours'],
  },
  {
    title: 'Cashiers',
    description: 'As the face of Midway, cashiers greet every guest with a smile and help build packages that ensure an amazing time for all.',
    requirements: ['Strong communication skills', 'Professional presentation', 'Friendly attitude'],
  },
  {
    title: 'Maintenance Crew',
    description: 'Our maintenance team keeps all rides and attractions running smoothly, and the park grounds looking pristine.',
    requirements: ['Strong work ethic', 'Attention to detail', 'Ability to lift up to 50 pounds', 'Mechanic experience preferred'],
  },
];
