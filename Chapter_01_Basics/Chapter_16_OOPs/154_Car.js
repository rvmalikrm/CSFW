class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    driver() {
        console.log("Driver is driving the car "+this.brand); 
        console.log("Driver is driving the car "+this.model); 
        console.log("Driver is driving the car "+this.year); 

    }
}
let tesla = new Car("Tesla", "Model S", 2020);
tesla.driver();
