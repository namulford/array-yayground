let doggos = [
    { 
        name: 'Bean',
        friendly: true,
        treatsPerDay: 12
    }, {
        name: 'Ginny',
        friendly: true,
        treatsPerDay: 4
    }, {
        name: 'Berlin',
        friendly: false,
        treatsPerDay: 8
    }, {
        name: 'Yahmobethere',
        friendly: true,
        treatsPerDay: 0
    }
]
//map
//use map to convert all of the names to uppercase
let names = ['Elian', 'Lance', 'Thuy', 'Clota'];

let upperCaseNames = names.map(firstnames => firstnames.toUpperCase());
console.log(`Question #1: ${upperCaseNames}`);

// //use map to change all of the doggos names to uppercase

let upperCaseDoggos = doggos.map((dog, index, array) => dog.name.toUpperCase())
console.log(`Question #2: ${upperCaseDoggos}`);

// //console.log('doggos in uppercase', doggoYell);

// //filter
let words = ['fa', 'lettin', 'me', 'be', 'myself'];
// //use filter to print out the words that are longer
// //than two letters long

let longer = words.filter(moreThanTwo => moreThanTwo.length > 2)
console.log(`Question #3: ${longer}`);
// //console.log('Longer words', longer);

// //use filter to print out the names of the doggos
// //that are friendly
// //console.log('Friendly doggos', goodDogs);

let goodDogs = doggos.filter(niceDogs => niceDogs.friendly === true);
// console.log(goodDogs);
goodDogs.forEach(friendlyDogs => console.log(`Question #4: ${friendlyDogs.name}`))

// //reduce
let wordsArray = ['fa', 'lettin', 'me', 'be', 'myself'];
// //use reduce to concatenate the above words into one word

let sentence = wordsArray.reduce((sentence, more) => sentence += more)

console.log(`Question #5: ${sentence}`);

let grades = [90, 95, 12, 87, 42];
// //use reduce to add up all the numbers then divide to get the average

let finalGrade = grades.reduce((start, num) => start + num / grades.length, 0);
console.log(`Question #6: ${finalGrade}`)

// //use reduce to find out how many treats you'll need 
// //if you were going to dogsit all of the doggos for one day

let dailyTreats = doggos.reduce((treats, accumulativeTreats) => treats + accumulativeTreats.treatsPerDay, 0);

console.log(`Question #7: ${dailyTreats}`);