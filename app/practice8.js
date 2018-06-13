let parkers = [{
    "buzzword": "Multi-channelled",
    "name": {
      "first": "Crawford",
      "last": "Muzzullo",
      "fullName": "Crawford Muzzullo"
    },
    "age": 94,
    "parkingRow": 3
  }, {
    "buzzword": "eco-centric",
    "name": {
      "first": "Norah",
      "last": "Flowerden",
      "fullName": "Norah Flowerden"
    },
    "age": 1,
    "parkingRow": 8
  }, {
    "buzzword": "migration",
    "name": {
      "first": "Philly",
      "last": "Coulsen",
      "fullName": "Philly Coulsen"
    },
    "age": 87,
    "parkingRow": 5
  }, {
    "buzzword": "internet solution",
    "name": {
      "first": "Eberto",
      "last": "Blofeld",
      "fullName": "Eberto Blofeld"
    },
    "age": 20,
    "parkingRow": 2
  }, {
    "buzzword": "hierarchy",
    "name": {
      "first": "Kory",
      "last": "Lowe",
      "fullName": "Kory Lowe"
    },
    "age": 46,
    "parkingRow": 3
  }, {
    "buzzword": "Intuitive",
    "name": {
      "first": "Stavro",
      "last": "Timmons",
      "fullName": "Stavro Timmons"
    },
    "age": 42,
    "parkingRow": 2
  }, {
    "buzzword": "local area network",
    "name": {
      "first": "Pyotr",
      "last": "Mager",
      "fullName": "Pyotr Mager"
    },
    "age": 29,
    "parkingRow": 6
  }, {
    "buzzword": "grid-enabled",
    "name": {
      "first": "Harley",
      "last": "Portsmouth",
      "fullName": "Harley Portsmouth"
    },
    "age": 65,
    "parkingRow": 3
  }, {
    "buzzword": "mobile",
    "name": {
      "first": "Jakob",
      "last": "Pero",
      "fullName": "Jakob Pero"
    },
    "age": 43,
    "parkingRow": 7
  }, {
    "buzzword": "projection",
    "name": {
      "first": "Gladi",
      "last": "Bertomieu",
      "fullName": "Gladi Bertomieu"
    },
    "age": 4,
    "parkingRow": 3
  }]

//use forEach to create an array of full names
//forEach returns undefined so this will return undefined
// let those = parkers.forEach((parker, funyuns) => parker.name.fullName);
// console.log(those);
//instead do this
//parkers.forEach(parker => console.log(parker.name.fullName));    

  //use map to create an array of full names
  //parkers.map((names, index) => console.log(`Customer number ${index + 1}'s name is ${names.name.fullName}`));
//   let thosePeople = parkers.map(parker => parker.name.fullName);
//   console.log(thosePeople);

//use filter to print out the buzzwords that have a dash in them
// var dashes = parkers.filter(person => person.buzzword.lastIndexOf('-') > -1);
// dashes.forEach(dash => console.log(dash.buzzword));






  //use filter print out the ones who have parked in rows 2 or 3
// let rows2or3 = parkers.filter(parker => {
//     let row = parker.parkingRow;
//     return row === 2 || row === 3;
// });
// rows2or3.forEach(print => console.log(`${print.name.fullName} is parked in row ${print.parkingRow}`));

  //use reduce to find out what the sum of their ages is
// let sumOfAges = parkers.reduce((x, y) => x + y.age, 0);
// console.log(sumOfAges);

//chain map and reduce to get the average age of the parkers
// let average = (parkers.map(parker => parker.age).reduce((x, y) => x + y)) / parkers.length;

// console.log(average);







  //HOMEWORK:

  //use map then reduce to get the average age of all of the parkers
  //NOTE: map over the parkers so you just have ages in an array,
  //    then reduce that array 
  //    then get the average using that reduction

  //use filter then reduce to find out the average age 
  //of those who parked in rows 5 and up

  //use filter then reduce to get the average age of those who had
  //a one word buzzword versus the average age of those
  //whose buzzword is more than one word(ie has dashes or spaces)