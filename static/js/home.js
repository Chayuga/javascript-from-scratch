console.log('hello this Rodgers');
//alert('may I help you');

/* ------------- 1. Variables in Javascript --------------*/
var b = 'Smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);



//var age = prompt('What is your age?');

//document.getElementById('someText').textContent = "Hello your age is: " + age;

//We can store string to a variables.
//We can also store numbers in a variable.


/* ------------2. Numbers in javascript --------------*/
var num1 = 10;
var num2 = 5.7;

//Increment num1 by 1
num1 = num1 + 1;

//Decrement num1 by 1
num1--;

//Divide, Multiply *, remeinder %

console.log(num1 % 6);

//Increment by any number by 10
num1 += 10;
console.log(num1);

/* -------------Functions in Javascript--------------- 
1. Create a function
2. Call a function
*/

//create a function
function fun() {
    console.log('this is a function');
}

//call function
fun();

/* Let's create a function that take in a name
and says hello followed by your name

For example

Name: Rodgers
Return: "Hello Rodgers"
*/

// function greetings() {
//     var name = prompt('what is your name?');
//     var result = 'Hello' + ' ' + name; //String Concatination
//     console.log(result);
// }

//greetings();

//How to add 2 numbers together in a function

// function sumNumbers(num1, num2) {
//     var result = num1 + num2;
//     console.log(result);
// }

// sumNumbers(10, 10);


//How do arguments work in functions?

// function greeting(yourName) {
//     var result = 'Hello' + ' ' + yourName;
//     console.log(result);
// }

// var name = prompt('What is your name?');
// greeting(name);

/*-----------While Loops------------ */

// var num = 0;

// while (num < 100) {
//     num += 1;
//     console.log(num);
// }

/*-----------For Loop---------- */

// for (let num = 0; num <= 100; num++) {
//     console.log(num);
// }

/*------------------------------------Data Types------------------------- */

// let yourAge = 18; //number
// let yourName = 'Bob'; //string
// let name = { first: 'Jane', last: 'Doe' }; //object
// let truth = false; //Boolean
// let groceries = ['apple', 'banana', 'oranges']; //array
// let random; //undefined
// let nothing = null; //value null

/*--------------------------------------Strings in JavaScript---------------------- */

// let fruit = 'banana';
// console.log(fruit.slice(2, 6)); //Slice from 2 to 6
// console.log(fruit.length); //how many characters are there
// console.log(fruit.indexOf('nn')); //What is the index of nan in banana
// console.log(fruit.replace('ban', '123')); //find and replace ban with 123 in banana
// console.log(fruit.toUpperCase(fruit)); //turn to upper case
// console.log(fruit.toLowerCase(fruit)); //turn to lower case
// console.log(fruit.charAt(2)); //find the character index 2
// console.log(fruit[2]); //Also gets character at index 2
// console.log(fruit.split('')); //split by character
// console.log(fruit.split(',')); //split by a comma

/*----------------------------------------Arrays in javascript------------------------------- */

// let fruits = ['banana', 'apple', 'oranges', 'pineapples'];
// fruits = new Array('banana', 'apple', 'oranges', 'pineapples');

// //console.log(alert(fruits[1])); //access value at index 1st

// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

/*----------------------------------Array common methods------------------------------- */

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers);
console.log(someNumbers.sort(function(a, b) { return a - b })); //soted in ascending order
console.log(someNumbers.sort(function(a, b) { return b - a })); //soted in descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);

/*-----------------------------------------Objects in JavaScript------------------------ */

let student = {
    first: 'Rodgers',
    last: 'Chayuga',
    Age: 25,
    height: 170,
    studentInfo: function() {
        return this.first + '\n' + this.last
    }
};
// console.log(student.first);
// student.first = 'notRodgers';
// console.log(student.first);
// console.log(student.studentInfo());

/*--------------------------------------If else Condition------------------------------- */
// Conditionals, Control flows (if else)
//18 - 35 is my target demography

// let age = prompt('What is your age?');

// if ((age >= 18) && (age < +35)) {
//     status = 'target dem';
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);
// }


/*-----------------------------------switch statement------------------------------------------ */

//differentiate between weekday vs. weekend
// day 0 --> Sunday
// day 6 --> Saturday --> weekend
// day 4 --> Thursaday --> weekday

switch (2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';

}

console.log(text);

/*---------------------------------Learn JSON--------------------------- */