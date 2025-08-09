let currentCard = 0;
let isFlipped = false;

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
    },
    {
        term: "Literal",
        definition: "A fixed value directly written in code. Examples: 42 (int literal), 3.14 (double literal), 'A' (char literal), \"Hello\" (String literal)."
    },
    {
        term: "Constants",
        definition: "Variables declared with 'final' keyword that cannot be changed after initialization. By convention, written in ALL_CAPS."
    },
    {
        term: "Primitive Types",
        definition: "Basic data types built into Java: byte, short, int, long, float, double, boolean, char. They store actual values, not references."
    },
    {
        term: "Reference Types",
        definition: "Data types that store references (addresses) to objects in memory. Examples: String, arrays, objects. Default value is null."
    },
    {
        term: "Boolean Operators",
        definition: "Logical operators that work with boolean values: && (AND), || (OR), ! (NOT). Used for combining conditions in if statements."
    },
    {
        term: "Comparison Operators",
        definition: "Operators that compare values and return boolean results: == (equal), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal)."
    },
    {
        term: "Short-Circuit Evaluation",
        definition: "When using && or ||, Java stops evaluating as soon as the result is determined. For &&, stops if first is false; for ||, stops if first is true."
    },
    {
        term: "Increment/Decrement",
        definition: "Operators ++ and -- that increase or decrease a variable by 1. Pre-increment (++x) changes then uses; post-increment (x++) uses then changes."
    },
    {
        term: "String Methods",
        definition: "Built-in functions for String objects like length(), substring(), indexOf(), charAt(), equals(), compareTo(), and toUpperCase()."
    },
    {
        term: "Immutable Strings",
        definition: "Strings in Java cannot be modified after creation. String operations create new String objects rather than changing existing ones."
    },
    {
        term: "ASCII Values",
        definition: "Numeric codes for characters. 'A' = 65, 'a' = 97, '0' = 48. Can cast between char and int to work with ASCII values."
    },
    {
        term: "Variable Scope",
        definition: "The region of code where a variable can be accessed. Local variables exist only within the method/block where they're declared."
    },
    {
        term: "Method Signature",
        definition: "The method's name and parameter list (including types and order). Used by Java to distinguish between overloaded methods."
    },
    {
        term: "Static vs Instance",
        definition: "Static methods/variables belong to the class and can be called without creating an object. Instance methods/variables require an object."
    },
    {
        term: "Constructor",
        definition: "Special method with same name as class, used to initialize objects. Called automatically when creating new instances with 'new' keyword."
    },
    {
        term: "Object Instantiation",
        definition: "Creating a new object using the 'new' keyword followed by a constructor call. Allocates memory and initializes the object."
    },
    {
        term: "Null Pointer Exception",
        definition: "Runtime error that occurs when trying to use a reference variable that points to null. Common when forgetting to initialize objects."
    },
    {
        term: "Method Overloading",
        definition: "Having multiple methods with the same name but different parameter lists (different number or types of parameters) in the same class."
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
    
    currentCard = (currentCard + 1) % flashcards.length;
    updateCard();
}

function prevCard(){
    isFlipped = false;
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.classList.remove('flipped');
    }
    
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

//initialize flashcards
document.addEventListener('DOMContentLoaded', function() {
    updateCard();
});
