let fruits= ["Apple", "Banana", "Cherry"];
console.log(fruits);

let arr=[1,20,30,40];
console.log(arr);

let arr1=[1, "Hello", true,null];
console.log(arr1);

let browsers=["Chrome","firefox","Edge"];
console.log(browsers);
console.log(browsers[2]);

browsers[1]="Safari";
console.log(browsers);

let arr2=[1,2,3,4]
console.log(arr2.length); // length is property of array which gives the number of elements in the array
console.log(arr2[0]);
console.log(arr2[3]);
console.log(arr2[4]);


// Array Constructor

let arr3= new Array(5); // creates an array of length 5 with empty slots
let arr4= new Array(1,2,3,4,5); // creates an array with the given elements
console.log(arr3);
console.log(arr4);

let arr5= Array.of(1,2,3,4,5); // creates an array with the given elements
console.log(arr5);