class environment{
    constructor(name = "Stating", port =3000){
        this.name= name;
        this.port = port;
    }
    getUrl(){
        return "http://"+this.name +":" +this.port;
    }
    }
let env1= new environment();
let env2= new environment("Production", 8080);
console.log(env1.getUrl());
console.log(env2.getUrl());