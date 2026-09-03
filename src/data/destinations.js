export const destinations = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light draws millions of visitors every year with its unforgettable ambiance. The divine cuisine and vast art collections deserve to be savored.',
    category: 'City',
    coordinates: { lat: 48.8566, lon: 2.3522 },
    imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'eiffel',
        name: 'Eiffel Tower',
        description: 'Wrought-iron lattice tower on the Champ de Mars.',
        type: 'Landmark',
        imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'louvre',
        name: 'Louvre Museum',
        description: 'The world\'s largest art museum and a historic monument.',
        type: 'Museum',
        imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.',
    category: 'Culture',
    coordinates: { lat: 35.0116, lon: 135.7681 },
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'kinkakuji',
        name: 'Kinkaku-ji',
        description: 'A Zen Buddhist temple in Kyoto, famous for its golden pavilion.',
        type: 'Temple',
        imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'fushimi',
        name: 'Fushimi Inari Taisha',
        description: 'The head shrine of the kami Inari, known for its thousands of vermilion torii gates.',
        type: 'Shrine',
        imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.',
    category: 'Beach',
    coordinates: { lat: -8.4095, lon: 115.1889 },
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'ubud',
        name: 'Ubud Monkey Forest',
        description: 'A nature reserve and Hindu temple complex in Ubud.',
        type: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'uluwatu',
        name: 'Uluwatu Temple',
        description: 'A Balinese Hindu sea temple located in Uluwatu.',
        type: 'Temple',
        imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    description: 'The capital city of Italy. Rome is known for its stunning architecture, with the Colosseum, Pantheon, and Trevi Fountain as main attractions.',
    category: 'Historic',
    coordinates: { lat: 41.9028, lon: 12.4964 },
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'colosseum',
        name: 'Colosseum',
        description: 'An oval amphitheatre in the centre of the city of Rome.',
        type: 'Landmark',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'vatican',
        name: 'Vatican Museums',
        description: 'Public museums of the Vatican City.',
        type: 'Museum',
        imageUrl: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    description: 'One of the Cyclades islands in the Aegean Sea, recognizable by its whitewashed, cubiform houses with blue accents, steep cliffs and tangerine sunsets.',
    category: 'Island',
    coordinates: { lat: 36.3932, lon: 25.4615 },
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'oia',
        name: 'Oia',
        description: 'A coastal town on the northwestern tip of Santorini.',
        type: 'Town',
        imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'akrotiri',
        name: 'Akrotiri',
        description: 'A Minoan Bronze Age settlement on the volcanic Greek island of Santorini.',
        type: 'Ruins',
        imageUrl: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'newyork',
    name: 'New York City',
    country: 'USA',
    description: 'Comprising 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.',
    category: 'City',
    coordinates: { lat: 40.7128, lon: -74.0060 },
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'centralpark',
        name: 'Central Park',
        description: 'An urban park in New York City located between the Upper West and Upper East Sides of Manhattan.',
        type: 'Park',
        imageUrl: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'statue',
        name: 'Statue of Liberty',
        description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor.',
        type: 'Landmark',
        imageUrl: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'agra',
    name: 'Agra',
    country: 'India',
    description: 'Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh. It is a major tourist destination because of its many Mughal-era buildings.',
    category: 'Historic',
    coordinates: { lat: 27.1767, lon: 78.0081 },
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'tajmahal',
        name: 'Taj Mahal',
        description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna.',
        type: 'Landmark',
        imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'agrafort',
        name: 'Agra Fort',
        description: 'A historical fort in the city of Agra in India.',
        type: 'Fort',
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    description: 'Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.',
    category: 'City',
    coordinates: { lat: 35.6762, lon: 139.6503 },
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'shibuya',
        name: 'Shibuya Crossing',
        description: 'A popular scramble crossing in Shibuya, Tokyo.',
        type: 'Cityscape',
        imageUrl: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'skytree',
        name: 'Tokyo Skytree',
        description: 'A broadcasting and observation tower in Sumida, Tokyo.',
        type: 'Landmark',
        imageUrl: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'london',
    name: 'London',
    country: 'UK',
    description: 'The capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.',
    category: 'City',
    coordinates: { lat: 51.5074, lon: -0.1278 },
    imageUrl: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80',
    famousPlaces: [
      {
        id: 'tower',
        name: 'Tower of London',
        description: 'Historic castle on the north bank of the River Thames.',
        type: 'Landmark',
        imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'londoneye',
        name: 'London Eye',
        description: 'A cantilevered observation wheel on the South Bank of the River Thames.',
        type: 'Landmark',
        imageUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];
