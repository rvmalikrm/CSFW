let name:string ="John Doe";
let age:number =34;
let isActive:boolean =true;
let nothing:null =null;
let notDefined:undefined =undefined;

console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}, Nothing: ${nothing}, Not Defined: ${notDefined}`);

// Arrays
let numbers:number[]=[1,2,3,4,5];   
let names:string[]=["John","Jane","Doe"];
console.log(`Numbers: ${numbers}, Names: ${names}`);
 

// Any type (avoid it if possible)
let anything:any = "Hello, TypeScript!";
console.log(`Anything: ${anything}`);


//Unknown type (safer than any   )
let unknownValue:unknown = 42;
console.log(`Unknown Value: ${unknownValue}`);
unknownValue = "Now I'm a string!";
console.log(`Unknown Value: ${unknownValue}`);

unknownValue = true;

console.log(`Unknown Value: ${unknownValue}`);





