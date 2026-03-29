const WORD_BANK = {
  animals: {
    easy: ['cat', 'dog', 'pig', 'cow', 'hen', 'ant', 'bee', 'fox', 'owl', 'ram', 'yak', 'emu', 'bat', 'rat', 'ape', 'elk', 'jay', 'bug', 'doe', 'ewe', 'fly', 'colt', 'frog', 'bear', 'duck'],
    medium: ['tiger', 'horse', 'mouse', 'shark', 'eagle', 'whale', 'panda', 'koala', 'zebra', 'otter', 'camel', 'bison', 'crane', 'llama', 'moose', 'bunny', 'puppy', 'kitty', 'robin', 'goose', 'snail', 'trout', 'stork', 'gecko', 'viper', 'hyena', 'finch', 'heron', 'squid', 'lemur'],
    hard: ['dolphin', 'penguin', 'giraffe', 'leopard', 'hamster', 'buffalo', 'panther', 'lobster', 'sparrow', 'raccoon', 'cheetah', 'gorilla', 'octopus', 'pelican', 'gazelle', 'mustang', 'peacock', 'cricket', 'firefly', 'termite', 'vulture', 'wallaby', 'narwhal', 'catfish', 'ladybug', 'sardine', 'goldfish', 'mackerel', 'bluebird', 'tortoise']
  },
  colors: {
    easy: ['red', 'tan', 'aqua', 'pink', 'gold', 'lime', 'navy', 'teal', 'plum', 'cyan', 'rust', 'jade', 'onyx', 'sage', 'wine'],
    medium: ['green', 'white', 'black', 'brown', 'peach', 'ivory', 'amber', 'khaki', 'olive', 'cream', 'slate', 'mauve', 'taupe', 'sandy', 'cocoa', 'ashen', 'azure', 'blush', 'sepia', 'coral'],
    hard: ['magenta', 'crimson', 'scarlet', 'emerald', 'silver', 'saffron', 'fuchsia', 'indigo', 'maroon', 'pewter', 'bronze', 'violet', 'apricot', 'charcoal', 'burgundy', 'lavender', 'mahogany', 'cerulean', 'rosewood', 'tiffany']
  },
  foods: {
    easy: ['pie', 'jam', 'egg', 'ham', 'fig', 'nut', 'yam', 'bun', 'tea', 'dip', 'pea', 'oat', 'corn', 'cake', 'rice', 'soup', 'taco', 'bean', 'milk', 'lime', 'plum', 'date', 'roll', 'wrap'],
    medium: ['pizza', 'bread', 'grape', 'candy', 'juice', 'salad', 'toast', 'mango', 'pasta', 'melon', 'donut', 'honey', 'lemon', 'berry', 'steak', 'chips', 'curry', 'bagel', 'wafer', 'fudge', 'syrup', 'crepe', 'guava', 'nacho', 'salsa', 'scone', 'gravy', 'wheat', 'prune', 'broth'],
    hard: ['chicken', 'biscuit', 'pretzel', 'popcorn', 'pancake', 'brownie', 'avocado', 'sausage', 'burrito', 'noodles', 'lasagna', 'muffins', 'pudding', 'granola', 'coconut', 'spinach', 'cracker', 'ketchup', 'waffles', 'dumpling', 'oatmeal', 'custard', 'ravioli', 'truffle', 'grilled', 'parfait', 'polenta', 'tartlet', 'soymilk', 'risotto']
  },
  nature: {
    easy: ['sun', 'sky', 'sea', 'mud', 'dew', 'fog', 'ice', 'bay', 'oak', 'ash', 'ivy', 'elm', 'bud', 'dune', 'moss', 'pond', 'reef', 'sand', 'hill', 'log', 'gem', 'ore', 'fern', 'leaf', 'wave'],
    medium: ['river', 'cloud', 'stone', 'plant', 'ocean', 'creek', 'beach', 'earth', 'frost', 'flame', 'maple', 'cliff', 'swamp', 'storm', 'grove', 'delta', 'cedar', 'oasis', 'ridge', 'brook', 'petal', 'thorn', 'shrub', 'marsh', 'basin', 'flora', 'fungi', 'glade', 'birch', 'sprig'],
    hard: ['rainbow', 'volcano', 'thunder', 'glacier', 'blossom', 'feather', 'crystal', 'horizon', 'cascade', 'tornado', 'prairie', 'cypress', 'tundra', 'monsoon', 'plateau', 'tsunami', 'meadows', 'boulder', 'morning', 'sunbeam', 'mineral', 'thicket', 'sandbar', 'treetop', 'tideway', 'foliage', 'wetland', 'rivulet', 'hilltop', 'dewdrop']
  },
  school: {
    easy: ['pen', 'bag', 'map', 'art', 'bus', 'gym', 'lab', 'ink', 'book', 'desk', 'read', 'math', 'test', 'bell', 'quiz', 'draw', 'rule', 'tape', 'page', 'task', 'exam', 'note'],
    medium: ['paper', 'clock', 'chair', 'chalk', 'ruler', 'globe', 'class', 'music', 'graph', 'board', 'study', 'lunch', 'table', 'grade', 'essay', 'story', 'group', 'learn', 'spell', 'think', 'paint', 'chart', 'vocab', 'tutor', 'pupil', 'atlas'],
    hard: ['teacher', 'science', 'library', 'pencils', 'reading', 'eraser', 'student', 'locker', 'history', 'recess', 'chapter', 'algebra', 'grammar', 'project', 'biology', 'diploma', 'english', 'program', 'lecture', 'seminar', 'academy', 'booklet', 'planner', 'textbook', 'notebook', 'scholar']
  },
  family: {
    easy: ['mom', 'dad', 'son', 'pal', 'kid', 'baby', 'love', 'home', 'hug', 'pet', 'care', 'bond', 'clan', 'aunt', 'wife'],
    medium: ['uncle', 'aunty', 'twins', 'niece', 'daddy', 'mommy', 'child', 'tribe', 'elder', 'youth', 'nanny', 'buddy', 'house', 'folks', 'proud', 'trust', 'share', 'family'],
    hard: ['brother', 'sister', 'cousin', 'grandma', 'grandpa', 'husband', 'toddler', 'parents', 'wedding', 'nephew', 'sibling', 'reunion', 'nurture', 'auntie', 'kinfolk', 'bonding']
  },
  actions: {
    easy: ['run', 'hop', 'sit', 'win', 'mix', 'dig', 'jog', 'clap', 'tap', 'zip', 'nod', 'bow', 'spin', 'jump', 'swim', 'kick', 'pull', 'tug', 'rub', 'sew', 'try', 'ask', 'wink', 'yawn'],
    medium: ['dance', 'laugh', 'climb', 'smile', 'dream', 'skate', 'swing', 'build', 'write', 'catch', 'throw', 'sleep', 'drive', 'slide', 'cheer', 'float', 'march', 'crawl', 'reach', 'blink', 'snore', 'twirl', 'stomp', 'stare', 'greet', 'chant', 'drift', 'grasp', 'kneel', 'nudge'],
    hard: ['whisper', 'explore', 'imagine', 'journey', 'sparkle', 'twinkle', 'giggle', 'stumble', 'balance', 'capture', 'compete', 'gallop', 'harvest', 'juggle', 'perform', 'recycle', 'shuffle', 'stretch', 'wriggle', 'frolic', 'breathe', 'flutter', 'snuggle', 'scamper', 'pounce', 'prattle', 'ramble', 'scurry', 'stumped', 'tiptoe']
  },
  body: {
    easy: ['arm', 'leg', 'ear', 'eye', 'toe', 'lip', 'rib', 'jaw', 'hip', 'gum', 'back', 'chin', 'palm', 'shin', 'knee', 'nail', 'neck', 'nose', 'skin', 'bone'],
    medium: ['thumb', 'brain', 'heart', 'mouth', 'cheek', 'teeth', 'elbow', 'wrist', 'chest', 'spine', 'ankle', 'scalp', 'lungs', 'skull', 'thigh', 'joint', 'nerve', 'veins', 'torso', 'heels'],
    hard: ['stomach', 'fingers', 'eyebrow', 'freckle', 'nostril', 'forearm', 'kneecap', 'muscles', 'eyelash', 'knuckle', 'cranium', 'trachea', 'jawbone', 'ribcage', 'tendons', 'temples', 'dimples', 'eardrum', 'midriff', 'deltoid']
  },
  clothes: {
    easy: ['hat', 'cap', 'tie', 'belt', 'coat', 'gown', 'vest', 'robe', 'wrap', 'cape', 'suit', 'sock', 'lace', 'hood', 'cuff', 'shoe'],
    medium: ['shirt', 'pants', 'scarf', 'dress', 'glove', 'jeans', 'boots', 'skirt', 'socks', 'apron', 'beret', 'parka', 'tunic', 'cloak', 'shawl', 'visor', 'denim', 'linen', 'cargo', 'plaid'],
    hard: ['sweater', 'mittens', 'sandals', 'pajamas', 'sneaker', 'costume', 'goggles', 'flannel', 'tuxedo', 'poncho', 'kimono', 'overall', 'uniform', 'cardigan', 'leather', 'slipper', 'raincoat', 'tankini', 'bandana', 'garment']
  },
  fun: {
    easy: ['toy', 'fun', 'tag', 'zoo', 'pop', 'wiz', 'sing', 'play', 'drum', 'dice', 'maze', 'game', 'kite', 'doll', 'race', 'joke', 'show', 'romp'],
    medium: ['party', 'kites', 'games', 'magic', 'robot', 'super', 'quest', 'fairy', 'clown', 'trick', 'movie', 'prize', 'crown', 'stage', 'feast', 'arena', 'lucky', 'rodeo', 'bingo', 'mural', 'stunt', 'rumba', 'fiesta', 'clique'],
    hard: ['balloon', 'monster', 'unicorn', 'firework', 'mermaid', 'warrior', 'mystery', 'cartoon', 'juggler', 'acrobat', 'confetti', 'festival', 'magician', 'surprise', 'champion', 'carnival', 'dinosaur', 'treasure', 'escapade', 'laughter']
  },
  places: {
    easy: ['park', 'lake', 'town', 'farm', 'cave', 'road', 'dock', 'mall', 'camp', 'fort', 'yard', 'pier', 'mine', 'glen', 'cove'],
    medium: ['store', 'tower', 'ranch', 'cabin', 'plaza', 'hotel', 'ferry', 'alley', 'depot', 'lodge', 'manor', 'villa', 'motel', 'wharf', 'haven', 'attic', 'vault', 'trail', 'shack', 'suite'],
    hard: ['airport', 'factory', 'theater', 'village', 'fortress', 'mansion', 'harbor', 'kingdom', 'station', 'cottage', 'terrace', 'citadel', 'veranda', 'balcony', 'dungeon', 'outpost', 'sanctum', 'chateau', 'convent', 'gallery']
  },
  things: {
    easy: ['box', 'cup', 'fan', 'key', 'lid', 'mop', 'net', 'pan', 'rug', 'wax', 'jar', 'lamp', 'ring', 'bowl', 'door', 'coin', 'flag', 'lock', 'rope', 'pin', 'rod', 'bell', 'drum', 'hook'],
    medium: ['brush', 'chain', 'frame', 'jewel', 'knife', 'lever', 'piano', 'quilt', 'scale', 'stamp', 'watch', 'badge', 'drill', 'flask', 'hinge', 'broom', 'clasp', 'spool', 'anvil', 'easel', 'gavel', 'ladle', 'latch', 'towel', 'torch'],
    hard: ['battery', 'blanket', 'lantern', 'magnet', 'package', 'padlock', 'pottery', 'shelter', 'whistle', 'envelope', 'toolbox', 'suitcase', 'platter', 'trinket', 'thimble', 'chalice', 'gadgets', 'compass', 'rucksack', 'cabinet']
  },
  weather: {
    easy: ['rain', 'snow', 'wind', 'hail', 'cold', 'warm', 'heat', 'gust', 'calm', 'haze', 'smog', 'mist'],
    medium: ['sunny', 'sleet', 'foggy', 'windy', 'rainy', 'humid', 'snowy', 'misty', 'balmy', 'gusty', 'muggy', 'brisk', 'clear', 'dewy'],
    hard: ['blizzard', 'cyclone', 'drought', 'climate', 'sunrise', 'tempest', 'forecast', 'heatwave', 'snowfall', 'downpour', 'freezing', 'drizzle', 'overcast', 'seasonal']
  },
  vehicles: {
    easy: ['car', 'van', 'cab', 'jet', 'rig', 'raft', 'boat', 'bike', 'cart', 'sled', 'ship', 'tank', 'tram', 'limo'],
    medium: ['train', 'plane', 'truck', 'canoe', 'yacht', 'sedan', 'kayak', 'wagon', 'trike', 'barge', 'moped', 'coupe', 'lorry', 'buggy', 'liner', 'dinghy', 'sleigh', 'glider'],
    hard: ['bicycle', 'tractor', 'scooter', 'chariot', 'cruiser', 'gondola', 'trolley', 'minivan', 'tugboat', 'caravan', 'trailer', 'vehicle', 'pontoon', 'freight', 'railcar', 'motorcar', 'rickshaw', 'monorail']
  },
  sports: {
    easy: ['ski', 'oar', 'goal', 'surf', 'team', 'puck', 'dart', 'ball', 'bout', 'lap', 'set', 'jab'],
    medium: ['pitch', 'serve', 'track', 'match', 'score', 'coach', 'field', 'relay', 'racer', 'round', 'boxer', 'diver', 'rider', 'biker', 'medal', 'fencer', 'goalie', 'swing'],
    hard: ['baseball', 'football', 'hockey', 'tennis', 'soccer', 'athlete', 'archery', 'javelin', 'gymnast', 'surfing', 'batting', 'bowling', 'fencing', 'skating', 'hurdles', 'leaping', 'sprints', 'lacrosse']
  },
  space: {
    easy: ['star', 'moon', 'mars', 'void', 'glow', 'beam', 'dust', 'dark', 'nova', 'aura'],
    medium: ['comet', 'orbit', 'solar', 'lunar', 'venus', 'pluto', 'rover', 'space', 'flare', 'alien', 'radar', 'probe', 'titan', 'dwarf', 'astro', 'nebula', 'quasar'],
    hard: ['eclipse', 'meteor', 'galaxy', 'planet', 'rocket', 'shuttle', 'gravity', 'stellar', 'neptune', 'jupiter', 'mercury', 'starlit', 'equinox', 'nucleus', 'capsule', 'orbital', 'asteroid', 'voyager']
  },
  music: {
    easy: ['hum', 'beat', 'bass', 'note', 'song', 'tune', 'band', 'harp', 'gong', 'jazz', 'duet', 'solo'],
    medium: ['flute', 'viola', 'cello', 'chord', 'tempo', 'lyric', 'organ', 'banjo', 'opera', 'samba', 'hymn', 'ditty', 'vocal', 'polka', 'rondo', 'snare'],
    hard: ['trumpet', 'guitar', 'ukulele', 'harmony', 'melody', 'concert', 'soprano', 'timpani', 'clarinet', 'overture', 'ballad', 'quartet', 'drummer', 'cellist', 'violins', 'calypso', 'cadence', 'baritone']
  },
  ocean: {
    easy: ['fin', 'crab', 'clam', 'kelp', 'tide', 'foam', 'gull', 'seal', 'hull', 'mast'],
    medium: ['prawn', 'shell', 'wreck', 'shore', 'siren', 'algae', 'abyss', 'inlet', 'atoll', 'fjord', 'shoal', 'trawl', 'trench', 'buoys', 'plank'],
    hard: ['seaweed', 'anchovy', 'oysters', 'manatee', 'barnacle', 'seahorse', 'stingray', 'blowfish', 'harpoon', 'riptide', 'current', 'whaling', 'minnows', 'seagull', 'flotsam', 'corsair']
  },
  garden: {
    easy: ['sow', 'pot', 'hoe', 'bulb', 'herb', 'vine', 'weed', 'seed', 'lawn', 'bush', 'stem', 'leaf'],
    medium: ['tulip', 'daisy', 'pansy', 'peony', 'poppy', 'aster', 'hedge', 'mulch', 'aphid', 'spade', 'bloom', 'lilac'],
    hard: ['compost', 'thistle', 'jasmine', 'orchids', 'daffodil', 'marigold', 'primrose', 'sunlight', 'seedling', 'planter', 'topsoil', 'bouquet', 'lattice', 'cutting', 'trellis', 'gazania']
  },
  toys: {
    easy: ['top', 'lego', 'yoyo', 'pony', 'clay', 'hoop'],
    medium: ['teddy', 'block', 'dolly', 'sling', 'cards', 'rattle', 'model', 'scoot', 'chess', 'plush', 'craft', 'brick'],
    hard: ['figurine', 'sandbox', 'crayons', 'dominos', 'pinball', 'racecar', 'playset', 'spinner', 'marbles', 'stuffed', 'playpen', 'sticker', 'jigsaw', 'puppet', 'squishy']
  },
  kitchen: {
    easy: ['mug', 'tin', 'wok', 'fork', 'oven', 'dish', 'tray', 'sink'],
    medium: ['spoon', 'plate', 'whisk', 'mixer', 'stove', 'baker', 'flour', 'sugar', 'yeast', 'knead', 'churn', 'grind'],
    hard: ['spatula', 'blender', 'grinder', 'skillet', 'griddle', 'counter', 'utensil', 'toaster', 'pitcher', 'colander', 'freezer', 'crockpot', 'strainer', 'saucepan', 'thermos']
  },
  shapes: {
    easy: ['arc', 'cone', 'cube', 'oval', 'line', 'edge'],
    medium: ['arrow', 'curve', 'wedge', 'helix', 'cross', 'angle', 'shape', 'spiral', 'torus'],
    hard: ['hexagon', 'octagon', 'polygon', 'ellipse', 'rhombus', 'pentagon', 'crescent', 'cylinder', 'triangle', 'cuboid', 'trapeze', 'pyramid', 'diamond', 'sphere']
  },
  numbers: {
    easy: ['one', 'two', 'six', 'ten', 'odd', 'sum', 'add', 'few', 'four', 'five', 'nine', 'half', 'zero', 'pair', 'plus'],
    medium: ['three', 'seven', 'eight', 'dozen', 'twice', 'third', 'tenth', 'total', 'minus', 'equal', 'tally', 'digit', 'value', 'unity', 'count'],
    hard: ['hundred', 'million', 'billion', 'quarter', 'decimal', 'percent', 'numeral', 'formula', 'product', 'divisor', 'integer', 'factors', 'figures', 'average', 'maximum']
  }
};

const WORD_EMOJI = {
  // Animals
  cat: '🐱', dog: '🐶', pig: '🐷', cow: '🐮', hen: '🐔', ant: '🐜', bee: '🐝', fox: '🦊',
  owl: '🦉', ram: '🐏', yak: '🐂', emu: '🐦', bat: '🦇', rat: '🐀', ape: '🦍',
  elk: '🦌', colt: '🐴', frog: '🐸', bear: '🐻', duck: '🦆', pup: '🐶', cub: '🐻', jay: '🐦', bug: '🐛', fly: '🪰', doe: '🦌', ewe: '🐑', kit: '🐱', gnu: '🐃',
  tiger: '🐯', horse: '🐴', mouse: '🐭', shark: '🦈', eagle: '🦅', whale: '🐋', panda: '🐼',
  koala: '🐨', zebra: '🦓', otter: '🦦', camel: '🐪', bison: '🦬', crane: '🦩', llama: '🦙',
  moose: '🦌', bunny: '🐰', puppy: '🐶', kitty: '🐱', robin: '🐦', goose: '🦢', snail: '🐌',
  trout: '🐟', stork: '🐦', gecko: '🦎', viper: '🐍', hyena: '🐺', finch: '🐦', heron: '🐦',
  squid: '🦑', lemur: '🐒',
  dolphin: '🐬', penguin: '🐧', giraffe: '🦒', leopard: '🐆', hamster: '🐹', buffalo: '🦬',
  panther: '🐈', lobster: '🦞', sparrow: '🐦', raccoon: '🦝', cheetah: '🐆', gorilla: '🦍',
  octopus: '🐙', pelican: '🐦', gazelle: '🦌', mustang: '🐎', peacock: '🦚', cricket: '🦗',
  firefly: '✨', termite: '🐜', vulture: '🦅', wallaby: '🦘', narwhal: '🐳', catfish: '🐟',
  ladybug: '🐞', sardine: '🐟', goldfish: '🐠', mackerel: '🐟', bluebird: '🐦', tortoise: '🐢',

  // Colors
  red: '🔴', tan: '🟤', aqua: '🔵', pink: '💗', gold: '🟡', lime: '🟢', navy: '🔵',
  teal: '🔵', plum: '🟣', cyan: '🔵', rust: '🟤', jade: '💚', onyx: '⚫', sage: '🌿', wine: '🍷',
  green: '🟢', white: '⚪', black: '⚫', brown: '🟤', peach: '🍑', ivory: '🤍',
  amber: '🟠', khaki: '🟤', olive: '🟢', cream: '🤍', slate: '⚪', mauve: '💜',
  taupe: '🟤', sandy: '🟡', cocoa: '🟤', ashen: '⚪', azure: '🔵', blush: '💗', sepia: '🟤',
  coral: '🐚',
  magenta: '💜', crimson: '❤️', scarlet: '🔴', emerald: '💚', silver: '⚪', saffron: '🟡',
  fuchsia: '💗', indigo: '🔵', maroon: '🟤', pewter: '⚪', bronze: '🥉',
  violet: '💜', apricot: '🟠', charcoal: '⚫', burgundy: '🍷',
  lavender: '💜', mahogany: '🟤', cerulean: '🔵', rosewood: '🟤', tiffany: '🔵',

  // Foods
  pie: '🥧', jam: '🍯', egg: '🥚', ham: '🍖', fig: '🍐', nut: '🥜', yam: '🍠', bun: '🍞',
  tea: '🍵', dip: '🥣', pea: '🟢', oat: '🌾', corn: '🌽', cake: '🎂', rice: '🍚', soup: '🍲',
  taco: '🌮', bean: '🥜', milk: '🥛', rye: '🍞', sub: '🥖', soy: '🥛', ale: '🍺', cod: '🐟',
  pizza: '🍕', bread: '🍞', grape: '🍇', candy: '🍬', juice: '🧃', salad: '🥗', toast: '🍞',
  mango: '🥭', pasta: '🍝', melon: '🍈', donut: '🍩', honey: '🍯', lemon: '🍋',
  berry: '🍓', steak: '🥩', chips: '🍟', curry: '🍛', bagel: '🥯', wafer: '🧇', fudge: '🍫',
  syrup: '🍯', crepe: '🥞', guava: '🍐', nacho: '🌮', salsa: '🥫', scone: '🍞',
  gravy: '🍲', wheat: '🌾', prune: '🍇', broth: '🍲',
  chicken: '🍗', biscuit: '🍪', pretzel: '🥨', popcorn: '🍿', pancake: '🥞', brownie: '🍫',
  avocado: '🥑', sausage: '🌭', burrito: '🌯', noodles: '🍜', lasagna: '🍝', muffins: '🧁',
  pudding: '🍮', granola: '🥣', coconut: '🥥', spinach: '🥬', cracker: '🍘', ketchup: '🍅',
  waffles: '🧇', dumpling: '🥟', oatmeal: '🥣', custard: '🍮', ravioli: '🍝', truffle: '🍫',
  grilled: '🍖', parfait: '🍨', polenta: '🌽', tartlet: '🥧', soymilk: '🥛', risotto: '🍚',

  // Nature
  leaf: '🍃', date: '📅', roll: '🥐', wrap: '🌯', hook: '🪝', note: '📝',
  sun: '☀️', sky: '🌤️', sea: '🌊', mud: '🟤', dew: '💧', fog: '🌫️', ice: '🧊', bay: '🏖️',
  oak: '🌳', ash: '🌳', ivy: '🌿', elm: '🌳', bud: '🌱', dune: '🏜️', moss: '🌿', pond: '💧',
  reef: '🐚', sand: '🏖️', hill: '⛰️', log: '🪵', gem: '💎', ore: '⛏️', fern: '🌿', sap: '🌳', cay: '🏝️',
  river: '🏞️', cloud: '☁️', stone: '⛰️', plant: '🌱', ocean: '🌊', creek: '💧',
  beach: '🏖️', earth: '🌍', frost: '❄️', flame: '🔥', maple: '🍁', cliff: '🧗',
  swamp: '🌿', storm: '⛈️', grove: '🌲', delta: '🌊', cedar: '🌲', oasis: '🏝️', ridge: '🏔️',
  brook: '💧', petal: '🌸', thorn: '🌹', shrub: '🌳', marsh: '🌿', basin: '💧',
  flora: '🌺', fungi: '🍄', glade: '🌲', birch: '🌳', sprig: '🌿',
  rainbow: '🌈', volcano: '🌋', thunder: '⚡', glacier: '🏔️', blossom: '🌸', feather: '🕊️',
  crystal: '💎', horizon: '🌅', cascade: '🌊', tornado: '🌪️', prairie: '🌾', cypress: '🌲',
  tundra: '❄️', monsoon: '🌧️', plateau: '🏔️', tsunami: '🌊', meadows: '🌻', boulder: '⛰️',
  morning: '🌅', sunbeam: '☀️', mineral: '💎', thicket: '🌲', sandbar: '🏖️', treetop: '🌳',
  tideway: '🌊', foliage: '🌿', wetland: '🌿', rivulet: '💧', hilltop: '⛰️', dewdrop: '💧',

  // School
  pen: '🖊️', bag: '🎒', map: '🗺️', art: '🎨', bus: '🚌', gym: '🏋️', lab: '🔬',
  ink: '🖋️', book: '📕', desk: '📚', read: '📖', math: '🔢', test: '📝', bell: '🔔',
  quiz: '❓', draw: '✏️', rule: '📏', tape: '📎', page: '📄', task: '📋', exam: '📝', nib: '🖊️',
  paper: '📄', clock: '🕐', chair: '💺', chalk: '📝', ruler: '📏', globe: '🌍', class: '🏫',
  music: '🎵', graph: '📊', board: '📋', study: '📚', lunch: '🍱', table: '🪑', grade: '📝',
  essay: '📝', story: '📖', group: '👥', learn: '📚', spell: '🔤', think: '🤔',
  paint: '🎨', chart: '📊', vocab: '📖', tutor: '👩‍🏫', pupil: '🧑‍🎓', atlas: '🗺️',
  teacher: '👩‍🏫', science: '🔬', library: '📚', pencils: '✏️', reading: '📖', eraser: '🧹',
  student: '🧑‍🎓', locker: '🔒', history: '📜', recess: '🏃', chapter: '📖', algebra: '🔢',
  grammar: '📝', project: '📋', biology: '🧬', diploma: '🎓', english: '📖', program: '💻',
  lecture: '🎓', seminar: '📚', academy: '🏫', booklet: '📖', planner: '📅', textbook: '📖',
  notebook: '📓', scholar: '🎓',

  // Family
  mom: '👩', dad: '👨', son: '👦', pal: '🤝', kid: '🧒', aunt: '👩', wife: '👩',
  baby: '👶', love: '❤️', home: '🏠', hug: '🤗', pet: '🐾', care: '💕', bond: '🤝', clan: '👨‍👩‍👧‍👦',
  uncle: '👨', aunty: '👩', twins: '👯', niece: '👧', daddy: '👨', mommy: '👩', child: '🧒', family: '👨‍👩‍👧',
  tribe: '👥', elder: '👴', youth: '🧑', nanny: '👩', buddy: '🤝', house: '🏠', folks: '👨‍👩‍👧',
  proud: '🥲', trust: '🤝', share: '🤲',
  brother: '👦', sister: '👧', cousin: '🧑', grandma: '👵', grandpa: '👴', husband: '👨', toddler: '👶',
  parents: '👨‍👩‍👧', wedding: '💒', nephew: '👦', sibling: '👧', reunion: '🎉', nurture: '💕',
  auntie: '👩', kinfolk: '👨‍👩‍👧‍👦', bonding: '💕',

  // Actions
  run: '🏃', hop: '🐇', sit: '💺', win: '🏆', mix: '🥣', dig: '⛏️',
  jog: '🏃', clap: '👏', tap: '👆', zip: '⚡', nod: '😊', bow: '🙇', spin: '🌀', jump: '🦘', swim: '🏊',
  kick: '⚽', pull: '💪', tug: '💪', rub: '🤲', sew: '🧵', try: '💪', ask: '❓', wink: '😉', yawn: '🥱',
  dance: '💃', laugh: '😂', climb: '🧗', smile: '😊', dream: '💭', skate: '⛸️',
  swing: '🎠', build: '🔨', write: '✍️', catch: '🤲', throw: '🤾', sleep: '😴', drive: '🚗',
  slide: '🎢', cheer: '📣', float: '🎈', march: '🚶', crawl: '🐛', reach: '🙌', blink: '😉',
  snore: '😴', twirl: '💫', stomp: '🦶', stare: '👀', greet: '👋', chant: '📣', drift: '🌊',
  grasp: '🤝', kneel: '🧎', nudge: '👈',
  whisper: '🤫', explore: '🧭', imagine: '💭', journey: '🗺️', sparkle: '✨', twinkle: '⭐',
  giggle: '🤭', stumble: '😵', balance: '⚖️', capture: '📸', compete: '🏅', gallop: '🐎',
  harvest: '🌾', juggle: '🤹', perform: '🎭', recycle: '♻️', shuffle: '🃏', stretch: '🧘',
  wriggle: '🐛', frolic: '🐇', breathe: '💨', flutter: '🦋', snuggle: '🤗', scamper: '🐿️',
  pounce: '🐾', prattle: '💬', ramble: '🚶', scurry: '🐿️', stumped: '🤔', tiptoe: '🦶',

  // Body
  arm: '💪', leg: '🦵', ear: '👂', eye: '👁️', toe: '🦶', lip: '👄', rib: '🦴', jaw: '🦷',
  hip: '💃', gum: '🦷', back: '🔙', chin: '😊', palm: '🤚', shin: '🦵', knee: '🦵', nail: '💅',
  neck: '🦒', nose: '👃', skin: '🤲', bone: '🦴',
  thumb: '👍', brain: '🧠', heart: '❤️', mouth: '👄', cheek: '😊', teeth: '🦷', elbow: '💪',
  wrist: '⌚', chest: '💪', spine: '🦴', ankle: '🦶', scalp: '💇', lungs: '💨', skull: '💀',
  thigh: '🦵', joint: '🦴', nerve: '⚡', veins: '💉', torso: '🧍', heels: '👠',
  stomach: '🤢', fingers: '🖐️', eyebrow: '🤨', freckle: '😶', nostril: '👃',
  forearm: '💪', kneecap: '🦵', muscles: '💪', eyelash: '👁️', knuckle: '✊', cranium: '💀',
  trachea: '💨', jawbone: '🦷', ribcage: '🦴', tendons: '💪', temples: '😊', dimples: '😊',
  eardrum: '👂', midriff: '🧍', deltoid: '💪',

  // Clothes
  hat: '🎩', cap: '🧢', tie: '👔', belt: '👔', shoe: '👞', hood: '🧥', cuff: '👔',
  coat: '🧥', gown: '👗', vest: '👕', robe: '🥋', wrap: '🧣', cape: '🦸', suit: '🤵', sock: '🧦',
  tab: '🏷️', lace: '🧵',
  shirt: '👕', pants: '👖', scarf: '🧣', dress: '👗', glove: '🧤', jeans: '👖', boots: '👢',
  skirt: '👗', socks: '🧦', apron: '👨‍🍳', beret: '🎨', parka: '🧥', tunic: '👕', cloak: '🧥',
  shawl: '🧣', visor: '🧢', denim: '👖', linen: '👕', cargo: '👖', plaid: '👔',
  sweater: '🧥', mittens: '🧤', sandals: '👡', pajamas: '🛌', sneaker: '👟', costume: '🎭',
  goggles: '🥽', flannel: '👕', tuxedo: '🤵', poncho: '🧥', kimono: '👘', overall: '👖',
  uniform: '👔', cardigan: '🧥', leather: '🧥', slipper: '👡', raincoat: '🧥', tankini: '👙',
  bandana: '🧣', garment: '👕',

  // Fun
  toy: '🧸', fun: '🎉', tag: '🏷️', zoo: '🦁', pop: '🎈', wiz: '🧙', sing: '🎤',
  play: '🎮', drum: '🥁', dice: '🎲', maze: '🌀', game: '🎮', kite: '🎏', doll: '🎎',
  race: '🏁', joke: '😂', show: '🎪', romp: '🤸',
  party: '🎉', kites: '🎏', games: '🎮', magic: '✨', robot: '🤖', super: '🦸',
  quest: '⚔️', fairy: '🧚', clown: '🤡', trick: '🎩', movie: '🎬', prize: '🎁',
  crown: '👑', stage: '🎭', feast: '🍽️', arena: '🏟️', lucky: '🍀', rodeo: '🤠', bingo: '🎲',
  mural: '🎨', stunt: '🤸', rumba: '💃', fiesta: '🎉', clique: '👥',
  balloon: '🎈', monster: '👾', unicorn: '🦄', firework: '🎆', mermaid: '🧜', warrior: '⚔️',
  mystery: '🔮', cartoon: '📺', juggler: '🤹', acrobat: '🤸', confetti: '🎊',
  festival: '🎪', magician: '🧙', surprise: '🎁', champion: '🏆', carnival: '🎠', dinosaur: '🦕',
  treasure: '💰', escapade: '🏃', laughter: '😂',

  // Places
  park: '🏞️', lake: '🏞️', town: '🏘️', farm: '🌾', cave: '⛰️', road: '🛣️', dock: '⚓',
  mall: '🏬', camp: '⛺', fort: '🏰', yard: '🏡', pier: '🌊', mine: '⛏️', glen: '🌲', cove: '🏖️',
  store: '🏪', tower: '🗼', ranch: '🤠', cabin: '🏚️', plaza: '🏛️', hotel: '🏨',
  ferry: '⛴️', alley: '🌃', depot: '🚉', lodge: '🏡', manor: '🏰', villa: '🏖️', motel: '🏨',
  wharf: '⚓', haven: '🏝️', attic: '🏠', vault: '🔐', trail: '🥾', shack: '🏚️', suite: '🏨',
  airport: '✈️', factory: '🏭', theater: '🎭', village: '🏘️', fortress: '🏰', mansion: '🏰',
  harbor: '⚓', kingdom: '👑', station: '🚉', cottage: '🏡',
  terrace: '🏡', citadel: '🏰', veranda: '🏡', balcony: '🏠', dungeon: '🏰', outpost: '🏕️',
  sanctum: '🏛️', chateau: '🏰', convent: '🏛️', gallery: '🖼️',

  // Things
  box: '📦', cup: '☕', fan: '🌀', key: '🔑', lid: '🥫', mop: '🧹', net: '🥅', pan: '🍳',
  rug: '🟫', wax: '🕯️', jar: '🏺', lamp: '💡', ring: '💍', bowl: '🥣', door: '🚪',
  coin: '💰', flag: '🚩', lock: '🔒', rope: '🧵', pin: '📌', rod: '🎣', peg: '📎', axe: '🪓', cog: '⚙️',
  brush: '🖌️', chain: '⛓️', frame: '🖼️', jewel: '💎', knife: '🔪', lever: '🔧', piano: '🎹',
  quilt: '🛏️', scale: '⚖️', stamp: '📬', watch: '⌚', badge: '🏅', drill: '🔧', flask: '🧪',
  hinge: '🔩', broom: '🧹', clasp: '📎', spool: '🧵', anvil: '⚒️',
  easel: '🎨', gavel: '⚖️', ladle: '🥄', latch: '🔐', towel: '🧻', torch: '🔦',
  battery: '🔋', blanket: '🛏️', lantern: '🏮', magnet: '🧲',
  package: '📦', padlock: '🔐', pottery: '🏺', shelter: '🏠', whistle: '📢',
  envelope: '✉️', toolbox: '🧰', suitcase: '🧳', platter: '🍽️', trinket: '💍', thimble: '🧵',
  chalice: '🏆', gadgets: '🔧', compass: '🧭', rucksack: '🎒', cabinet: '🏠',

  // Weather
  rain: '🌧️', snow: '❄️', wind: '💨', hail: '🌨️', cold: '🥶', warm: '🌡️', heat: '🥵',
  gust: '💨', calm: '😌', haze: '🌫️', smog: '🌫️', mist: '🌫️',
  sunny: '☀️', sleet: '🌨️', foggy: '🌫️', windy: '💨', rainy: '🌧️', humid: '💦',
  snowy: '❄️', misty: '🌫️', frost: '❄️', flash: '⚡', balmy: '🌤️', gusty: '💨', muggy: '🌡️',
  brisk: '🍃', clear: '☀️', dewy: '💧',
  blizzard: '🌨️', cyclone: '🌪️', drought: '☀️', climate: '🌡️',
  sunrise: '🌅', tempest: '⛈️', forecast: '📡', heatwave: '🥵', snowfall: '❄️',
  downpour: '🌧️', freezing: '🥶', drizzle: '🌦️', overcast: '☁️', seasonal: '🍂',

  // Vehicles
  car: '🚗', van: '🚐', cab: '🚕', jet: '✈️', rig: '🚛', raft: '🛶',
  boat: '⛵', bike: '🚲', cart: '🛒', sled: '🛷', ship: '🚢', tank: '🔧', tram: '🚋', limo: '🚗',
  train: '🚆', plane: '✈️', truck: '🚛', canoe: '🛶', yacht: '🛥️', sedan: '🚗', kayak: '🛶',
  wagon: '🚃', trike: '🚲', barge: '🚢', moped: '🏍️', coupe: '🚗', lorry: '🚛',
  buggy: '🚗', liner: '🚢', dinghy: '🛶', sleigh: '🛷', glider: '✈️',
  bicycle: '🚲', tractor: '🚜', scooter: '🛴', chariot: '🏇', cruiser: '🚢', gondola: '🛶',
  trolley: '🚃', minivan: '🚐', tugboat: '🚢', caravan: '🚐', trailer: '🚛', vehicle: '🚗',
  pontoon: '🛥️', freight: '🚛', railcar: '🚃', motorcar: '🚗', rickshaw: '🛺', monorail: '🚝',

  // Sports
  ski: '⛷️', oar: '🚣', goal: '🥅', surf: '🏄', team: '👥', puck: '🏒', dart: '🎯',
  ball: '⚽', bout: '🥊', lap: '🏃', set: '🎾', jab: '🥊',
  pitch: '⚾', serve: '🎾', track: '🏃', match: '🏆', score: '📊', coach: '📋', field: '🏟️',
  relay: '🏃', champ: '🏆', racer: '🏎️', round: '🥊', boxer: '🥊',
  diver: '🤿', rider: '🏇', biker: '🚴', medal: '🏅', fencer: '🤺', vault: '🤸',
  baseball: '⚾', football: '🏈', hockey: '🏒', tennis: '🎾', soccer: '⚽', athlete: '🏃',
  archery: '🏹', javelin: '🏃', gymnast: '🤸', surfing: '🏄', batting: '⚾',
  bowling: '🎳', fencing: '🤺', skating: '⛸️', hurdles: '🏃', leaping: '🏃', sprints: '🏃',
  lacrosse: '🥍', racquet: '🎾',

  // Space
  star: '⭐', moon: '🌙', mars: '🔴', void: '🌌', glow: '✨', beam: '💫', dust: '🌫️', dark: '🌑',
  nova: '🌟', aura: '✨',
  comet: '☄️', orbit: '🌍', solar: '☀️', lunar: '🌙', venus: '🌟', pluto: '🔵', rover: '🚗',
  space: '🚀', flare: '🌟', alien: '👽', radar: '📡', probe: '🛰️', titan: '🌍', dwarf: '⭐',
  astro: '🧑‍🚀', nebula: '🌌', quasar: '🌟',
  eclipse: '🌑', meteor: '☄️', galaxy: '🌌', planet: '🪐', rocket: '🚀', shuttle: '🚀',
  gravity: '🌍', stellar: '⭐', neptune: '🔵', jupiter: '🟠', mercury: '🌡️',
  starlit: '🌟', equinox: '🌍', nucleus: '⚛️', capsule: '🚀', orbital: '🌍',
  asteroid: '☄️', voyager: '🚀',

  // Music
  hum: '🎵', beat: '🥁', bass: '🎸', note: '🎵', song: '🎶', tune: '🎵', band: '🎤',
  harp: '🎵', gong: '🔔', jazz: '🎷', duet: '🎤', solo: '🎤',
  flute: '🎵', viola: '🎻', cello: '🎻', chord: '🎶', tempo: '🎵', lyric: '🎤',
  organ: '🎹', banjo: '🎸', opera: '🎭', samba: '💃', hymn: '🎵', ditty: '🎶', vocal: '🎤',
  polka: '💃', rondo: '🎵', snare: '🥁',
  trumpet: '🎺', guitar: '🎸', ukulele: '🎸', harmony: '🎶', melody: '🎵', concert: '🎤',
  soprano: '🎤', timpani: '🥁', clarinet: '🎵', overture: '🎶', ballad: '🎵',
  quartet: '🎶', drummer: '🥁', cellist: '🎻', violins: '🎻', calypso: '🎵', cadence: '🎶',
  baritone: '🎤',

  // Ocean
  fin: '🦈', crab: '🦀', clam: '🐚', kelp: '🌿', tide: '🌊', foam: '🌊', gull: '🐦', seal: '🦭',
  wave: '🌊',
  prawn: '🦐', shell: '🐚', wreck: '🚢', shore: '🏖️', siren: '🧜', algae: '🌿', abyss: '🌊',
  inlet: '🌊', atoll: '🏝️', fjord: '🏔️', shoal: '🐟', trench: '🌊',
  seaweed: '🌿', anchovy: '🐟', oysters: '🐚', manatee: '🐋', barnacle: '🐚',
  seahorse: '🐴', stingray: '🦈', blowfish: '🐡', mariner: '⛵', captain: '🧑‍✈️',
  starfish: '⭐',

  // Garden
  sow: '🌱', pot: '🪴', hoe: '🧑‍🌾', bulb: '🌷', herb: '🌿', vine: '🌿', weed: '🌿',
  seed: '🌱', lawn: '🌿', bush: '🌳', stem: '🌱',
  tulip: '🌷', daisy: '🌼', pansy: '🌸', peony: '🌺', poppy: '🌺', aster: '🌼',
  hedge: '🌳', mulch: '🌿', aphid: '🐛', spade: '🧑‍🌾', bloom: '🌺', lilac: '💜',
  compost: '🌿', thistle: '🌿', jasmine: '🌸', orchids: '🌺', daffodil: '🌼',
  marigold: '🌻', primrose: '🌸', sunlight: '☀️', seedling: '🌱', planter: '🪴', topsoil: '🌿',
  bouquet: '💐', lattice: '🌿', cutting: '✂️', trellis: '🌿', gazania: '🌼',

  // Toys
  top: '🔝', lego: '🧱', yoyo: '🪀', pony: '🐴', clay: '🏺', hoop: '⭕',
  teddy: '🧸', block: '🧱', dolly: '🎎', sword: '⚔️', sling: '🏹', wheel: '🎡',
  cards: '🃏', drums: '🥁', model: '🧸', rattle: '🧸',
  figurine: '🧸', sandbox: '🏖️', crayons: '🖍️', dominos: '🎲', pinball: '🎮',
  racecar: '🏎️', playset: '🧸', spinner: '🌀', marbles: '🔮', stuffed: '🧸',
  playpen: '🧸', sticker: '⭐', jigsaw: '🧩', buildup: '🧱',

  // Kitchen
  mug: '☕', tin: '🥫', wok: '🥘', fork: '🍴', oven: '🔥', dish: '🍽️', tray: '🍽️', sink: '🚰',
  spoon: '🥄', plate: '🍽️', whisk: '🥣', mixer: '🥣', stove: '🔥', baker: '🧑‍🍳',
  flour: '🌾', sugar: '🍬', yeast: '🍞', knead: '🍞', churn: '🥛', grind: '🔧',
  spatula: '🍳', blender: '🥤', grinder: '🔧', skillet: '🍳', griddle: '🥞',
  counter: '🏠', utensil: '🍴', toaster: '🍞', pitcher: '🥛', colander: '🍝', freezer: '🧊',
  steamer: '🍲', strainer: '🍝', platter: '🍽️', cabinet: '🏠',

  // Shapes
  arc: '🌈', cone: '🔺', cube: '🧊', oval: '⭕', line: '📏', edge: '📐',
  arrow: '➡️', curve: '🌊', wedge: '🔺', helix: '🌀', cross: '✝️', angle: '📐', shape: '🔷',
  prism: '🔷', globe: '🌐',
  hexagon: '⬡', octagon: '🛑', polygon: '🔷', ellipse: '⭕', rhombus: '🔷',
  pentagon: '🔷', crescent: '🌙', cylinder: '🧴', triangle: '🔺', cuboid: '📦',
  trapeze: '🔷', pyramid: '🔺', diamond: '💎', sphere: '🌐',

  // Numbers
  one: '1️⃣', two: '2️⃣', six: '6️⃣', ten: '🔟', odd: '🔢', sum: '➕', add: '➕', few: '🔢',
  four: '4️⃣', five: '5️⃣', nine: '9️⃣', half: '🔢', zero: '0️⃣', pair: '👥', plus: '➕',
  three: '3️⃣', seven: '7️⃣', eight: '8️⃣', dozen: '🔢', twice: '✌️', third: '🥉', tenth: '🔢',
  total: '🔢', minus: '➖', equal: '🟰', tally: '📊', digit: '🔢', value: '💰', unity: '🤝',
  count: '🔢',
  hundred: '💯', million: '🔢', billion: '🔢', quarter: '🔢', decimal: '🔢', percent: '💯',
  numeral: '🔢', formula: '🔢', product: '✖️', divisor: '➗', integer: '🔢', factors: '🔢',
  figures: '🔢', average: '📊', maximum: '📈'
};

function getWordEmoji(word) {
  return WORD_EMOJI[word.toLowerCase()] || '';
}

function getWordsForDifficulty(difficulty) {
  const words = [];
  for (const category of Object.values(WORD_BANK)) {
    if (category[difficulty]) {
      words.push(...category[difficulty]);
    }
  }
  return words;
}

function getRandomWord(difficulty) {
  const words = getWordsForDifficulty(difficulty);
  return words[Math.floor(Math.random() * words.length)];
}
