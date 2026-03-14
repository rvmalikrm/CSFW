// Normalize Locator Error Messages
// Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

// Examples:
// Input:
// rawMessage = " Locator not found after TIMEOUT "
// Output:
// Normalized: locator not found after timeout Category: TIMEOUT

rawMessage = " Locator not found after TIMEOUT "

function categorizeError(rawMessage) {
    const normalizedMessage = rawMessage.trim().toLowerCase().replace(/\s+/g, ' ');
    let category;
    if (normalizedMessage.includes("timeout")) {
        category = "TIMEOUT";
    } else if (normalizedMessage.includes("locator")) {
        category = "LOCATOR";
    } else {
        category = "GENERAL";
    }
    console.log(`Normalized: ${normalizedMessage} Category: ${category}`);
    
}

categorizeError(rawMessage);