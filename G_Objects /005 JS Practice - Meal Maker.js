// << MEAL MAKER >>

// -------------- 

// STEP 1
// Start by creating an empty menu object.

let menu = {
  _courses: {
    appetisers: [],
    mains: [],
    desserts: [],
  },
  get getAppetisers () {  
   let {appetisers} = menu['_courses'];
   return appetisers;
  },
  get getMains () {
    let {mains} = menu['_courses'];
    return mains;
  },
  get getDesserts () {
    let {desserts} = menu['_courses'];
    return desserts;
  },
  set setAppetisers (newDish) {
    this['_courses'].appetisers.push(newDish)
  },
  set setMains (newDish) {
    this['_courses'].mains.push(newDish)
  },
  set setDesserts (newDish) {
    this['_courses'].desserts.push(newDish)
  },
  get courses () {
    return { // returns a full menu
      appetisers: this.getAppetisers, 
      mains: this.getMains,
      desserts: this.getDesserts, 
    }; 
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    let newDish = {
      name: dishName,
      price: dishPrice,
      }
    switch (courseName) { // uses switch case to map to correct course method 
      case 'appetisers' :
        this.setAppetisers = newDish;   // uses the setter method
        break;
      case 'mains':
        this.setMains = newDish;   
        break;
      case 'desserts':
        this.setDesserts = newDish;  
        break;
      default:  
        break;
    };
  },
  getRandomDishFromCourse (courseName) {
    let dishes; 
    if (courseName === 'appetisers') {dishes = this.getAppetisers // if...else statement maps it to correct course array
      } else if (courseName === 'mains') {dishes = this.getMains // uses getter method 
      } else if (courseName === 'desserts') {dishes = this.getDesserts
      } else { console.log('incorrect input')}
    // console.log(dishes);
    // console.log(dishes.length); Output: 2
    let random = Math.random() * dishes.length; 
    // console.log(random);
    let x = [Math.floor(random)]
    let dish = dishes[x]; // Output: { name: 'Veg', price: '£5' }
    // console.log(dish);
    return dish; // Outputs: undefined
  },
}

// Adding dishes to each course >> 
menu.addDishToCourse ('appetisers', 'Soup', 10); 
menu.addDishToCourse ('appetisers', 'Pate', 10);
menu.addDishToCourse ('mains', 'Chicken', 20);
menu.addDishToCourse ('mains', 'Fish', 20);
menu.addDishToCourse ('desserts', 'Jelly', 5);
menu.addDishToCourse ('desserts', 'Cake', 5);

// TESTING >> 
// console.log(menu.getRandomDishFromCourse('mains')); // 
// console.log(menu.courses); // prints the full menu 
// console.log(menu.getAppetisers)  // This works!
// console.log(Object.values(menu.getAppetisers))

const generateRandomMeal = () => {
  console.log("Menu:")
  let appetiser = menu.getRandomDishFromCourse ('appetisers');
  appetiser = (Object.values(appetiser));
  console.log('To Start: ' + appetiser[0])
  let main = menu.getRandomDishFromCourse ('mains');
  main = (Object.values(main));
  console.log('The Main: ' + main[0])
  let dessert = menu.getRandomDishFromCourse ('desserts');
  dessert = (Object.values(dessert))
  console.log('To Finish: ' + dessert[0]);
  let cost = appetiser[1] + main [1] + dessert [1] 
  console.log('The Damage: £' + cost)
}

let meal = menu.generateRandomMeal() 
console.log(meal); 
// ISSUE ^ this should not be called until meal is logged
// I believe it is because generateRandomMeal should not be printing anything
// Also that function should be within the Object 'menu'. Rectify this tomorrow! 

/* The below is alternative code for STEP 10
// It uses a 'for' loop to avoid repetition of code, but is probably less clear..! 
const generateRandomMeal = () => {
let courses = ['appetisers','mains','desserts'];
for (i = 0; i < courses.length; i++ ) {
  console.log(courses[i] + ':') ;
  console.log(menu.getRandomDishFromCourse(courses[i]));
  } 
} */

// STEP 2
// Add a '_courses' property to your menu object, set its value to an empty object 
// This property will ALLOW mapping between each course and the dishes available to order in that course

// STEP 3
// Create 3 x properties inside '_courses' object called 'appetisers', 'mains' and 'desserts'
// Each should initialise to an empty array
// I queried whether this should be an array when it needs to hold key-value pairs
// However we CAN have an array of objects which would be ideal

// STEP 4
// Create getter & setter methods for the appetizers, mains and desserts properties

// STEP 5
// Inside your menu object, create an empty getter method for the _courses property.

// STEP 6
// Inside the 'courses' getter method, return an object that contains key/value pairs for appeisers, mains and desserts

// STEP 7 + 8
// Inside the 'menu' object, create a method .addDishToCourse() which will be used to add a new dish
// It takes 3 parameters: courseName, dishName, dishPrice.
// .addDishToCourse() should create an object called 'dish' which has a name and price. 
// The method should then push this dish into the appropriate array in menu['_courses'].

// STEP 9 + 10
// Create a function to get a random dish from a course on the menu, to generate a random meal
// Create a method inside the 'menu' object called .getRandomDishFromCourse() with parameter 'courseName'
// This should retrieve the array of given course's dishes, to be stored in variable 'dishes',
// Then it should generate a random index and return the dish located at that index in 'dishes'.

// STEP 11
// Create a .generateRandomMeal() function that automatically generates a three-course meal
// This creates an 'appetiser' variable set to result of calling .getRandomDishFromCourse(appetizers)
// Do the same for 'mains' and 'desserts'
// It returns a string that contains the name of each of the dishes and total price of each meal

