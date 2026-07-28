interface Calculator {
    add(a:number, b:number):number;
    sub(a:number, b:number):number;
    mul:(a:number, b:number)=>number; // Alternative syntax
}

const calc:Calculator ={
        add:(a,b)=> a+b,
        sub:(a,b)=> a-b,
        mul:(a,b)=> a*b,
}

console.log(calc.add(9,8))
console.log(calc.sub(9,8))
console.log(calc.mul(9,8))