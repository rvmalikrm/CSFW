function buildEndPoint(base, path) {
    return base + path;
}
function isSuccesCode(code) {
    return code >= 200 && code < 300;
}
function logTestStep(step) {
    console.log("[STEP] " + step);
}
console.log(buildEndPoint("https://api.example.com", "/users"));
console.log(isSuccesCode(200));
console.log(isSuccesCode(404));
logTestStep("This is a test step.");
export {};
//# sourceMappingURL=181_IQ.js.map