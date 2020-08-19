//Tim berner lee  found www
//sun microsystems - mozilla parent

//Interpreter - line by line

//ECMA - standardization for JS
//ES2020
//ES6 - ECMA 2015 after ES5


// Datatypes - Number, String, Null, Undefined, Boolean, Objects Symboles(es6)
//MDN 


// var age = 10;
// var name = 'John';
// var phrase = 'hello let\'s start';
// //var phrase = "hello let's start";
// console.log(age, name, phrase);//10 "John" "hello let's start"

// //String methods//case sensitive
// console.log(phrase.length);//property
// console.log(name.toUpperCase());//methods

// console.log(phrase.substr(2,5));//llo l
// console.log(phrase.substring(2,5));//llo
// var str = phrase.substring(2,5);
// console.log(str, str.length);// llo 3

// console.log(phrase.toLowerCase().indexOf('o'));//4
// console.log(phrase.lastIndexOf('s'));//12

// //Number - arthematic operation
// //BEDMAS rule

// var expression =  2*(5**2/5)+2/2;
// console.log(expression);//11

// var sum = 10+10;
// var val = 2-10;
// console.log(sum, val);//20 -8

// //o/p quest

// var age1= 10;
// var sum1 = 10 + '10';// + for concat
// var sum2 = 10 - '10';
// console.log(sum, sum2);//1010 0


//Boolean null undefined

// var isLogin = false
// var customer;
// var accountBalance = null;

// console.log(isLogin, customer, accountBalance);//false undefined null
//Undefined is a variable that has been declared but not assigned a value. Null as an assignment value. ...

// var val='name';
// console.log(0/0);//NaN => not a number
// console.log(100/0);//Infinity
// console.log(val*10);//NaN
// console.log(10- val);//NaN

// if(val)
// {
//    console.log('it is true');
// }
// else{

//     console.log('its false');
// }
// //o/p 
// // Truthy - value, number string 1 true ' ' 100/0 infinity
// //Falsy - undefined null false 0 '' NaN

// console.log(typeof val);//string
// var val1= 10 -'hi';
// console.log(typeof val1);//number //implecit conversion in js
// console.log(typeof null);//object
// console.log(typeof true);//boolean

//Explicit Conversion

var val= '300';
console.log(typeof val);//string
console.log(typeof Number(val));//number
console.log(Boolean(val));//true

var val1 =' hello';
console.log(Number(val1));//NaN
console.log(Boolean(val1));//true

var val2;
console.log(Number(val2));//NaN
console.log(Boolean(typeof ''));//true





 



