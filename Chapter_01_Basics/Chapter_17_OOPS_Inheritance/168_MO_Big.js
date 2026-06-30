class TestCase{
    execute(){
        console.log("Executing generic test case"); 

    }
}
class UnitTest extends TestCase{
    execute(){
        console.log("Executing unit test case");
    }
}
class APITest extends TestCase{
    execute(){
        console.log("Executing API test case");
    }
}
class E2ETest extends TestCase{
    execute(){
        console.log("Executing E2E test case");
    }
}

let tests = [new TestCase,new UnitTest(), new APITest(), new E2ETest()];
for(let test of tests){
    test.execute();
}