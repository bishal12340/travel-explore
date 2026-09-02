export const destinations = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light draws millions of visitors every year with its unforgettable ambiance. The divine cuisine and vast art collections deserve to be savored.',
    category: 'City',
    coordinates: { lat: 48.8566, lon: 2.3522 },
    famousPlaces: [
      {
        id: 'eiffel',
        name: 'Eiffel Tower',
        description: 'Wrought-iron lattice tower on the Champ de Mars.',
        type: 'Landmark',
        imageKeyword: 'eiffel tower'
      },
      {
        id: 'louvre',
        name: 'Louvre Museum',
        description: 'The world\'s largest art museum and a historic monument.',
        type: 'Museum',
        imageKeyword: 'louvre museum'
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
    famousPlaces: [
      {
        id: 'kinkakuji',
        name: 'Kinkaku-ji',
        description: 'A Zen Buddhist temple in Kyoto, famous for its golden pavilion.',
        type: 'Temple',
        imageKeyword: 'kinkaku-ji kyoto'
      },
      {
        id: 'fushimi',
        name: 'Fushimi Inari Taisha',
        description: 'The head shrine of the kami Inari, known for its thousands of vermilion torii gates.',
        type: 'Shrine',
        imageKeyword: 'fushimi inari kyoto'
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
    famousPlaces: [
      {
        id: 'ubud',
        name: 'Ubud Monkey Forest',
        description: 'A nature reserve and Hindu temple complex in Ubud.',
        type: 'Nature',
        imageKeyword: 'ubud monkey forest'
      },
      {
        id: 'uluwatu',
        name: 'Uluwatu Temple',
        description: 'A Balinese Hindu sea temple located in Uluwatu.',
        type: 'Temple',
        imageKeyword: 'uluwatu temple bali'
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
    famousPlaces: [
      {
        id: 'colosseum',
        name: 'Colosseum',
        description: 'An oval amphitheatre in the centre of the city of Rome.',
        type: 'Landmark',
        imageKeyword: 'colosseum rome'
      },
      {
        id: 'vatican',
        name: 'Vatican Museums',
        description: 'Public museums of the Vatican City.',
        type: 'Museum',
        imageKeyword: 'vatican museums'
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
    famousPlaces: [
      {
        id: 'oia',
        name: 'Oia',
        description: 'A coastal town on the northwestern tip of Santorini.',
        type: 'Town',
        imageKeyword: 'oia santorini'
      },
      {
        id: 'akrotiri',
        name: 'Akrotiri',
        description: 'A Minoan Bronze Age settlement on the volcanic Greek island of Santorini.',
        type: 'Ruins',
        imageKeyword: 'akrotiri santorini'
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
    famousPlaces: [
      {
        id: 'centralpark',
        name: 'Central Park',
        description: 'An urban park in New York City located between the Upper West and Upper East Sides of Manhattan.',
        type: 'Park',
        imageKeyword: 'central park'
      },
      {
        id: 'statue',
        name: 'Statue of Liberty',
        description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor.',
        type: 'Landmark',
        imageKeyword: 'statue of liberty'
      }
    ]
  }
];
