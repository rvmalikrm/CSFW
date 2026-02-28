// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying 
// a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure 
// using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

const MAX_ATTEMPTS = 5;
let attempt = 0;
let success = false;

do {
    attempt++;
    const randomValue = Math.random();
    if (randomValue > 0.6) {
        success = true;
        console.log(`Attempt ${attempt}:  SUCCESS (Response 200 OK)`);
    } else {
        console.log(`Attempt ${attempt}:  FAILED (Timeout/Error)`);
    }
} while (!success && attempt < MAX_ATTEMPTS);

if (success) {
    console.log(`API call PASSED after ${attempt} attempt(s).`);
} else {
    console.log(`API call FAILED after ${attempt} attempt(s).`);
}