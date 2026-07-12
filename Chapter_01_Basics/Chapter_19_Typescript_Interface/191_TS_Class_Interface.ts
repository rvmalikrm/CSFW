interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TastCase implements Executable {
    name: string;
    constructor(name: string){
        this.name = name;

    }
    run():void{
        console.log("[Run] : " + this.name);
    }
    getStatus(): string {
        return "Pass";
    }
}
console.log("--------------------------------------------------");
let testCase1: Executable = new TastCase("Login Test Case");
testCase1.run();
console.log("Status: " + testCase1.getStatus());