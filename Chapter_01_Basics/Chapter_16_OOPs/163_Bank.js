class Icici {
    #balance;
    constructor(name, balance){
        this.#balance = balance;
        this.name = name;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(newBalance, isCashier){
        if(!isCashier){
            console.log("You are not authorized to change the balance");    
            }
            else{
        this.#balance = newBalance;
            }
    }
}

let iciciBank = new Icici("ICICI Bank", 10000);
console.log(iciciBank.name);
console.log(iciciBank.getBalance());
iciciBank.setBalance(20000, false);
iciciBank.setBalance(20000, true);
console.log(iciciBank.getBalance());
