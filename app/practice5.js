let animals = [{
    "id": 1,
    "commonName": "Long-finned pilot whale",
    "scienceName": "Globicephala melas",
    "photoUrl": "https://robohash.org/voluptasquaeducimus.png?size=50x50&set=set1",
    "hypePhrase": "Business-focused multimedia structure",
    "gender": "M",
    "legs": 4,
    "name": {
      "first": "Hansiain",
      "last": "Gulland"
    }
  }, {
    "id": 2,
    "commonName": "Leopard, indian",
    "scienceName": "Panthera pardus",
    "photoUrl": "https://robohash.org/blanditiisveliteum.bmp?size=50x50&set=set1",
    "hypePhrase": "Multi-channelled intangible algorithm",
    "gender": "M",
    "legs": 4,
    "name": {
      "first": "Thornton",
      "last": "Jorczyk"
    }
  }, {
    "id": 3,
    "commonName": "European spoonbill",
    "scienceName": "Platalea leucordia",
    "photoUrl": "https://robohash.org/eteamagni.jpg?size=50x50&set=set1",
    "hypePhrase": "Open-architected systemic synergy",
    "gender": "M",
    "legs": 2,
    "name": {
      "first": "Dudley",
      "last": "Realy"
    }
  }, {
    "id": 4,
    "commonName": "Long-necked turtle",
    "scienceName": "Chelodina longicollis",
    "photoUrl": "https://robohash.org/quispraesentiumconsectetur.png?size=50x50&set=set1",
    "hypePhrase": "Universal contextually-based benchmark",
    "gender": "F",
    "legs": 4,
    "name": {
      "first": "Aurore",
      "last": "Canizares"
    }
  }, {
    "id": 5,
    "commonName": "Blue and gold macaw",
    "scienceName": "Ara ararauna",
    "photoUrl": "https://robohash.org/possimusquodalias.bmp?size=50x50&set=set1",
    "hypePhrase": "Realigned logistical alliance",
    "gender": "F",
    "legs": 2,
    "name": {
      "first": "Aridatha",
      "last": "Crose"
    }
  }]


//print out an array of all their full names
//map
//animals.map(animal => console.log(`Animal number ${animal.id}: ${animal.name.first} ${animal.name.last} ${2 + 2}`));

// let tagLines = animals.map(animal => `${animal.name.first} ${animal.name.last}: "${animal.hypePhrase}"`);
// console.log(tagLines);

//print out a sentence that tells us their tagline

//filter
// let aNames = animals.filter(animal => animal.name.first.toLowerCase().startsWith('a'));
// for(let i = 0; i < aNames.length; i++) {
//   console.log(aNames[i])
// }
// for(name of aNames) {
//   console.log(name.name.first);
// }
//aNames.forEach(onlyAs => console.log(onlyAs.name.first));
// print out their first name if it begins with 'a'

//print out their full name if their science name has
//3 or more 'a' in it
// let threeAs = animals.filter(animal => {
//   let count = 0;
//   animal.scienceName.toLowerCase().split('').forEach(letter => {
//     if(letter === 'a'){
//       count += 1;
//     }
//   })
//   if(count > 2) {
//     return true
//   }
// })
// console.log(threeAs);

//reduce
// let legsCount = animals.reduce((accumulator, next) => accumulator + next.legs, 0);
// console.log(legsCount);
//what is the sum of all of their legs
// let idSum = animals.reduce((x, y) => x + y.id, 0);
// console.log(idSum);
//what is the sum of all of their ids