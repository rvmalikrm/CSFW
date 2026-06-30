class BasePage{
    constructor(pageName){
        this.pageName= pageName;
    }
    verify(){
        console.log("Verifying page: on "+this.pageName);
    }
}
class LoginPage extends BasePage{
    verify(){
        console.log("Verifying username field on "+this.pageName);
        console.log("Verifying password field on "+this.pageName);
        console.log("Verifying login button on "+this.pageName);
    }
}
class DashboardPage extends BasePage{
    verify(){
        console.log("Verifying dashboard elements on "+this.pageName);
        console.log("Verifying dashboard charts on "+this.pageName);
        console.log("Verifying dashboard tables on "+this.pageName);
    }
}
class CartPage extends BasePage{
    verify(){
        console.log("Verifying cart items on "+this.pageName);
        console.log("Verifying cart total on "+this.pageName);
        console.log("Verifying checkout button on "+this.pageName);
    }
}

let tests = [new BasePage("Home"),new LoginPage("Login"), new DashboardPage("Dashboard"), new CartPage("Cart")];
for(let test of tests){
    test.verify();
    console.log("--------------------------------------------------");
}