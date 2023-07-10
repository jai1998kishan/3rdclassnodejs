let array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

const newArray=array.map(element=>element=== ' ' ?'empty string':element);
console.log(newArray);