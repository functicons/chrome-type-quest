const WORDS_EASY = {
  animals: [
    'cat', 'dog', 'pig', 'cow', 'hen', 'ant', 'bee', 'fox',
    'owl', 'bat', 'rat', 'bug', 'fly', 'ape', 'ram', 'elk',
    'emu', 'yak', 'cub', 'pup', 'frog', 'bear', 'duck', 'fish',
    'bird', 'deer', 'goat', 'lion', 'wolf', 'worm', 'seal', 'crab',
    'moth', 'mule', 'toad', 'lamb', 'mare', 'colt', 'swan', 'hawk',
    'dove', 'calf', 'crow', 'hare', 'newt', 'clam', 'pony'
  ],
  food: [
    'pie', 'jam', 'egg', 'ham', 'nut', 'bun', 'tea', 'pea',
    'fig', 'yam', 'corn', 'cake', 'rice', 'soup', 'taco', 'bean',
    'milk', 'plum', 'meat', 'roll', 'dip', 'oat', 'lime', 'date',
    'wrap', 'chip', 'stew', 'seed', 'salt', 'fish', 'pear', 'soda'
  ],
  nature: [
    'sun', 'sky', 'sea', 'mud', 'dew', 'fog', 'ice', 'oak',
    'ivy', 'bud', 'pond', 'sand', 'hill', 'log', 'gem', 'fern',
    'leaf', 'wave', 'bay', 'ash', 'elm', 'moss', 'lake', 'dirt',
    'rock', 'tree', 'rain', 'snow', 'wind', 'star', 'moon', 'seed',
    'bush', 'vine', 'nest', 'root', 'bark', 'clay', 'coal', 'cave',
    'weed', 'reef'
  ],
  school: [
    'pen', 'bag', 'map', 'art', 'bus', 'gym', 'ink', 'book',
    'desk', 'read', 'math', 'test', 'bell', 'quiz', 'draw', 'rule',
    'tape', 'page', 'note', 'word', 'name', 'line', 'mark', 'form',
    'list', 'plan', 'idea', 'work', 'talk', 'tell', 'help', 'show',
    'type', 'copy', 'font', 'blue', 'sing'
  ],
  family: [
    'mom', 'dad', 'son', 'pal', 'kid', 'hug', 'pet', 'kin',
    'love', 'home', 'care', 'baby', 'aunt', 'wife', 'bond', 'play',
    'kiss', 'help', 'grow', 'name', 'dear', 'warm', 'safe', 'kind',
    'nice'
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
    'come', 'tell', 'send'
  ],
  body: [
    'arm', 'leg', 'ear', 'eye', 'toe', 'lip', 'rib', 'jaw',
    'hip', 'gum', 'back', 'chin', 'knee', 'nail', 'neck', 'nose',
    'skin', 'bone', 'hand', 'foot', 'head', 'face', 'hair', 'palm',
    'shin'
  ],
  clothes: [
    'hat', 'cap', 'tie', 'belt', 'coat', 'vest', 'robe', 'cape',
    'suit', 'sock', 'hood', 'shoe', 'gown', 'wrap', 'cuff', 'bib'
  ],
  home: [
    'bed', 'rug', 'cup', 'mug', 'pot', 'pan', 'fan', 'key',
    'lid', 'mop', 'jar', 'box', 'bin', 'tap', 'tub', 'mat',
    'pin', 'peg', 'lamp', 'door', 'wall', 'roof', 'room', 'sink',
    'step', 'dish', 'bowl', 'fork', 'soap'
  ],
  play: [
    'toy', 'fun', 'tag', 'zoo', 'pop', 'run', 'win', 'play',
    'drum', 'game', 'kite', 'doll', 'race', 'joke', 'show', 'ride',
    'ball', 'fort', 'sand', 'swim', 'sing', 'hide', 'skip', 'maze',
    'draw', 'dice'
  ],
  places: [
    'park', 'lake', 'town', 'farm', 'cave', 'road', 'mall', 'camp',
    'fort', 'yard', 'hill', 'pond', 'dock', 'path', 'gate', 'city',
    'shop', 'pool', 'home', 'room', 'land', 'barn'
  ],
  things: [
    'box', 'cup', 'fan', 'key', 'lid', 'mop', 'net', 'pan',
    'rug', 'jar', 'bag', 'map', 'pen', 'toy', 'top', 'can',
    'pin', 'rod', 'lamp', 'ring', 'bowl', 'door', 'coin', 'flag',
    'lock', 'rope', 'bell', 'hook', 'ball', 'book', 'clip', 'tape',
    'card', 'gift', 'sign', 'tube', 'wire', 'nail', 'glue', 'tool',
    'soap', 'comb', 'fork'
  ],
  weather: [
    'rain', 'snow', 'wind', 'hail', 'cold', 'warm', 'heat', 'cool',
    'hot', 'wet', 'dry', 'ice', 'fog', 'mist', 'gust', 'dew',
    'calm', 'sun'
  ],
  vehicles: [
    'car', 'van', 'cab', 'jet', 'bus', 'raft', 'boat', 'bike',
    'cart', 'sled', 'ship', 'tram', 'ride', 'tire', 'horn', 'tank',
    'limo'
  ],
  sports: [
    'ski', 'run', 'tag', 'bat', 'net', 'win', 'hit', 'goal',
    'surf', 'team', 'puck', 'dart', 'ball', 'lap', 'set', 'gym',
    'race', 'ride', 'swim', 'kick', 'pass', 'toss', 'hoop', 'jump',
    'game'
  ],
  space: [
    'star', 'moon', 'mars', 'glow', 'beam', 'dust', 'dark', 'sky',
    'land', 'zoom', 'spin', 'vast'
  ],
  music: [
    'hum', 'beat', 'note', 'song', 'tune', 'band', 'harp', 'gong',
    'sing', 'clap', 'drum', 'duet', 'solo', 'bell', 'jazz'
  ],
  feelings: [
    'sad', 'mad', 'shy', 'joy', 'fun', 'glad', 'calm', 'cool',
    'bold', 'kind', 'nice', 'warm', 'wild', 'free', 'safe', 'good',
    'fine', 'well', 'love', 'hope', 'fear', 'glee'
  ],
  colors: [
    'red', 'tan', 'pink', 'gold', 'lime', 'plum', 'aqua', 'gray',
    'blue'
  ],
  numbers: [
    'one', 'two', 'six', 'ten', 'odd', 'sum', 'add', 'few',
    'four', 'five', 'nine', 'half', 'zero', 'pair', 'plus'
  ],
  shapes: [
    'arc', 'cone', 'cube', 'oval', 'line', 'edge', 'dot', 'star',
    'ring'
  ],
  adjectives: [
    'big', 'hot', 'old', 'new', 'red', 'bad', 'sad', 'fun',
    'dry', 'wet', 'cold', 'cool', 'cute', 'dark', 'deep', 'easy',
    'fair', 'fast', 'flat', 'free', 'full', 'glad', 'good', 'gray',
    'hard', 'high', 'huge', 'kind', 'last', 'lazy', 'long', 'loud',
    'lost', 'mean', 'mild', 'near', 'neat', 'nice', 'open', 'pink',
    'poor', 'rich', 'rude', 'safe', 'slow', 'soft', 'sour', 'sure',
    'tall', 'thin', 'tiny', 'true', 'ugly', 'warm', 'weak', 'wide',
    'wild', 'wise', 'calm', 'blue', 'bold'
  ],
  adverbs: [
    'also', 'away', 'back', 'down', 'even', 'ever', 'far', 'here',
    'home', 'just', 'late', 'much', 'near', 'next', 'now', 'off',
    'once', 'only', 'out', 'over', 'past', 'real', 'soon', 'then',
    'too', 'up', 'very', 'well', 'yet', 'ago', 'hard', 'fast',
    'long', 'more', 'most'
  ]
};
