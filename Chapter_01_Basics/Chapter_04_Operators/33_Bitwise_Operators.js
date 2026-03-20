let x=5;
let y=3;

// Bitwise AND
console.log(x & y); // Output: 1 (binary: 0101 & 0011 = 0001)
// Bitwise OR
console.log(x | y); // Output: 7 (binary: 0101 | 0011 = 0111)
// Bitwise XOR
console.log(x ^ y);
// Output: 6 (binary: 0101 ^ 0011 = 0110)
// Bitwise NOT
console.log(~x); // Output: -6 (binary: ~0101 = 1010 in two's complement)
// Left Shift
console.log(x << 1);
// Output: 10 (binary: 0101 << 1 = 1010)
// Right Shift
console.log(x >> 1); // Output: 2 (binary: 0101 >> 1 = 0010)
// Unsigned Right Shift
console.log(x >>> 1); // Output: 2 (binary: 0101 >>> 1 = 0010)
