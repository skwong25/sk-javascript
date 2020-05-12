/* << WORKAROUND >>

Workaround is a HR program that returns basic info about an employee, based on salary data.
Using WorkAround, one can use an employee's salary data to:
- return the cadre of the employee (entry level, mid level or senior level)
- calaculate employee tax rates
- return employee benefits
- calculate employee bonuses
- calculate the total amount an employee can be reimbursed 
  based on total value of their health, housing or wellness benefits 
  
The task is to modify the program so it makes use of JS modules 
dmonstrating the different ways to export and import modules */

// STEP 1: Segment the program by placing behaviour and data in employee.js
//         and use of the data in workAround.js

// STEP 2: Turn the contents of employee.js into a module. 
//         Set Employee to an object that represents the module
//         Define all functions as properties on the Employee object except payGrades

// STEP 3: Check that every property of the Employee object is defined on Employee
//         Eg. Ensure that every instance of 'salary' is defined as Employee.salary

// STEP 4: 


let salary = 100000;

// defines a object with nested properties associated with different cadres
let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

// defines a function with 'if' statements that SHOULD take 'salary' as an argument, and using that, determines which cadre it is. 
function getCadre() {
  if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

// defines a function chaining the return value of getCadre() to access the relevant taxMultiplier. 
function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * salary;
}

// defines a function to return the 'benefits' array of the relevant Cadre, returned as a joined-up string seperated by commas.
function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

// defines a function to return 102% of salary
function calculateBonus() {
  return .02 * salary;
}

// defines a function that iterates through the benefits array of the relevant Cadre, and increases the totalBenefitsValue by a specific amount for each benefit in the array
function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

// ---------------------------------

// STEP 1: 
// workAround.js >> 

// defines function to log output onto console
function getEmployeeInformation(inputSalary) {
  salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);


// ---------------------------------

// STEP 2: 
// employee.js >> 

let Employee = {
  salary : 100000,
 }
 
 let payGrades = {
   entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
   midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
   seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
 };
 
 // Note this is a flexible way to include the function within the Employee object 
 Employee.getCadre = function () {
   if (this.salary >= payGrades.entryLevel.minSalary && this.salary <= payGrades.entryLevel.maxSalary) {
     return 'entryLevel';
   } else if (this.salary >= payGrades.midLevel.minSalary && this.salary <= payGrades.midLevel.maxSalary) {
     return 'midLevel';
   } else return 'seniorLevel';
 }
 
 Employee.calculateTax = function () {
   return payGrades[this.getCadre()].taxMultiplier * this.salary;
 }
 
 Employee.getBenefits = function () {
   return payGrades[this.getCadre()].benefits.join(', ');
 }
 
 Employee.calculateBonus = function () {
   return .02 * this.salary;
 }
 
 Employee.reimbursementEligibility = function () {
   let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
   let totalBenefitsValue = 0; 
   let employeeBenefits = payGrades[this.getCadre()].benefits;
   for (let i = 0; i < this.employeeBenefits.length; i++) {
     totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
   }
   return totalBenefitsValue;
 }
 

// CHECK - check that functions are set as properties within the Employee object
console.log(Employee);
/* Output: 
{ salary: 100000,
  getCadre: [Function],
  calculateTax: [Function],
  getBenefits: [Function],
  calculateBonus: [Function],
  reimbursementEligibility: [Function] } */

// STEP 4: 
// Modify to export variables as aliases
// Note we need to modify each function so they are no longer properties on the Employee object.Eg: 

Employee.calculateTax = function () {} 

// becomes

function calculateTax = () {}

// Export statement: 
export { Employee, getCadre as cadre, calculateBonus as bonus, getBenefits as benefits, 
  calculateTax as tax, reimbursementEligibility as reimbursement }
