// You have an array of all supported browsers and another array of temporarily blocked browsers. Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

// Examples:
// Input:
// allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]
// Output:
// { runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }

function generateExecutionPlan(allBrowsers, blockedBrowsers) {
    const runnable = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));
    const blocked = blockedBrowsers.filter(browser => allBrowsers.includes(browser));
    const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;
    return { runnable, blocked, plan };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];
console.log(generateExecutionPlan(allBrowsers, blockedBrowsers));
