
let ourPlanet;

ourPlanet = "Earth"

let websiteVisitor;

websiteVisitor = "John";

alert(websiteVisitor, ourPlanet);

// 3 WAYS TO DECLARE VARIABLES
// let changeable = "you can change the variable"
// const unchangeable = "you can't change the variable"
// var old = ""

// console.log(changeable); // console.log() outputs the variable 
// console.log(unchangeable);

// ADDING NUMBERS AND STRINGS TOGETHER
// String Concatenation with binary +
// If binary + is applied to strings, it merges
// ex. let s = "the" + "string"
// alert(s); //thestring
// If any of the operand is a string, the other one is converted to a
// a string too.
// ex. alert(1 + '2') // output is "12" not 3
// ex. alert('2' + 1) // output is "21" not 3

// JAVASCRIPT COMPARISON OPERATORS
// Comparison and Logical operators are used to test for true or false
// OPERATOR     DESCRIPTION
// ==           equal to
// ===          equal to value and equal type
// !=           not equal
// !==          not equal value or not equal type
// >            greather than
// <            less that
// >=           greater than or equal to
// <=           less than or equal to
// ?            ternary operator

// DIFFERENCE BETWEEN == AND ===
// Equality Operator(==) converts the operands to the same type before 
// comparing them. It compares value for equality but allows for 
// differences in type.
// ex. 
// console.log(5 == '5'); //true ('5' is converted to a number)
// console.log(0 == false); //true (false is converted to 0)
// Strict Equality Operator(===) checks both the value and type for 
// equality. It ensures both operands are of the same type and value. 
// ex.
// console.log(5 === '5'); //false (different types: num and str)
// console.log(0 === false) //false (different types: num and bool)

// HOW DO YOU INCREMENT AND DECREMENT A NUMBER
// Increment/Decrement
// variable++ increases the variable by 1
// variable-- decreases the variable by 2
// Difference between Increment/Decrement prefix and postfix form
// The prefix form (++variable) returns the new value while the postfix
// form returns the old value (prior to increment/decrement)