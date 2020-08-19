//fecth,axios etc

window.onload = function(){
    //return Promise object
    $.get('data/greeting.json').then ( data => {
        console.log(data)
        $.get('data/countries.json').then ( data => 
            {console.log(data)});
})
 
}

console.log(typeof Promise);//object

//having our own symbols = immutable objt, unique
const NAME = Symbol();//unique value using sybmol const
const person = {
    [NAME]: 'JAKE'
}


console.log(NAME);

console.log(person[NAME]);

const SLEEP = Symbol();
person[SLEEP]= () => 'person is sleeping';

console.log(person[SLEEP]());


console.log(Symbol() === Symbol());
console.log(NAME === SLEEP);//false

const COOK = Symbol.for('a');//

const person1= {
    [NAME]:  'Sumeet',
    [COOK]: 'Pasata'
}
console.log(person1[Symbol.for('a')]);
console.log(person1[NAME]);

//a: Symbol();
//unique indentity n immutable
console.log(Symbol.for('a') === Symbol.for('a'));


//