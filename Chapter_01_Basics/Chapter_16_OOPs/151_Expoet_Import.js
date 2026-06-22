import { Base_Url as baseUrlofutils,formatTestName } from "./utils.js";
import { Base_Url as baseUrloftestutils,formatUpperCaseString } from "./testutils.js";

console.log(baseUrlofutils);
console.log(baseUrloftestutils);
let result = formatTestName("hello_test_case");
console.log(result);
