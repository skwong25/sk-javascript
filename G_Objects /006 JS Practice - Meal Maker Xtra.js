/* Alternative code for STEP 10 function: 
It uses a 'for' loop to avoid repetition of code, but ended up seeming more complicated?!?
It pushes the values into an array, and maps that array into formatting.*/

const getRandomDishFromCourse = (courseName) => {
  let dishes; 
  let dish;
  if (courseName === 'appetisers') {dish = { Name:'Pate', Price: 10};  
    } else if (courseName === 'mains') {dish = { Name:'Pie', Price: 10}; 
    } else if (courseName === 'desserts')  {dish = { Name:'Pudding', Price:10};
    } else { console.log('incorrect input')
    }
  return dish;
}

const generateRandomMeal = () => {
  let courses = ['appetisers','mains','desserts'];
  let dishes = [];
  for (i = 0; i < courses.length; i++ ) {
    let dish = getRandomDishFromCourse(courses[i]);
    dishes.push(dish);
    }
  for (i = 0; i < dishes.length; i++ ) { // This takes property values out of Objects into arrays
  dishes[i] = Object.values(dishes[i]) 
  } 
  let cost = dishes[0][1] + dishes[1][1] + dishes[2][1]
  return `Menu: ${dishes[0][0]},  ${dishes[1][0]},  ${dishes[2][0]} // Total: £${cost}`;
}

console.log(generateRandomMeal())
// Output: Menu: Pate,  Pie,  Pudding // Total: £30