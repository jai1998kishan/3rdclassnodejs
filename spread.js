
//are you using pop element or properties out of array or object than it is spread operator

const person={
    name:'Max',
    age:29,
    greet(){
        console.log('Hi, I am '+ this.name);
    }
};

const copiedPerson ={...person};
console.log(copiedPerson);

const hobbies=['Sports','Cooking'];

// const copiedArrayUsingSlice=hobbies.slice();  //it copy the whole array
// console.log(copiedArrayUsingSlice);

// const copiedArray=[hobbies];  //it copy the array in a array which is wrong 
// console.log(copiedArray);
//to remove this problem we use spread array;

const copiedArrayUsingSpread=[...hobbies];
console.log(copiedArrayUsingSpread);

