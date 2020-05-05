/* << BUILD A DIGITAL SCHOOL CATALOGUE >>
a catalogue to hold quick reference material for each school in the city


// --------------

  01  TASK >> 

We need to create classes for primary, middle and high schools
As classes share properties and methods, each will inheirt from parent 'School' class

SCHOOL: 
  Properties: name (string), level (one of three strings: 'primary', 'middle', 'high'), numberOfStudents (no.)
  Getters: all properties have getters
  Setters: the numberOfStudents has a setter
  Methods: .quickFacts() and static method: .pickSubstituteTeacher() 


PRIMARY: 
  Unique Properties: pickupPolicy (string)


MIDDLE: 
  Unique Properties: N/A

HIGH: 
  Unique Properties: sportsTeams (array of strings) 


// -------------- */

// STEP 1 - create the parent class

class school {
  constructor (name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get getName() {
    return this._name; 
  }

  get getLevel() {
    return this._level; 
  }

  get getNumberOfStudents() {
    return this._numberOfStudents; 
  }

  set setNumberOfStudents(number) {
    if (typeof number === 'number') {
      this._numberOfStudents = number;
    } else { console.log("Invalid input: numberOfStudents must be set to a Number.")
  }}

  quickFacts () {
    console.log(`${this.getName} educates ${this.getNumberOfStudents} students at the ${this.getLevel} school level`)
  }

  static pickSubstituteTeacher (substituteTeachers) {
    console.log(substituteTeachers);
    let l = substituteTeachers.length;
    let i = Math.floor(Math.random() * l);
    return substituteTeachers[i]; 
  }
}

/* //  TESTING to check that the parent class 'school' worked: 
const classTest = new school ('ClassTest', 'middle', 33)
console.log(classTest.getLevel);
console.log(classTest.getName);
classTest.setNumberOfStudents = 30;
console.log(classTest.getNumberOfStudents); 
classTest.quickFacts(); 
let x = ["Miss Hill", "Miss Rabbit", "Miss Cornelia"];
console.log(school.pickSubstituteTeacher(x)); */

class primary extends school {
  constructor (name, numberOfPupils, pickupPolicy) { // Parameters to be provided during creation of an object instance using this subclass 
    super (name, "primary", numberOfPupils ); // 'super' to pass arguments that the parent constructor() uses in the same order
    this.pickupPolicy = pickupPolicy; 
  }

  get getPickupPolicy() {
    return this.pickupPolicy; 
  }
}

class middle extends school {
  constructor (name, numberOfPupils) {
    super (name, 'middle', numberOfPupils);
  }
}

class high extends school {
  constructor (name, numberOfPupils) {
    super (name, 'high', numberOfPupils);
    this.sportsTeams = [];
  }

  get getSportsTeams() {
    return this.sportsTeams; 
  }

  set setSportsTeams(team) {
    if (typeof team === "string") {
      this.sportsTeams.push(team)
   }
  }
}

/* // TESTING to check that the subclasses eg 'primary' & 'high' worked: 

const class1 = new primary ('Class1', 33, 
'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
console.log(class1.getLevel);
console.log(class1.getName);
// class1.setNumberOfStudents = 25
console.log(class1.getNumberOfStudents); 
console.log(class1.getPickupPolicy); 
class1.quickFacts()

const class3 = new high ('Class3', 20)
console.log(class3.getLevel);
console.log(class3.getName);
class3.setNumberOfStudents = 22
console.log(class3.getNumberOfStudents); 
class3.setSportsTeams = "Rugby"
console.log(class3.getSportsTeams);  */
