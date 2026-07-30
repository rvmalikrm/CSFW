class TastCase {
    name;
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log("[Run] : " + this.name);
    }
    getStatus() {
        return "Pass";
    }
}
console.log("--------------------------------------------------");
let testCase1 = new TastCase("Login Test Case");
testCase1.run();
console.log("Status: " + testCase1.getStatus());
export {};
//# sourceMappingURL=191_TS_Class_Interface.js.map