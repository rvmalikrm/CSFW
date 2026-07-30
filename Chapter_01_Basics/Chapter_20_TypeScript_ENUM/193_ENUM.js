var TestStatus;
(function (TestStatus) {
    TestStatus["Pass"] = "PASS";
    TestStatus["Fail"] = "FAIL";
    TestStatus["Skip"] = "SKIP";
    TestStatus["Pending"] = "PENDING";
    TestStatus["Blocked"] = "BLOCKED";
})(TestStatus || (TestStatus = {}));
console.log(TestStatus.Pass);
export {};
//# sourceMappingURL=193_ENUM.js.map