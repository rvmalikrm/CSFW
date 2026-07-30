function logBug(bug) {
    console.log("BUG- Report -->" + bug.id + " [" + bug.severity + "] " + bug.title);
    bug.stepsToReproduce.forEach(function (step, index) {
        console.log("Step " + (index + 1) + ": " + step);
    });
}
logBug({
    id: 101,
    title: "Application crashes on login",
    severity: "high",
    stepsToReproduce: [
        "1. Open the application",
        "2. Click on the login button",
        "3. Enter valid credentials",
        "4. Click on the submit button"
    ]
});
console.log("--------------------------------------------------");
logBug({
    id: 102,
    title: "UI misalignment on dashboard",
    severity: "medium",
    stepsToReproduce: [
        "1. Open the application",
        "2. Navigate to the dashboard",
        "3. Observe the misalignment of UI elements"
    ]
});
export {};
//# sourceMappingURL=188_TS_Real_Bug_Report.js.map