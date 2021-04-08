//#region Example console assert */

const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number += 1) {
  console.log("the # is " + number);
  console.assert(number % 2 === 0, { number, errorMsg });
}
//#endregion

//#region Example Console count */

let user = "";

const greet = () => {
  console.count(user);
  return "hi " + user;
};

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");

//#endregion Example Console count */

//#region Example countReset */
let user2 = "";

const greet2 = () => {
  console.count(user2);
  return "hi " + user2;
};

user2 = "bob";
greet2();
user2 = "alice";
greet2();
greet2();
console.countReset("bob");
console.count("alice");

//#endregion countReset */

//#region Example console group
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
//#endregion

//#region Example console table

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);

//#endregion

//#region  Example console time
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
//#endregion
