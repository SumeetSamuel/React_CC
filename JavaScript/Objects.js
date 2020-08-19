//js completely built of object , functional programming language reason way create methods

// var Obj = {};

// console.log(this.Obj);//{} => empty obj
// console.log(typeof Obj);//object

var student = {
    name: 'harry',
    email: 'harry123@gmail.com',
    regNo: 1234,
    enroll: null,
    // student: 's1'// do use  this
    login(){
        console.log('Student has logged in');
    },
    logout(){
        console.log('Student has logged out');
    },
    toLogIn(){//method attached to string object
        console.log(this.name, 'log in');
    }


};

// console.log(student);//{name: "harry", email: "harry123@gmail.com", regNo: 1234}
// console.log(typeof student.name);//string
// console.log(typeof student.enroll);//object

// //Add new property
// student.isLogin = false;
//console.log(student);//{name: "harry", email: "harry123@gmail.com", regNo: 1234, enroll: null, isLogin: false,student: "s1"} //not good practise dont add later point of time

// console.log(student.login);
/*
o/p

ƒ login(){
        console.log('Student has logged in');
    }
*/

//Doubt****

//console.log(student.login());
/*
Student has logged in
 undefined  at 44
*/
// console.log(student.toLogIn());
/*
harry log in
undefined  at 49
*/


//Accessing
// console.log(student['name']);//harry
// console.log(student.name);//harry

// var span = document.querySelector('#name');
// console.log(typeof span.id);//string
// span.textContent = student[span.id];//Name: harry   on browser

// var spanTwo = document.querySelector('#regNo');
// spanTwo.textContent = student[spanTwo.id];//Registration: 1234  on browser

// //Array

// var hobbies = ['Reading', 'Coding', 'Playing Music', 'Sports'];
// console.log(typeof hobbies);//object
// console.log(hobbies);
// /*
// */
// console.log(hobbies.length);//4  => properties

// var str = new String('some String');//stirng obj
// console.log(str);

// var isLogin = new Boolean(true);
// str= 'New String';
// console.log(str.valueOf());//New String







