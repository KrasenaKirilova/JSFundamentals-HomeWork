class Laptop {
    constructor (producer, age, brand) {
        this.producer = producer;
        this.age = age;
        this.brand = brand;

    }

}

let info = {producer: "Dell",
age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price));