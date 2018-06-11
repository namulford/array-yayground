let applicants = [{
    "id": 1,
    "name": {
      "first": "Jonah",
      "last": "Dennis"
    },
    "skill": "WDK",
    "yearsExperience": 3,
    "address": {
      "street": "997 Hollow Ridge Park",
      "city": "Gatesville",
      "state": "Texas",
      "zip": "76598"
    }
  }, {
    "id": 2,
    "name": {
      "first": "Frants",
      "last": "Cranage"
    },
    "skill": "EFTPOS",
    "yearsExperience": 2,
    "address": {
      "street": "7 Village Green Center",
      "city": "Glendale",
      "state": "Arizona",
      "zip": "85311"
    }
  }, {
    "id": 3,
    "name": {
      "first": "Megen",
      "last": "Orrell"
    },
    "skill": "eZ Publish",
    "yearsExperience": 0,
    "address": {
      "street": "49946 Eggendart Place",
      "city": "Evansville",
      "state": "Indiana",
      "zip": "47725"
    }
  }, {
    "id": 4,
    "name": {
      "first": "Jozef",
      "last": "McQuillan"
    },
    "skill": "RAN",
    "yearsExperience": 13,
    "address": {
      "street": "9027 Linden Court",
      "city": "Great Neck",
      "state": "New York",
      "zip": "11024"
    }
  }, {
    "id": 5,
    "name": {
      "first": "Nestor",
      "last": "Leversha"
    },
    "skill": "Hospitality Management",
    "yearsExperience": 2,
    "address": {
      "street": "473 Superior Street",
      "city": "Columbus",
      "state": "Ohio",
      "zip": "43215"
    }
  }, {
    "id": 6,
    "name": {
      "first": "Kellyann",
      "last": "Feehery"
    },
    "skill": "OSHA Certified",
    "yearsExperience": 4,
    "address": {
      "street": "35327 Golf View Lane",
      "city": "Greenville",
      "state": "North Carolina",
      "zip": "28410"
    }
  }, {
    "id": 7,
    "name": {
      "first": "Ban",
      "last": "Thrussell"
    },
    "skill": "Nutrition Education",
    "yearsExperience": 8,
    "address": {
      "street": "6853 Briar Crest Point",
      "city": "Austin",
      "state": "Texas",
      "zip": "78703"
    }
  }]
//use a for..of loop to print in a sentence what each of the
//candidate's skill is.  Like 'Ban Thrussell has the skill: Nutrition Education'
// name.first name.last skill
// for(applicant of applicants) {
//     let { name, skill } = applicant;
//     console.log(`${name.first} ${name.last} has the skill: ${skill}`);
// }

//then use map to do it
// let skillList = applicants.map((applicant) => {
//     let { name, skill } = applicant;
//     console.log(`${name.first}, ${name.last}, ${skill}`);
// });





// print out a sentence using the first name and city name
//for everyone whose city ends in 'ville'
//make it a sentence like 'KellyAnn lives in Greenville'


// let cityVille = applicants.filter(applicant => applicant.address.city.endsWith('ville'));
// cityVille.forEach(girl => {
//     let { name, address } = girl
//     console.log(`${name.first} lives in ${address.city}`);
// });

//say we want only the candidates who have 4 or more years of experience
//print those out using filter
// let experiences = applicants.filter(person => person.yearsExperience >= 4);
// for(person of experiences) {
//     console.log(`${person.name.first}`);
// }
// experiences.forEach(person => console.log(person.name.first));

//print out the total years experience if we hired all of these 
//candidates
let totalExperience = applicants.reduce((x, y) => x + y.yearsExperience, 0);
// console.log(totalExperience);
//The average level of experience is x
let average = totalExperience/applicants.length;
// console.log(applicants.length);
for(let i = 0; i < applicants.length; i++) {
    console.log(`Applicant ${i + 1} has ${applicants[i].yearsExperience} years experience`);
}
//find out the average amount of experience for all of our candidates