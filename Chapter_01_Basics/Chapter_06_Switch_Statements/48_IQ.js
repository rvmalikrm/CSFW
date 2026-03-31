let testscore=85;
switch(true){
    case(testscore>=95):
    console.log("Outstanding -Top performer:");
    break;
    case(testscore>=85):
    console.log("Excellent - Above Expecteations");
    break;
    case(testscore>=75):
    console.log("Good - Meets Expectations");
    break;
    case(testscore>=65):
    console.log("Needs Improvement - Below Expectations");
    break;
    default:
        console.log("Failing - Unsatisfactory Performance");
}