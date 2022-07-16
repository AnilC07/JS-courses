// usetrict;

/**  Values and Variables **/

let country = 'France';
let continent = 'Europe';
let population = 67.8;

console.log(country) // France
console.log(continent) // Europe
console.log(population) // 67.8

/** Data types **/

let isIsland = false;
console.log(typeof (isIsland)); // Boolean
console.log(typeof (country)); // String
console.log(typeof (continent)); // String
console.log(typeof (population)); // Number
/** let, const, var (à voir)**/

let language = "French";

/** Basic Operators **/

let halfCountryPopulation = population / 2;
// console.log(halfCountryPopulation) => 33.9
halfCountryPopulation++
// console.log(population) =>67.8
// console.log(population>6) => true
// console.log(population<33) => false

const countryP = 'Portugal';
const continentP = 'Europe';
const populationP = 11;
const languageP = 'Portuguese';
const descriptionP1 = countryP + " its in " + continentP + ", and it's " + populationP + " million people speake " + languageP;
// => Portugal its in Europe, ands its 11 million people speake Potuguese

/** Strings and Template Literals **/

const descriptionP2 = `${countryP} its in ${continentP} and it's ${populationP} million people speak ${languageP}`
// => Portugal its in Europe, ands its 11 million people speake Potuguese

/** Taking Decisions: if / else Statements **/

if (populationP > 33) { // false
    console.log("Portugal's population is above average")
} else { // true
    console.log("Portugal's population is 22 million below average")
}
// => Portugal's population is 22 million below average

/** Type Conversion and Coercion **/

console.log('9' - '5') // => 4
console.log(('19' - '13') + '17') // => 617 
console.log(('19' - '13') + 17) // => 23
console.log('123' < 57) // => false
console.log((5 + 6) + '4' + (9 - 4 - 2)) // => 1143 

/** Equality Operators: == vs. === **/

/* let numNeighbours = parseInt(prompt('How many neighbour countries does your country have?'))
if(numNeighbours === 1){
    console.log('Only 1 border!')
}else if(numNeighbours > 1){
    console.log('More than 1 border')
}else{
    console.log('No borders')
} */

/**  Logical Operators **/

const spokenLanguage = 'english'
const actualPop = 11;
const isIslandP = false

if (spokenLanguage == 'english' && actualPop < 50 && isIslandP === false) {
    console.log('You should live in Portugal :)')
} else {
    console.log('Portugal does not meet your criteria :(')
}

/**  The switch Statement **/
/*
const message = 'wich language do you speak ?'
const speakLanguage = prompt(message).toLowerCase()

switch (speakLanguage) {
    case 'chinese':
    case 'mandarin':
console.log("MOST number of native speakers!")
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers")
        break;
    case 'english':
        console.log("3rd place")
        break;
    case 'hindi':
        console.log("Number 4")
        break;
    case 'arabic':
        console.log("5th most spoken language")
        break;
        default:
            console.log("Great Language too :D")
}
*/

/** The Conditional (Ternary) Operator **/

actualPop > 33 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average")