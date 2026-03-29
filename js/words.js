const WORD_BANK = {
  animals: {
    easy: [
      'cat', 'dog', 'pig', 'cow', 'hen', 'ant', 'bee', 'fox', 'owl', 'bat',
      'rat', 'bug', 'fly', 'ape', 'ram', 'elk', 'emu', 'yak', 'cub', 'pup',
      'frog', 'bear', 'duck', 'fish', 'bird', 'deer', 'goat', 'lion', 'wolf',
      'worm', 'seal', 'crab', 'moth', 'mule', 'toad', 'lamb', 'mare', 'colt',
      'swan', 'hawk', 'dove', 'calf', 'crow', 'hare', 'newt', 'clam', 'pony'
    ],
    medium: [
      'tiger', 'horse', 'mouse', 'shark', 'eagle', 'whale', 'panda', 'koala',
      'zebra', 'otter', 'camel', 'llama', 'moose', 'bunny', 'puppy', 'kitty',
      'goose', 'snail', 'snake', 'hippo', 'rhino', 'sheep', 'robin', 'crane',
      'stork', 'parrot', 'gecko', 'skunk', 'bison', 'squid', 'coral', 'finch',
      'heron', 'trout', 'lemur', 'hyena', 'chimp', 'viper', 'piggy',
      'drake', 'raven', 'beast', 'chick', 'billy', 'magpie', 'guppy'
    ],
    hard: [
      'dolphin', 'penguin', 'giraffe', 'leopard', 'hamster', 'buffalo', 'panther',
      'lobster', 'sparrow', 'raccoon', 'cheetah', 'gorilla', 'octopus', 'pelican',
      'mustang', 'peacock', 'cricket', 'firefly', 'ladybug', 'goldfish', 'tortoise',
      'chicken', 'rooster', 'kitten', 'turkey', 'donkey', 'monkey', 'parrot',
      'lizard', 'turtle', 'rabbit', 'spider', 'beetle', 'walrus', 'salmon',
      'pigeon', 'falcon', 'seagull', 'catfish', 'jellyfish', 'starfish', 'bluebird',
      'bulldog', 'puppy', 'elephant', 'dinosaur', 'flamingo', 'squirrel', 'reindeer',
      'butterfly', 'chipmunk', 'alligator', 'crocodile'
    ]
  },
  food: {
    easy: [
      'pie', 'jam', 'egg', 'ham', 'nut', 'bun', 'tea', 'pea', 'fig', 'yam',
      'corn', 'cake', 'rice', 'soup', 'taco', 'bean', 'milk', 'plum', 'meat',
      'roll', 'dip', 'oat', 'lime', 'date', 'wrap', 'chip', 'stew', 'seed',
      'salt', 'fish', 'pear', 'soda'
    ],
    medium: [
      'pizza', 'bread', 'grape', 'candy', 'juice', 'salad', 'toast', 'mango',
      'pasta', 'melon', 'donut', 'honey', 'lemon', 'berry', 'steak', 'chips',
      'bagel', 'fudge', 'syrup', 'apple', 'cream', 'snack', 'fruit', 'sugar',
      'jelly', 'olive', 'sauce', 'bacon', 'gravy', 'wheat', 'flour', 'spice',
      'treat', 'lunch', 'feast', 'curry', 'nacho', 'salsa', 'broth', 'cocoa',
      'cider', 'maple', 'pecan', 'walnut', 'carrot', 'celery', 'cherry', 'banana'
    ],
    hard: [
      'chicken', 'biscuit', 'pretzel', 'popcorn', 'pancake', 'brownie', 'avocado',
      'sausage', 'burrito', 'noodles', 'lasagna', 'muffins', 'pudding', 'granola',
      'coconut', 'spinach', 'cracker', 'ketchup', 'waffles', 'oatmeal', 'cupcake',
      'sandwich', 'cookies', 'mustard', 'lettuce', 'tomato', 'potato', 'pumpkin',
      'pepper', 'celery', 'yogurt', 'cereal', 'butter', 'cheese', 'orange',
      'peanut', 'pickle', 'burger', 'hotdog', 'dinner', 'supper', 'dessert',
      'caramel', 'meatball', 'smoothie', 'mushroom',
      'broccoli', 'cucumber', 'blueberry', 'strawberry', 'pineapple', 'chocolate',
      'spaghetti', 'cinnamon', 'cornbread', 'lemonade'
    ]
  },
  nature: {
    easy: [
      'sun', 'sky', 'sea', 'mud', 'dew', 'fog', 'ice', 'oak', 'ivy', 'bud',
      'pond', 'sand', 'hill', 'log', 'gem', 'fern', 'leaf', 'wave', 'bay',
      'ash', 'elm', 'moss', 'lake', 'dirt', 'rock', 'tree', 'rain', 'snow',
      'wind', 'star', 'moon', 'seed', 'bush', 'vine', 'nest', 'root', 'bark',
      'clay', 'coal', 'cave', 'weed', 'reef'
    ],
    medium: [
      'river', 'cloud', 'stone', 'plant', 'ocean', 'creek', 'beach', 'earth',
      'frost', 'flame', 'maple', 'cliff', 'storm', 'grove', 'brook', 'petal',
      'thorn', 'shrub', 'marsh', 'grass', 'field', 'water', 'light', 'trail',
      'shore', 'woods', 'coral', 'shade', 'bloom', 'swamp', 'cedar', 'birch',
      'daisy', 'tulip', 'poppy', 'acorn', 'berry', 'stick', 'shell', 'jewel',
      'pearl', 'smoke', 'breeze', 'valley', 'island', 'flower', 'forest', 'garden',
      'jungle', 'desert', 'stream'
    ],
    hard: [
      'rainbow', 'volcano', 'thunder', 'glacier', 'blossom', 'feather', 'crystal',
      'horizon', 'tornado', 'prairie', 'meadows', 'boulder', 'morning', 'sunbeam',
      'hilltop', 'dewdrop', 'weather', 'monsoon', 'sunrise', 'sunset', 'seasons',
      'mountain', 'waterfall', 'snowflake', 'rainfall', 'seashell', 'sunlight',
      'moonlight', 'starfish', 'sandcastle', 'pinecone', 'mushroom', 'wildflower',
      'seedling', 'pebbles', 'bonfire', 'puddles', 'icicles', 'sunshine',
      'raindrop', 'treetop', 'evergreen', 'dandelion', 'rosebud', 'orchard',
      'lagoon', 'canyon', 'tundra', 'iceberg'
    ]
  },
  school: {
    easy: [
      'pen', 'bag', 'map', 'art', 'bus', 'gym', 'ink', 'book', 'desk', 'read',
      'math', 'test', 'bell', 'quiz', 'draw', 'rule', 'tape', 'page', 'note',
      'word', 'name', 'line', 'mark', 'form', 'list', 'plan', 'idea', 'work',
      'talk', 'tell', 'help', 'show', 'type', 'copy', 'font', 'blue', 'sing'
    ],
    medium: [
      'paper', 'clock', 'chair', 'chalk', 'ruler', 'globe', 'class', 'music',
      'graph', 'board', 'study', 'lunch', 'table', 'grade', 'essay', 'story',
      'group', 'learn', 'spell', 'think', 'paint', 'chart', 'tutor', 'pupil',
      'atlas', 'count', 'write', 'teach', 'craft', 'print', 'color', 'crayon',
      'paste', 'glue', 'erase', 'scale', 'quiz', 'smart', 'brain', 'score',
      'topic', 'level', 'skill', 'prize', 'award', 'badge', 'stars', 'track'
    ],
    hard: [
      'teacher', 'science', 'library', 'pencils', 'reading', 'eraser', 'student',
      'locker', 'history', 'recess', 'chapter', 'grammar', 'project', 'english',
      'booklet', 'planner', 'textbook', 'notebook', 'backpack', 'writing',
      'spelling', 'drawing', 'painting', 'computer', 'keyboard', 'homework',
      'classroom', 'alphabet', 'numbers', 'crayons', 'scissors', 'markers',
      'folder', 'binder', 'lesson', 'report', 'journal', 'diploma', 'biology',
      'program', 'weather', 'calendar', 'addition', 'subtract', 'multiply',
      'question', 'answer', 'problem', 'learning', 'practice'
    ]
  },
  family: {
    easy: [
      'mom', 'dad', 'son', 'pal', 'kid', 'hug', 'pet', 'kin', 'love', 'home',
      'care', 'baby', 'aunt', 'wife', 'bond', 'play', 'kiss', 'help', 'grow',
      'name', 'dear', 'warm', 'safe', 'kind', 'nice'
    ],
    medium: [
      'uncle', 'aunty', 'twins', 'niece', 'daddy', 'mommy', 'child', 'elder',
      'youth', 'nanny', 'buddy', 'house', 'folks', 'proud', 'trust', 'share',
      'family', 'happy', 'laugh', 'teach', 'raise', 'chore', 'grown', 'adult',
      'tribe', 'feast', 'group', 'party', 'visit', 'smile', 'story', 'night',
      'sleep', 'dream', 'songs', 'dance', 'hugs', 'warm'
    ],
    hard: [
      'brother', 'sister', 'cousin', 'grandma', 'grandpa', 'husband', 'toddler',
      'parents', 'wedding', 'nephew', 'sibling', 'reunion', 'auntie', 'daughter',
      'grandkid', 'together', 'birthday', 'holiday', 'morning', 'bedtime',
      'kitchen', 'bedroom', 'backyard', 'camping', 'reading', 'cooking',
      'playing', 'helping', 'sharing', 'growing', 'stories', 'lullaby',
      'blanket', 'pillow', 'pajamas', 'snuggle', 'goodnight', 'grandchild',
      'stepmother', 'babysitter', 'adoption', 'guardian'
    ]
  },
  actions: {
    easy: [
      'run', 'hop', 'sit', 'win', 'mix', 'dig', 'jog', 'tap', 'nod', 'bow',
      'try', 'ask', 'eat', 'cry', 'hug', 'cut', 'hit', 'put', 'get', 'let',
      'see', 'fly', 'say', 'add', 'rub', 'tug', 'sew', 'clap', 'spin', 'jump',
      'swim', 'kick', 'pull', 'yawn', 'wink', 'grab', 'hide', 'push', 'lift',
      'drop', 'wash', 'cook', 'sing', 'pour', 'peel', 'toss', 'pick', 'pack',
      'wave', 'call', 'wipe', 'hold', 'give', 'play', 'bite', 'blow', 'open',
      'shut', 'read', 'draw', 'stop', 'look', 'walk', 'talk', 'wait', 'find',
      'make', 'move', 'turn', 'grow', 'show', 'take', 'come', 'tell', 'send'
    ],
    medium: [
      'dance', 'laugh', 'climb', 'smile', 'dream', 'skate', 'swing', 'build',
      'write', 'catch', 'throw', 'sleep', 'drive', 'slide', 'cheer', 'float',
      'march', 'crawl', 'reach', 'blink', 'twirl', 'stomp', 'stare', 'greet',
      'kneel', 'clean', 'brush', 'paint', 'count', 'spell', 'teach', 'learn',
      'carry', 'share', 'water', 'plant', 'crack', 'shake', 'point', 'chase',
      'fetch', 'pedal', 'bounce', 'splash', 'scrub', 'rinse'
    ],
    hard: [
      'whisper', 'explore', 'imagine', 'sparkle', 'twinkle', 'giggle', 'stumble',
      'balance', 'compete', 'gallop', 'juggle', 'perform', 'recycle', 'shuffle',
      'stretch', 'breathe', 'flutter', 'snuggle', 'tiptoe', 'pretend', 'measure',
      'collect', 'discover', 'remember', 'exercise', 'practice', 'decorate',
      'celebrate', 'organize', 'treasure', 'volunteer', 'surprise', 'adventure',
      'cartwheel', 'somersault', 'handstand', 'leapfrog', 'hopscotch',
      'swimming', 'jumping', 'running', 'playing', 'reading', 'cooking',
      'drawing', 'singing', 'helping', 'sharing', 'camping', 'fishing'
    ]
  },
  body: {
    easy: [
      'arm', 'leg', 'ear', 'eye', 'toe', 'lip', 'rib', 'jaw', 'hip', 'gum',
      'back', 'chin', 'knee', 'nail', 'neck', 'nose', 'skin', 'bone', 'hand',
      'foot', 'head', 'face', 'hair', 'palm', 'shin'
    ],
    medium: [
      'thumb', 'brain', 'heart', 'mouth', 'cheek', 'teeth', 'elbow', 'wrist',
      'chest', 'spine', 'ankle', 'lungs', 'skull', 'thigh', 'belly', 'tummy',
      'heels', 'veins', 'joint', 'nerve', 'scalp', 'torso', 'blood', 'tongue',
      'pinky', 'nails'
    ],
    hard: [
      'stomach', 'fingers', 'eyebrow', 'freckle', 'nostril', 'muscles', 'eyelash', 'forehead',
      'knuckle', 'dimples', 'eardrum', 'ribcage', 'kneecap', 'forearm', 'toenail',
      'shoulder', 'whiskers', 'backbone', 'elbowroom', 'fingertip', 'bellybutton',
      'skeleton', 'collarbone', 'thumbnail'
    ]
  },
  clothes: {
    easy: [
      'hat', 'cap', 'tie', 'belt', 'coat', 'vest', 'robe', 'cape', 'suit',
      'sock', 'hood', 'shoe', 'gown', 'wrap', 'cuff', 'bib'
    ],
    medium: [
      'shirt', 'pants', 'scarf', 'dress', 'glove', 'jeans', 'boots', 'skirt',
      'socks', 'apron', 'parka', 'tunic', 'cloak', 'shawl', 'visor', 'denim',
      'plaid', 'linen', 'cargo', 'short', 'tights', 'hoodie'
    ],
    hard: [
      'sweater', 'mittens', 'sandals', 'pajamas', 'sneaker', 'costume', 'goggles',
      'overall', 'uniform', 'raincoat', 'slippers', 'bathrobe', 'swimsuit',
      'leggings', 'cardigan', 'backpack', 'flipflops', 'headband', 'earmuffs',
      'overalls', 'tracksuit', 'sunglasses', 'sweatshirt', 'undershirt',
      'turtleneck', 'snowsuit', 'jacket', 'poncho', 'bandana'
    ]
  },
  home: {
    easy: [
      'bed', 'rug', 'cup', 'mug', 'pot', 'pan', 'fan', 'key', 'lid', 'mop',
      'jar', 'box', 'bin', 'tap', 'tub', 'mat', 'pin', 'peg', 'lamp', 'door',
      'wall', 'roof', 'room', 'sink', 'step', 'dish', 'bowl', 'fork', 'soap'
    ],
    medium: [
      'spoon', 'plate', 'stove', 'chair', 'table', 'couch', 'towel', 'broom',
      'brush', 'clock', 'shelf', 'floor', 'light', 'house', 'glass', 'knife',
      'phone', 'trash', 'quilt', 'sheet', 'dryer', 'washer', 'porch', 'fence',
      'piano', 'radio', 'mirror', 'closet', 'window', 'garden', 'pillow',
      'vacuum', 'carpet', 'basket', 'bucket', 'bottle', 'candle'
    ],
    hard: [
      'kitchen', 'bedroom', 'blanket', 'lantern', 'magnet', 'package', 'shelter',
      'whistle', 'toolbox', 'cabinet', 'curtain', 'doorbell', 'bathroom',
      'hallway', 'stairway', 'fireplace', 'bookshelf', 'basement', 'chimney',
      'doorknob', 'dishwasher', 'microwave', 'furniture', 'armchair', 'cupboard',
      'toaster', 'blender', 'freezer', 'counter', 'utensil', 'platter',
      'spatula', 'pitcher', 'thermos', 'tablecloth', 'pillowcase', 'nightlight',
      'television', 'sprinkler', 'mailbox', 'driveway', 'doorstep', 'windowsill'
    ]
  },
  play: {
    easy: [
      'toy', 'fun', 'tag', 'zoo', 'pop', 'run', 'win', 'play', 'drum', 'game',
      'kite', 'doll', 'race', 'joke', 'show', 'ride', 'ball', 'fort', 'sand',
      'swim', 'sing', 'hide', 'skip', 'maze', 'draw', 'dice'
    ],
    medium: [
      'party', 'swing', 'slide', 'magic', 'robot', 'fairy', 'clown', 'trick',
      'movie', 'prize', 'crown', 'stage', 'lucky', 'games', 'kites', 'dolls',
      'bikes', 'block', 'chess', 'cards', 'craft', 'paint', 'story', 'dance',
      'music', 'jumps', 'climb', 'catch', 'chase', 'fetch', 'build', 'teddy',
      'plush', 'brick', 'model', 'scoot', 'wagon'
    ],
    hard: [
      'balloon', 'monster', 'unicorn', 'firework', 'mermaid', 'mystery', 'cartoon',
      'acrobat', 'festival', 'magician', 'surprise', 'champion', 'carnival',
      'dinosaur', 'treasure', 'laughter', 'birthday', 'bubbles', 'sandbox',
      'crayons', 'marbles', 'sticker', 'jigsaw', 'puppet', 'seesaw', 'treehouse',
      'trampoline', 'playground', 'pretend', 'hideout', 'costume', 'rollerblade',
      'hopscotch', 'sledding', 'snowball', 'snowman', 'camping', 'fishing',
      'swimming', 'pinwheel', 'coloring', 'scooter', 'blanket', 'pillow',
      'sleepover', 'adventure', 'exploring', 'imaginary'
    ]
  },
  places: {
    easy: [
      'park', 'lake', 'town', 'farm', 'cave', 'road', 'mall', 'camp', 'fort',
      'yard', 'hill', 'pond', 'dock', 'path', 'gate', 'city', 'shop', 'pool',
      'home', 'room', 'land', 'barn'
    ],
    medium: [
      'store', 'tower', 'cabin', 'hotel', 'beach', 'field', 'trail', 'attic',
      'woods', 'ranch', 'lodge', 'creek', 'river', 'ocean', 'swamp', 'alley',
      'plaza', 'house', 'place', 'world', 'court', 'stage', 'space', 'track',
      'arena', 'valley', 'island', 'forest', 'castle', 'bridge', 'church',
      'school', 'market', 'garden', 'street', 'tunnel', 'corner', 'harbor'
    ],
    hard: [
      'airport', 'factory', 'theater', 'village', 'mansion', 'kingdom', 'station',
      'cottage', 'balcony', 'gallery', 'museum', 'library', 'bedroom', 'kitchen',
      'hallway', 'backyard', 'mountain', 'volcano', 'country', 'downtown',
      'hospital', 'baseball', 'football', 'swimming', 'classroom', 'lunchroom',
      'bathroom', 'basement', 'treehouse', 'rooftop', 'campsite', 'lakeside',
      'seashore', 'hillside', 'farmland', 'parkland', 'playground', 'aquarium',
      'bookstore', 'firehouse', 'junkyard', 'skatepark', 'sidewalk',
      'waterpark', 'carnival', 'daycare', 'clubhouse', 'hideaway'
    ]
  },
  things: {
    easy: [
      'box', 'cup', 'fan', 'key', 'lid', 'mop', 'net', 'pan', 'rug', 'jar',
      'bag', 'map', 'pen', 'toy', 'top', 'can', 'pin', 'rod', 'lamp', 'ring',
      'bowl', 'door', 'coin', 'flag', 'lock', 'rope', 'bell', 'hook', 'ball',
      'book', 'clip', 'tape', 'card', 'gift', 'sign', 'tube', 'wire', 'nail',
      'glue', 'tool', 'soap', 'comb', 'fork'
    ],
    medium: [
      'brush', 'chain', 'frame', 'knife', 'piano', 'quilt', 'stamp', 'watch',
      'badge', 'broom', 'towel', 'torch', 'scale', 'wheel', 'straw', 'phone',
      'clock', 'plate', 'glass', 'spoon', 'stool', 'chair', 'shelf', 'paper',
      'brick', 'block', 'chalk', 'ruler', 'paint', 'arrow', 'stick', 'match',
      'patch', 'crown', 'sponge', 'basket', 'bucket', 'bottle', 'crayon',
      'eraser', 'magnet', 'mirror', 'puzzle', 'ribbon', 'candle', 'string',
      'pillow', 'zipper', 'camera', 'ticket', 'trophy', 'button'
    ],
    hard: [
      'battery', 'blanket', 'lantern', 'package', 'whistle', 'envelope', 'toolbox',
      'suitcase', 'compass', 'backpack', 'calendar', 'umbrella', 'scissors',
      'computer', 'keyboard', 'notebook', 'bookmark', 'flashlight', 'binoculars',
      'telescope', 'magnifier', 'stethoscope', 'lunchbox', 'thermos', 'clothespin',
      'doorbell', 'postcard', 'necklace', 'bracelet', 'earring', 'bookshelf',
      'flowerpot', 'pillowcase', 'padlock', 'toothbrush', 'sunscreen',
      'toothpaste', 'shampoo', 'newspaper', 'telephone',
      'elevator', 'staircase', 'trampoline'
    ]
  },
  weather: {
    easy: [
      'rain', 'snow', 'wind', 'hail', 'cold', 'warm', 'heat', 'cool', 'hot',
      'wet', 'dry', 'ice', 'fog', 'mist', 'gust', 'dew', 'calm', 'sun'
    ],
    medium: [
      'sunny', 'foggy', 'windy', 'rainy', 'snowy', 'misty', 'gusty', 'clear',
      'storm', 'cloud', 'frost', 'flood', 'sleet', 'humid', 'chilly', 'brisk',
      'muggy', 'balmy', 'dewy', 'icy', 'breezy', 'cloudy', 'stormy'
    ],
    hard: [
      'blizzard', 'cyclone', 'drought', 'climate', 'sunrise', 'tempest',
      'forecast', 'heatwave', 'snowfall', 'downpour', 'freezing', 'drizzle',
      'overcast', 'rainbow', 'thunder', 'tornado', 'weather', 'seasons',
      'sunshine', 'raindrop', 'snowflake', 'icicles', 'puddles', 'monsoon',
      'lightning', 'windstorm', 'rainstorm', 'snowstorm', 'sunlight',
      'moonlight', 'starlight'
    ]
  },
  vehicles: {
    easy: [
      'car', 'van', 'cab', 'jet', 'bus', 'raft', 'boat', 'bike', 'cart', 'sled',
      'ship', 'tram', 'ride', 'tire', 'horn', 'tank', 'limo'
    ],
    medium: [
      'train', 'plane', 'truck', 'canoe', 'kayak', 'wagon', 'trike', 'barge',
      'buggy', 'sleigh', 'yacht', 'sedan', 'liner', 'motor', 'ferry', 'racer',
      'rocket', 'engine'
    ],
    hard: [
      'bicycle', 'tractor', 'scooter', 'trolley', 'minivan', 'tugboat', 'trailer',
      'vehicle', 'airplane', 'motorboat', 'sailboat', 'speedboat', 'firetruck',
      'ambulance', 'submarine', 'spaceship', 'bulldozer', 'skateboard',
      'rowboat', 'lifeboat', 'racecar', 'taxicab', 'caravan',
      'helicopter', 'motorcycle', 'steamship'
    ]
  },
  sports: {
    easy: [
      'ski', 'run', 'tag', 'bat', 'net', 'win', 'hit', 'goal', 'surf', 'team',
      'puck', 'dart', 'ball', 'lap', 'set', 'gym', 'race', 'ride', 'swim',
      'kick', 'pass', 'toss', 'hoop', 'jump', 'game'
    ],
    medium: [
      'pitch', 'serve', 'track', 'match', 'score', 'coach', 'field', 'relay',
      'racer', 'round', 'boxer', 'diver', 'rider', 'biker', 'medal', 'swing',
      'catch', 'throw', 'block', 'cheer', 'skate', 'climb', 'champ', 'sprint',
      'hurdle', 'goalie', 'keeper', 'player', 'winner', 'trophy'
    ],
    hard: [
      'baseball', 'football', 'hockey', 'tennis', 'soccer', 'athlete', 'gymnast',
      'surfing', 'batting', 'bowling', 'skating', 'sprints', 'lacrosse',
      'swimming', 'running', 'jumping', 'kicking', 'pitching', 'catching',
      'throwing', 'dribble', 'kickball', 'dodgeball', 'softball', 'basketball',
      'volleyball', 'wrestling', 'cheerleader', 'scoreboard', 'tournament',
      'practice', 'champion', 'exercise', 'training', 'teamwork', 'pushups',
      'pullups', 'situps', 'stretch', 'warmup'
    ]
  },
  space: {
    easy: [
      'star', 'moon', 'mars', 'glow', 'beam', 'dust', 'dark', 'sky', 'land',
      'zoom', 'spin', 'vast'
    ],
    medium: [
      'comet', 'orbit', 'solar', 'lunar', 'venus', 'pluto', 'rover', 'space',
      'flare', 'alien', 'radar', 'probe', 'earth', 'light', 'night', 'stars',
      'moons', 'rings', 'titan', 'nebula', 'crash'
    ],
    hard: [
      'eclipse', 'meteor', 'galaxy', 'planet', 'rocket', 'shuttle', 'gravity',
      'neptune', 'jupiter', 'mercury', 'saturn', 'asteroid', 'spaceship',
      'astronaut', 'universe', 'moonlight', 'starlight', 'telescope', 'satellite',
      'spacesuit', 'stardust', 'shooting', 'milkyway', 'spaceman', 'sunlight',
      'starship', 'moonbeam', 'liftoff', 'takeoff', 'landing', 'mission',
      'launchpad', 'countdown'
    ]
  },
  music: {
    easy: [
      'hum', 'beat', 'note', 'song', 'tune', 'band', 'harp', 'gong', 'sing',
      'clap', 'drum', 'duet', 'solo', 'bell', 'jazz'
    ],
    medium: [
      'flute', 'viola', 'cello', 'chord', 'tempo', 'lyric', 'organ', 'banjo',
      'opera', 'vocal', 'snare', 'music', 'piano', 'sound', 'dance', 'choir',
      'horn', 'bass', 'strum', 'chime', 'march', 'waltz', 'blues', 'rhythm',
      'melody'
    ],
    hard: [
      'trumpet', 'guitar', 'ukulele', 'harmony', 'concert', 'clarinet', 'drumstick',
      'tambourine', 'xylophone', 'maracas', 'triangle', 'musician', 'recorder',
      'acoustic', 'singing', 'musical', 'composer', 'drumming', 'playing',
      'trombone', 'keyboard', 'practice', 'perform', 'orchestra', 'karaoke',
      'lullaby', 'jukebox', 'boombox'
    ]
  },
  feelings: {
    easy: [
      'sad', 'mad', 'shy', 'joy', 'fun', 'glad', 'calm', 'cool', 'bold',
      'kind', 'nice', 'warm', 'wild', 'free', 'safe', 'good', 'fine', 'well',
      'love', 'hope', 'fear', 'glee'
    ],
    medium: [
      'happy', 'angry', 'brave', 'proud', 'sorry', 'silly', 'funny', 'lucky',
      'tired', 'bored', 'eager', 'quiet', 'lonely', 'jolly', 'merry', 'upset',
      'peace', 'cheer', 'worry', 'grumpy', 'gentle', 'caring', 'trust',
      'smile', 'laugh', 'loved', 'sweet', 'great'
    ],
    hard: [
      'excited', 'cheerful', 'thankful', 'grateful', 'curious', 'nervous',
      'worried', 'jealous', 'relaxed', 'confused', 'amazed', 'awesome',
      'wonderful', 'beautiful', 'fantastic', 'terrific', 'delighted', 'surprised',
      'peaceful', 'friendly', 'helpful', 'playful', 'hopeful', 'joyful',
      'careful', 'patient', 'special', 'amazing', 'creative', 'powerful',
      'fearless', 'generous', 'kindness', 'happiness', 'laughter', 'sunshine',
      'courage', 'comfort', 'feeling'
    ]
  },
  colors: {
    easy: [
      'red', 'tan', 'pink', 'gold', 'lime', 'plum', 'aqua', 'gray', 'blue'
    ],
    medium: [
      'green', 'white', 'black', 'brown', 'peach', 'cream', 'coral', 'ivory',
      'amber', 'olive', 'blush', 'yellow', 'orange', 'purple', 'silver'
    ],
    hard: [
      'magenta', 'crimson', 'scarlet', 'emerald', 'saffron', 'indigo', 'maroon',
      'violet', 'bronze', 'charcoal', 'burgundy', 'lavender', 'turquoise',
      'golden', 'rainbow', 'sparkle', 'glitter', 'fuchsia'
    ]
  },
  numbers: {
    easy: [
      'one', 'two', 'six', 'ten', 'odd', 'sum', 'add', 'few', 'four', 'five',
      'nine', 'half', 'zero', 'pair', 'plus'
    ],
    medium: [
      'three', 'seven', 'eight', 'dozen', 'twice', 'third', 'tenth', 'total',
      'minus', 'equal', 'tally', 'digit', 'value', 'count', 'first', 'sixth',
      'ninth', 'score'
    ],
    hard: [
      'hundred', 'million', 'billion', 'quarter', 'decimal', 'percent', 'numeral',
      'formula', 'product', 'integer', 'factors', 'figures', 'average', 'maximum',
      'minimum', 'numbers', 'counter', 'measure', 'seventeen', 'eighteen',
      'nineteen', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'thousand',
      'subtract', 'multiply', 'division', 'fraction', 'addition'
    ]
  },
  shapes: {
    easy: [
      'arc', 'cone', 'cube', 'oval', 'line', 'edge', 'dot', 'star', 'ring'
    ],
    medium: [
      'arrow', 'curve', 'cross', 'angle', 'shape', 'heart', 'round', 'block',
      'wedge', 'prism', 'globe', 'square', 'circle', 'spiral'
    ],
    hard: [
      'hexagon', 'octagon', 'polygon', 'ellipse', 'rhombus', 'pentagon',
      'crescent', 'cylinder', 'triangle', 'pyramid', 'diamond', 'sphere',
      'rectangle', 'semicircle', 'trapezoid', 'starburst'
    ]
  },
  adjectives: {
    easy: [
      'big', 'hot', 'old', 'new', 'red', 'bad', 'sad', 'fun', 'dry', 'wet',
      'cold', 'cool', 'cute', 'dark', 'deep', 'easy', 'fair', 'fast', 'flat',
      'free', 'full', 'glad', 'good', 'gray', 'hard', 'high', 'huge', 'kind',
      'last', 'lazy', 'long', 'loud', 'lost', 'mean', 'mild', 'near', 'neat',
      'nice', 'open', 'pink', 'poor', 'rich', 'rude', 'safe', 'slow', 'soft',
      'sour', 'sure', 'tall', 'thin', 'tiny', 'true', 'ugly', 'warm', 'weak',
      'wide', 'wild', 'wise', 'calm', 'blue', 'bold'
    ],
    medium: [
      'angry', 'awful', 'brave', 'busy', 'cheap', 'clean', 'clear', 'close',
      'crazy', 'curly', 'dirty', 'early', 'empty', 'every', 'extra', 'fancy',
      'fresh', 'funny', 'giant', 'great', 'green', 'happy', 'heavy', 'human',
      'large', 'later', 'light', 'little', 'loose', 'lucky', 'messy', 'muddy',
      'noisy', 'plain', 'pretty', 'proud', 'quick', 'quiet', 'rainy', 'ready',
      'right', 'rough', 'round', 'royal', 'scary', 'sharp', 'shiny', 'silly',
      'sleepy', 'smart', 'smelly', 'smooth', 'snowy', 'sorry', 'spicy', 'steep',
      'sticky', 'stinky', 'strong', 'sunny', 'super', 'sweet', 'thick', 'tired',
      'tricky', 'upset', 'weird', 'whole', 'wrong', 'young'
    ],
    hard: [
      'amazing', 'ancient', 'awesome', 'bashful', 'biggest', 'boiling', 'careful',
      'cheerful', 'colorful', 'confused', 'creative', 'curious', 'dangerous',
      'delicious', 'different', 'difficult', 'enormous', 'exciting', 'excellent',
      'expensive', 'fabulous', 'faithful', 'famous', 'favorite', 'fearful',
      'fearless', 'friendly', 'generous', 'gentle', 'gigantic', 'graceful',
      'grateful', 'grumpy', 'handsome', 'helpful', 'horrible', 'horrible',
      'important', 'invisible', 'jealous', 'joyful', 'magical', 'natural',
      'nervous', 'peaceful', 'perfect', 'playful', 'popular', 'possible',
      'powerful', 'precious', 'puzzled', 'selfish', 'serious', 'sparkly',
      'special', 'strange', 'stubborn', 'surprised', 'terrible', 'thankful',
      'thoughtful', 'tiny', 'together', 'trouble', 'unusual', 'valuable',
      'wonderful', 'worried', 'youngest', 'beautiful'
    ]
  },
  adverbs: {
    easy: [
      'also', 'away', 'back', 'down', 'even', 'ever', 'far', 'here', 'home',
      'just', 'late', 'much', 'near', 'next', 'now', 'off', 'once', 'only',
      'out', 'over', 'past', 'real', 'soon', 'then', 'too', 'up', 'very',
      'well', 'yet', 'ago', 'hard', 'fast', 'long', 'more', 'most'
    ],
    medium: [
      'about', 'above', 'after', 'again', 'ahead', 'alone', 'along', 'always',
      'apart', 'aside', 'badly', 'below', 'daily', 'early', 'extra', 'fairly',
      'first', 'fully', 'gently', 'gladly', 'hardly', 'inside', 'later', 'lately',
      'likely', 'loudly', 'maybe', 'mostly', 'nearly', 'never', 'often', 'quite',
      'rarely', 'really', 'simply', 'slowly', 'softly', 'still', 'super',
      'surely', 'there', 'today', 'truly', 'twice', 'under', 'until', 'usually',
      'widely', 'wrong'
    ],
    hard: [
      'actually', 'already', 'altogether', 'anywhere', 'carefully', 'certainly',
      'clearly', 'completely', 'correctly', 'directly', 'easily', 'entirely',
      'especially', 'eventually', 'exactly', 'extremely', 'finally', 'forever',
      'fortunately', 'frequently', 'generally', 'happily', 'honestly', 'hopefully',
      'immediately', 'instantly', 'instead', 'luckily', 'naturally', 'normally',
      'obviously', 'perfectly', 'perhaps', 'politely', 'possibly', 'probably',
      'properly', 'quickly', 'quietly', 'recently', 'seriously', 'silently',
      'simply', 'slightly', 'sometimes', 'suddenly', 'together', 'tomorrow',
      'tonight', 'usually', 'yesterday'
    ]
  }
};

const WORD_EMOJI = {
  // Animals
  cat: '🐱', dog: '🐶', pig: '🐷', cow: '🐮', hen: '🐔', ant: '🐜', bee: '🐝', fox: '🦊',
  owl: '🦉', bat: '🦇', rat: '🐀', bug: '🐛', fly: '🐝', ape: '🦍', ram: '🐏',
  elk: '🦌', emu: '🐦', yak: '🐂', cub: '🐻', pup: '🐶',
  frog: '🐸', bear: '🐻', duck: '🦆', fish: '🐟', bird: '🐦', deer: '🦌', goat: '🐐',
  lion: '🦁', wolf: '🐺', worm: '🪱', seal: '🦭', crab: '🦀', moth: '🦋', mule: '🐴',
  toad: '🐸', lamb: '🐑', mare: '🐴', colt: '🐴', swan: '🦢', hawk: '🦅', dove: '🕊️',
  calf: '🐄', crow: '🐦', hare: '🐇', newt: '🦎', clam: '🐚', pony: '🐴',
  tiger: '🐯', horse: '🐴', mouse: '🐭', shark: '🦈', eagle: '🦅', whale: '🐋', panda: '🐼',
  koala: '🐨', zebra: '🦓', otter: '🦦', camel: '🐪', llama: '🦙', moose: '🦌',
  bunny: '🐰', puppy: '🐶', kitty: '🐱', goose: '🦢', snail: '🐌', snake: '🐍',
  hippo: '🦛', rhino: '🦏', sheep: '🐑', robin: '🐦', crane: '🦩', stork: '🐦',
  gecko: '🦎', skunk: '🦨', bison: '🦬', squid: '🦑', coral: '🐚', finch: '🐦',
  heron: '🐦', trout: '🐟', lemur: '🐒', hyena: '🐺', chimp: '🐒', viper: '🐍',
  piggy: '🐷', drake: '🦆', raven: '🐦', beast: '🐻', chick: '🐤',
  dolphin: '🐬', penguin: '🐧', giraffe: '🦒', leopard: '🐆', hamster: '🐹', buffalo: '🦬',
  panther: '🐈', lobster: '🦞', sparrow: '🐦', raccoon: '🦝', cheetah: '🐆', gorilla: '🦍',
  octopus: '🐙', pelican: '🐦', mustang: '🐎', peacock: '🦚', cricket: '🦗',
  firefly: '✨', ladybug: '🐞', goldfish: '🐠', tortoise: '🐢',
  chicken: '🐔', rooster: '🐓', kitten: '🐱', turkey: '🦃', donkey: '🐴', monkey: '🐒',
  parrot: '🦜', lizard: '🦎', turtle: '🐢', rabbit: '🐰', spider: '🕷️', beetle: '🐞',
  walrus: '🦭', salmon: '🐟', pigeon: '🐦', falcon: '🦅', seagull: '🐦', catfish: '🐟',
  jellyfish: '🐙', starfish: '⭐', bluebird: '🐦', bulldog: '🐶',
  elephant: '🐘', dinosaur: '🦕', flamingo: '🦩', squirrel: '🐿️', reindeer: '🦌',
  butterfly: '🦋', chipmunk: '🐿️', alligator: '🐊', crocodile: '🐊',
  billy: '🐐', magpie: '🐦', guppy: '🐟',

  // Food
  pie: '🥧', jam: '🍯', egg: '🥚', ham: '🍖', nut: '🥜', bun: '🍞', tea: '🍵',
  pea: '🟢', fig: '🍐', yam: '🍠', corn: '🌽', cake: '🎂', rice: '🍚', soup: '🍲',
  taco: '🌮', bean: '🥜', milk: '🥛', plum: '🍑', meat: '🥩', roll: '🥐',
  dip: '🥣', oat: '🌾', lime: '🍋', date: '📅', wrap: '🌯', chip: '🍟',
  stew: '🍲', salt: '🧂', pear: '🍐', peach: '🍑',
  pizza: '🍕', bread: '🍞', grape: '🍇', candy: '🍬', juice: '🧃', salad: '🥗',
  toast: '🍞', mango: '🥭', pasta: '🍝', melon: '🍈', donut: '🍩', honey: '🍯',
  lemon: '🍋', berry: '🍓', steak: '🥩', chips: '🍟', bagel: '🥯', fudge: '🍫',
  syrup: '🍯', apple: '🍎', cream: '🍦', snack: '🍿', fruit: '🍎', sugar: '🍬',
  jelly: '🍇', olive: '🫒', sauce: '🥫', bacon: '🥓', gravy: '🍲', wheat: '🌾',
  flour: '🌾', spice: '🌶️', treat: '🍭', lunch: '🍱', feast: '🍽️', curry: '🍛',
  nacho: '🌮', salsa: '🥫', broth: '🍲', cocoa: '☕', cider: '🍎', maple: '🍁',
  pecan: '🥜', walnut: '🥜', carrot: '🥕', celery: '🥬', cherry: '🍒', banana: '🍌',
  chicken: '🍗', biscuit: '🍪', pretzel: '🥨', popcorn: '🍿', pancake: '🥞', brownie: '🍫',
  avocado: '🥑', sausage: '🌭', burrito: '🌯', noodles: '🍜', lasagna: '🍝', muffins: '🧁',
  pudding: '🍮', granola: '🥣', coconut: '🥥', spinach: '🥬', cracker: '🍘', ketchup: '🍅',
  waffles: '🧇', oatmeal: '🥣', cupcake: '🧁', sandwich: '🥪', cookies: '🍪', mustard: '🟡',
  lettuce: '🥬', tomato: '🍅', potato: '🥔', pumpkin: '🎃', pepper: '🌶️', yogurt: '🥛',
  cereal: '🥣', butter: '🧈', cheese: '🧀', orange: '🍊', peanut: '🥜', pickle: '🥒',
  burger: '🍔', hotdog: '🌭', dinner: '🍽️', supper: '🍽️', dessert: '🍰',
  caramel: '🍬', meatball: '🍖', smoothie: '🥤', mushroom: '🍄', broccoli: '🥦',
  cucumber: '🥒', blueberry: '🫐', strawberry: '🍓', pineapple: '🍍', chocolate: '🍫',
  spaghetti: '🍝', cinnamon: '🌶️', cornbread: '🌽', lemonade: '🍋',
  soda: '🥤', font: '🔤',

  // Nature
  sun: '☀️', sky: '🌤️', sea: '🌊', mud: '🟤', dew: '💧', fog: '🌫️', ice: '🧊',
  oak: '🌳', ivy: '🌿', bud: '🌱', pond: '💧', sand: '🏖️', hill: '⛰️', log: '🪵',
  gem: '💎', fern: '🌿', leaf: '🍃', wave: '🌊', bay: '🏖️', ash: '🌳', elm: '🌳',
  moss: '🌿', lake: '🏞️', dirt: '🟤', rock: '⛰️', tree: '🌳', rain: '🌧️', snow: '❄️',
  wind: '💨', star: '⭐', moon: '🌙', seed: '🌱', bush: '🌳', vine: '🌿', nest: '🐦',
  root: '🌿', bark: '🌳', clay: '🏺', coal: '⚫', cave: '⛰️', weed: '🌿', reef: '🐚',
  river: '🏞️', cloud: '☁️', stone: '⛰️', plant: '🌱', ocean: '🌊', creek: '💧',
  beach: '🏖️', earth: '🌍', frost: '❄️', flame: '🔥', maple: '🍁', cliff: '🧗',
  storm: '⛈️', grove: '🌲', brook: '💧', petal: '🌸', thorn: '🌹', shrub: '🌳',
  marsh: '🌿', grass: '🌿', field: '🌾', water: '💧', light: '💡', trail: '🥾',
  shore: '🏖️', woods: '🌲', shade: '🌳', bloom: '🌺', swamp: '🌿', cedar: '🌲',
  birch: '🌳', daisy: '🌼', tulip: '🌷', poppy: '🌺', acorn: '🌰', stick: '🪵',
  shell: '🐚', jewel: '💎', pearl: '✨', smoke: '💨', breeze: '🌬️', valley: '🏞️',
  island: '🏝️', flower: '🌸', forest: '🌲', garden: '🌻', jungle: '🌴', desert: '🏜️',
  stream: '💧',
  rainbow: '🌈', volcano: '🌋', thunder: '⚡', glacier: '🏔️', blossom: '🌸', feather: '🕊️',
  crystal: '💎', horizon: '🌅', tornado: '🌪️', prairie: '🌾', meadows: '🌻', boulder: '⛰️',
  morning: '🌅', sunbeam: '☀️', hilltop: '⛰️', dewdrop: '💧', weather: '🌤️', monsoon: '🌧️',
  sunrise: '🌅', sunset: '🌇', seasons: '🍂', mountain: '⛰️', waterfall: '💧',
  snowflake: '❄️', rainfall: '🌧️', seashell: '🐚', sunlight: '☀️', moonlight: '🌙',
  sandcastle: '🏖️', pinecone: '🌲', wildflower: '🌸', seedling: '🌱', pebbles: '⛰️',
  bonfire: '🔥', puddles: '💧', icicles: '❄️', sunshine: '☀️', raindrop: '💧', treetop: '🌳',
  evergreen: '🌲', dandelion: '🌼', rosebud: '🌹', orchard: '🌳', lagoon: '🏝️',
  canyon: '🏜️', tundra: '❄️', iceberg: '🧊',

  // School
  pen: '🖊️', bag: '🎒', map: '🗺️', art: '🎨', bus: '🚌', gym: '🏋️', ink: '🖋️',
  book: '📕', desk: '📚', read: '📖', math: '🔢', test: '📝', bell: '🔔', quiz: '❓',
  draw: '✏️', rule: '📏', tape: '📎', page: '📄', note: '📝', word: '📖', name: '📛',
  line: '📏', mark: '📝', form: '📄', list: '📋', plan: '📋', idea: '💡', work: '📋',
  talk: '💬', tell: '💬', help: '🤝', show: '📺', type: '⌨️', copy: '📋', sing: '🎤',
  paper: '📄', clock: '🕐', chair: '💺', chalk: '📝', ruler: '📏', globe: '🌍', class: '🏫',
  music: '🎵', graph: '📊', board: '📋', study: '📚', lunch: '🍱', table: '🪑', grade: '📝',
  essay: '📝', story: '📖', group: '👥', learn: '📚', spell: '🔤', think: '🤔',
  paint: '🎨', chart: '📊', tutor: '👩‍🏫', pupil: '🧑‍🎓', atlas: '🗺️', count: '🔢',
  write: '✍️', teach: '👩‍🏫', craft: '🎨', print: '🖨️', color: '🎨', crayon: '🖍️',
  paste: '📋', erase: '🧹', smart: '🧠', brain: '🧠', score: '📊', topic: '📖',
  level: '📊', skill: '⭐', prize: '🏆', award: '🏅', badge: '🏅', stars: '⭐', track: '🏃',
  teacher: '👩‍🏫', science: '🔬', library: '📚', pencils: '✏️', reading: '📖', eraser: '🧹',
  student: '🧑‍🎓', locker: '🔒', history: '📜', recess: '🏃', chapter: '📖',
  grammar: '📝', project: '📋', english: '📖', booklet: '📖', planner: '📅',
  textbook: '📖', notebook: '📓', backpack: '🎒', writing: '✍️', spelling: '🔤',
  drawing: '🎨', painting: '🎨', computer: '💻', keyboard: '⌨️', homework: '📝',
  classroom: '🏫', alphabet: '🔤', numbers: '🔢', crayons: '🖍️', scissors: '✂️',
  markers: '🖍️', folder: '📁', binder: '📒', lesson: '📖', report: '📝', journal: '📓',
  diploma: '🎓', biology: '🧬', program: '💻', calendar: '📅', addition: '➕',
  subtract: '➖', multiply: '✖️', question: '❓', answer: '✅', problem: '🤔',
  learning: '📚', practice: '📝',

  // Family
  mom: '👩', dad: '👨', son: '👦', pal: '🤝', kid: '🧒', hug: '🤗', pet: '🐾',
  kin: '👨‍👩‍👧', love: '❤️', home: '🏠', care: '💕', baby: '👶', aunt: '👩', wife: '👩',
  bond: '🤝', play: '🎮', kiss: '💋', grow: '🌱', dear: '❤️', warm: '🤗', safe: '🏠',
  kind: '💕', nice: '😊',
  uncle: '👨', aunty: '👩', twins: '👯', niece: '👧', daddy: '👨', mommy: '👩', child: '🧒',
  elder: '👴', youth: '🧑', nanny: '👩', buddy: '🤝', house: '🏠', folks: '👨‍👩‍👧',
  proud: '🥲', trust: '🤝', share: '🤲', family: '👨‍👩‍👧', happy: '😊', laugh: '😂',
  raise: '👨‍👩‍👧', chore: '🧹', grown: '🧑', adult: '🧑', tribe: '👥', feast: '🍽️',
  party: '🎉', visit: '🏠', smile: '😊', night: '🌙', sleep: '😴', dream: '💭',
  songs: '🎵', dance: '💃',
  brother: '👦', sister: '👧', cousin: '🧑', grandma: '👵', grandpa: '👴', husband: '👨',
  toddler: '👶', parents: '👨‍👩‍👧', wedding: '💒', nephew: '👦', sibling: '👧',
  reunion: '🎉', auntie: '👩', daughter: '👧', together: '👨‍👩‍👧', birthday: '🎂',
  holiday: '🎉', kitchen: '🍳', bedroom: '🛏️', backyard: '🏡', camping: '⛺',
  cooking: '🍳', playing: '🎮', helping: '🤝', sharing: '🤲', growing: '🌱',
  stories: '📖', lullaby: '🎵', blanket: '🛏️', pillow: '🛋️', pajamas: '🛌',
  snuggle: '🤗', goodnight: '🌙', babysitter: '👩',
  hugs: '🤗', grandkid: '🧒', bedtime: '🛌', grandchild: '🧒',
  stepmother: '👩', adoption: '👨‍👩‍👧', guardian: '🛡️',

  // Actions
  run: '🏃', hop: '🐇', sit: '💺', win: '🏆', mix: '🥣', dig: '⛏️', jog: '🏃',
  tap: '👆', nod: '😊', bow: '🙇', try: '💪', ask: '❓', eat: '🍽️', cry: '😢',
  cut: '✂️', hit: '💥', put: '📥', get: '📥', let: '✅', see: '👀', say: '💬',
  add: '➕', rub: '🤲', tug: '💪', sew: '🧵', clap: '👏', spin: '🌀', jump: '🦘',
  swim: '🏊', kick: '⚽', pull: '💪', yawn: '🥱', wink: '😉', grab: '🤲', hide: '🙈',
  push: '💪', lift: '🏋️', drop: '📉', wash: '🧼', cook: '🍳', pour: '🥛',
  peel: '🍌', toss: '🤾', pick: '👆', pack: '📦', wave: '👋', call: '📞', wipe: '🧹',
  hold: '🤲', give: '🎁', bite: '🦷', blow: '💨', open: '📭', shut: '🚪',
  stop: '🛑', look: '👀', walk: '🚶', wait: '⏳', find: '🔍', make: '🔨', move: '🏃',
  turn: '↩️', show: '📺', take: '📥', come: '👋', tell: '💬', send: '📤',
  dance: '💃', laugh: '😂', climb: '🧗', smile: '😊', dream: '💭', skate: '⛸️',
  swing: '🎠', build: '🔨', write: '✍️', catch: '🤲', throw: '🤾', sleep: '😴',
  drive: '🚗', slide: '🎢', cheer: '📣', float: '🎈', march: '🚶', crawl: '🐛',
  reach: '🙌', blink: '😉', twirl: '💫', stomp: '🦶', stare: '👀', greet: '👋',
  kneel: '🧎', clean: '🧹', brush: '🖌️', count: '🔢', carry: '📦', water: '💧',
  plant: '🌱', crack: '💥', shake: '🤝', point: '👆', chase: '🏃', fetch: '🐕',
  pedal: '🚲', bounce: '🏀', splash: '💦', squeeze: '🤗', whistle: '📢',
  whisper: '🤫', explore: '🧭', imagine: '💭', sparkle: '✨', twinkle: '⭐',
  giggle: '🤭', stumble: '😵', balance: '⚖️', compete: '🏅', gallop: '🐎',
  juggle: '🤹', perform: '🎭', recycle: '♻️', shuffle: '🃏', stretch: '🧘',
  breathe: '💨', flutter: '🦋', snuggle: '🤗', tiptoe: '🦶', pretend: '🎭',
  measure: '📏', collect: '📦', discover: '🔍', remember: '🧠', exercise: '🏋️',
  practice: '📝', decorate: '🎨', celebrate: '🎉', organize: '📋', treasure: '💰',
  volunteer: '🤝', surprise: '🎁', adventure: '🧭', cartwheel: '🤸',
  swimming: '🏊', jumping: '🦘', running: '🏃', playing: '🎮', reading: '📖',
  cooking: '🍳', drawing: '🎨', singing: '🎤', helping: '🤝', sharing: '🤲',
  camping: '⛺', fishing: '🎣',
  scrub: '🧹', rinse: '💧', somersault: '🤸', handstand: '🤸', leapfrog: '🐸',
  skip: '🏃', jumps: '🦘',

  // Body
  arm: '💪', leg: '🦵', ear: '👂', eye: '👁️', toe: '🦶', lip: '👄', rib: '🦴',
  jaw: '🦷', hip: '💃', gum: '🦷', back: '🔙', chin: '😊', knee: '🦵', nail: '💅',
  neck: '🦒', nose: '👃', skin: '🤲', bone: '🦴', hand: '🤚', foot: '🦶', head: '🧠',
  face: '😊', hair: '💇', palm: '🤚', shin: '🦵',
  thumb: '👍', heart: '❤️', mouth: '👄', cheek: '😊', teeth: '🦷', elbow: '💪',
  wrist: '⌚', chest: '💪', spine: '🦴', ankle: '🦶', lungs: '💨', skull: '💀',
  thigh: '🦵', belly: '🤰', tummy: '🤰', heels: '👠', veins: '💉', joint: '🦴',
  nerve: '⚡', scalp: '💇', torso: '🧍', blood: '🩸', tongue: '👅', pinky: '🤙',
  forehead: '😊',
  stomach: '🤢', fingers: '🖐️', eyebrow: '🤨', freckle: '😶', nostril: '👃',
  muscles: '💪', eyelash: '👁️', knuckle: '✊', dimples: '😊', eardrum: '👂',
  ribcage: '🦴', kneecap: '🦵', forearm: '💪', toenail: '🦶', shoulder: '💪',
  backbone: '🦴', fingertip: '👆', skeleton: '💀', thumbnail: '👍',
  nails: '💅', whiskers: '🐱', elbowroom: '💪', bellybutton: '🤰', collarbone: '🦴',

  // Clothes
  hat: '🎩', cap: '🧢', tie: '👔', belt: '👔', coat: '🧥', vest: '👕', robe: '🥋',
  cape: '🦸', suit: '🤵', sock: '🧦', hood: '🧥', shoe: '👞', gown: '👗', wrap: '🧣',
  cuff: '👔', bib: '👶',
  shirt: '👕', pants: '👖', scarf: '🧣', dress: '👗', glove: '🧤', jeans: '👖',
  boots: '👢', skirt: '👗', socks: '🧦', apron: '👨‍🍳', parka: '🧥', tunic: '👕',
  cloak: '🧥', shawl: '🧣', visor: '🧢', denim: '👖', plaid: '👔', linen: '👕',
  cargo: '👖', short: '👖', tights: '👖', hoodie: '🧥',
  sweater: '🧥', mittens: '🧤', sandals: '👡', pajamas: '🛌', sneaker: '👟',
  costume: '🎭', goggles: '🥽', overall: '👖', uniform: '👔', raincoat: '🧥',
  slippers: '👡', bathrobe: '🧥', swimsuit: '👙', leggings: '👖', cardigan: '🧥',
  backpack: '🎒', headband: '🧣', earmuffs: '🎧', overalls: '👖', tracksuit: '🏃',
  sunglasses: '🕶️', sweatshirt: '👕', snowsuit: '❄️', jacket: '🧥', poncho: '🧥',
  bandana: '🧣', flipflops: '👡', undershirt: '👕', turtleneck: '🧥',

  // Home
  bed: '🛏️', rug: '🟫', cup: '☕', mug: '☕', pot: '🍳', pan: '🍳', fan: '🌀',
  key: '🔑', lid: '🥫', mop: '🧹', jar: '🏺', box: '📦', bin: '🗑️', tap: '🚰',
  tub: '🛁', mat: '🧹', pin: '📌', peg: '📎', lamp: '💡', door: '🚪', wall: '🧱',
  roof: '🏠', room: '🏠', sink: '🚰', step: '🪜', dish: '🍽️', bowl: '🥣', fork: '🍴',
  soap: '🧼',
  spoon: '🥄', plate: '🍽️', stove: '🔥', couch: '🛋️', towel: '🧻', broom: '🧹',
  shelf: '📚', floor: '🏠', light: '💡', glass: '🥛', knife: '🔪', phone: '📱',
  trash: '🗑️', quilt: '🛏️', sheet: '🛏️', dryer: '🌀', washer: '🧺', porch: '🏡',
  fence: '🏡', piano: '🎹', radio: '📻', mirror: '🪞', closet: '🚪', window: '🏠',
  garden: '🌻', pillow: '🛋️', vacuum: '🧹', carpet: '🏠', basket: '🧺', bucket: '🪣',
  bottle: '🍼', candle: '🕯️',
  kitchen: '🍳', bedroom: '🛏️', lantern: '🏮', magnet: '🧲', package: '📦',
  shelter: '🏠', whistle: '📢', toolbox: '🧰', cabinet: '🏠', curtain: '🏠',
  doorbell: '🔔', bathroom: '🛁', hallway: '🏠', stairway: '🪜', fireplace: '🔥',
  bookshelf: '📚', basement: '🏠', chimney: '🏠', doorknob: '🚪', dishwasher: '🍽️',
  microwave: '📡', furniture: '🛋️', armchair: '💺', cupboard: '🏠', toaster: '🍞',
  blender: '🥤', freezer: '🧊', counter: '🏠', utensil: '🍴', platter: '🍽️',
  spatula: '🍳', pitcher: '🥛', thermos: '🥤', tablecloth: '🍽️', nightlight: '💡',
  television: '📺', sprinkler: '💦', mailbox: '📬', driveway: '🏠', doorstep: '🏠',
  windowsill: '🏠',

  // Play
  toy: '🧸', fun: '🎉', tag: '🏷️', zoo: '🦁', pop: '🎈', drum: '🥁',
  game: '🎮', kite: '🎏', doll: '🎎', race: '🏁', joke: '😂', ride: '🎠',
  ball: '⚽', fort: '🏰', sand: '🏖️', maze: '🌀', dice: '🎲',
  party: '🎉', magic: '✨', robot: '🤖', fairy: '🧚', clown: '🤡', trick: '🎩',
  movie: '🎬', prize: '🏆', crown: '👑', stage: '🎭', lucky: '🍀', games: '🎮',
  kites: '🎏', dolls: '🎎', bikes: '🚲', block: '🧱', chess: '♟️', cards: '🃏',
  craft: '🎨', teddy: '🧸', plush: '🧸', brick: '🧱', model: '🧸', scoot: '🛴',
  wagon: '🚃',
  balloon: '🎈', monster: '👾', unicorn: '🦄', firework: '🎆', mermaid: '🧜',
  mystery: '🔮', cartoon: '📺', acrobat: '🤸', festival: '🎪', magician: '🧙',
  surprise: '🎁', champion: '🏆', carnival: '🎠', dinosaur: '🦕', treasure: '💰',
  laughter: '😂', birthday: '🎂', bubbles: '🫧', sandbox: '🏖️', crayons: '🖍️',
  marbles: '🔮', sticker: '⭐', jigsaw: '🧩', puppet: '🎭', seesaw: '🎠',
  treehouse: '🌳', trampoline: '🤸', playground: '🎠', pretend: '🎭', hideout: '🏕️',
  costume: '🎭', hopscotch: '🦘', sledding: '🛷', snowball: '❄️', snowman: '⛄',
  pinwheel: '🌀', coloring: '🎨', scooter: '🛴', sleepover: '🛌', exploring: '🧭',
  rollerblade: '🛼', imaginary: '💭',

  // Places
  park: '🏞️', lake: '🏞️', town: '🏘️', farm: '🌾', cave: '⛰️', road: '🛣️',
  mall: '🏬', camp: '⛺', fort: '🏰', yard: '🏡', hill: '⛰️', pond: '💧',
  dock: '⚓', path: '🥾', gate: '🚪', city: '🏙️', shop: '🏪', pool: '🏊',
  room: '🏠', land: '🌍', barn: '🏠',
  store: '🏪', tower: '🗼', cabin: '🏚️', hotel: '🏨', beach: '🏖️', field: '🌾',
  trail: '🥾', attic: '🏠', woods: '🌲', ranch: '🤠', lodge: '🏡', creek: '💧',
  river: '🏞️', ocean: '🌊', alley: '🌃', plaza: '🏛️', place: '📍', world: '🌍',
  court: '🏟️', space: '🚀', arena: '🏟️', valley: '🏞️', island: '🏝️', forest: '🌲',
  castle: '🏰', bridge: '🌉', church: '⛪', school: '🏫', market: '🏪', street: '🛣️',
  tunnel: '🚇', corner: '📍', harbor: '⚓',
  airport: '✈️', factory: '🏭', theater: '🎭', village: '🏘️', mansion: '🏰',
  kingdom: '👑', station: '🚉', cottage: '🏡', balcony: '🏠', gallery: '🖼️',
  museum: '🏛️', library: '📚', mountain: '⛰️', volcano: '🌋', country: '🌍',
  downtown: '🏙️', hospital: '🏥', classroom: '🏫', lunchroom: '🍱', basement: '🏠',
  campsite: '⛺', lakeside: '🏞️', seashore: '🏖️', hillside: '⛰️', farmland: '🌾',
  parkland: '🏞️', playground: '🎠', aquarium: '🐠', bookstore: '📚', firehouse: '🚒',
  skatepark: '🛹', waterpark: '🏊', daycare: '👶', clubhouse: '🏠', hideaway: '🏕️',
  rooftop: '🏠', junkyard: '🏚️', sidewalk: '🚶',

  // Things
  box: '📦', cup: '☕', fan: '🌀', key: '🔑', lid: '🥫', mop: '🧹', net: '🥅',
  pan: '🍳', rug: '🟫', jar: '🏺', bag: '🎒', map: '🗺️', pen: '🖊️', toy: '🧸',
  top: '🔝', can: '🥫', pin: '📌', rod: '🎣', lamp: '💡', ring: '💍', bowl: '🥣',
  door: '🚪', coin: '💰', flag: '🚩', lock: '🔒', rope: '🧵', bell: '🔔', hook: '🪝',
  book: '📕', clip: '📎', card: '🃏', gift: '🎁', sign: '🪧', tube: '🧪',
  wire: '⚡', nail: '🔩', glue: '🧴', tool: '🔧', soap: '🧼', comb: '💇',
  brush: '🖌️', chain: '⛓️', frame: '🖼️', knife: '🔪', piano: '🎹', quilt: '🛏️',
  stamp: '📬', watch: '⌚', badge: '🏅', broom: '🧹', towel: '🧻', torch: '🔦',
  scale: '⚖️', wheel: '🎡', straw: '🥤', phone: '📱', clock: '🕐', plate: '🍽️',
  glass: '🥛', spoon: '🥄', stool: '🪑', chair: '💺', shelf: '📚', paper: '📄',
  brick: '🧱', chalk: '📝', ruler: '📏', paint: '🎨', arrow: '➡️', match: '🔥',
  patch: '🩹', sponge: '🧽', basket: '🧺', bucket: '🪣', bottle: '🍼', eraser: '🧹',
  magnet: '🧲', mirror: '🪞', puzzle: '🧩', ribbon: '🎀', candle: '🕯️', feather: '🕊️',
  pillow: '🛋️', zipper: '🔗', camera: '📷', ticket: '🎫', trophy: '🏆', button: '🔘',
  battery: '🔋', blanket: '🛏️', lantern: '🏮', package: '📦', whistle: '📢',
  envelope: '✉️', toolbox: '🧰', suitcase: '🧳', compass: '🧭', calendar: '📅',
  umbrella: '☂️', scissors: '✂️', computer: '💻', notebook: '📓', bookmark: '🔖',
  flashlight: '🔦', binoculars: '🔭', telescope: '🔭', lunchbox: '🍱',
  clothespin: '📎', postcard: '📮', necklace: '📿', bracelet: '💍', earring: '💎',
  bookshelf: '📚', flowerpot: '🪴', padlock: '🔐', toothbrush: '🪥',
  sunscreen: '☀️', toothpaste: '🪥', shampoo: '🧴', newspaper: '📰',
  telephone: '📞', elevator: '🏢', staircase: '🪜',
  string: '🧵', magnifier: '🔍', stethoscope: '🩺', pillowcase: '🛏️',

  // Weather
  hot: '🥵', wet: '💧', dry: '☀️', ice: '🧊', fog: '🌫️', mist: '🌫️', dew: '💧',
  calm: '😌', cool: '🌬️',
  rain: '🌧️', snow: '❄️', wind: '💨', hail: '🌨️', cold: '🥶', warm: '🌡️', heat: '🥵',
  gust: '💨',
  sunny: '☀️', foggy: '🌫️', windy: '💨', rainy: '🌧️', snowy: '❄️', misty: '🌫️',
  gusty: '💨', clear: '☀️', storm: '⛈️', cloud: '☁️', frost: '❄️', flood: '🌊',
  sleet: '🌨️', humid: '💦', chilly: '🥶', brisk: '🍃', muggy: '🌡️', balmy: '🌤️',
  dewy: '💧', breezy: '🌬️', cloudy: '☁️', stormy: '⛈️',
  blizzard: '🌨️', cyclone: '🌪️', drought: '☀️', climate: '🌡️', sunrise: '🌅',
  tempest: '⛈️', forecast: '📡', heatwave: '🥵', snowfall: '❄️', downpour: '🌧️',
  freezing: '🥶', drizzle: '🌦️', overcast: '☁️', rainbow: '🌈', thunder: '⚡',
  tornado: '🌪️', sunshine: '☀️', raindrop: '💧', snowflake: '❄️', icicles: '❄️',
  puddles: '💧', monsoon: '🌧️', lightning: '⚡', windstorm: '💨', rainstorm: '🌧️',
  snowstorm: '❄️', sunlight: '☀️', moonlight: '🌙', starlight: '⭐', icy: '🧊',

  // Vehicles
  car: '🚗', van: '🚐', cab: '🚕', jet: '✈️', bus: '🚌', raft: '🛶', boat: '⛵',
  bike: '🚲', cart: '🛒', sled: '🛷', ship: '🚢', tram: '🚋', ride: '🚗', tire: '🛞',
  horn: '📯', tank: '🔧', limo: '🚗',
  train: '🚆', plane: '✈️', truck: '🚛', canoe: '🛶', kayak: '🛶', wagon: '🚃',
  trike: '🚲', barge: '🚢', buggy: '🚗', sleigh: '🛷', yacht: '🛥️', sedan: '🚗',
  liner: '🚢', motor: '🏍️', ferry: '⛴️', racer: '🏎️', rocket: '🚀', engine: '🚂',
  bicycle: '🚲', tractor: '🚜', scooter: '🛴', trolley: '🚃', minivan: '🚐',
  tugboat: '🚢', trailer: '🚛', vehicle: '🚗', airplane: '✈️', motorboat: '🛥️',
  sailboat: '⛵', speedboat: '🚤', firetruck: '🚒', ambulance: '🚑', submarine: '🚢',
  spaceship: '🚀', bulldozer: '🚜', skateboard: '🛹', rowboat: '🚣', lifeboat: '🛟',
  racecar: '🏎️', taxicab: '🚕', caravan: '🚐', helicopter: '🚁', motorcycle: '🏍️',
  steamship: '🚢',

  // Sports
  ski: '⛷️', bat: '⚾', net: '🥅', gym: '🏋️', goal: '🥅', surf: '🏄', team: '👥',
  puck: '🏒', dart: '🎯', ball: '⚽', lap: '🏃', set: '🎾', hoop: '🏀',
  pitch: '⚾', serve: '🎾', track: '🏃', match: '🏆', score: '📊', coach: '📋',
  field: '🏟️', relay: '🏃', racer: '🏎️', round: '🥊', boxer: '🥊', diver: '🤿',
  rider: '🏇', biker: '🚴', medal: '🏅', swing: '⛳', catch: '🤲', throw: '🤾',
  block: '🏀', cheer: '📣', skate: '⛸️', climb: '🧗', champ: '🏆', sprint: '🏃',
  hurdle: '🏃', goalie: '🥅', keeper: '🥅', player: '🏃', winner: '🏆', trophy: '🏆',
  baseball: '⚾', football: '🏈', hockey: '🏒', tennis: '🎾', soccer: '⚽',
  athlete: '🏃', gymnast: '🤸', surfing: '🏄', batting: '⚾', bowling: '🎳',
  skating: '⛸️', sprints: '🏃', lacrosse: '🥍', swimming: '🏊', running: '🏃',
  jumping: '🦘', kicking: '⚽', pitching: '⚾', catching: '🤲', throwing: '🤾',
  dribble: '🏀', kickball: '⚽', dodgeball: '🏐', softball: '🥎', basketball: '🏀',
  volleyball: '🏐', wrestling: '🤼', cheerleader: '📣', scoreboard: '📊',
  tournament: '🏆', champion: '🏆', exercise: '🏋️', training: '🏃', teamwork: '🤝',
  pushups: '💪', stretch: '🧘', warmup: '🏃',
  pass: '🏈', pullups: '💪', situps: '💪',

  // Space
  star: '⭐', moon: '🌙', mars: '🔴', glow: '✨', beam: '💫', dust: '🌫️', dark: '🌑',
  zoom: '🚀',
  comet: '☄️', orbit: '🌍', solar: '☀️', lunar: '🌙', venus: '🌟', pluto: '🔵',
  rover: '🚗', space: '🚀', flare: '🌟', alien: '👽', radar: '📡', probe: '🛰️',
  earth: '🌍', night: '🌙', stars: '⭐', moons: '🌙', rings: '💍', titan: '🌍',
  nebula: '🌌', crash: '💥',
  eclipse: '🌑', meteor: '☄️', galaxy: '🌌', planet: '🪐', rocket: '🚀', shuttle: '🚀',
  gravity: '🌍', neptune: '🔵', jupiter: '🟠', mercury: '🌡️', saturn: '🪐',
  asteroid: '☄️', spaceship: '🚀', astronaut: '🧑‍🚀', universe: '🌌',
  moonlight: '🌙', starlight: '⭐', telescope: '🔭', satellite: '🛰️',
  spacesuit: '🧑‍🚀', stardust: '✨', spaceman: '🧑‍🚀', sunlight: '☀️',
  starship: '🚀', moonbeam: '🌙', liftoff: '🚀', takeoff: '✈️', landing: '🛬',
  mission: '🚀', launchpad: '🚀', countdown: '⏳',
  vast: '🌌', shooting: '🌠', milkyway: '🌌',

  // Music
  hum: '🎵', beat: '🥁', note: '🎵', song: '🎶', tune: '🎵', band: '🎤', harp: '🎵',
  gong: '🔔', jazz: '🎷', duet: '🎤', solo: '🎤', bell: '🔔',
  flute: '🎵', viola: '🎻', cello: '🎻', chord: '🎶', tempo: '🎵', lyric: '🎤',
  organ: '🎹', banjo: '🎸', opera: '🎭', vocal: '🎤', snare: '🥁', piano: '🎹',
  sound: '🔊', choir: '🎤', horn: '🎺', bass: '🎸', strum: '🎸', chime: '🔔',
  waltz: '💃', blues: '🎵', rhythm: '🎵', melody: '🎵',
  trumpet: '🎺', guitar: '🎸', ukulele: '🎸', harmony: '🎶', concert: '🎤',
  clarinet: '🎵', drumstick: '🥁', tambourine: '🎵', xylophone: '🎵', maracas: '🎵',
  triangle: '🔺', musician: '🎵', recorder: '🎵', acoustic: '🎸', singing: '🎤',
  musical: '🎵', composer: '🎵', drumming: '🥁', trombone: '🎺', keyboard: '🎹',
  orchestra: '🎵', karaoke: '🎤', lullaby: '🎵', jukebox: '🎵', boombox: '📻',

  // Feelings
  sad: '😢', mad: '😠', shy: '😊', joy: '😄', glad: '😊', calm: '😌', cool: '😎',
  bold: '💪', kind: '💕', nice: '😊', warm: '🤗', wild: '🤪', free: '🕊️', safe: '🏠',
  good: '👍', fine: '👌', well: '😊', love: '❤️', hope: '🌟', fear: '😨', glee: '😄',
  happy: '😊', angry: '😠', brave: '💪', proud: '🥲', sorry: '😔', silly: '🤪',
  funny: '😂', lucky: '🍀', tired: '😴', bored: '😐', eager: '🤩', quiet: '🤫',
  lonely: '😔', jolly: '🎅', merry: '🎉', upset: '😢', peace: '☮️', cheer: '📣',
  worry: '😟', grumpy: '😤', gentle: '🤗', caring: '💕', sweet: '🍬', great: '👍',
  loved: '❤️',
  excited: '🤩', cheerful: '😄', thankful: '🙏', grateful: '🙏', curious: '🤔',
  nervous: '😰', worried: '😟', jealous: '😒', relaxed: '😌', confused: '😕',
  amazed: '🤩', awesome: '🤩', wonderful: '🌟', beautiful: '🌸', fantastic: '🌟',
  terrific: '🌟', delighted: '😄', surprised: '😲', peaceful: '☮️', friendly: '🤝',
  helpful: '🤝', playful: '🤸', hopeful: '🌟', joyful: '😄', careful: '🤲',
  patient: '😌', special: '⭐', amazing: '🤩', creative: '🎨', powerful: '💪',
  fearless: '🦸', generous: '🎁', kindness: '💕', happiness: '😊', courage: '💪',
  comfort: '🤗', feeling: '💭',

  // Adjectives & Adverbs
  big: '🐘', hot: '🔥', old: '👴', tiny: '🐜', huge: '🐋', loud: '📢', fast: '⚡',
  slow: '🐢', lazy: '😴', ugly: '👹', cute: '🥰', mean: '😈', dark: '🌑',
  thin: '📏', tall: '📏', weak: '😩', rich: '💰', poor: '😢', rude: '😤',
  angry: '😠', dirty: '🤢', empty: '📭', fancy: '✨', giant: '🦕', heavy: '🏋️',
  large: '🐘', light: '💡', messy: '🗑️', muddy: '🟤', noisy: '📢', plain: '📄',
  quick: '⚡', rainy: '🌧️', ready: '✅', rough: '🪨', royal: '👑', scary: '👻',
  sharp: '🔪', shiny: '✨', sleepy: '😴', smart: '🧠', smooth: '🧈', spicy: '🌶️',
  sticky: '🍯', strong: '💪', sunny: '☀️', super: '🦸', sweet: '🍬', thick: '📏',
  tricky: '🤔', weird: '👽', wrong: '❌', young: '👶',
  amazing: '🤩', ancient: '🏛️', biggest: '🐘', careful: '🤲', cheerful: '😄',
  colorful: '🌈', creative: '🎨', dangerous: '⚠️', delicious: '😋', different: '🔄',
  difficult: '🧩', enormous: '🦕', exciting: '🎢', excellent: '🌟', fabulous: '💎',
  favorite: '⭐', fearless: '🦸', generous: '🎁', gigantic: '🦕', graceful: '🩰',
  grateful: '🙏', handsome: '😎', horrible: '😱', important: '❗', invisible: '👻',
  magical: '🪄', peaceful: '☮️', perfect: '💯', playful: '🤸', popular: '⭐',
  powerful: '💪', precious: '💎', sparkly: '✨', special: '⭐', strange: '👽',
  stubborn: '🫏', terrible: '😱', thankful: '🙏', unusual: '🦄', wonderful: '🌟',
  beautiful: '🌸', surprised: '😲',
  today: '📅', never: '🚫', always: '♾️', maybe: '🤔', again: '🔄',
  forever: '♾️', quickly: '⚡', quietly: '🤫', finally: '🏁', sometimes: '🔄',
  suddenly: '⚡', tomorrow: '📅', tonight: '🌙', yesterday: '📅', together: '🤝',
  probably: '🤔', honestly: '🤞', happily: '😊', luckily: '🍀', perfectly: '💯',

  // Colors
  red: '🔴', tan: '🟤', pink: '💗', gold: '🟡', lime: '🟢', plum: '🟣', aqua: '🔵',
  gray: '⚪', blue: '🔵',
  green: '🟢', white: '⚪', black: '⚫', brown: '🟤', peach: '🍑', cream: '🤍',
  coral: '🐚', ivory: '🤍', amber: '🟠', olive: '🟢', blush: '💗', yellow: '🟡',
  orange: '🟠', purple: '🟣', silver: '⚪',
  magenta: '💜', crimson: '❤️', scarlet: '🔴', emerald: '💚', saffron: '🟡',
  indigo: '🔵', maroon: '🟤', violet: '💜', bronze: '🥉', charcoal: '⚫',
  burgundy: '🍷', lavender: '💜', turquoise: '🔵', golden: '🟡', sparkle: '✨',
  glitter: '✨', fuchsia: '💗',

  // Numbers
  one: '1️⃣', two: '2️⃣', six: '6️⃣', ten: '🔟', odd: '🔢', sum: '➕', add: '➕', few: '🔢',
  four: '4️⃣', five: '5️⃣', nine: '9️⃣', half: '🔢', zero: '0️⃣', pair: '👥', plus: '➕',
  three: '3️⃣', seven: '7️⃣', eight: '8️⃣', dozen: '🔢', twice: '✌️', third: '🥉',
  tenth: '🔢', total: '🔢', minus: '➖', equal: '🟰', tally: '📊', digit: '🔢',
  value: '💰', count: '🔢', first: '🥇', sixth: '🔢', ninth: '🔢', score: '📊',
  hundred: '💯', million: '🔢', billion: '🔢', quarter: '🔢', decimal: '🔢',
  percent: '💯', numeral: '🔢', formula: '🔢', product: '✖️', integer: '🔢',
  factors: '🔢', figures: '🔢', average: '📊', maximum: '📈', minimum: '📉',
  numbers: '🔢', counter: '🔢', measure: '📏', seventeen: '🔢', eighteen: '🔢',
  nineteen: '🔢', thirteen: '🔢', fourteen: '🔢', fifteen: '🔢', sixteen: '🔢',
  thousand: '🔢', subtract: '➖', multiply: '✖️', division: '➗', fraction: '🔢',
  addition: '➕',

  // Shapes
  arc: '🌈', cone: '🔺', cube: '🧊', oval: '⭕', line: '📏', edge: '📐', dot: '⚫',
  ring: '💍',
  arrow: '➡️', curve: '🌊', cross: '✝️', angle: '📐', shape: '🔷', heart: '❤️',
  round: '⭕', block: '🧱', wedge: '🔺', prism: '🔷', globe: '🌐', square: '🔲',
  circle: '⭕', spiral: '🌀',
  hexagon: '⬡', octagon: '🛑', polygon: '🔷', ellipse: '⭕', rhombus: '🔷',
  pentagon: '🔷', crescent: '🌙', cylinder: '🧴', triangle: '🔺', pyramid: '🔺',
  diamond: '💎', sphere: '🌐', rectangle: '🔲', semicircle: '🌙', trapezoid: '🔷',
  starburst: '💥'
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
