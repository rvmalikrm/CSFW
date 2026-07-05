function buildEndPoint(base:string , path:string):string{
    return base + path;     
}

function isSuccesCode(code:number):boolean{
    return code >= 200 && code < 300;
}

function logTestStep(step:string):void{
    console.log("[STEP] " + step);  
}

console.log(buildEndPoint("https://api.example.com", "/users"));
console.log(isSuccesCode(200));
console.log(isSuccesCode(404));
logTestStep("This is a test step.");