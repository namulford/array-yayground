let hobbies = [
    {
        name: 'running',
        equipment : ['shoes', 'shorts', 'shirt'],
        hrsInWeek : 8
    }, {
        name: 'playing bass',
        equipment : ['bass'],
        hrsInWeek : 4
    }, {
        name: 'reading',
        equipment : ['book', 'glasses'],
        hrsInWeek : 6
    }, {
        name: 'walking',
        equipment : ['shoes', 'shorts', 'shirt'],
        hrsInWeek : 7
    }
]
//map
let numbers = [5, 6, 8, 10, 100, 2000];
//using map, create a new array that multiplies
//each of these elements by 5
// let by5 = [];
// for(let i = 0; i < numbers.length; i++) {
//     by5.push(numbers[i] * 5);
// }
// let by5 = numbers.map(number => number * 5);
// console.log(by5);


//filter
//using filter, create a new array that 
//has all of the numbers that are greater than 9
let moreThan9 = numbers.filter(number => number > 9);
//console.log(moreThan9);

//reduce
//using reduce, get the sum of all of our numbers
// let total = numbers.reduce((x, y) => x + y);
// console.log(total);

//we want to print out the names of the activities that
//take longer than 5hr/week to do
// let longerThan5 = hobbies.filter(hobby => hobby.hrsInWeek > 5);
// longerThan5.forEach(hobby => console.log(hobby.name));

//we want to add up all of the hours that it will take
//to complete all  of these activities
//which method should we use

// let totalHours = hobbies.reduce((accumulator, next) => accumulator + next.hrsInWeek, 0);
// console.log(totalHours);

//we want to print out the names of activities that 
//take less than 3 pcs of equipment to perform
//which method should we use
// let portableHobbies = hobbies.filter(hobby => hobby.equipment.length < 3);
// portableHobbies.forEach(hobby => console.log(hobby.name));

//we want to print out the names of all of the activities
//which method should we use
// let hobbyNames = hobbies.map(hobby => hobby.name);
// hobbyNames.forEach(hobby => console.log(hobby));
