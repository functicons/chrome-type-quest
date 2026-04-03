const PETS = [
  { id: 'puppy',     emoji: '🐶', name: 'Puppy',      rarity: 'common',    price: 50   },
  { id: 'kitten',    emoji: '🐱', name: 'Kitten',     rarity: 'common',    price: 50   },
  { id: 'hamster',   emoji: '🐹', name: 'Hamster',    rarity: 'common',    price: 75   },
  { id: 'bunny',     emoji: '🐰', name: 'Bunny',      rarity: 'common',    price: 75   },
  { id: 'chick',     emoji: '🐣', name: 'Chick',      rarity: 'common',    price: 80   },
  { id: 'piggy',     emoji: '🐷', name: 'Piggy',      rarity: 'common',    price: 90   },
  { id: 'fox',       emoji: '🦊', name: 'Fox',        rarity: 'rare',      price: 150  },
  { id: 'frog',      emoji: '🐸', name: 'Frog',       rarity: 'rare',      price: 160  },
  { id: 'penguin',   emoji: '🐧', name: 'Penguin',    rarity: 'rare',      price: 180  },
  { id: 'turtle',    emoji: '🐢', name: 'Turtle',     rarity: 'rare',      price: 200  },
  { id: 'butterfly', emoji: '🦋', name: 'Butterfly',  rarity: 'rare',      price: 220  },
  { id: 'octopus',   emoji: '🐙', name: 'Octopus',    rarity: 'rare',      price: 250  },
  { id: 'owl',       emoji: '🦉', name: 'Wise Owl',   rarity: 'epic',      price: 400  },
  { id: 'unicorn',   emoji: '🦄', name: 'Unicorn',    rarity: 'epic',      price: 500  },
  { id: 'dragon',    emoji: '🐉', name: 'Dragon',     rarity: 'epic',      price: 600  },
  { id: 'dino',      emoji: '🦕', name: 'Dino',       rarity: 'legendary', price: 1000 },
  { id: 'phoenix',   emoji: '🦅', name: 'Phoenix',    rarity: 'legendary', price: 1200 },
  { id: 'alien',     emoji: '👾', name: 'Alien',      rarity: 'legendary', price: 1500 },
];

const RARITY_CONFIG = {
  common:    { label: 'Common',    color: '#9ca3af' },
  rare:      { label: 'Rare',      color: '#5CB8FF' },
  epic:      { label: 'Epic',      color: '#A855F7' },
  legendary: { label: 'Legendary', color: '#FFE66D' },
};
