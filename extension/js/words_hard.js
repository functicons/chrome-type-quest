const WORDS_HARD = {
  animals: [
    'dolphin', 'penguin', 'giraffe', 'leopard', 'hamster', 'buffalo', 'panther', 'lobster',
    'sparrow', 'raccoon', 'cheetah', 'gorilla', 'octopus', 'pelican', 'mustang', 'peacock',
    'cricket', 'firefly', 'ladybug', 'goldfish', 'tortoise', 'chicken', 'rooster', 'kitten',
    'turkey', 'donkey', 'monkey', 'parrot', 'lizard', 'turtle', 'rabbit', 'spider',
    'beetle', 'walrus', 'salmon', 'pigeon', 'falcon', 'seagull', 'catfish', 'jellyfish',
    'starfish', 'bluebird', 'bulldog', 'puppy', 'elephant', 'dinosaur', 'flamingo', 'squirrel',
    'reindeer', 'butterfly', 'chipmunk', 'alligator', 'crocodile'
  ],
  food: [
    'chicken', 'biscuit', 'pretzel', 'popcorn', 'pancake', 'brownie', 'avocado', 'sausage',
    'burrito', 'noodles', 'lasagna', 'muffins', 'pudding', 'granola', 'coconut', 'spinach',
    'cracker', 'ketchup', 'waffles', 'oatmeal', 'cupcake', 'sandwich', 'cookies', 'mustard',
    'lettuce', 'tomato', 'potato', 'pumpkin', 'pepper', 'celery', 'yogurt', 'cereal',
    'butter', 'cheese', 'orange', 'peanut', 'pickle', 'burger', 'hotdog', 'dinner',
    'supper', 'dessert', 'caramel', 'meatball', 'smoothie', 'mushroom', 'broccoli', 'cucumber',
    'blueberry', 'strawberry', 'pineapple', 'chocolate', 'spaghetti', 'cinnamon', 'cornbread', 'lemonade'
  ],
  nature: [
    'rainbow', 'volcano', 'thunder', 'glacier', 'blossom', 'feather', 'crystal', 'horizon',
    'tornado', 'prairie', 'meadows', 'boulder', 'morning', 'sunbeam', 'hilltop', 'dewdrop',
    'weather', 'monsoon', 'sunrise', 'sunset', 'seasons', 'mountain', 'waterfall', 'snowflake',
    'rainfall', 'seashell', 'sunlight', 'moonlight', 'starfish', 'sandcastle', 'pinecone', 'mushroom',
    'wildflower', 'seedling', 'pebbles', 'bonfire', 'puddles', 'icicles', 'sunshine', 'raindrop',
    'treetop', 'evergreen', 'dandelion', 'rosebud', 'orchard', 'lagoon', 'canyon', 'tundra',
    'iceberg'
  ],
  school: [
    'teacher', 'science', 'library', 'pencils', 'reading', 'eraser', 'student', 'locker',
    'history', 'recess', 'chapter', 'grammar', 'project', 'english', 'booklet', 'planner',
    'textbook', 'notebook', 'backpack', 'writing', 'spelling', 'drawing', 'painting', 'computer',
    'keyboard', 'homework', 'classroom', 'alphabet', 'numbers', 'crayons', 'scissors', 'markers',
    'folder', 'binder', 'lesson', 'report', 'journal', 'diploma', 'biology', 'program',
    'weather', 'calendar', 'addition', 'subtract', 'multiply', 'question', 'answer', 'problem',
    'learning', 'practice'
  ],
  family: [
    'brother', 'sister', 'cousin', 'grandma', 'grandpa', 'husband', 'toddler', 'parents',
    'wedding', 'nephew', 'sibling', 'reunion', 'auntie', 'daughter', 'grandkid', 'together',
    'birthday', 'holiday', 'morning', 'bedtime', 'kitchen', 'bedroom', 'backyard', 'camping',
    'reading', 'cooking', 'playing', 'helping', 'sharing', 'growing', 'stories', 'lullaby',
    'blanket', 'pillow', 'pajamas', 'snuggle', 'goodnight', 'grandchild', 'stepmother', 'babysitter',
    'adoption', 'guardian'
  ],
  actions: [
    'whisper', 'explore', 'imagine', 'sparkle', 'twinkle', 'giggle', 'stumble', 'balance',
    'compete', 'gallop', 'juggle', 'perform', 'recycle', 'shuffle', 'stretch', 'breathe',
    'flutter', 'snuggle', 'tiptoe', 'pretend', 'measure', 'collect', 'discover', 'remember',
    'exercise', 'practice', 'decorate', 'celebrate', 'organize', 'treasure', 'volunteer', 'surprise',
    'adventure', 'cartwheel', 'somersault', 'handstand', 'leapfrog', 'hopscotch', 'swimming', 'jumping',
    'running', 'playing', 'reading', 'cooking', 'drawing', 'singing', 'helping', 'sharing',
    'camping', 'fishing'
  ],
  body: [
    'stomach', 'fingers', 'eyebrow', 'freckle', 'nostril', 'muscles', 'eyelash', 'forehead',
    'knuckle', 'dimples', 'eardrum', 'ribcage', 'kneecap', 'forearm', 'toenail', 'shoulder',
    'whiskers', 'backbone', 'elbowroom', 'fingertip', 'bellybutton', 'skeleton', 'collarbone', 'thumbnail'
  ],
  clothes: [
    'sweater', 'mittens', 'sandals', 'pajamas', 'sneaker', 'costume', 'goggles', 'overall',
    'uniform', 'raincoat', 'slippers', 'bathrobe', 'swimsuit', 'leggings', 'cardigan', 'backpack',
    'flipflops', 'headband', 'earmuffs', 'overalls', 'tracksuit', 'sunglasses', 'sweatshirt', 'undershirt',
    'turtleneck', 'snowsuit', 'jacket', 'poncho', 'bandana'
  ],
  home: [
    'kitchen', 'bedroom', 'blanket', 'lantern', 'magnet', 'package', 'shelter', 'whistle',
    'toolbox', 'cabinet', 'curtain', 'doorbell', 'bathroom', 'hallway', 'stairway', 'fireplace',
    'bookshelf', 'basement', 'chimney', 'doorknob', 'dishwasher', 'microwave', 'furniture', 'armchair',
    'cupboard', 'toaster', 'blender', 'freezer', 'counter', 'utensil', 'platter', 'spatula',
    'pitcher', 'thermos', 'tablecloth', 'pillowcase', 'nightlight', 'television', 'sprinkler', 'mailbox',
    'driveway', 'doorstep', 'windowsill'
  ],
  play: [
    'balloon', 'monster', 'unicorn', 'firework', 'mermaid', 'mystery', 'cartoon', 'acrobat',
    'festival', 'magician', 'surprise', 'champion', 'carnival', 'dinosaur', 'treasure', 'laughter',
    'birthday', 'bubbles', 'sandbox', 'crayons', 'marbles', 'sticker', 'jigsaw', 'puppet',
    'seesaw', 'treehouse', 'trampoline', 'playground', 'pretend', 'hideout', 'costume', 'rollerblade',
    'hopscotch', 'sledding', 'snowball', 'snowman', 'camping', 'fishing', 'swimming', 'pinwheel',
    'coloring', 'scooter', 'blanket', 'pillow', 'sleepover', 'adventure', 'exploring', 'imaginary'
  ],
  places: [
    'airport', 'factory', 'theater', 'village', 'mansion', 'kingdom', 'station', 'cottage',
    'balcony', 'gallery', 'museum', 'library', 'bedroom', 'kitchen', 'hallway', 'backyard',
    'mountain', 'volcano', 'country', 'downtown', 'hospital', 'baseball', 'football', 'swimming',
    'classroom', 'lunchroom', 'bathroom', 'basement', 'treehouse', 'rooftop', 'campsite', 'lakeside',
    'seashore', 'hillside', 'farmland', 'parkland', 'playground', 'aquarium', 'bookstore', 'firehouse',
    'junkyard', 'skatepark', 'sidewalk', 'waterpark', 'carnival', 'daycare', 'clubhouse', 'hideaway'
  ],
  things: [
    'battery', 'blanket', 'lantern', 'package', 'whistle', 'envelope', 'toolbox', 'suitcase',
    'compass', 'backpack', 'calendar', 'umbrella', 'scissors', 'computer', 'keyboard', 'notebook',
    'bookmark', 'flashlight', 'binoculars', 'telescope', 'magnifier', 'stethoscope', 'lunchbox', 'thermos',
    'clothespin', 'doorbell', 'postcard', 'necklace', 'bracelet', 'earring', 'bookshelf', 'flowerpot',
    'pillowcase', 'padlock', 'toothbrush', 'sunscreen', 'toothpaste', 'shampoo', 'newspaper', 'telephone',
    'elevator', 'staircase', 'trampoline'
  ],
  weather: [
    'blizzard', 'cyclone', 'drought', 'climate', 'sunrise', 'tempest', 'forecast', 'heatwave',
    'snowfall', 'downpour', 'freezing', 'drizzle', 'overcast', 'rainbow', 'thunder', 'tornado',
    'weather', 'seasons', 'sunshine', 'raindrop', 'snowflake', 'icicles', 'puddles', 'monsoon',
    'lightning', 'windstorm', 'rainstorm', 'snowstorm', 'sunlight', 'moonlight', 'starlight'
  ],
  vehicles: [
    'bicycle', 'tractor', 'scooter', 'trolley', 'minivan', 'tugboat', 'trailer', 'vehicle',
    'airplane', 'motorboat', 'sailboat', 'speedboat', 'firetruck', 'ambulance', 'submarine', 'spaceship',
    'bulldozer', 'skateboard', 'rowboat', 'lifeboat', 'racecar', 'taxicab', 'caravan', 'helicopter',
    'motorcycle', 'steamship'
  ],
  sports: [
    'baseball', 'football', 'hockey', 'tennis', 'soccer', 'athlete', 'gymnast', 'surfing',
    'batting', 'bowling', 'skating', 'sprints', 'lacrosse', 'swimming', 'running', 'jumping',
    'kicking', 'pitching', 'catching', 'throwing', 'dribble', 'kickball', 'dodgeball', 'softball',
    'basketball', 'volleyball', 'wrestling', 'cheerleader', 'scoreboard', 'tournament', 'practice', 'champion',
    'exercise', 'training', 'teamwork', 'pushups', 'pullups', 'situps', 'stretch', 'warmup'
  ],
  space: [
    'eclipse', 'meteor', 'galaxy', 'planet', 'rocket', 'shuttle', 'gravity', 'neptune',
    'jupiter', 'mercury', 'saturn', 'asteroid', 'spaceship', 'astronaut', 'universe', 'moonlight',
    'starlight', 'telescope', 'satellite', 'spacesuit', 'stardust', 'shooting', 'milkyway', 'spaceman',
    'sunlight', 'starship', 'moonbeam', 'liftoff', 'takeoff', 'landing', 'mission', 'launchpad',
    'countdown'
  ],
  music: [
    'trumpet', 'guitar', 'ukulele', 'harmony', 'concert', 'clarinet', 'drumstick', 'tambourine',
    'xylophone', 'maracas', 'triangle', 'musician', 'recorder', 'acoustic', 'singing', 'musical',
    'composer', 'drumming', 'playing', 'trombone', 'keyboard', 'practice', 'perform', 'orchestra',
    'karaoke', 'lullaby', 'jukebox', 'boombox'
  ],
  feelings: [
    'excited', 'cheerful', 'thankful', 'grateful', 'curious', 'nervous', 'worried', 'jealous',
    'relaxed', 'confused', 'amazed', 'awesome', 'wonderful', 'beautiful', 'fantastic', 'terrific',
    'delighted', 'surprised', 'peaceful', 'friendly', 'helpful', 'playful', 'hopeful', 'joyful',
    'careful', 'patient', 'special', 'amazing', 'creative', 'powerful', 'fearless', 'generous',
    'kindness', 'happiness', 'laughter', 'sunshine', 'courage', 'comfort', 'feeling'
  ],
  colors: [
    'magenta', 'crimson', 'scarlet', 'emerald', 'saffron', 'indigo', 'maroon', 'violet',
    'bronze', 'charcoal', 'burgundy', 'lavender', 'turquoise', 'golden', 'rainbow', 'sparkle',
    'glitter', 'fuchsia'
  ],
  numbers: [
    'hundred', 'million', 'billion', 'quarter', 'decimal', 'percent', 'numeral', 'formula',
    'product', 'integer', 'factors', 'figures', 'average', 'maximum', 'minimum', 'numbers',
    'counter', 'measure', 'seventeen', 'eighteen', 'nineteen', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'thousand', 'subtract', 'multiply', 'division', 'fraction', 'addition'
  ],
  shapes: [
    'hexagon', 'octagon', 'polygon', 'ellipse', 'rhombus', 'pentagon', 'crescent', 'cylinder',
    'triangle', 'pyramid', 'diamond', 'sphere', 'rectangle', 'semicircle', 'trapezoid', 'starburst'
  ],
  adjectives: [
    'amazing', 'ancient', 'awesome', 'bashful', 'biggest', 'boiling', 'careful', 'cheerful',
    'colorful', 'confused', 'creative', 'curious', 'dangerous', 'delicious', 'different', 'difficult',
    'enormous', 'exciting', 'excellent', 'expensive', 'fabulous', 'faithful', 'famous', 'favorite',
    'fearful', 'fearless', 'friendly', 'generous', 'gentle', 'gigantic', 'graceful', 'grateful',
    'grumpy', 'handsome', 'helpful', 'horrible', 'horrible', 'important', 'invisible', 'jealous',
    'joyful', 'magical', 'natural', 'nervous', 'peaceful', 'perfect', 'playful', 'popular',
    'possible', 'powerful', 'precious', 'puzzled', 'selfish', 'serious', 'sparkly', 'special',
    'strange', 'stubborn', 'surprised', 'terrible', 'thankful', 'thoughtful', 'tiny', 'together',
    'trouble', 'unusual', 'valuable', 'wonderful', 'worried', 'youngest', 'beautiful'
  ],
  adverbs: [
    'actually', 'already', 'altogether', 'anywhere', 'carefully', 'certainly', 'clearly', 'completely',
    'correctly', 'directly', 'easily', 'entirely', 'especially', 'eventually', 'exactly', 'extremely',
    'finally', 'forever', 'fortunately', 'frequently', 'generally', 'happily', 'honestly', 'hopefully',
    'immediately', 'instantly', 'instead', 'luckily', 'naturally', 'normally', 'obviously', 'perfectly',
    'perhaps', 'politely', 'possibly', 'probably', 'properly', 'quickly', 'quietly', 'recently',
    'seriously', 'silently', 'simply', 'slightly', 'sometimes', 'suddenly', 'together', 'tomorrow',
    'tonight', 'usually', 'yesterday'
  ]
};
