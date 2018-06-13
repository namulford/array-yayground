let customers = [{
    "id": 1,
    "first_name": "Gav",
    "last_name": "Tyre",
    "email": "gtyre0@facebook.com",
    "gender": "Male",
    "ip_address": "205.15.125.145",
    "pets": 0
  }, {
    "id": 2,
    "first_name": "Orion",
    "last_name": "Duffan",
    "email": "oduffan1@google.com.br",
    "gender": "Male",
    "ip_address": "195.18.222.219",
    "pets": 4
  }, {
    "id": 3,
    "first_name": "Raddie",
    "last_name": "Cuardall",
    "email": "rcuardall2@mayoclinic.com",
    "gender": "Male",
    "ip_address": "46.158.184.67",
    "pets": 2
  }, {
    "id": 4,
    "first_name": "Dulcie",
    "last_name": "Klouz",
    "email": "dklouz3@dagondesign.com",
    "gender": "Female",
    "ip_address": "254.170.109.135",
    "pets": 1
  }, {
    "id": 5,
    "first_name": "Charmain",
    "last_name": "Rijkeseis",
    "email": "crijkeseis4@imgur.com",
    "gender": "Female",
    "ip_address": "106.223.17.138",
    "pets": 0
  }]

//map
//use a for loop to create an array that is only the email addresses

// let emailArray = [];
// for(let i = 0; i < customers.length; i++) {
//   emailArray.push(customers[i].email);
// }
// console.log(emailArray);

//then use map to do it
// let emails = customers.map(customer => customer.email);
// console.log(emails);









//use a for loop to 
//print out the first name of everyone who has an 'a' in their first name

// let aTeam = [];
// for(let i = 0; i < customers.length; i++) {
//   if( customers[i].first_name.toLowerCase().indexOf('a') > -1) {
//     aTeam.push(customers[i].first_name);
//   }
// }
// console.log('aTeam', aTeam);

//then use filter to do the same

// let yoYo = customers.filter(abc => abc.first_name
//                                       .toUpperCase()
//                                       .includes(`A`));
// yoYo.forEach(abc => console.log(abc.first_name));





//use a for loop to find out
//how many pets do they all have
// let totalPets = 0;
// for(let i = 0; i < customers.length; i++ ) {
//   totalPets += customers[i].pets;
// }
//console.log(totalPets);
//then use reduce to do it
// let totalPets = customers.map(x => x.pets)
//                          .reduce((x, y) => x + y);
// console.log(totalPets);