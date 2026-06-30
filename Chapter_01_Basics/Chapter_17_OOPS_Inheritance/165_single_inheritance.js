class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(this.name + " is eating");

    }
    sleep (){
        console.log(this.name + " is sleeping");
    }
}
class Dog extends Animal{
    constructor(name, breed){ // first this constructor will be called and then the parent class constructor
        super(name); // calling the parent class constructor or you can wrtite Animal.call(this, name);
        // this is the same as super(name) or new Animal(name); // this is the same as super(name)
        this.breed = breed;
    }
    bark(){
        console.log(this.name + " is barking");
    }
}
let dog =new Dog("Tommy", "Golden Retriever");
dog.eat();
dog.sleep();
dog.bark();
dog.sleep();
console.log(dog.breed);