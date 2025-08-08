let currentCard = 0;
let isFlipped = false;
            
//put flashcard info here   
const flashcards = [
    {
        term: "Variable",
        definition: "A named storage location that holds a value of a specific data type. Variables can be changed during program execution."
    },
    {
        term: "Data Type",
        definition: "Specifies the kind of data a variable can hold. Java has primitive types (int, double, boolean, char) and reference types (String, objects)."
    },
    {
        term: "Assignment Statement",
        definition: "Uses the = operator to store a value in a variable. The expression on the right is evaluated and stored in the variable on the left."
    },
    {
        term: "Arithmetic Expression",
        definition: "A combination of variables, numbers, and operators (+, -, *, /, %) that evaluates to a numeric value."
    },
    {
        term: "Compound Assignment",
        definition: "Operators like +=, -=, *=, /= that perform an operation and assign the result back to the variable (e.g., x += 5 is equivalent to x = x + 5)."
    },
    {
        term: "Casting",
        definition: "Converting one data type to another. Can be implicit (widening) or explicit (narrowing) using (datatype) syntax."
    },
    {
        term: "String Concatenation",
        definition: "Joining strings together using the + operator. When a string is involved, other data types are converted to strings."
    },
    {
        term: "Escape Sequence",
        definition: "Special character combinations starting with backslash (\\) like \\n (newline), \\t (tab), \\\" (quote) to represent special characters in strings."
    },
    {
        term: "Modulus Operator (%)",
        definition: "Returns the remainder after integer division. Useful for determining if numbers are even/odd or for cyclic operations."
    },
    {
        term: "Order of Operations",
        definition: "Java follows PEMDAS: Parentheses, Exponents (not in Java), Multiplication/Division/Modulus (left to right), Addition/Subtraction (left to right)."
    },
    {
        term: "Integer Division",
        definition: "When both operands are integers, division truncates the decimal part. For example, 7/3 equals 2, not 2.33."
    },
    {
        term: "Type Promotion",
        definition: "When operations involve different numeric types, smaller types are automatically promoted to larger types (int to double)."
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
