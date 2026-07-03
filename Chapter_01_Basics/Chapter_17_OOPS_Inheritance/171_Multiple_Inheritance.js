// GrandFather --> Fatehr --> Son
class BasePage{
    constructor(pageName){
        this.pageName = pageName;
    }
    open(){
        console.log("Opening page: "+this.pageName);
    }

}
class AuthPage extends BasePage{
    login(user){
        console.log("Logging in user: "+user+" on page: "+this.pageName);
    }
}
class AdminPage extends AuthPage{
    constructor(){
        super("Admin Page");
    }
    manageUsers(){
        console.log("Managing users on page: "+this.pageName);
    }
}
let page = new AdminPage();
page.open();
page.login("superadmin");
page.manageUsers();