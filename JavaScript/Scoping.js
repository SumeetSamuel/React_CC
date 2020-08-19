//Global Scope and functional scope
//loosely coupled

//let scope variable and var global variable

// var age = 10;
// if(true){
//     var email ='harry124@gmail.com';
//     console.log(age);//10
// }

// function display(){
//     var name = 'harry';
//     console.log(name, age);//harry 10
// }

// console.log(name);//undefined
// console.log(name.valueOf());//undefined
// display();

//let and const block of scope

// let age = 10;

// if(true)
// {
//     let age=15;
//     console.log(age);
// }

// function display(){
//     let age =12;
//     console.log(age);
//     if(true)
//     {
//         let age =20;
//         console.log(age);

//         let name='sumeet';
//     }
//     console.log(age, name);
// }
// console.log(age);
// display();
// console.log(age);

//o/p
/*
15
10
12
20
12 "undefined"
10
*/

//const

// if(true)
// {
// const PI=3.14;
// console.log(PI);//3.14

// }

// console.log(PI);//no output // const is scoped

