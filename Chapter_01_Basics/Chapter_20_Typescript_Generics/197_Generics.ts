function getFirstResult(name:string):string {
    return "Amit";

}

getFirstResult("promod")
// getFirstResult(123)

function getFirstResutls<T>(results:T[]):T{
    return results[0]!;
}

let firstCode = getFirstResutls<number>([200,404,500 ])
let firststep = getFirstResutls<string>(["Login", "Signup", "Cart"])
console.log("First code:", firstCode)
console.log("First Step:" ,firststep)
