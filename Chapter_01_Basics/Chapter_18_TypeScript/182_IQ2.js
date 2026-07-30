let statusCode = [200, 404, 500];
let testSuites = ["Smoke Tests", "Regression Tests", "Integration Tests"];
console.log("Status Codes:", statusCode);
console.log("Suites:", testSuites);
let testResult = {
    name: "Login Test",
    status: "Passed",
    duration: 120
};
console.log(testResult.name + " -> " + testResult.status + " (" + testResult.duration + "ms)");
export {};
//# sourceMappingURL=182_IQ2.js.map