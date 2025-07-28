let currentCard = 0;
let isFlipped = false;
               
//put flashcard info here   
const flashcards =[    
    { term: "Class", definition: "A blueprint for creating objects in Java. A class defines the structure + behavior of objects."},
    {term: "Object", definition: "An instance of a class. It represents a real entity with attributes and methods."},
    {term: "Method", definition: "A function defined within a class that performs a specific task."},
    {term: "Constructor", definition: "A special method that is called when an object is created. It initializes the object."},
    {term: "Inheritance", definition: "A mechanism in which one class inherits properties and methods from another class."
    }     
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
