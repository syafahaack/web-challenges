console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 99;
let pricePerHotdog;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else if (numberOfHotdogs >= 1000000) {
  pricePerHotdog = 0.1;
}

const totalPrice = numberOfHotdogs * pricePerHotdog;
console.log(
  `total price for ${numberOfHotdogs} hotdogs is ${totalPrice} euros `
);

// Part 4: Daytime
const currentHour = 00;

const statement = currentHour < 17 ? "Still need to learn.." : "Partytime!!";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + (name === "Archibald" ? "Coach" : name) + "!";

console.log(greeting);
