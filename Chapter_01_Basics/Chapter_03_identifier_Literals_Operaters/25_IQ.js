// Interview Question: What is the difference between == and === in JavaScript?

 console.log(0=="");
console.log(0==="0");
console.log(0==false);
console.log(null==undefined);
console.log("\t\n"==0);


// Rules breaker in javascript

null==0
null ==""
null ==false
undefined ==0
undefined ==""
undefined ==false
Nan ==NaN

// Above are all false because null and undefined are only equal to each other in non-strict equality, 
// and NaN is not equal to anything, including itself.


