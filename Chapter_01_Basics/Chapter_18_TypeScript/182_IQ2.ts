let statusCode:number[] = [200, 404, 500];
let testSuites: string[] = ["Smoke Tests", "Regression Tests", "Integration Tests"];

console.log("Status Codes:" , statusCode);
console.log("Suites:", testSuites);

let testResult: {name:string; status:string; duration:number} ={
    name:"Login Test",
    status:"Passed",
    duration: 120
}
console.log(testResult.name + " -> " + testResult.status + " (" + testResult.duration + "ms)");