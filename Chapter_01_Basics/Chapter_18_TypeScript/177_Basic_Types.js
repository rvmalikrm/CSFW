let name = "John Doe";
let age = 34;
let isActive = true;
let nothing = null;
let notDefined = undefined;
console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}, Nothing: ${nothing}, Not Defined: ${notDefined}`);
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["John", "Jane", "Doe"];
console.log(`Numbers: ${numbers}, Names: ${names}`);
// Any type (avoid it if possible)
let anything = "Hello, TypeScript!";
console.log(`Anything: ${anything}`);
//Unknown type (safer than any   )
let unknownValue = 42;
console.log(`Unknown Value: ${unknownValue}`);
unknownValue = "Now I'm a string!";
console.log(`Unknown Value: ${unknownValue}`);
unknownValue = true;
console.log(`Unknown Value: ${unknownValue}`);
export {};
//# sourceMappingURL=177_Basic_Types.js.map