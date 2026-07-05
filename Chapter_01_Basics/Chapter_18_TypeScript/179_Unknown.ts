let unknown: unknown = "Hello, TypeScript!";

if(typeof unknown === "string") {
    console.log(`The unknown variable is a string: ${unknown}`);
}

let message: string = "Hello";

let username:string = "Ravi";
let userID:number;

// Function annotation
function greetUser(name: string): string {
    return 'Hello,${name}!';

}

// Arrow function annotation
const multiply= (a: number, b: number): number => a*b;

// Object annotation
 let user1: {name:string ; age: number}={
    name:"JOhn",
    age:30
 };