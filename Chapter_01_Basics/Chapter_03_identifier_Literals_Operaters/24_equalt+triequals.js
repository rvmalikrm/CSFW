// == AND ===

console.log(1 == 1); // true
console.log(1 == '1'); // true (type coercion occurs)
console.log(1 === 1); // true
console.log(1 === '1'); // false (no type coercion, different types)    
console.log(null == undefined); // true (both are considered equal in non-strict equality)
console.log(null === undefined); // false (different types, no type coercion)
