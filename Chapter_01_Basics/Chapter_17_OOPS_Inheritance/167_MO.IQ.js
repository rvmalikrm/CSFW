class BaseTest{
    setup(){
        console.log("Base: open browser");
    }
    teardown(){
        console.log("Base: close browser");
    }
}
class UITest extends BaseTest{
    setup(){
        super.setup();
        console.log("UI: open browser");
    }
    teardown(){
        console.log("UI: close browser");
        super.teardown();
    }
}

let test = new UITest();
test.setup();
test.teardown();