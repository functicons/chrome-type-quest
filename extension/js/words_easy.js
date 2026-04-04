const WORDS_EASY = {
  animals: [
    'cat', 'dog', 'pig', 'cow', 'hen', 'ant', 'bee', 'fox',
    'owl', 'bat', 'rat', 'bug', 'fly', 'ape', 'ram', 'elk',
    'emu', 'yak', 'cub', 'pup', 'frog', 'bear', 'duck', 'fish',
    'bird', 'deer', 'goat', 'lion', 'wolf', 'worm', 'seal', 'crab',
    'moth', 'mule', 'toad', 'lamb', 'mare', 'colt', 'swan', 'hawk',
    'dove', 'calf', 'crow', 'hare', 'newt', 'clam', 'pony', 'cod',
    'koi', 'wasp', 'lark', 'wren', 'joey', 'foal', 'boar', 'kit',
    'doe', 'ewe', 'gnu'
  ],
  food: [
    'pie', 'jam', 'egg', 'ham', 'nut', 'bun', 'tea', 'pea',
    'fig', 'yam', 'corn', 'cake', 'rice', 'soup', 'taco', 'bean',
    'milk', 'plum', 'meat', 'roll', 'dip', 'oat', 'lime', 'date',
    'wrap', 'chip', 'stew', 'seed', 'salt', 'fish', 'pear', 'soda',
    'kiwi', 'tofu', 'herb', 'mint', 'sage', 'mayo', 'slaw', 'sub',
    'rye', 'fry', 'bbq', 'brew', 'chop', 'bite', 'meal', 'snack',
    'dish', 'bake', 'cook', 'roast', 'loaf', 'curd', 'whey'
  ],
  nature: [
    'sun', 'sky', 'sea', 'mud', 'dew', 'fog', 'ice', 'oak',
    'ivy', 'bud', 'pond', 'sand', 'hill', 'log', 'gem', 'fern',
    'leaf', 'wave', 'bay', 'ash', 'elm', 'moss', 'lake', 'dirt',
    'rock', 'tree', 'rain', 'snow', 'wind', 'star', 'moon', 'seed',
    'bush', 'vine', 'nest', 'root', 'bark', 'clay', 'coal', 'cave',
    'weed', 'reef', 'dale', 'glen', 'vale', 'peak', 'cove', 'isle',
    'dune', 'tide', 'turf', 'moor', 'fen', 'bog', 'dell', 'knoll',
    'pool', 'rill', 'twig', 'stem', 'petal', 'gale'
  ],
  school: [
    'pen', 'bag', 'map', 'art', 'bus', 'gym', 'ink', 'book',
    'desk', 'read', 'math', 'test', 'bell', 'quiz', 'draw', 'rule',
    'tape', 'page', 'note', 'word', 'name', 'line', 'mark', 'form',
    'list', 'plan', 'idea', 'work', 'talk', 'tell', 'help', 'show',
    'type', 'copy', 'font', 'blue', 'sing', 'chalk', 'class', 'grade',
    'learn', 'study', 'teach', 'write', 'spell', 'count', 'think',
    'solve', 'task', 'fact', 'data', 'hint', 'clue'
  ],
  family: [
    'mom', 'dad', 'son', 'pal', 'kid', 'hug', 'pet', 'kin',
    'love', 'home', 'care', 'baby', 'aunt', 'wife', 'bond', 'play',
    'kiss', 'help', 'grow', 'name', 'dear', 'warm', 'safe', 'kind',
    'nice', 'folk', 'clan', 'twin', 'bro', 'sis', 'gran', 'nest',
    'joy', 'life', 'share', 'team'
  ],
  actions: [
    'run', 'hop', 'sit', 'win', 'mix', 'dig', 'jog', 'tap',
    'nod', 'bow', 'try', 'ask', 'eat', 'cry', 'hug', 'cut',
    'hit', 'put', 'get', 'let', 'see', 'fly', 'say', 'add',
    'rub', 'tug', 'sew', 'clap', 'spin', 'jump', 'swim', 'kick',
    'pull', 'yawn', 'wink', 'grab', 'hide', 'push', 'lift', 'drop',
    'wash', 'cook', 'sing', 'pour', 'peel', 'toss', 'pick', 'pack',
    'wave', 'call', 'wipe', 'hold', 'give', 'play', 'bite', 'blow',
    'open', 'shut', 'read', 'draw', 'stop', 'look', 'walk', 'talk',
    'wait', 'find', 'make', 'move', 'turn', 'grow', 'show', 'take',
    'come', 'tell', 'send', 'snap', 'skip', 'slam', 'slip', 'stir',
    'chop', 'fold', 'lean', 'lick', 'peek', 'poke', 'rock', 'roll',
    'rip', 'zip', 'bend', 'fill', 'dump', 'dip', 'sip', 'pat',
    'hum', 'buzz', 'melt', 'fix', 'set', 'use', 'aim', 'earn'
  ],
  body: [
    'arm', 'leg', 'ear', 'eye', 'toe', 'lip', 'rib', 'jaw',
    'hip', 'gum', 'back', 'chin', 'knee', 'nail', 'neck', 'nose',
    'skin', 'bone', 'hand', 'foot', 'head', 'face', 'hair', 'palm',
    'shin', 'brow', 'fist', 'wrist', 'lobe', 'vein', 'lung', 'gut',
    'rib', 'calf', 'heel', 'lash'
  ],
  clothes: [
    'hat', 'cap', 'tie', 'belt', 'coat', 'vest', 'robe', 'cape',
    'suit', 'sock', 'hood', 'shoe', 'gown', 'wrap', 'cuff', 'bib',
    'boot', 'jean', 'lace', 'silk', 'wool', 'band', 'sash', 'mitt',
    'mask', 'veil', 'shawl'
  ],
  home: [
    'bed', 'rug', 'cup', 'mug', 'pot', 'pan', 'fan', 'key',
    'lid', 'mop', 'jar', 'box', 'bin', 'tap', 'tub', 'mat',
    'pin', 'peg', 'lamp', 'door', 'wall', 'roof', 'room', 'sink',
    'step', 'dish', 'bowl', 'fork', 'soap', 'vase', 'tile', 'oven',
    'couch', 'shelf', 'chair', 'table', 'spoon', 'plate', 'towel',
    'brush', 'broom', 'clock', 'knob', 'bolt', 'hose', 'cord'
  ],
  play: [
    'toy', 'fun', 'tag', 'zoo', 'pop', 'run', 'win', 'play',
    'drum', 'game', 'kite', 'doll', 'race', 'joke', 'show', 'ride',
    'ball', 'fort', 'sand', 'swim', 'sing', 'hide', 'skip', 'maze',
    'draw', 'dice', 'skit', 'swing', 'slide', 'climb', 'chase', 'catch',
    'leap', 'spin', 'pile', 'romp', 'dash', 'cart', 'wand', 'crown'
  ],
  places: [
    'park', 'lake', 'town', 'farm', 'cave', 'road', 'mall', 'camp',
    'fort', 'yard', 'hill', 'pond', 'dock', 'path', 'gate', 'city',
    'shop', 'pool', 'home', 'room', 'land', 'barn', 'bank', 'pier',
    'reef', 'den', 'hut', 'inn', 'zoo', 'gym', 'bay', 'cove',
    'glen', 'vale', 'lane', 'alley', 'field', 'trail', 'beach'
  ],
  things: [
    'box', 'cup', 'fan', 'key', 'lid', 'mop', 'net', 'pan',
    'rug', 'jar', 'bag', 'map', 'pen', 'toy', 'top', 'can',
    'pin', 'rod', 'lamp', 'ring', 'bowl', 'door', 'coin', 'flag',
    'lock', 'rope', 'bell', 'hook', 'ball', 'book', 'clip', 'tape',
    'card', 'gift', 'sign', 'tube', 'wire', 'nail', 'glue', 'tool',
    'soap', 'comb', 'fork', 'wax', 'gem', 'orb', 'tag', 'dial',
    'knot', 'bolt', 'hinge', 'clasp', 'badge', 'charm', 'sticker',
    'stamp', 'patch', 'bead', 'spool', 'reel'
  ],
  weather: [
    'rain', 'snow', 'wind', 'hail', 'cold', 'warm', 'heat', 'cool',
    'hot', 'wet', 'dry', 'ice', 'fog', 'mist', 'gust', 'dew',
    'calm', 'sun', 'haze', 'sleet', 'storm', 'frost', 'breeze', 'cloud',
    'thaw', 'chill', 'draft', 'shine'
  ],
  vehicles: [
    'car', 'van', 'cab', 'jet', 'bus', 'raft', 'boat', 'bike',
    'cart', 'sled', 'ship', 'tram', 'ride', 'tire', 'horn', 'tank',
    'limo', 'rail', 'tube', 'canoe', 'kayak', 'barge', 'wagon', 'buggy',
    'taxi', 'tow', 'sail'
  ],
  sports: [
    'ski', 'run', 'tag', 'bat', 'net', 'win', 'hit', 'goal',
    'surf', 'team', 'puck', 'dart', 'ball', 'lap', 'set', 'gym',
    'race', 'ride', 'swim', 'kick', 'pass', 'toss', 'hoop', 'jump',
    'game', 'club', 'rink', 'rank', 'bout', 'spar', 'dash', 'pace',
    'dive', 'row', 'shot', 'spin', 'grip', 'flex'
  ],
  space: [
    'star', 'moon', 'mars', 'glow', 'beam', 'dust', 'dark', 'sky',
    'land', 'zoom', 'spin', 'vast', 'void', 'orb', 'ring', 'gaze',
    'dawn', 'dusk', 'nova', 'comet', 'sun', 'ray', 'deep', 'rise'
  ],
  music: [
    'hum', 'beat', 'note', 'song', 'tune', 'band', 'harp', 'gong',
    'sing', 'clap', 'drum', 'duet', 'solo', 'bell', 'jazz', 'tone',
    'bass', 'echo', 'chime', 'hymn', 'riff', 'vibe', 'mute', 'loop',
    'mix', 'play', 'rest', 'snap'
  ],
  feelings: [
    'sad', 'mad', 'shy', 'joy', 'fun', 'glad', 'calm', 'cool',
    'bold', 'kind', 'nice', 'warm', 'wild', 'free', 'safe', 'good',
    'fine', 'well', 'love', 'hope', 'fear', 'glee', 'awe', 'ease',
    'keen', 'pure', 'rage', 'dull', 'tense', 'proud', 'happy', 'peace',
    'bliss', 'pity', 'envy', 'zeal', 'trust', 'doubt'
  ],
  colors: [
    'red', 'tan', 'pink', 'gold', 'lime', 'plum', 'aqua', 'gray',
    'blue', 'jade', 'ruby', 'teal', 'rust', 'rose', 'wine', 'sage',
    'navy', 'sand', 'cream', 'ivory'
  ],
  numbers: [
    'one', 'two', 'six', 'ten', 'odd', 'sum', 'add', 'few',
    'four', 'five', 'nine', 'half', 'zero', 'pair', 'plus', 'trio',
    'dual', 'many', 'both', 'each', 'most', 'less', 'more', 'all'
  ],
  shapes: [
    'arc', 'cone', 'cube', 'oval', 'line', 'edge', 'dot', 'star',
    'ring', 'loop', 'coil', 'grid', 'mesh', 'arch', 'knot', 'band',
    'slab', 'disc', 'orb', 'bar', 'rod', 'slot'
  ],
  adjectives: [
    'big', 'hot', 'old', 'new', 'red', 'bad', 'sad', 'fun',
    'dry', 'wet', 'cold', 'cool', 'cute', 'dark', 'deep', 'easy',
    'fair', 'fast', 'flat', 'free', 'full', 'glad', 'good', 'gray',
    'hard', 'high', 'huge', 'kind', 'last', 'lazy', 'long', 'loud',
    'lost', 'mean', 'mild', 'near', 'neat', 'nice', 'open', 'pink',
    'poor', 'rich', 'rude', 'safe', 'slow', 'soft', 'sour', 'sure',
    'tall', 'thin', 'tiny', 'true', 'ugly', 'warm', 'weak', 'wide',
    'wild', 'wise', 'calm', 'blue', 'bold', 'firm', 'raw', 'odd',
    'dull', 'keen', 'pale', 'pure', 'rare', 'ripe', 'tidy', 'vast',
    'cozy', 'crisp', 'dense', 'fresh', 'plain', 'plump', 'sharp',
    'slick', 'stiff', 'sweet', 'tense', 'thick', 'tough', 'vivid'
  ],
  adverbs: [
    'also', 'away', 'back', 'down', 'even', 'ever', 'far', 'here',
    'home', 'just', 'late', 'much', 'near', 'next', 'now', 'off',
    'once', 'only', 'out', 'over', 'past', 'real', 'soon', 'then',
    'too', 'up', 'very', 'well', 'yet', 'ago', 'hard', 'fast',
    'long', 'more', 'most', 'slow', 'deep', 'wide', 'high', 'low',
    'loud', 'soft', 'flat', 'left', 'right', 'ahead', 'apart', 'alone',
    'maybe', 'never', 'often', 'still', 'quite', 'first'
  ]
};
