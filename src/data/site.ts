// All business details live here. Edit this file to update the website.

export const business = {
  name: 'Alberta Construction LLC',
  shortName: 'Alberta Construction',
  owner: 'Bill',
  // Put Bill's photo in /public (e.g. /public/bill.jpg) and set this to '/bill.jpg'.
  ownerPhoto: '',
  tagline: 'Honest handyman work. Done right.',
  phone: '(971) 409-6661',
  phoneHref: 'tel:+19714096661',
  smsHref: 'sms:+19714096661',
  email: 'wjshambaughjr@gmail.com',
  ccb: '261415',
  yearsExperience: '30+',
  hours: 'Mon–Fri, 9am–5pm',
  hoursShort: 'Mon–Fri 9–5',
  locality: 'North Portland',
  city: 'Portland',
  region: 'OR',
  postalCode: '97217',
  serviceAreaSummary: 'Greater Portland, Oregon side',
};

export const pricing = {
  range: '$75–$150/hour',
  minimum: '$150',
};

// Payment options. Leave a value empty ('') until it is set up and the
// website will show "coming soon" instead.
export const payments = {
  squarePayUrl: '', // e.g. 'https://square.link/u/XXXXXXX'
  zelle: '', // the email or phone number registered with Zelle
  checkPayableTo: 'Alberta Construction LLC',
};

export type Service = {
  slug: string;
  name: string;
  icon: string; // Lucide icon name, see https://lucide.dev/icons
  blurb: string;
};

export type ServiceCategory = {
  name: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Fencing & Pets',
    services: [
      {
        slug: 'fence-installation',
        name: 'Fence Installation',
        icon: 'fence',
        blurb: 'New wood fences built straight, solid, and set to last through Portland winters.',
      },
      {
        slug: 'fence-repair',
        name: 'Fence Repair',
        icon: 'hammer',
        blurb: 'Leaning posts, broken boards, sagging gates: fixed so your fence stands up again.',
      },
      {
        slug: 'pet-containment',
        name: 'Pet Containment',
        icon: 'paw-print',
        blurb: 'Dog runs, gap fixes, and fence upgrades that keep your pets safely in the yard.',
      },
      {
        slug: 'dog-houses',
        name: 'Dog Houses',
        icon: 'dog',
        blurb: 'Sturdy, weather-tight dog houses built to fit your dog and your yard.',
      },
    ],
  },
  {
    name: 'Outdoor & Yard',
    services: [
      {
        slug: 'deck-repair',
        name: 'Deck Repair',
        icon: 'layers',
        blurb: 'Soft boards, loose railings, and wobbly steps repaired so your deck is safe to enjoy.',
      },
      {
        slug: 'shed-installation',
        name: 'Shed Installation',
        icon: 'warehouse',
        blurb: 'Shed kits assembled or sheds built on a level, solid base, ready for your gear.',
      },
      {
        slug: 'chicken-coops',
        name: 'Chicken Coops',
        icon: 'egg',
        blurb: 'Predator-safe coops and runs for backyard flocks, built to your space and needs.',
      },
      {
        slug: 'raised-beds',
        name: 'Raised Beds',
        icon: 'sprout',
        blurb: 'Garden beds built at the right height and size, ready to fill and plant.',
      },
      {
        slug: 'property-clean-ups',
        name: 'Property Clean-ups',
        icon: 'trash-2',
        blurb: 'Yards, garages, and rentals cleared out and hauled off so the place is ready to use.',
      },
    ],
  },
  {
    name: 'Indoor',
    services: [
      {
        slug: 'interior-painting',
        name: 'Interior Painting',
        icon: 'paint-roller',
        blurb: 'Clean lines, careful prep, and furniture and floors protected. Rooms, trim, and doors.',
      },
      {
        slug: 'cabinet-furniture-assembly',
        name: 'Cabinet & Furniture Assembly',
        icon: 'package-open',
        blurb: 'Flat-pack furniture and cabinets put together right, level, and secured to the wall.',
      },
      {
        slug: 'grab-bars',
        name: 'Grab Bar Installation',
        icon: 'grab',
        blurb: 'Grab bars anchored solidly into framing in bathrooms, halls, and entries for safer living.',
      },
    ],
  },
  {
    name: 'Projects & Heavy Work',
    services: [
      {
        slug: 'demolition',
        name: 'Demolition',
        icon: 'construction',
        blurb: 'Old decks, sheds, fences, and interior tear-outs removed safely and cleaned up.',
      },
      {
        slug: 'diy-help',
        name: 'Help on DIY Projects',
        icon: 'hand-helping',
        blurb: 'Started something and got stuck? An experienced hand to help you finish it right.',
      },
    ],
  },
];

export const allServices: Service[] = serviceCategories.flatMap((c) => c.services);

export const featuredServiceSlugs = [
  'fence-installation',
  'deck-repair',
  'interior-painting',
  'grab-bars',
  'chicken-coops',
  'property-clean-ups',
];

export const serviceArea = [
  { region: 'Portland', places: 'North, Northeast, Southeast, Southwest & Northwest Portland' },
  { region: 'Westside', places: 'Beaverton, Hillsboro, Tigard, Tualatin, Sherwood' },
  { region: 'South', places: 'Lake Oswego, West Linn, Milwaukie, Oregon City, Happy Valley, Clackamas' },
  { region: 'East', places: 'Gresham, Troutdale, Fairview' },
];

export const faqs = [
  {
    q: 'Are you licensed and insured?',
    a: `Yes. Alberta Construction LLC is licensed with the Oregon Construction Contractors Board (CCB #${business.ccb}) and fully insured.`,
  },
  {
    q: 'How much will my job cost?',
    a: `Most work runs ${pricing.range} depending on the type of job, with a ${pricing.minimum} minimum per visit. Bigger projects like fences, decks, and sheds get a free written estimate with a set price before any work starts. No hidden costs.`,
  },
  {
    q: 'Will I know what’s going on with my project?',
    a: 'Yes. Calls and texts are returned the same business day, and you’ll get updates as the job moves along. You’ll know when I’m coming, what I’m doing, and when it’ll be done.',
  },
  {
    q: 'What areas do you serve?',
    a: 'I’m based in North Portland and work anywhere in the Greater Portland metro on the Oregon side, including Beaverton, Lake Oswego, Milwaukie, Gresham, and more.',
  },
  {
    q: 'What are your hours?',
    a: `Monday through Friday, 9am to 5pm. Send a quote request any time and I’ll get back to you the next business day.`,
  },
  {
    q: 'How do I pay?',
    a: 'Card (including Apple Pay and Google Pay), Zelle, cash, or check. You’ll get an invoice by text or email with a link to pay online.',
  },
  {
    q: 'What if something isn’t right after the job?',
    a: 'Call me and I’ll come back and make it right.',
  },
];

// Add customer reviews here once you have them. The reviews section stays
// hidden while this list is empty.
export const reviews: { quote: string; name: string; area: string }[] = [];

// Add job photos here once you have them (put the files in /public/work/).
// The "Our Work" section stays hidden while this list is empty.
export const workPhotos: { src: string; alt: string; caption?: string }[] = [];
