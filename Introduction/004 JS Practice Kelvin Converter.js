// the forecast today is 293 kelvin
const kelvin = 370;

// the forecast in celsius is 273 less than kelvin
const celsius = kelvin - 273;

// celsius conversion to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// the fahrenheit value is to be rounded down to nearer integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//celsius conversion to newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`)
