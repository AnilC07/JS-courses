// // // // usetrict;

// // // /**  Values and Variables **/

// // // let country = 'France';
// // // let continent = 'Europe';
// // // let population = 67.8;

// // // console.log(country) // France
// // // console.log(continent) // Europe
// // // console.log(population) // 67.8

// // // /** Data types **/

// // // let isIsland = false;
// // // console.log(typeof (isIsland)); // Boolean
// // // console.log(typeof (country)); // String
// // // console.log(typeof (continent)); // String
// // // console.log(typeof (population)); // Number
// // // /** let, const, var (à voir)**/

// // // let language = "French";

// // // /** Basic Operators **/

// // // let halfCountryPopulation = population / 2;
// // // // console.log(halfCountryPopulation) => 33.9
// // // halfCountryPopulation++
// // // // console.log(population) =>67.8
// // // // console.log(population>6) => true
// // // // console.log(population<33) => false

// // // const countryP = 'Portugal';
// // // const continentP = 'Europe';
// // // const populationP = 11;
// // // const languageP = 'Portuguese';
// // // const descriptionP1 = countryP + " its in " + continentP + ", and it's " + populationP + " million people speake " + languageP;
// // // // => Portugal its in Europe, ands its 11 million people speake Potuguese

// // // /** Strings and Template Literals **/

// // // const descriptionP2 = `${countryP} its in ${continentP} and it's ${populationP} million people speak ${languageP}`
// // // // => Portugal its in Europe, ands its 11 million people speake Potuguese

// // // /** Taking Decisions: if / else Statements **/

// // // if (populationP > 33) { // false
// // //     console.log("Portugal's population is above average")
// // // } else { // true
// // //     console.log("Portugal's population is 22 million below average")
// // // }
// // // // => Portugal's population is 22 million below average

// // // /** Type Conversion and Coercion **/

// // // console.log('9' - '5') // => 4
// // // console.log(('19' - '13') + '17') // => 617 
// // // console.log(('19' - '13') + 17) // => 23
// // // console.log('123' < 57) // => false
// // // console.log((5 + 6) + '4' + (9 - 4 - 2)) // => 1143 

// // // /** Equality Operators: == vs. === **/

// // // /* let numNeighbours = parseInt(prompt('How many neighbour countries does your country have?'))
// // // if(numNeighbours === 1){
// // //     console.log('Only 1 border!')
// // // }else if(numNeighbours > 1){
// // //     console.log('More than 1 border')
// // // }else{
// // //     console.log('No borders')
// // // } */

// // // /**  Logical Operators **/

// // // const spokenLanguage = 'english'
// // // const actualPop = 11;
// // // const isIslandP = false

// // // if (spokenLanguage == 'english' && actualPop < 50 && isIslandP === false) {
// // //     console.log('You should live in Portugal :)')
// // // } else {
// // //     console.log('Portugal does not meet your criteria :(')
// // // }

// // // /**  The switch Statement **/
// // // /*
// // // const message = 'wich language do you speak ?'
// // // const speakLanguage = prompt(message).toLowerCase()

// // // switch (speakLanguage) {
// // //     case 'chinese':
// // //     case 'mandarin':
// // // console.log("MOST number of native speakers!")
// // //         break;
// // //     case 'spanish':
// // //         console.log("2nd place in number of native speakers")
// // //         break;
// // //     case 'english':
// // //         console.log("3rd place")
// // //         break;
// // //     case 'hindi':
// // //         console.log("Number 4")
// // //         break;
// // //     case 'arabic':
// // //         console.log("5th most spoken language")
// // //         break;
// // //         default:
// // //             console.log("Great Language too :D")
// // // }
// // // */

// // // /** The Conditional (Ternary) Operator **/

// // // actualPop > 33 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average")

// // /** Tip calculator **/



// // // let message = "";

// // function tipCalculator(facture) {
// //     let tip = 0;
// //     let total = 0;
// //     facture >= 50 && facture <= 300 ? tip = 0.15 : tip = 0.2
// //     total = tip * facture
// //     let message = `The bill was ${facture}, the tip was ${tip}, and the total value ${total}`;
// //     console.log(message)
// //     // console.log(message)
// // }
// // tipCalculator(275);
// // tipCalculator(40);
// // tipCalculator(430);

// // // /** Functions **/

// // const describeCountry = (country, population, capitalCity) => {


// //     const message = `${country} has ${population} million people and its capital city is ${capitalCity}`

// //     return message
// // }

// // const finland = describeCountry('Finlande', 6, "Helsinki")
// // const france = describeCountry('France', 68, "Paris")
// // const turkey = describeCountry('Turkey', 78, "Ankara")

// // console.log(finland)
// // console.log(france)
// // console.log(turkey)

// /** Function Declarations vs. Expressions **/
// const percentageOfWorld1 = (population) => {
//     console.log(population)
//     return ((population / 7900) * 100)
// }

// let percentage1 = Math.round(percentageOfWorld1('1441'))
// console.log(typeof percentage1)

// console.log(percentage1 + '%')

// const percentageOfWorld2 = (population) => {
//     return ((population / 7900) * 100)
// }
// let percentage2 = Math.round(percentageOfWorld2(75)) + '%'
// console.log(typeof percentage2)
// console.log(percentage2)

// const describePopulation = (country, population) => {

//     // let percentageOfChina = percentageOfWorld1(population)
//     let message = `${country} has ${population} million people, 
//     which is about ${percentageOfWorld1(population)}% of the world.`;
//     console.log(message)
//     return message
// }

// describePopulation('China', 1441)

// /** Introduction to Arrays **/

// var population = [10, 35, 68, 141];
// console.log(population)
// let arrayLen = population.length == 4 ? true : false
// var percentage = [
//     percentageOfWorld2(population[0]),
//     percentageOfWorld2(population[1]),
//     percentageOfWorld2(population[2]),
//     percentageOfWorld2(population[3])
// ]

// console.log(percentage)

// var neighbours = ['France', 'Belgium', 'Italy', 'Swiss', 'Spain', 'Germany']
// neighbours.push('Utopia')
// console.log(neighbours)
// neighbours.pop()
// console.log(neighbours)
// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D')
// } else {
//     console.log('It\'s a central European country :D')
// }
// neighbours[neighbours.indexOf('Belgium')] = 'Calcuta'
// console.log(neighbours)


// let myCountry = {
//     country: 'France',
//     capital: 'Paris',
//     language: 'French',
//     population: 68,
//     neighbours: ['Belgium', 'Italy', 'Swiss', 'Spain', 'Germany'],
//     describe: function () {
//         //    return this.capital
//         message = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//         return message
//     },
//     checkIsland: function () {
//         return this.neighbours.length = 0 ? true : false;
//     }
// }

// //  console.log(myCountry.describe)

// //  message = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`

// console.log(myCountry.describe())
// console.log(myCountry.checkIsland())

// const pop = [10, 141, 25, 35]
// // console.log(pop)
// const percen2 = [];

// for (let i = 1; i < pop.length; i++) {
//     const percen = percentageOfWorld1(pop[i])
//     percen2.push(percen)
// }
// console.log(percen2)

// let listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];
// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log('Neighbours ' + listOfNeighbours[i][j])
//     }
// }

// let anil = {
//     fullName: 'Anil CELIK',
//     mass: 75,
//     height: '1.70',
//     calcBMI: function () {
//         return (this.mass / (this.height * this.height))
//     }
// }

// let baris = {
//     fullName: 'Baris CELIK',
//     mass: 88,
//     height: '1.72',
//     calcBMI: function () {
//         return (this.mass / (this.height * this.height))
//     }
// }

// console.log(anil.calcBMI())
// console.log(baris.calcBMI())

// anil.calcBMI() < baris.calcBMI() ? console.log('Baris est plus gros') : console.log('Anil est plus gros')

const maxTemp = [17,21,23]
console.log(maxTemp.length)

for (let i = 0; i <= maxTemp.length -1; i++) {
    let message='';
    if(i == 0){
        message = '... ' + maxTemp[i] + ' in ' + i+1 + ' days ...'

    }else{
    message += maxTemp[i] + ' in ' + i + ' days ...'
}
console.log(message)
//     else{
//     // message += '... ' +  'in ' + [i+1] + ' days ' + maxTemp[i] + 'C ...'
// }
}