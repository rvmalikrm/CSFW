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
        super(name); // calling the parent class constructor
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