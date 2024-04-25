
export interface Link {
  icon: string;
  href: string;
}

export interface Act {
  slug: string;
  name: string;
  links?: Link[];
  members?: string[]; // act.slug
}

export interface Venue {
  slug: string;
  name: string;
  address: string;
  location: string;
}

export interface Event {
  act: string;
  venue: string;
  date: string; // '2024-04-24'
  time: string; // '7pm'
}

export const events: Event[] = [
  {
    act: 'fran-and-lucy',
    venue: 'flying-childers',
    date: '2024-04-26',
    time: '6.30pm',
  },
  {
    act: 'liam-and-sean',
    venue: 'social-lutterworth',
    date: '2024-04-26',
    time: '9pm',
  },
  {
    act: 'ben-marshall',
    venue: 'white-bear',
    date: '2024-04-27',
    time: '8pm',
  },
  {
    act: 'lucy-bremridge',
    venue: 'clarence',
    date: '2024-04-27',
    time: '8pm',
  },
  {
    act: 'arizona-sky-duo',
    venue: 'dog-and-gun-kilby',
    date: '2024-04-27',
    time: '8.30pm',
  },
  {
    act: 'lucy-bremridge',
    venue: 'crown-inn',
    date: '2024-04-28',
    time: '3pm',
  },
];

export const venues: Venue[] = [
  {
    slug: 'flying-childers',
    name: 'The Flying Childers',
    address: 'Kirby Bellars, Melton Mowbray LE14 2DU',
    location: 'Melton Mowbray',
  },
  {
    slug: 'social-lutterworth',
    name: 'The Social',
    address: '19 Market St, Lutterworth LE17 4EJ',
    location: 'Lutterworth',
  },
  {
    slug: 'white-bear',
    name: 'The White Bear',
    address: '36 Coventry Rd, Hinckley LE10 0JT',
    location: 'Hinckley',
  },
  {
    slug: 'dog-and-gun-kilby',
    name: 'The Dog & Gun',
    address: 'Main St, Kilby, Wigston LE18 3TD',
    location: 'Kilby',
  },
  {
    slug: 'clarence',
    name: 'The Clarence',
    address: '5 Market Pl, Hinckley LE10 1NT',
    location: 'Hinckley',
  },
  {
    slug: 'crown-inn',
    name: 'Crown Inn',
    address: '23 Church St, Appleby Magna, Swadlincote DE12 7BB',
    location: 'Appleby Magna',
  },
];

export const acts: Act[] = [
  {
    slug: 'baker-and-crane',
    name: 'Baker & Crane',
    links: [
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/BakerandCrane',
      },
      {
        icon: 'instagram',
        href: 'https://www.instagram.com/baker.crane/',
      },
    ],
  },
  {
    slug: 'liam-and-sean',
    name: 'Liam & Sean',
    links: [
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/liamandseanacousticduo/',
      },
    ],
  },
  {
    slug: 'fran-hatton-murden',
    name: 'Francesca Hatton-Murden',
    links: [
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/profile.php?id=61556521434582',
      },
      {
        icon: 'instagram',
        href: 'https://www.instagram.com/francescahattonmurdenmusic/',
      },
    ],
  },
  {
    slug: 'lucy-bremridge',
    name: 'Lucy Bremridge',
    links: [
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/LucyBremridgeMusic',
      },
    ],
  },
  {
    slug: 'fran-and-lucy',
    name: 'Fran & Lucy',
    members: [
      'fran-hatton-murden',
      'lucy-bremridge',
    ],
  },
  {
    slug: 'ben-marshall',
    name: 'Ben Marshall',
    links: [
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/profile.php?id=61558468509845',
      },
      {
        icon: 'instagram',
        href: 'https://www.instagram.com/marshallmansinger',
      },
    ],
  },
  {
    slug: 'arizona-sky-duo',
    name: 'Arizona Sky Duo',
    links: [
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/ArizonSkyDuo',
      },
    ],
  }
];
