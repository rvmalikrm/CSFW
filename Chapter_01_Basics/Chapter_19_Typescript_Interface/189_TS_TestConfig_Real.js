let ciConfig = {
    browser: "chrome",
    headless: true,
    timeout: 2500,
    retries: 5,
    baseUrl: "https://staging.app.com",
};
let localConfig = {
    browser: "firefox",
    headless: false,
    timeout: 5000,
    baseUrl: "http://localhost:3000",
    retries: 2
};
console.log("CI", ciConfig.browser, " timeout :", ciConfig.timeout, " retries :", ciConfig.retries);
console.log("Local", localConfig.browser, " timeout :", localConfig.timeout, " retries :", localConfig.retries);
export {};
//# sourceMappingURL=189_TS_TestConfig_Real.js.map