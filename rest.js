

//are you using is to merge multiple argument into an array and you use in argument in the function 


// const toArray=(arg1,arg2,arg3)=>{
//     return [arg1,arg2,arg3];
// }

// console.log(toArray(1,2,3));
// console.log(toArray(1,2,3,4)); //this will going to take only three arg so one will be going to be wasted

//to solve this problem we use rest operator


const toArray=(...arg)=>{
    return arg;
}

console.log(toArray(1,2,3));
console.log(toArray(1,2,3,4));
console.log(toArray(1,2,3,4,5,6,7,8,9));