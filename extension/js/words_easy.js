const WORDS_EASY = {
  animals: [
    'ant', 'ape', 'bat', 'bear', 'bee', 'bird', 'boar', 'bug',
    'calf', 'cat', 'clam', 'cod', 'colt', 'cow', 'crab', 'crow',
    'cub', 'deer', 'doe', 'dog', 'dove', 'duck', 'elk', 'emu',
    'ewe', 'fish', 'fly', 'foal', 'fox', 'frog', 'goat', 'hare',
    'hawk', 'hen', 'joey', 'kit', 'koi', 'lamb', 'lark', 'lion',
    'mare', 'mink', 'moth', 'mule', 'newt', 'owl', 'pig', 'pony',
    'pup', 'ram', 'rat', 'seal', 'swan', 'toad', 'wasp', 'wolf',
    'worm', 'wren', 'yak'
  ],
  food: [
    'bake', 'bean', 'bite', 'brew', 'bun', 'cake', 'chip', 'chop',
    'cook', 'corn', 'date', 'dip', 'dish', 'egg', 'fig', 'fry',
    'ham', 'herb', 'jam', 'kiwi', 'lime', 'loaf', 'mayo', 'meal',
    'meat', 'milk', 'mint', 'nut', 'oat', 'pea', 'pear', 'pie',
    'plum', 'rice', 'roll', 'rye', 'sage', 'salt', 'seed', 'soda',
    'soup', 'stew', 'sub', 'taco', 'tea', 'tofu', 'wrap', 'yam'
  ],
  nature: [
    'ash', 'bark', 'bay', 'bog', 'bud', 'bush', 'cave', 'clay',
    'coal', 'cove', 'dale', 'dew', 'dirt', 'dune', 'elm', 'fen',
    'fern', 'fog', 'gale', 'gem', 'glen', 'hill', 'ice', 'isle',
    'ivy', 'lake', 'leaf', 'log', 'moon', 'moor', 'moss', 'mud',
    'nest', 'oak', 'peak', 'pond', 'pool', 'rain', 'reef', 'rock',
    'root', 'sand', 'sea', 'sky', 'snow', 'star', 'stem', 'sun',
    'tide', 'tree', 'turf', 'twig', 'vale', 'vine', 'wave', 'weed',
    'wind'
  ],
  school: [
    'art', 'bag', 'bell', 'blue', 'book', 'bus', 'clue', 'copy',
    'data', 'desk', 'draw', 'fact', 'font', 'form', 'glue', 'gym',
    'help', 'hint', 'idea', 'ink', 'line', 'list', 'map', 'mark',
    'math', 'name', 'note', 'page', 'pen', 'plan', 'quiz', 'read',
    'rule', 'show', 'sing', 'talk', 'tape', 'task', 'tell', 'test',
    'type', 'word', 'work'
  ],
  family: [
    'aunt', 'baby', 'bond', 'bro', 'care', 'clan', 'dad', 'dear',
    'folk', 'gran', 'grow', 'home', 'hug', 'hugs', 'joy', 'kid',
    'kin', 'kind', 'kiss', 'life', 'love', 'mom', 'nice', 'pal',
    'pet', 'play', 'safe', 'sis', 'son', 'team', 'twin', 'warm',
    'wife'
  ],
  actions: [
    'add', 'aim', 'ask', 'bend', 'blow', 'bow', 'buzz', 'call',
    'clap', 'come', 'cry', 'cut', 'dig', 'drop', 'dump', 'earn',
    'eat', 'fill', 'find', 'fix', 'fold', 'get', 'give', 'grab',
    'hide', 'hit', 'hold', 'hop', 'hum', 'jog', 'jump', 'kick',
    'lean', 'let', 'lick', 'lift', 'look', 'make', 'melt', 'mix',
    'move', 'nod', 'open', 'pack', 'pat', 'peek', 'peel', 'pick',
    'poke', 'pour', 'pull', 'push', 'put', 'rip', 'rub', 'run',
    'say', 'see', 'send', 'set', 'sew', 'shut', 'sip', 'sit',
    'skip', 'slam', 'slip', 'snap', 'spin', 'stir', 'stop', 'swim',
    'take', 'tap', 'toss', 'try', 'tug', 'turn', 'use', 'wait',
    'walk', 'wash', 'win', 'wink', 'wipe', 'yawn', 'zip'
  ],
  body: [
    'arm', 'back', 'bone', 'brow', 'chin', 'ear', 'eye', 'face',
    'fist', 'foot', 'gum', 'gut', 'hair', 'hand', 'head', 'heel',
    'hip', 'jaw', 'knee', 'lash', 'leg', 'lip', 'lung', 'nail',
    'neck', 'nose', 'palm', 'rib', 'shin', 'skin', 'toe', 'vein'
  ],
  clothes: [
    'band', 'belt', 'bib', 'boot', 'cap', 'cape', 'coat', 'cuff',
    'gown', 'hat', 'hood', 'jean', 'lace', 'mask', 'mitt', 'robe',
    'sash', 'shoe', 'silk', 'sock', 'suit', 'tie', 'veil', 'vest',
    'wool'
  ],
  home: [
    'bed', 'bin', 'bolt', 'bowl', 'box', 'cord', 'cup', 'door',
    'fan', 'fork', 'hose', 'jar', 'key', 'knob', 'lamp', 'lid',
    'mat', 'mop', 'mug', 'oven', 'pan', 'peg', 'pin', 'pot',
    'roof', 'room', 'rug', 'sink', 'soap', 'step', 'tile', 'tub',
    'vase', 'wall'
  ],
  play: [
    'ball', 'cart', 'dash', 'dice', 'doll', 'drum', 'fort', 'fun',
    'game', 'joke', 'kite', 'leap', 'maze', 'pile', 'pop', 'race',
    'ride', 'romp', 'skit', 'tag', 'toy', 'wand', 'zoo'
  ],
  places: [
    'bank', 'barn', 'camp', 'city', 'den', 'dock', 'farm', 'gate',
    'hut', 'inn', 'land', 'lane', 'mall', 'park', 'path', 'pier',
    'road', 'shop', 'town', 'yard'
  ],
  things: [
    'bead', 'can', 'card', 'clip', 'coin', 'comb', 'dial', 'flag',
    'gift', 'hook', 'knot', 'lock', 'net', 'orb', 'reel', 'ring',
    'rod', 'rope', 'sign', 'tool', 'top', 'tube', 'wax', 'wire'
  ],
  weather: [
    'calm', 'cold', 'cool', 'dewy', 'dry', 'gust', 'hail', 'haze',
    'heat', 'hot', 'icy', 'mist', 'thaw', 'wet'
  ],
  vehicles: [
    'bike', 'boat', 'cab', 'car', 'horn', 'jeep', 'jet', 'limo',
    'raft', 'rail', 'sail', 'ship', 'sled', 'tank', 'taxi', 'tire',
    'tow', 'tram', 'van'
  ],
  sports: [
    'bout', 'club', 'dart', 'dive', 'flex', 'goal', 'grip', 'hoop',
    'lap', 'pace', 'pass', 'puck', 'rank', 'rink', 'row', 'shot',
    'ski', 'spar', 'surf'
  ],
  space: [
    'beam', 'dark', 'dawn', 'deep', 'dusk', 'dust', 'gaze', 'glow',
    'mars', 'nova', 'ray', 'rise', 'vast', 'void', 'zoom'
  ],
  music: [
    'bass', 'beat', 'duet', 'echo', 'gong', 'harp', 'hymn', 'jazz',
    'loop', 'mute', 'rest', 'riff', 'solo', 'song', 'tone', 'tune',
    'vibe'
  ],
  feelings: [
    'awe', 'bold', 'dull', 'ease', 'envy', 'fear', 'fine', 'free',
    'glad', 'glee', 'good', 'hope', 'keen', 'mad', 'pity', 'pure',
    'rage', 'sad', 'shy', 'well', 'wild', 'zeal'
  ],
  colors: [
    'aqua', 'gold', 'gray', 'jade', 'navy', 'pink', 'red', 'rose',
    'ruby', 'rust', 'tan', 'teal', 'wine'
  ],
  numbers: [
    'all', 'both', 'dual', 'each', 'few', 'five', 'four', 'half',
    'less', 'many', 'more', 'most', 'nine', 'odd', 'one', 'pair',
    'plus', 'six', 'sum', 'ten', 'trio', 'two', 'zero'
  ],
  shapes: [
    'arc', 'arch', 'bar', 'coil', 'cone', 'cube', 'disc', 'dot',
    'edge', 'grid', 'mesh', 'oval', 'slab', 'slot'
  ],
  adjectives: [
    'bad', 'big', 'busy', 'cozy', 'cute', 'easy', 'fair', 'fast',
    'firm', 'flat', 'full', 'hard', 'high', 'huge', 'last', 'lazy',
    'long', 'lost', 'loud', 'mean', 'mild', 'near', 'neat', 'new',
    'old', 'pale', 'poor', 'rare', 'raw', 'rich', 'ripe', 'rude',
    'slow', 'soft', 'sour', 'sure', 'tall', 'thin', 'tidy', 'tiny',
    'true', 'ugly', 'weak', 'wide', 'wise'
  ],
  adverbs: [
    'ago', 'also', 'away', 'down', 'even', 'ever', 'far', 'here',
    'just', 'late', 'left', 'low', 'much', 'next', 'now', 'off',
    'once', 'only', 'out', 'over', 'past', 'real', 'soon', 'then',
    'too', 'up', 'very', 'yet'
  ]
};
