//object oriented Javascript
//this simply helps to use our obj property inside the fn
// let user = {
//     name : 'Jake',
//     email: 'jake@em.com',
//     login: function(){
//         console.log(this.name , 'has looged In');//Jake has looged In
//         console.log(name , 'has looged In');//has looged In
//     },
//     logout: function(){
//         console.log(this.name , 'has looged out');
//     }
// }

// user.login();//Jake has looged In
// console.log(this);//loads window objects => this is referencing global object
//this is a global obj

//we cannot use arrow fn with 'this' inside the obj property i.e method 
// in window obj there is no propety of name that y not showing

// let user = {
//         name : 'Jake',
//         email: 'jake@em.com',
//         login: function(){
//             console.log(this.name , 'has looged In');//Jake has looged In
//             console.log(name , 'has looged In');//has looged In
//         },
//         logout: function(){
//             console.log(this.name , 'has looged out');
//         }
//     }




// Class keyword - es6 syntatical sugar


// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         this.count = 0;
//     }
//     login(){
//         console.log(this.email, 'has logged in!!')
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'has logged out!!')
//     }
//     updateCount(){
//         this.count++;
//         return this;
//     }
// }

// let newUser = new User('Jake', 'jake@abc.com');
// let userTwo = new User('Jane', 'jane@abc.com');

// console.log(newUser);
// // Method Chaining 
// newUser
//     .login()
//     .updateCount()
//     .updateCount()
//     .updateCount()
//     .logout();


// // console.log(userTwo.login().updateCount().updateCount());

// userTwo.login().updateCount().updateCount().logout();

// console.log(newUser.count);
// console.log(userTwo.count);

/*
User {name: "Jake", email: "jake@abc.com", count: 0}
OOinJs.js:44 jake@abc.com has logged in!!
OOinJs.js:48 jake@abc.com has logged out!!
OOinJs.js:44 jane@abc.com has logged in!!
OOinJs.js:48 jane@abc.com has logged out!!
OOinJs.js:73 3
OOinJs.js:74 2
*/




//inheritence
// class User{
//     constructor(name,email){
//        this.name=name;
//        this.email=email;
//     }
//     login(){
//         console.log(this.name , 'has looged In');//jsa has looged In
//         return this;
//     }
//     logout(){
//         console.log(this.name , 'has looged out');//jsa has looged In
//         return this;
//     }
//     updateCount(){
//         this.count++;
//         return this;
//     }
// }

// class SuperUser extends User{//we use filter fn on array
//     deleteUser(user){//deleting a obj or user
//         users = users.filter((u)=>{
//              return user.email !== u.email
//         })
//         console.log('Im a super user!');
//     }
// }


// let userOne = new User('jsa','fdhfcg@ug.com');
// let userTwo = new User('jmf','sdfghg@ug.com');
// let userThree = new User('deyh','wertfy@ug.com');
// let userFour = new User('kjhgf','oijh@ug.com');
// let admin = new SuperUser('lkj','wertg@ug.com');
// //console.log(admin);
// // console.log(admin.delete());
// // console.log(admin.login());

// let users= [ userOne, userTwo, userThree, userFour];

// admin.deleteUser(userTwo);
// admin.deleteUser(userTwo);//no issue as userTwo doesnt exist
// console.log(users);

//protype => working model origin protype is null
//null is a type of object only when we created obj using null