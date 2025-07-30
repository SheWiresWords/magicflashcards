let currentCard = 0;
let isFlipped = false;
                 
//put flashcard info here   
const flashcards =[    
{term: "Kitten", definition: "A small cat that has a playful nature and soft fur."},
{term: "Puppy", definition: "A small dog, characterized by an energetic behavior and eagerness."},
{term: "Bunny", definition: "A small rabbit with long ears, soft fur, and a fluffy tail, known for hopping and twitching its nose."},
{term: "Duckling", definition: "A baby duck with yellow fluffy down feathers that loves to swim."},
{term: "Piglet", definition: "A baby pig with a curly tail and pink snout, surprisingly intelligent."},
{term: "Lamb", definition: "A baby sheep with woolly white fleece, that bleats and follows the flock."},
{term: "Calf", definition: "A baby cow with wobbly legs, probably frolicking in pastures."},
{term: "Foal", definition: "A young horse with long legs and a playful spirit, gallops with the herd."},
{term: "Chick", definition: "A baby chicken with fuzzy yellow feathers, peeping and pecking at everything curiously."},
{term: "Panda", definition: "A black and white bear known for eating bamboo and rolling around."},
{term: "Koala", definition: "A small marsupial from Australia with fluffy gray fur and a large nose."},
{term: "Penguin", definition: "A tuxedo-wearing bird that waddles on land and swims through waters."},
{term: "Otter", definition: "An aquatic mammal with smooth, shiny fur that floats on its back and likes eating shellfish."},
{term: "Seal", definition: "A marine mammal with big round eyes and whiskers, likes clapping its flippers and sunbathing lazily"},
{term: "Hedgehog", definition: "A small mammal that rolls into a ball when scared and has an adorable pointed nose."},
{term: "Hamster", definition: "A tiny animal with chubby cheeks for storing food."},
{term: "Guinea Pig", definition: "A small, round animal with soft fur that squeaks and loves vegetables."},
{term: "Ferret", definition: "A playful, elongated mammal with a mischievous personality and lots of energy."},
{term: "Squirrel", definition: "A bushy-tailed animal that likes running up trees and stores nuts for winter."},
{term: "Prairie Dog", definition: "A ground squirrel that stands upright on two legs and lives in an underground burrow."},
{term: "Meerkat", definition: "A small animal that stands on its hind legs and likes to forage."},
{term: "Fennec Fox", definition: "A small fox with enormous ears and a fluffy tail."},
{term: "Red Panda", definition: "A small animal with red fur and a striped tail that climbs trees."},
{term: "Sloth", definition: "A slow-moving mammal that hangs upside down from tree branches."},
{term: "Capybara", definition: "The world's largest rodent with a chill personality."},
{term: "Alpaca", definition: "A fluffy domesticated camelid with a gentle expression and soft wool, known for humming softly."},
{term: "Llama", definition: "A woolly animal with long eyelashes and a curious personality, sometimes known for spitting."},
{term: "Dolphin", definition: "An intelligent marine mammal with a permanent smile, can be found jumping and clicking."},
{term: "Sea Turtle", definition: "A gentle marine animal with flippers and a shell."},
{term: "Axolotl", definition: "An aquatic animal with cute external gills and regenerative abilities."},
{term: "Sugar Glider", definition: "A small marsupial with big eyes, able to glide between trees"}    
];          

function updateCard(){
    const cardTerm = document.getElementById('cardTerm');
    const cardDefinition = document.getElementById('cardDefinition');
    const cardCounter = document.getElementById('cardCounter');
    
    if(cardTerm){
        cardTerm.textContent = flashcards[currentCard].term;
    }
    
    if(cardDefinition){
        cardDefinition.textContent = flashcards[currentCard].definition;
    }
    
    if(cardCounter){
        cardCounter.textContent = `${currentCard + 1} / ${flashcards.length}`;
    }
}

function flipCard(){
    const flashcard = document.getElementById('flashcard');
    isFlipped = !isFlipped;
    if(flashcard){
        flashcard.classList.toggle('flipped', isFlipped);
    }
}
       
function nextCard(){
    isFlipped = false;
    const flashcard = document.getElementById('flashcard');
    if(flashcard){
        flashcard.classList.remove('flipped');
    }
    currentCard = (currentCard +1)% flashcards.length;
    updateCard();
}

function prevCard(){
    isFlipped = false;
    const flashcard = document.getElementById('flashcard');
    if(flashcard){
        flashcard.classList.remove('flipped');
    }
    currentCard = (currentCard- 1 + flashcards.length) %flashcards.length;
    updateCard();
}


//initiatlize
document.addEventListener('DOMContentLoaded', function() {
    updateCard();
});
