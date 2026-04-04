const WORDS_HARD = {
  animals: [
    'alligator', 'bluebird', 'buffalo', 'bulldog', 'butterfly', 'catfish', 'chameleon', 'cheetah',
    'chicken', 'chipmunk', 'cricket', 'crocodile', 'dinosaur', 'dolphin', 'dragonfly', 'elephant',
    'firefly', 'flamingo', 'giraffe', 'goldfish', 'gorilla', 'hamster', 'hedgehog', 'jellyfish',
    'kangaroo', 'ladybug', 'leopard', 'lobster', 'nightingale', 'octopus', 'panther', 'peacock',
    'pelican', 'penguin', 'porcupine', 'raccoon', 'reindeer', 'rooster', 'seagull', 'seahorse',
    'sparrow', 'squirrel', 'starfish', 'tortoise', 'woodpecker'
  ],
  food: [
    'avocado', 'barbecue', 'biscuit', 'blueberry', 'broccoli', 'brownie', 'burrito', 'caramel',
    'casserole', 'chocolate', 'cinnamon', 'coconut', 'cookies', 'cornbread', 'cracker', 'cucumber',
    'cupcake', 'dessert', 'dumpling', 'granola', 'guacamole', 'ketchup', 'lasagna', 'leftover',
    'lemonade', 'lettuce', 'macaroni', 'marshmallow', 'meatball', 'milkshake', 'muffins', 'mushroom',
    'mustard', 'noodles', 'oatmeal', 'pancake', 'pepperoni', 'pineapple', 'popcorn', 'pretzel',
    'pudding', 'pumpkin', 'quesadilla', 'sandwich', 'sausage', 'scrambled', 'smoothie', 'spaghetti',
    'spinach', 'strawberry', 'waffles'
  ],
  nature: [
    'blossom', 'bonfire', 'boulder', 'coastline', 'crystal', 'dandelion', 'daybreak', 'dewdrop',
    'evergreen', 'feather', 'glacier', 'grassland', 'hillside', 'hilltop', 'horizon', 'iceberg',
    'icicles', 'lakeside', 'meadows', 'moonlight', 'morning', 'mountain', 'nightfall', 'orchard',
    'pebbles', 'pinecone', 'puddles', 'rainbow', 'raindrop', 'rainfall', 'riverside', 'rosebud',
    'sandcastle', 'seashell', 'seasons', 'seedling', 'snowflake', 'starlight', 'sunbeam', 'sunlight',
    'sunrise', 'sunshine', 'thunder', 'tornado', 'treehouse', 'treetop', 'volcano', 'waterfall',
    'weather', 'wildflower', 'woodland'
  ],
  school: [
    'addition', 'alphabet', 'assembly', 'attendance', 'backpack', 'booklet', 'calculator', 'calendar',
    'chapter', 'classroom', 'compass', 'computer', 'crayons', 'dictionary', 'drawing', 'english',
    'grammar', 'highlighter', 'history', 'homework', 'journal', 'keyboard', 'learning', 'library',
    'lunchroom', 'markers', 'multiply', 'notebook', 'numbers', 'painting', 'pencils', 'planner',
    'practice', 'principal', 'problem', 'project', 'question', 'reading', 'science', 'scissors',
    'spelling', 'stapler', 'sticker', 'student', 'subtract', 'teacher', 'textbook', 'whiteboard',
    'worksheet', 'writing', 'yearbook'
  ],
  family: [
    'babysitter', 'backyard', 'bedroom', 'bedtime', 'birthday', 'blanket', 'brother', 'camping',
    'celebrate', 'cherish', 'comfort', 'cooking', 'daughter', 'generation', 'godfather', 'godmother',
    'goodnight', 'grandchild', 'grandma', 'grandpa', 'growing', 'helping', 'holiday', 'husband',
    'kitchen', 'lullaby', 'memories', 'nurture', 'pajamas', 'parents', 'playing', 'protect',
    'relatives', 'reunion', 'sharing', 'sibling', 'sleepover', 'snuggle', 'stepfather', 'stepmother',
    'stories', 'support', 'thankful', 'toddler', 'together', 'tradition', 'wedding'
  ],
  actions: [
    'adventure', 'balance', 'breathe', 'building', 'carrying', 'catching', 'checking', 'cleaning',
    'climbing', 'collect', 'compete', 'counting', 'dancing', 'decorate', 'discover', 'dropping',
    'exercise', 'explore', 'finishing', 'fishing', 'flutter', 'imagine', 'jumping', 'laughing',
    'measure', 'organize', 'perform', 'pretend', 'recycle', 'remember', 'running', 'searching',
    'shopping', 'shuffle', 'singing', 'sleeping', 'sparkle', 'squeeze', 'stretch', 'stumble',
    'surprise', 'swimming', 'thinking', 'traveling', 'treasure', 'twinkle', 'volunteer', 'watching',
    'watering', 'whisper', 'wrapping'
  ],
  body: [
    'backbone', 'bellybutton', 'birthmark', 'dimples', 'eardrum', 'eyebrow', 'eyelash', 'fingers',
    'fingertip', 'footprint', 'forearm', 'forehead', 'freckle', 'freckles', 'handprint', 'heartbeat',
    'kneecap', 'knuckle', 'muscles', 'nostril', 'ponytail', 'ribcage', 'shoulder', 'skeleton',
    'stomach', 'thumbnail', 'toenail'
  ],
  clothes: [
    'bandana', 'bathing', 'bathrobe', 'bracelet', 'cardigan', 'costume', 'earmuffs', 'flipflops',
    'goggles', 'headband', 'kneepads', 'leggings', 'mittens', 'necklace', 'nightgown', 'overall',
    'overalls', 'rainboots', 'raincoat', 'sandals', 'shoelace', 'slipper', 'slippers', 'sneaker',
    'snowsuit', 'sunglasses', 'sweater', 'sweatshirt', 'swimsuit', 'tracksuit', 'undershirt', 'uniform',
    'wristband'
  ],
  home: [
    'armchair', 'basement', 'bathroom', 'blender', 'bookshelf', 'cabinet', 'chimney', 'counter',
    'cupboard', 'curtain', 'dishwasher', 'doorbell', 'doorknob', 'doorstep', 'driveway', 'fireplace',
    'flowerpot', 'freezer', 'furniture', 'hallway', 'hammock', 'lantern', 'laundry', 'lightbulb',
    'mailbox', 'microwave', 'nightlight', 'package', 'pillowcase', 'pitcher', 'planter', 'recycling',
    'shelter', 'showerhead', 'spatula', 'sprinkler', 'stairway', 'tablecloth', 'television', 'thermos',
    'toaster', 'toolbox', 'trashcan', 'whistle', 'windowsill'
  ],
  play: [
    'acrobat', 'balloon', 'bubbles', 'carnival', 'cartoon', 'champion', 'coloring', 'dollhouse',
    'exploring', 'festival', 'firework', 'fireworks', 'frisbee', 'hideout', 'hopscotch', 'laughter',
    'magician', 'marbles', 'mermaid', 'monster', 'mystery', 'pinwheel', 'playground', 'princess',
    'sandbox', 'scooter', 'skateboard', 'sledding', 'snowball', 'snowman', 'superhero', 'trampoline',
    'unicorn', 'watergun'
  ],
  places: [
    'airport', 'aquarium', 'balcony', 'bookstore', 'campsite', 'clubhouse', 'cottage', 'country',
    'crosswalk', 'daycare', 'downtown', 'factory', 'farmland', 'firehouse', 'gallery', 'gymnasium',
    'hospital', 'kingdom', 'mansion', 'neighborhood', 'parking', 'restaurant', 'rooftop', 'seashore',
    'sidewalk', 'skatepark', 'stadium', 'station', 'supermarket', 'theater', 'village', 'waterpark'
  ],
  things: [
    'battery', 'binoculars', 'bookmark', 'clipboard', 'earring', 'elevator', 'envelope', 'flashlight',
    'headphones', 'keychain', 'lunchbox', 'microphone', 'newspaper', 'piggybank', 'postcard', 'screwdriver',
    'seatbelt', 'shampoo', 'staircase', 'stopwatch', 'stroller', 'suitcase', 'sunscreen', 'telephone',
    'telescope', 'thimble', 'thumbtack', 'toothbrush', 'toothpaste', 'trinket', 'umbrella'
  ],
  weather: [
    'blizzard', 'climate', 'cloudburst', 'downpour', 'drizzle', 'forecast', 'freezing', 'frostbite',
    'heatwave', 'humidity', 'lightning', 'monsoon', 'overcast', 'rainstorm', 'snowfall', 'snowstorm',
    'temperature', 'thermometer', 'whirlwind', 'windstorm'
  ],
  vehicles: [
    'airplane', 'ambulance', 'bicycle', 'bulldozer', 'carriage', 'cruiser', 'fireengine', 'firetruck',
    'helicopter', 'hovercraft', 'lifeboat', 'limousine', 'minivan', 'motorboat', 'motorcycle', 'motorhome',
    'racecar', 'rowboat', 'sailboat', 'schoolbus', 'snowmobile', 'spaceship', 'speedboat', 'sportscar',
    'steamship', 'submarine', 'tractor', 'trailer', 'trolley', 'tugboat', 'vehicle'
  ],
  sports: [
    'archery', 'athlete', 'baseball', 'basketball', 'batting', 'bowling', 'dodgeball', 'dribble',
    'fencing', 'football', 'goalkeeper', 'gymnast', 'halftime', 'homerun', 'jogging', 'kickball',
    'kicking', 'overtime', 'pitching', 'pushups', 'referee', 'scoreboard', 'skating', 'softball',
    'sprinting', 'sprints', 'surfing', 'teamwork', 'throwing', 'touchdown', 'tournament', 'training',
    'volleyball', 'wrestling'
  ],
  space: [
    'asteroid', 'astronaut', 'atmosphere', 'countdown', 'daytime', 'eclipse', 'gravity', 'jupiter',
    'landing', 'launchpad', 'liftoff', 'mercury', 'midnight', 'mission', 'moonbeam', 'neptune',
    'nighttime', 'satellite', 'shooting', 'shuttle', 'spaceman', 'spacesuit', 'stardust', 'starship',
    'takeoff', 'universe'
  ],
  music: [
    'boombox', 'clapping', 'clarinet', 'composer', 'concert', 'drumming', 'drumstick', 'earbuds',
    'harmony', 'humming', 'jukebox', 'karaoke', 'maracas', 'musical', 'musician', 'orchestra',
    'playlist', 'recorder', 'ringtone', 'speakers', 'strumming', 'tambourine', 'triangle', 'trombone',
    'trumpet', 'ukulele', 'xylophone'
  ],
  feelings: [
    'amazing', 'anxious', 'awesome', 'beautiful', 'careful', 'cheerful', 'confident', 'confused',
    'content', 'courage', 'creative', 'curious', 'delighted', 'determined', 'disgusted', 'embarrassed',
    'excited', 'exhausted', 'fantastic', 'fearful', 'fearless', 'feeling', 'friendly', 'frustrated',
    'generous', 'grateful', 'happiness', 'helpful', 'hopeful', 'jealous', 'kindness', 'miserable',
    'nervous', 'overwhelmed', 'patient', 'peaceful', 'playful', 'powerful', 'relaxed', 'satisfied',
    'special', 'surprised', 'terrific', 'terrified', 'wonderful', 'worried'
  ],
  colors: [
    'burgundy', 'charcoal', 'chestnut', 'crimson', 'emerald', 'glitter', 'lavender', 'magenta',
    'platinum', 'scarlet', 'tangerine', 'turquoise'
  ],
  numbers: [
    'average', 'billion', 'calculate', 'decimal', 'division', 'doubling', 'eighteen', 'estimate',
    'fifteen', 'fourteen', 'fraction', 'hundred', 'maximum', 'million', 'minimum', 'nineteen',
    'percent', 'quarter', 'roughly', 'seventeen', 'sixteen', 'thirteen', 'thousand'
  ],
  shapes: [
    'checkerboard', 'crescent', 'cylinder', 'diamond', 'ellipse', 'hexagon', 'honeycomb', 'octagon',
    'pentagon', 'polygon', 'pyramid', 'rectangle', 'semicircle', 'starburst', 'trapezoid'
  ],
  adjectives: [
    'biggest', 'brittle', 'colorful', 'comfortable', 'dangerous', 'delicious', 'different', 'difficult',
    'enormous', 'entertaining', 'excellent', 'exciting', 'exhausting', 'expensive', 'fabulous', 'faithful',
    'favorite', 'forgetful', 'gigantic', 'graceful', 'handsome', 'horrible', 'important', 'incredible',
    'invisible', 'magical', 'natural', 'organized', 'perfect', 'popular', 'possible', 'precious',
    'puzzled', 'responsible', 'ridiculous', 'selfish', 'serious', 'sparkly', 'strange', 'stubborn',
    'terrible', 'thoughtful', 'trouble', 'unusual', 'valuable', 'youngest'
  ],
  adverbs: [
    'absolutely', 'actually', 'already', 'anywhere', 'apparently', 'basically', 'briskly', 'carefully',
    'certainly', 'clearly', 'closely', 'completely', 'constantly', 'correctly', 'definitely', 'desperately',
    'differently', 'directly', 'entirely', 'especially', 'eventually', 'exactly', 'excitedly', 'extremely',
    'finally', 'forever', 'fortunately', 'frequently', 'generally', 'greatly', 'happily', 'honestly',
    'hopefully', 'immediately', 'instantly', 'instead', 'luckily', 'naturally', 'normally', 'obviously',
    'originally', 'perfectly', 'perhaps', 'personally', 'politely', 'possibly', 'probably', 'properly',
    'quickly', 'quietly', 'recently', 'separately', 'seriously', 'sharply', 'silently', 'slightly',
    'sometimes', 'successfully', 'suddenly', 'surprisingly', 'swiftly', 'tightly', 'tomorrow', 'tonight',
    'unfortunately', 'usually', 'yesterday'
  ]
};
