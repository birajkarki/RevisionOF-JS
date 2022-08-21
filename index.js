// console.log('hello world');


// values and varaibles in js

// var myName = 'biraj karki';
// var myAge = 18;
// console.log(myAge);
// console.log(myName);

// var _my = "hello"
// console.log(_my);

// datatypes in js
/*
1 undefined
2 Boolean
3 Number
4 String
5 BigInt
6 Symbol\
*/

//  ******  string *******
// var myName = 'biraj karki';
// console.log(myName);

// typeof operator
// console.log(typeof (myName));

// *** Number ****
// var myAge = 18
// console.log(typeof (myAge));

// ***Boolean***
// var amiBiraj = true;

// console.log(amiBiraj);
// console.log(typeof (amiBiraj));


// 10 + "20"           > 1020        /concat
// 9 - '2'             > 7           /bug
// "java" + "script"   > javascript  /concat
// "" + ""             >             /empty
// "" + 0              > 0           /
// "biraj" - "karki"   > NaN         /not a number
// true = 1
// false = 0
// true + true         > 2
// false + false       > 0
// false + true        > 1
// false - true        > -1

// console.log();


// null vs undefined

// var iAmUseless = null;
// console.log(iAmUseless);  //null
// console.log(typeof (iAmUseless));  //object > bug

// var iAmStandBy;
// console.log(iAmStandBy);  //Undefined
// console.log(typeof (iAmStandBy));  //undefined


//  Q) what is NaN?
// A => NaN is property of global object

// var myPhoneNumber = 9808426215;
// var myName = "Biraj Karki"

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)) {
//     console.log("Enter a valid number");
// }


// NaN === NaN            >fasle
// Number.NaN === NaN     >false
// isNaN(NaN)             >true
// isNaN(Number.NaN)      >true
// Number.isNaN(NaN)      >true

// console.log();



// expression and operator

/*
1 assignment operator  >  container = value / left
2 arithmetic operator  >  + - * %
3 comparison operator  >  == != > >= < <=   / true false
4 logical operator     >  &&
5 string operator
6 conditional (ternary) operator
*/


// increment and decrement operator

//  increment operator postfix
// var num1 = 2;
// var num2 = num1++;

// console.log(num1);
// console.log(num2);

// increment operator prefix
// var num1 = 5;
// var num2 = ++num1;

// console.log(num1);
// console.log(num2);

// decrement operator postfix
// var num1 = 2;
// var num2 = num1--;

// console.log(num1);
// console.log(num2);



// decrement operator prefix
// var num1 = 2;
// var num2 = --num1;

// console.log(num1);
// console.log(num2);



// logical operator

// var num1 = 3;
// var num2 = 4;
// console.log(num1 > num2 && num1 > 0 && num2 < 6);  //sabai true hunu parxa

// console.log(num1 > num2 || num1 > 0 || num2 < 6);  //yeuta matrw ni true bhayo bhane sabai true hunxa

// console.log(!((num1 > num2) || (num1 > 0)));      //opposite gardinxa true ko fasle ani flase ko true


// string concatention

// console.log("Hello" + "world") // duita string lai join garne



// console.log(3 ** 3); // power
// console.log(3 ** -3); //  minus power

// swapping with third variable

// var a = 2;
// var b = 3;

// var c = b; // c bhaneko 3 bhayo
// b = a;     // b bhaneko 2 bhayo
// a = c;     // a bhaneko 3 bhayo

// console.log("the value of a " + a);
// console.log("the value of b " + b);

// swapping without third variable

// var a = 2;
// var b = 3;

// a = a + 1;
// b = b - 1;

// console.log("the value of a " + a);
// console.log("the value of b " + b);


// == vs ===

// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);  //check value
// console.log(num1 === num2); //check value and datatype


// Control Statement and loops
/*
1 if..else
2 switch statement
3 while loop
4 do while loop
5 for loop
6 for in loop
7 for of loop
8 conditional (ternary) operator
*/

// if rain = raincoat
// else no rain
// var tmr = 'rsain';
// if (tmr == 'rain') {
//     console.log("take rain coat");
// }
// else {
//     console.log("have a great summer day");
// }


// var year = 2022

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(year + " yes it is a leap year");
//         }
//         else {
//             console.log(year + " is not a leap year");
//         }
//     }
//     else {
//         console.log(year + " yes it is a leap year");
//     }
// }
// else {
//     console.log(year + " is not a leap year");
// }


// truthy and falsy

// falsy
// >> 0 "" NaN null undefined false

// if (score = 0) { // yesley we loss dinxa cause js ma 0 bhaneko falsy value ho
//     console.log("we won");
// }
// else {
//     console.log("we loss");

// }

// conditional (ternary) operator

// let age = 12;
// console.log((age >= 18) ? 'yo can vote' : 'yo cant vote');



// switch statement

// 1st without break statement

// var area = 'circle'
// var PI = 3.14, l = 4, b = 8, r = 4;
// switch (area) {
//     case 'circle':
//         console.log('the area of circle is ' + PI * r ** 2);
//         break;
//     case 'triangle':
//         console.log('the area of triangle is ' + (l * b) / 2);
//         break;
//     case 'square':
//         console.log('the area of square is ' + (l * l));
//         break;
//     default:
//         console.log('please enter vakid data');
// }


// while loop statement

// var num = 10;
// while (num >= 10) {
//     console.log(num); //infine loop
// }

// var num = 0;
// //block scope
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// do while loop statement


// var num = 20;
// do {
//     console.log(num);
//     num++;
// } while (num <= 10);



// for loop

// for (initializer > var num = 3; condition > num < 10; iteration > num++) {
//code
// }

// for (var num = 0; num <= 10; num++) {
//     debugger;
//     console.log(num);
// }

// for (num = 0; num <= 10; num++) {
//     console.log(num);
// }
// while (num <= 10) {
//     console.log();
// }
// num = 10;
// switch (num) {
//     case (8):
//         for (x = 1; x <= 10; x++) {
//             console.log(num + '*' + x + '=' + num * x);
//         }
//         break;
//     case (9):
//         for (x = 1; x <= 10; x++) {
//             console.log(num + '*' + x + '=' + num * x);
//         }
//         break;
//     case (10):
//         for (x = 1; x <= 10; x++) {
//             console.log(num + '*' + x + '=' + num * x);
//         }

// }

// table
// for (x = 1; x <= 10; x++) {
//     var num = 9;
//     console.log(num + '*' + x + '=' + num * x);
// }



// Function

// function definition
// calling a function
// function parameter
// function argument
// function expression
// return Keyboard
// anonymous function


// function definition / function declaration / function statement
// function sumNum() {
//     var a = 3, b = 7;
//     var total = a + b;
//     console.log(total);

// }
// sumNum(); // calling a function


// function parameter vs function argument


// function sumNum(a, b) {//parameter
//     var a, b;
//     var total = a + b;
//     console.log(total);

// }
// sumNum(2, 5); //argument
// sumNum(4, 5);
// sumNum(2, 20);


// why function?

// reuse code
// same code with different argument

// DRY => Do not repeat yourself


// function expression
// create a function and put it into varaible


// function sumNum(a, b) {
//     var a, b;
//     var total = a + b;
//     console.log(total);

// }
// var funExp = sumNum(2, 5); //expression

// funExp;


// return keyboard
// function sum(a, b) {
//     return total = a + b; //return
// }
// var funSum = sum(2, 3);
// console.log('the number is ' + funSum);



// anonymous function
// var funSum = function (a, b) { //function ko nam xaina
//     return total = a + b;
// }
// sum = funSum(3, 3)
// console.log('the number is ' + sum);



// MODERN JS

// ECMAScript 2015 (ES6)

// let vs const vs var
// var myName1 = "Biraj"
// console.log(myName1);
// myName1 = "Karki"
// console.log(myName1);

// let myName2 = "Biraj"
// console.log(myName2);
// myName2 = "Karki"
// console.log(myName2);

// const myName3 = "Biraj"
// console.log(myName3);
// myName3 = "Karki" //error we cant give second value
// console.log(myName3);


// VAR
// function data() {
//     var myName = "biraj";
//     console.log(myName);
//     if (true) {
//         var myCast = "karki"
//         console.log("inner " + myCast);
//         console.log("outer " + myName);
//     }
//     console.log("outer " + myCast);
// }
// data()

// LET
// function data() {
//     let myName = "biraj";
//     console.log(myName);
//     if (true) { //block
//         let myCast = "karki"
//         console.log("inner " + myCast);
//         console.log("outer " + myName);
//     }
//     console.log("outer " + myCast);
// }
// data()


// var = function scope
// let and const = block scope


// Template literals (Template strings)

// for (let a = 1; a <= 10; a++) {
//     let tableOf = 12;
//     console.log(` ${tableOf} * ${a} = ${tableOf * a}`);
// }

//   Default parameter
//function lai call garna initize aagadi ni milxa
// console.log(sumNum(6)); // default first ma janxa

// function sumNum(a, b = 3) {
//     return total = a + b
// }



// arrow function


// fat arrow function ma function lai call initiaze garepaxi matrw call garna milxa
// const sum = () => { //yesko help ley function lai nai variable ko rup ma use garna milxa
//     return `the sum of two number is ${(a = 3) + (b = 4)}`;
// }
// console.log(sum());


// fat arrow function

// const sum = () => `the sum of two number is ${(a = 3) + (b = 4)}`;
// console.log(sum());


// Array

//hami ley js ma array ma int string boolean multiple data type ko varaibel store garna sakxam
// let myFriends = ['biraj', 'bimala', 'bhupendra', 3, true]; //single vaiable ma multiple variable store garna lai
// console.log(myFriends)
//first element = lower index/boundary biraj
// 0
// 1
// 2
// ...
//last element = upper index / boundary true

// 1 travesal of an Array
// 2 searching and filter in an Array
// 3 how to sort and compare an Array
// 4 how to insert, add, replace and delete elements in array(CRUD)
// 5 Map(), Reduce(), Filter()


// travesal of an Array > get single data and change  the data

// let myFriends = ['biraj', 'bimala', 'bhupendra',];
// console.log(myFriends[2])

//check lenght of data
// console.log(myFriends.length)

//we use for loop to navigate
// let myFriends = ['biraj', 'bimala', 'bhupendra'];
// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
// }

// for in and for of loop of ES6


// for in
// let myFriends = ['biraj', 'bimala', 'karki', 'bhupendra'];
// for (let elements in myFriends) { //for in loop ley index number herna help grxa
//     console.log(elements);

// }

// for of
// let myFriends = ['biraj', 'bimala', 'karki', 'bhupendra'];
// for (let elements of myFriends) { // for of ley array ko item dinxa
//     console.log(elements);
// }



// forEach //for in ko rw for of ko combine

//normal traditional function
// let myFriends = ['biraj', 'bimala', 'karki', 'bhupendra'];
// myFriends.forEach(function (element, index, array) {
//     console.log(`${element}+ ${index}`);

// });

//fat arrow function
// let myFriends = ['biraj', 'bimala', 'karki', 'bhupendra'];
// myFriends.forEach((element, index, array) => {
//     console.log(`${element}+ ${index} + ${array}`);

// });




// Searching and filter in an Array



// let myFriends = ['biraj', 'bimala', 'karki', 'bhupendra'];

// indexOf() // forward search garxa

// console.log(myFriends.indexOf('biraj', 0))



// lastIndexOf() // backward search garxa

// console.log(myFriends.lastIndexOf('karki', 3));



// includes() //  forward search garxa ani boolean ma express

// console.log(myFriends.includes('karki', 3));



// find() //yeuta value matrw return garxa
// const price = [2, 3, 4, 5, 6, 7]

// console.log(price.find((currVal) => currVal < 5));



//findIndex() // yeuta value ko index number matrw dinxa

// console.log(price.findIndex((currVal) => currVal < 5));



// filter() //index num ni chaiyo , elemnt ni chaiyo ani sabi element

// const newPrice = price.filter((elem, index) => {
//     return elem < 6
// })
// console.log(newPrice);



// how to sort and compare in array

//sort() //
// const month = ['jan', 'feb', 'june', 'oct'];
// const num = [1, 10, 4, 5, 7];

// console.log(month.sort());
// console.log(num.sort()); //number saga incorrect hunxa use garda





// How to insert , Add , Replace and delete elements in array (CRUD )
// push
// const animals = ['pigs', 'buffalo', 'sheep']; //last ma add garxa array ma
// animals.push('goat'); // new lenght of array return garxa
// console.log(animals);
// console.log(animals.length);

// unshift
// const animals = ['pigs', 'buffalo', 'sheep'];
// animals.unshift('goat'); // new lenght of array return garxa
// console.log(animals);
// console.log(animals.length);

// const num = [1, 3, 4, 5, 7];
// num.unshift(2, 6); // new lenght of array return garxa
// console.log(num);
// console.log(num.length);


// pop() // removes the last element from array and decreses the lenght of array
// const veg = ['carrot', "pea", "cauli"]
// veg.pop();
// console.log(veg);

// shift first ko remove graxa and lenght ni decreses
// const veg = ['carrot', "pea", "cauli"]
// veg.shift();
// console.log(veg);


// splice() method // dami xa

// const month = ['jan', 'feb', 'june', 'oct'];

// const newMonth = month.splice(month.length, 0, 'dec');
// console.log(month);

// console.log(newMonth);

// const updateMonth = month.splice(1, 1, 'Feb');
// console.log(month);

// const indexOfmonth = month.indexOf('feb');

// if (indexOfmonth != -1) {
//     const updateMonth = month.splice(indexOfmonth, 1, 'Feb');
//     console.log(month);
// }
// else {
//     console.log("no data found");
// }


// Map(),reduce(),Filter()

// Map() //
// const num = [1, 3, 4, 5, 7];
//num >4
// let newNum = num.map((curElm, index, arr) => { //naya array bhanarw result dinxa
//     return curElm > 4;
// })
// console.log(newNum);

// let newNum = num.map((curElm, index, arr) => { // new array dinxa
//     return `index no = ${index} and the value is ${curElm} belongs to ${arr}`
// })
// console.log(newNum);

// let newNum1 = num.forEach((curElm, index, arr) => { // new array dinxa
//     return `index no = ${index} and the value is ${curElm} belongs to ${arr}`
// })
// console.log(newNum1);




// find the square root each element in an array?

let arr = [49, 27, 144, 100, 81];

let sqrArr = arr.map((crrE) => {
    return Math.sqrt(crrE);


})
console.log(sqrArr);
