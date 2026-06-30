class BaseTest{
    setup(){
        console.log("Base: open browser");

    }
}

class APITest extends BaseTest{
    setup(){
        console.log("API: open browser");
    }
}

let test = new APITest();

test.setup();

let test2= new BaseTest();
test2.setup();
