const PETS = [
  { id: 'puppy',     emoji: '🐶', name: 'Puppy',      rarity: 'common',    price: 200   },
  { id: 'kitten',    emoji: '🐱', name: 'Kitten',     rarity: 'common',    price: 200   },
  { id: 'hamster',   emoji: '🐹', name: 'Hamster',    rarity: 'common',    price: 280   },
  { id: 'bunny',     emoji: '🐰', name: 'Bunny',      rarity: 'common',    price: 280   },
  { id: 'chick',     emoji: '🐣', name: 'Chick',      rarity: 'common',    price: 350   },
  { id: 'piggy',     emoji: '🐷', name: 'Piggy',      rarity: 'common',    price: 400   },
  { id: 'fox',       emoji: '🦊', name: 'Fox',        rarity: 'rare',      price: 800   },
  { id: 'frog',      emoji: '🐸', name: 'Frog',       rarity: 'rare',      price: 850   },
  { id: 'penguin',   emoji: '🐧', name: 'Penguin',    rarity: 'rare',      price: 1000  },
  { id: 'turtle',    emoji: '🐢', name: 'Turtle',     rarity: 'rare',      price: 1000  },
  { id: 'butterfly', emoji: '🦋', name: 'Butterfly',  rarity: 'rare',      price: 1200  },
  { id: 'octopus',   emoji: '🐙', name: 'Octopus',    rarity: 'rare',      price: 1200  },
  { id: 'owl',       emoji: '🦉', name: 'Wise Owl',   rarity: 'epic',      price: 3000  },
  { id: 'unicorn',   emoji: '🦄', name: 'Unicorn',    rarity: 'epic',      price: 4000  },
  { id: 'dragon',    emoji: '🐉', name: 'Dragon',     rarity: 'epic',      price: 5000  },
  { id: 'dino',      emoji: '🦕', name: 'Dino',       rarity: 'legendary', price: 10000 },
  { id: 'phoenix',   emoji: '🦅', name: 'Phoenix',    rarity: 'legendary', price: 12000 },
  { id: 'alien',     emoji: '👾', name: 'Alien',      rarity: 'legendary', price: 15000 },
];

const RARITY_CONFIG = {
  common:    { label: 'Common',    color: '#9ca3af' },
  rare:      { label: 'Rare',      color: '#5CB8FF' },
  epic:      { label: 'Epic',      color: '#A855F7' },
  legendary: { label: 'Legendary', color: '#FFE66D' },
};
