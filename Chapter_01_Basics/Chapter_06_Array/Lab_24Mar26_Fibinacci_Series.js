let a=0, b=1, nextTerm;
let n = 10; // Number of terms to display
console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}