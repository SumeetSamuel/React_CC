//Application program interface
//Events => keyword event, onClick, mouserOver
//traget 
// const nameField = document.getElementById('name');

// nameField.onkeypress = function(event){
//    // console.log("Enter using keyword", nameField.value);

//    console.log(event);
// }


// nameField.onmouseover = function(event){

//     console.log(event);
//  }

//  nameField.onkeyup = function(event){

//     console.log(event);
//  }
 
//  nameField.oninput = function(event){
//     console.log(event);
//  }
 


 
 //innerHTML
 //innerText
 //textContent
//checkk do again
//  document.forms[1].onsubmit = function(event){
//     console.log(event);
//     const displayArea = document.getElementById('display');
//     if(!describeBox.value){
//         displayArea.style.display = 'none';
//     }else{
//         // displayArea.style.display = 'block';
//         const para = document.createElement('p');
//         para.textContent = describeBox.value;
//         para.classList.add('describe');
//         displayArea.replaceWith(para, displayArea.firstChild);
//     }
// }

//Asynchronous
//below is also can be implement using jquery
window.onload= function(){

    
    // let str = new String("My String");

    // str.toLowerCase = function(){
    //     console.log('change ');
    // }
    // str.toLocaleLowerCase();
    // console.log(str.toLocaleUpperCase());

    //XMLHttpRequest
    //HTTP method : GET, pOST,PUT,DELETE

    const URL= 'data/greeting.json';

    const http= new XMLHttpRequest();

    http.onreadystatechange = function(){
       // console.log(http.readyState);
       if(http.readyState ==4 && http.status == 200 )//successuful response code = 200
       {
           console.log(typeof http.responseText);//string
           console.log(JSON.parse(http.responseText));

           const data= JSON.parse(http.responseText);
           console.log(typeof data.message);//object

           data.message.forEach(element => {
               console.log(element.greet);//good morning

               const item= document.createElement('li');
               item.textContent = element.greet;
               list.appenchChild(item);
           })

           console.log(list);
           document.querySelector('#display').appendChild(list);

           /*
              good morning
API.js:79  good evening
API.js:79  good night
           */
       }
    }
    //console.log(http);

    http.open('GET',URL);
    
    http.send();// Asynchronous call to data

    console.log("this statement is after the request");s

}