interface BasePage {
    url:string;
    title : string;
}
interface LoginPage extends BasePage {
    usernameSelector:string;
    passwordSelector:string;
    loginButtonSelector:string;
}
interface FreeTrialPage extends BasePage {
    usernameSelector : string;
    submitButtonSelector : string;
}

let loginPage : LoginPage = {
    url: "login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}
let freeTrialPage: FreeTrialPage ={
    url: "free-trial",
    title: "Free Trial Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit-btn"
}

console.log("Login Page URL: ", loginPage.url, " Title: ", loginPage.title, " Username Selector: ", loginPage.usernameSelector, " Password Selector: ", loginPage.passwordSelector, " Login Button Selector: ", loginPage.loginButtonSelector);
console.log("Free Trial Page URL: ", freeTrialPage.url, " Title: ", freeTrialPage.title, " Username Selector: ", freeTrialPage.usernameSelector, " Submit Button Selector: ", freeTrialPage.submitButtonSelector);
