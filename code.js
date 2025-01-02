
let apples = "2";
let oranges = "3";

alert (+apples + +oranges);

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

// NUMERIC STRINGS
// JavaScript will try to convert strings to numbers in all numeric
// operations except addition.
// ex.
// let x = "100"
// let y = "10"
// console.log(x/y) //10
// console.log(x*y) //1000
// console.log(x-y) //90
//console.log(x+y) or console.log("100"+"10") //"10010" Javascript uses
// the + operator to concatenate the strings

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

// RECEIVING NOT a NUMBER(NaN) RESULT
// NaN is a JS reserved word indicating that a number is not a legal
// number. Trying to do arithmetic with a non-numeric string will
// result in NaN.
// ex.
// let x = 100 / "apple"; //NaN
// let x = 100 / "10" //10 the result is number because str is numeric
// You can use the global JavaScript function isNaN() to find out if a 
// value is a not a number(results in true or false)
// ex.
// let x = 100 / "apple";
// isNaN(); //true

// HOW DO YOU INCREMENT AND DECREMENT A NUMBER
// Increment/Decrement //can only be applied to variables
// variable++ increases the variable by 1
// variable-- decreases the variable by 2
// Difference between Increment/Decrement prefix and postfix form:
// The prefix form (++variable) returns the new value while the postfix
// form returns the old value (prior to increment/decrement)
// ex.
// let counter = 2; // example no.1 (prefix)
// counter++;
// alert(counter); //3
// let counter = 2 // example no.2 (prefix)
// counter--;
// alert(counter) //1
// let counter = 1 // example no.3 (postix)
// let a = counter++;
// alert(a); //1
// let counter = 1 // example no.4 (prefix)
// let a = ++counter;
// alert(a); //2

// OPERATOR PRECEDENCE
// If an operator has more than one operator, the execution order is 
// defined by their precedence. Every operator in JavaScript has a 
// corresponding precedence number. The one with a higher precedence 
// number executes first.
//                       Precedence Table
// Precedence                   Name                    Sign
// 14                       unary plus                  +
// 14                       unary negation              -
// 13                       exponentiation              **
// 12                       multiplication              *
// 12                       division                    /
// 11                       addition                    +
// 11                       subtraction                 -
// 2                        assignment                  =

// NUMERIC CONVERSION, unary +
// The plus + exists in two forms, the binary form and the unary form.
// The unary plus(the plus operator applied to a single value), doesn't
// do anything to numbers. But if the operand is not a number, the
// unary plus converts it into a number.
// ex.
// let apples = "2";
// let oranges = "3";
// alert(apples + oranges); //"23 without unary plus, the binary plus
// concatenates strings
// alert(+apples + +oranges); //5 unary plus in effect