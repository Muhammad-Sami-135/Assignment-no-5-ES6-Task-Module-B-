// ES6 task

// Global Scope

// var myVariable = "Hello, World!";

// let myVariable = "Hello, World!";

// const myVariable = "Hello, World!";

// var varVariable = "I am a var variable";
// let letVariable = "I am a let variable";
// const constVariable = "I am a const variable";
// console.log(varVariable);  
// console.log(letVariable); 
// console.log(constVariable);


// Function Scope

// function greet() {
//     var message = "Hello, World!";
//     console.log(message);
//   }
//   greet();
// var message = "Hello, World!";
// greet();

// function greet() {
//   let message = "Hello, World!";
//   console.log(message);
// }
// greet(); 
// let message = "Hello, World!";
// greet()

// function greet() {
//     const message = "Hello, World!";
//     console.log(message);
// }
// greet();
// const message = "Hello, World!";
// greet()
// function greet() {
//     const message = "Hello, World!";
//     message = "Hi, World!";
// }
// greet();

// function greet() {
//     var varMessage = "Hello from var!";
//     let letMessage = "Hello from let!";
//     const constMessage = "Hello from const!";

//     console.log(varMessage);
//     console.log(letMessage);
//     console.log(constMessage);
// }
// greet()
// console.log(varMessage); 
// console.log(letMessage); 
// console.log(constMessage); 


// Block Scope:

// if (true) {
//     var message = "Hello from inside the if block!";
//     console.log(message);
// }
// console.log(message);
// var message = "Hello from inside the if block!";

// {
//     const myVariable = 10;
//     console.log(myVariable);
// }

// {
//     const a = 10;
//     const b = 20;
//     const c = 30;
// }
// console.log(a); 
// console.log(b); 
// console.log(c);


// Hoisting with var:

// console.log(myVar); 
// var myVar = 10;
// console.log(myVar); 

// console.log(myVar); 
// var myVar = 10;
// console.log(myVar);


// Hoisting with let and const:

// console.log(num);
// let num = 40

// console.log(start);
// const start = "hello world"


// Re-declaration:

// var fise = "today is saturday";
// var fise = "Tomorror is sunday";
// console.log(fise);

// let some = "yesterday is friday";
// let some = "Today is saturday";
// console.log(some);

// const hello = "Today is saturday";
// const hello = "Tomorrow is sunday";
// console.log(hello);


// Re-assignment:

// var myVar = "first value";
// myVar = "updated value";
// console.log(myVar);

// let Name = "Sami";
// Name = "jawed"
// console.log(Name);

// const year = 2024;
// year = 2025;
// console.log(year);


// Temporal Dead Zone (TDZ):

// console.log(exp);
// if (true) {
//     let exp = 80
// }

// console.log(exm);
// if (true) {
//     const exm = 150
// }


// String Interpolation:

// let firstName = "Sami";
// let lastName = "Jawed";
// console.log(`My name is ${firstName} ${lastName}`);


// Multi-line Strings:

// let bio = `name: Sami,
// fName: jawed,
// city: Karachi `;
// console.log(bio);


// Simple Expressions:

// let num1 = 20;
// let num2 = 30;
// console.log(`The sum of ${num1} and ${num2} is= ${num1 + num2}`);


// Function Calls:

// function abc(num1, num2) {
//     return num1 + num2
// }

// let sum = abc(10, 20);
// console.log(`The sum of 10 and 20 is= ${sum}`);


// Creating a Tagged Template:

// function myTag(strings, ...values) {
//     console.log('Strings:', strings);
//     console.log('Values:', values);
// }
// let name = "Sami";
// let age = 20;

// myTag`My name is ${name} and I am ${age} years old.`;


// Conditional Logic:

// let currentHour = new Date().getHours();

// let checkHour = currentHour < 12 ? `Good Morning! It's currently ${currentHour} AM.`
//     : `Good Afternoon! It's currently ${currentHour > 12 ? currentHour - 12 : 12} PM.`;
// console.log(checkHour);


//Loops within Template Literals:

// let shoppingList = ['fruits', 'vegetables', 'grosery', 'kidscholetes'];

// let total = `<ul>
//   ${shoppingList.map(item => `<li>${item}</li>`).join('\n')}
// </ul>`

// console.log(total);


// Simple Condition:

// let Age = 20;

// let canVote = Age > 18 ? "Yes" : "No";

// console.log(canVote);


// Even or Odd:

// let number = 8;

// let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);


// Grade Evaluation:

// let score = 85;
// let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
// console.log(grade);


// Login Status:

// let isLoggedIn = true;

// let statusMessage = (isLoggedIn && true) ? "Welcome back!" : "Please log in";

// console.log(statusMessage);


// Discount Eligibility:

// let isMember = true;
// let purchaseAmount = 150;

// let discount = (isMember === true && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;

// console.log(`Discount ${discount}`);


// Determine Max Value:

// function maxValue(a, b) {
//     return a > b ? a : b;
// }

// console.log(maxValue(10, 20));


// Greeting Message:

// function greet(name) {
//     return name ? `Hello, ${name}!` : "Hello, guest!";
// }

// console.log(greet("Sami"));


// Mapping Values:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let check = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
// console.log(check);


// Filtering Values:

// let strings = ["apple", "cat", "banana", "dog", "elephant"];
// let filter = strings.filter(str => str.length > 3 ? true : false);
// console.log(filter);


// Copying an Array:

// let originalArray = [1, 2, 3, 4, 5];
// let copiedArray = [...originalArray];

// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);

// console.log(originalArray === copiedArray);


// Merging Arrays:

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10]

// let array3 = [...array1, ...array2]
// console.log(array3);


// Adding Elements to an Array:

// let Numbers = [2, 3, 4];
// let updated = [1, ...Numbers, 5];
// console.log(updated);


// Copying an Object:

// let originalObject = { name: "dev", age: 30, city: "U.S.A" };
// let copiedObject = { ...originalObject };

// console.log("Original Object:", originalObject);
// console.log("Copied Object:", copiedObject);

// console.log(originalObject === copiedObject);


// Merging Objects:

// let obj1 = {
//     studentId: 123,
//     studentName: "ali"
// }

// let obj2 = {
//     studentId: 456,
//     studentName: "ahmed"
// }

// let mergedObject = { ...obj1, ...obj2 }
// console.log(mergedObject);


// Updating Object Properties:

// let user = {
//     name: "Sami",
//     age: 20,
//     email: "muhammadsamialam8@gmail.com"
// }

// let updatedUser = { ...user, email: "muhammadsamialam8@gmail.com", address: "Karachi" };
// console.log(updatedUser);


// Passing Array Elements as Arguments:

// function sum(a, b, c) {
//     return a + b + c;
// }
// let NUMBERS = [20, 10, 40];
// let result = sum(...NUMBERS);
// console.log(result);


// Rest Parameter with Spread Operator:

// function multiply(num, ...arr) {
//     return arr.map(arr => arr * num)
// }

// console.log(multiply(3, 2, 4, 7, 5));


// First and Rest:

// let numbeRS = [10, 20, 30, 40, 50];
// let [first, ...rest] = numbeRS;

// console.log("First element:", first);
// console.log("Rest of the elements:", rest);



// Skip and Rest:

// let colors = ["red", "yellow", "green", "orange", "blue"]
// let [, , ...remainingColors] = colors

// console.log("Remaining colors:", remainingColors);


//Basic Destructuring:

// let persoN = {
//     naMe: "Sami",
//     age: 20,
//     email: "muhammadsamialam8@gmail.com",
//     address: "Karachi"
// };

// let { naMe, email, ...reSt } = persoN;

// console.log("Name:", naMe);
// console.log("Email:", email);
// console.log(" remaining rest properties:", reSt);


// Nested Destructuring:

// let student = {
//     id: 123,
//     nAme: "sami",
//     grades: 253,
//     info: {
//         age: 20,
//         major: "science"
//     }
// };

// let { id, nAme, info: { major }, ...resT } = student;

// console.log("ID:", id);
// console.log("Name:", nAme);
// console.log("Major:", major);
// console.log(" remaining rest properties:", resT);


// Filter Even Numbers:

// function filterEven(...numbers) {
//     return numbers.filter(numbers => numbers % 2 === 0);
// }

// console.log(filterEven(1, 4, 7, 3, 9, 6, 45, 30, 20, 40));


//Basic Destructuring:

// let fruits = ["apple", "banana", "cherry"];
// let [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);


//Skipping Elements:

// let colorS = ["red", "green", "blue", "yellow"];
// let [primaryColor, , tertiaryColor] = colorS;

// console.log(primaryColor);
// console.log(tertiaryColor);


//Rest Operator:

// let numberS = [1, 2, 3, 4, 5];
// let [firstNumber, ...remainingNumbers] = numberS;

// console.log(firstNumber);
// console.log(remainingNumbers);


//Basic Destructuring:

// let person = {
//     namE: "sami",
//     agE: 20,
//     city: "karachi"
// };
// let { namE, agE, city } = person;

// console.log(namE);
// console.log(agE);
// console.log(city);  