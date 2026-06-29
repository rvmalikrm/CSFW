class Encap 
    {
    #child1;
    #child2;

    constructor(name, ch1, ch2)
    {
        this.name= name;
        this.#child1= ch1;
        this.#child2= ch2;
    }
    getter()
    {
        return this.#child1 
    }
    setter(changedname)
    {
        this.#child1= changedname;
    }
    getter2(){
        return this.#child2;
    }
    }
let p = new Encap("Ravi", "Avyaansh", "Aadrik");
console.log(p.name);
console.log(p.getter());
p.setter("AAdriti");
console.log(p.getter());
console.log(p.getter2());
// console.log(p.#child1); // This will throw an error because #child1 is private