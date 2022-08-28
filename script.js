"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Your order ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} has been received! Your order will be delivered to ${address} at ${time}. Thank you!`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "3:30pm",
  address: "Near NY City Harbor",
  mainIndex: 1,
  starterIndex: 2,
});

//How to destructure an object?

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

//mutating variables in objects?

/*
let a = 213;
let b = 391;

const obj = { a: 24, b: 2, c: 9 };

({ a, b } = obj);

*/

/*
//Simple example to make sense of Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//Real examples begin here

//switching variables
*/

/*

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [main2, secondary2] = restaurant.order(2, 0);
console.log(main2, secondary2);

const nested = [2, 4, [5, 6]];

const [firstSet, , secondSet] = nested;
console.log(firstSet, secondSet);

//destructuring an "array" inside an "array."

const [i, , [j, k]] = nested;

console.log(i, j, k); //destructured an "array" and an "array" inside an "array"

//destructuring and giving default values// 

*/

/*

const [value1, value2, value3] = [3, 2];  //gives undefined for value 3 

*/

//However we can give default values to avoid this
/*
const [value1 = 1, value2 = 1, value3 = 1] = [3, 2];
console.log(value1, value2, value3);
*/

/* ------------------------------------------------------- The Spread Operator ------------------------------------------------------------------ */

/*
const arr = [1, 2];
const newArr = [...arr, 5, 6, ...arr]; //takes the regular array as individual number and adds it to the "newArr"
console.log(newArr);
console.log(...arr); //prints numbers and not an array

const newMenu = [...restaurant.mainMenu, "chimi"];
console.log(newMenu);

//Copy array//

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//joining 2 arrays

const mainMenuAndStarterMenuCopy = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(mainMenuAndStarterMenuCopy);

*/

//Real-World example
/*
const ingredients = [
  prompt("Let's make some pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"), 
]; 

//restaurant.orderPasta(...ingredients); */

//Objects

//const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };//     -------- //Here we copied + added additional properties to this array

// ----------------------------------------------- Rest Pattern & Parameters -------------------------------------------------------------------

/*

// 1.)  Destructuring

//SPREAD, because on right side of equal sign =
const arr = [1, 2, ...[3, 4]];

//REST, because on left side of equal sign =
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

// 2.) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

const x = [2, 5, 7];
add(...x);

add(2, 3);
add(5, 3, 7, 2);

console.log(...x);

restaurant.orderPizza("Cheese", "Salami", "ham", "pepperoni");

*/

// ---------------------------------------------------Short Circuiting (&& and ||) ---------------------------------------------------------------------

console.log(3 || "Jean");
console.log("" || "Jean");
console.log(true || 0); //"it will short-circuit with "true" which is the value to be print and the rest will be ignored (meaning 0 will be ignored)
console.log(undefined || null); //No shortpcircuit but it will print "null" as it is the last value
console.log(null || undefined); //No short-circuit but it will print "undefined" as it is the last value

console.log("-------AND----------");

console.log(0 && true); //will print "true" and there will be no short-circuit
console.log("jean" && true && "nub" && false && ""); //Here, the code will short-circuit at "False" and the rest of the code will be ignored

// ------------------------------------------------------- The Nullish Coalescing Operator(??) -----------------------------------------------------------

("------------------Nullish Coalescing Operator(??) ------------------------------------");

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //this will print 10 because 0 is a falsy value

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //this will print 0 because Nullish only considers "null" & "undefined" as falsy values
