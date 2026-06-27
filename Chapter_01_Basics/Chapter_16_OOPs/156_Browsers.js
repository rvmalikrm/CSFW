class Browser {
    constructor (name) {
        this.name =name;
        this.isOpen = true;
        console.log(name + " Launched");
    }
    startBrwser() {
        console.log("starting the browser " );
    }
    closeBrowser(){
        console.log("closing the browser " + this.name);
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
console.log(chrome.isOpen);
console.log(firefox);