interface BugReport {
    id: number;
    title: string;
    severity: "low" | "medium" | "high";
    stepsToReproduce: string[];
}

function logBug(bug: BugReport): void {
    console.log("BUG- Report -->" + bug.id + " [" + bug.severity + "] " + bug.title);
    bug.stepsToReproduce.forEach(function (step: string, index: number) {
        console.log("Step " + (index +1) + ": " + step);    
    })
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
})