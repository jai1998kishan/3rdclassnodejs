const person={
    name:'Max',
    age:29,
    greet(){
        console.log('Hi, I am '+ this.name);
    }
};

const hobbies=['Sports','Cooking'];

// for(let hooby of hobbies){
//     console.log(hooby);
// }

console.log(hobbies.map(hobby=>{
    return 'Hobby: '+hobby;
}));


hobbies.push('Programming');
//this is because array is reference type only store the address point at the place memory where that array is store and we are not changing that point by us by adding the new element, and const is point to that address which is not changing by us.

console.log(hobbies);