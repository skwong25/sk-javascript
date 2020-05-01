// can you do a successful for...in loop for CA eg? 

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } 
      },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// --------------

/*
for (let man in spaceship['crew']) {
  console.log(spaceship['crew'].man);
  }; 
// Output: 'undefined' - NOTE this doesn't work - the subject 'man' needs to be in []*/

// --------------

for (let man in spaceship['crew']) {
  console.log(spaceship['crew'][man].name);
  }; 
// Output: Lily Dan Clementine Shauna
// This worked before 'man' is in []

// --------------

for (let person in spaceship.crew) {
  console.log(spaceship.crew[person]);
}

/* Output: 
{
  name: 'Lily',
  degree: 'Computer Engineering',
  cheerTeam: [Function: cheerTeam]
}
{
  name: 'Dan',
  degree: 'Aerospace Engineering',
  agree: [Function: agree]
}
{
  name: 'Clementine',
  degree: 'Physics',
  announce: [Function: announce]
}
{
  name: 'Shauna',
  degree: 'Conservation Science',
  powerFuel: [Function: powerFuel]
} */
