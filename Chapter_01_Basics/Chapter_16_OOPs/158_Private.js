class Credentials{
    #apikey;
    constructor(user,key){
        this.user= user;
        this.#apikey= key;
    }

    // Custom method to access the private field
    getAuthHeader(){
        return "Bearer " +this.#apikey
    }
}

let cred = new Credentials("admin","123456");
console.log(cred.user);
//console.log(cred.apikey); // This will log undefined
//console.log(cred.#apikey); // This will give an error


console.log(cred.getAuthHeader());