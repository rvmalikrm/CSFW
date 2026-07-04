import {BasePage1} from './BasePage1.js';

export class LoginPage1 extends BasePage1 {
    constructor(pageName) {
        super(pageName);
    }
    login(username) {
        console.log("Logging in as " + username + " on page: " + this.pageName);
    }
}