class TestRunner {
    static totalTest=0;
    static passCount =0;
    name;
    constructor (name , passed) 
    {
        this.name = name;
        TestRunner.totalTest++;
        if(passed)
            {
            TestRunner.passCount++;
            }
    }
     static summary()
            {
                console.log(TestRunner.passCount +" / " + TestRunner.totalTest + " passed ");
            }
}
new TestRunner("Login Test",true);
new TestRunner("Logout Test",false);
new TestRunner("Cart Test",true);
new TestRunner("Checkout Test",false);
new TestRunner("Confirmation Test",true);

TestRunner.summary();