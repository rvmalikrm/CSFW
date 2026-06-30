class BasePage{
    constructor(pageName){
        this.pageName= pageName;
    }

    open(){
        console.log("Opening page: "+this.pageName);
    }
    close(){
        console.log("Closing page: "+this.pageName);
}
}

class LoginPage extends BasePage{
constructor(){
    console.log("LoginPage constructor called");
    super("Login Page");
}
}


let page = new LoginPage();
page.open();
page.close();
