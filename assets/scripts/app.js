//import { apiKey } from "./util.js"
//import { apiKey, abc } from "./util.js"

//import { apiKey, abc as content } from "./util.js";

//import * as util from "./util.js"

//console.log(util.apiKey);
//console.log(content);

//const userMessage = "Hello world";
// //console.log(userMessage)

// function createGreeting(userName, message = " hello") {
//   // console.log(userName);
//   // console.log(message);

//   return "Hi, I am " + userName + ". " + message;
// }

// const greet1 = createGreeting("Max");
// console.log(greet1);
// const greet2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greet2);
// // greetUser();

// // revisiting about the objects & classes
// const user = {
//   name: "Aqueel ",
//   age: 26,
//   greet() {
//     // this is called as method
//     console.log("Hellow!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi");
//   }
// }

// const user1 = new User("Manuel", 26);
// console.log(user1);

//arrays & array method like map

const hobbies = ["Sports", "cooking", "Reading"];
console.log(hobbies[0]);
hobbies.push("working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports"); // arrow function

console.log(index);

const edittedhobbies = hobbies.map((item) => ({ text: item })); // converting the string to other componenets
console.log(edittedhobbies);
