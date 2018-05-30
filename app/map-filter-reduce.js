//https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464

var persons = [
    {firstname : "Ray", lastname: "Benson", height: 'tall', weight: 204},
    {firstname : "Cindy", lastname: "Cashdollar", height: 'tall', weight: 170},
    {firstname : "Redd", lastname: "Volkaert", height: 'short', weight: 250}
];

//REVIEW: 
// first use a for loop to just print the short people
// let shorter = [];
// for(let person = 0; person < persons.length; person++) {
//     if(persons[person].height === 'short') {
//         shorter.push(persons[person]);
//     }
// }
//let shorter = persons.filter(person => person.height === 'short');
//console.log('shorter', shorter);
//shorter.forEach(shorty => console.log(shorty.firstname));

// 1st map example
//multiply each element of an array by .10 to how much they saved
//first use a for...of loop to do it
let cart = [1.50, 47.99, 12.99];
// let savings = [];
// for(let i = 0; i < cart.length; i++) {
//     savings.push((cart[i] * .1).toFixed(2));
// }

//now with map
// let savings = cart.map(cost => {
//     return (cost * .10).toFixed(2);
// })
//console.log('savings', savings);

// 2nd map example
//mulitply each of these numbers by 1/2
//first with for loop
// let oldArray = [25, 6, 4];
// let newArray = [];
// for(let i = 0; i < oldArray.length; i++) {
//     newArray.push(oldArray[i] * .5);
// }
//now with map
//let newArray = oldArray.map(el => el * .5);
//console.log('New Array', newArray);

//use a for loop to create an array of firstnames
// let fullNames = [];
// for(let i = 0; i < persons.length; i++) {
//     fullNames.push(`${persons[i].firstname} ${persons[i].lastname}`)
// }

//then use map
//let fullNames = persons.map((person, index, array) => `${person.firstname} ${person.lastname}`);
//console.log('full names', fullNames);


//1st reduce example
//first we use a for loop to add up all the numbers in the array
// let numbers = [1, 2, 3];
// let sum = 0;
// for(let i = 0; i < numbers.length; i ++) {
//     sum += numbers[i];
// }

//then we use reduce to do the same thing
// let numbers = [1, 2, 3];
// var sum = numbers.reduce((start, num) => {
//     return start + num;
// }, 0);
//console.log('The sum is', sum);
//Whatever you return from your reducer callback gets used as 
//the accumulator when called on the next item in the array
//so when you get to the final item of the array
//if nothing is returned you get undefined 👎

//2nd reduce example
//concatenate the words
//first using a for loop
//let words = ['reducing', 'is', 'simple'];

// let message = '';
// for ( let i = 0; i < words.length; i++ ){
//   message += words[i];
// }

// let message = words.reduce((sentence, more) => {
//     return sentence += more;
// });

//console.log('message', message);

//now back to the persons
//first use for loop to find out if they can all get on the elevator together
// let totalWeight = 0;
// for(let i = 0; i < persons.length; i++) {
//     totalWeight += persons[i].weight;
// }
//then do it using reduce 

//let totalWeight = persons.reduce((x, y) => x + y.weight, 0);

//perhaps they want to carry a guitar amplifier with them on the elevator that weighs 150lbs
// let totalWeight = persons.reduce((accumulator, currentValue) => {
//     return accumulator += currentValue.weight;
// }, 150);
//console.log('Total weight', totalWeight);


