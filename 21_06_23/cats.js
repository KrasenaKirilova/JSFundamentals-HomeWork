function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const element of input) {
        let current = element.split(' ');
        let name = current[0];
        let age = Number(current[1]);
       

        let cat = new Cat(name, age);
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);

