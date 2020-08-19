
// greeting();//good morning
// greet();//Uncaught TypeError: greet is not a function at functions.js:3

// function greeting(){
//   console.log("good morning");
// };
// //o/p  good morning

// var greet = function(){
//     console.log("greet everyone");
// }


// console.log(str);//undefined
// var str ='some value';

// //console.log(val);//Uncaught ReferenceError: Cannot access 'val' before initialization at functions.js:16
// //let val = 'let value';

// console.log(val1);//functions.js:17 Uncaught ReferenceError: Cannot access 'val1' before initialization at functions.js:17
// const val1='sss';


//var hoist and let & const not hoist ex is ablove

// 'use strict'
// 1. eliminate  silent error;
// 2.fixes the mistakes;
// 3.fixes the syntax;


//Primitive and reference

//Stack Memory
// let name = new String('jon');
// let num = new Number(34);
// let bool = new Boolean(true);

// //heap memory
// let undef = new Object(null);
// let obj = {name:'jale', age: 10}

// console.log(name,num,bool, undef, obj);//String {"jon"}0: "j"1: "o"2: "n"length: 3__proto__: String[[PrimitiveValue]]: "jon" Number {34} Boolean {true} {} {name: "jale", age: 10}

// let age =10;
// let ageTwo= age;
// age= 12;

// console.log(age, ageTwo);//12, 10

// let obj = { name: 'Jake', age: 10}
// let newObj;

// obj.age =15;
// console.log(newObj.age);//Uncaught TypeError: Cannot read property 'age' of undefined at functions.js:56
// console.log(obj.age);//15

// myFunc = function(){ // if we add const or let before myFunc then error
//     let name = "jake";
//     console.log(name);
// }

// myFunc = function(){
//   console.log("new fnc"); //new fnc 
// };
// myFunc();

// let myFunc = function(){ 
//     let name = "jake";
//     console.log(name);
// }

// myFunc = function(){
//   console.log("new fnc"); //new fnc 
// };
// myFunc();


//  let myFunc =function myFunc()
// {
//     console.log("my fn");
// }

// let myFunc = function(){
//    console.log('my fn1');
// };

// myFunc();
 /*
Uncaught SyntaxError: Identifier 'myFunc1' has already been declared
*/




// function myFunc1()
// {
//     console.log("my fn");
// }

// let myFunc1 = function(){
//    console.log('my fn1');
// };
// myFunc1();
//Uncaught SyntaxError: Identifier 'myFunc1' has already been declared



// function areaSq(side){//parameter
//     console.log(side**2);//16

//     if(typeof side == 'number')
//     {
//         console.log("true");//true
//     }
// }
// areaSq(4);//argument


//doubt***
// if(typeof 10 === 'number')
// {
//     console.log("true");//true
// }


//Arrow fn => syntical sugar adv es6

// const areaOfSq= (sides)=>{
//     let area = sides**2;
//     return area;
// }
// // const areaOfSq= (sides)=> sides**2;
//  console.log(areaOfSq(4));//16


//Callbacks

//functional Programming - Js is all abt

// const areaOfSq= (sides)=> sides**2;
//  const display = (callback) => {
//      let value =10;
//      console.log(callback(value));//100
//  }

// display(areaOfSq);




