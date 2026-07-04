export class BasePage1 {
    constructor(pageName) {
        this.pageName = pageName;
    }

    open(){
        console.log("Opening page: "+this.pageName);
    }
}