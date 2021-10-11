/**
 * Always try to make float to int before arithmetic computation, for error free operation.
   i.e: (unPrecisedNum) => (unPrecisedNum).toFixed(2) * 10 / 10;
 * except === and !== , all comparison operator performs type conversion. 
 * (➡ +null is 0) (➡ +undefined is NaN)
 * Use ^ for condition where both same returns 0.
 * if + , then always concat until both values are not string.
 * for Arithmetic operator except +, return type will be number or NaN.
 * for searching child obj search first in constructor of parent, then its prototypes.
 * for accessing own prototype object use obj.prototype method.
   for accessing parent prototypes, object use obj.__proto__ method.
 * JavaScript Strings are immutable
 * Set objects are collections of values. You can iterate its elements in insertion order. 
   A value in a Set may only occur once; it is unique in the Set's collection.
 * Integers are accurate up to 15 digits. (i.e: 9999999999999999 => 10000000000000000); 
 * TypeError, SyntaxError, ReferenceError, EvalError, InternalError, and RangeError
 * if u import a name and not found in exported js file, 
   it imports the " export default object"  
 * 
*/

//-------------------------- Using label Breaking outer loop --------------------------
lbl: for (let i = 0, j = 0; i < 10 && j !== 1; i++) {
  for (j = 0; j < 10; j++) {
    console.log(j);
    if (j === 1) break lbl;
  }
  console.log("i = ", i);
}

//---------------------------------- inheritance ----------------------------------
// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    console.log("Creating student class");

    // call the super class constructor and pass in the name parameter
    super(name);
  }
}

let student1 = new Student("Jack");
student1.greet();

//---------------------------------- CallBack ----------------------------------
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

//---------------------------------- Promises ----------------------------------
// returns a promise
let countValue = new Promise(function (resolve, reject) {
  resolve("Promise rejected");
});
let count = 0;

// executes when promise is resolved successfully
countValue
  .then(function successValue(result) {
    console.log(count);
    count = "changed";
  })
  .then(function successValue(result) {
    console.log(count);
  })

  // executes if there is an error
  .catch(function errorValue(result) {
    console.log(result);
  });

console.log("ok");
//---------------------------------- async/await ----------------------------------
// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();

//--------------------------------------------------------------------
// Number Method
// isNaN()
// isInteger()

// Array Method	Description
// concat()	    joins two or more arrays and returns a result
// find()	      returns the "first value" of an array element that passes a ❗test
// findIndex()	returns the "first index" of an array element that passes a ❗test
// forEach()	  calls a function for each element
// sort()	      sorts the elements alphabetically in strings and in ascending order
// slice()	    selects the part of an array and returns the new array
// splice()	    removes or replaces ❗existing elements and/or adds new elements
// reduce()
// filter()

// String Methods
// trim()
// search()
// includes()
// concat()	    joins two or more strings
// replace()	  replaces a string with another string
