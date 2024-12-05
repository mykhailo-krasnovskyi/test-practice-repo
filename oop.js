// class Car {

//     color;

//     constructor(color) {
//         this.color = color;
//     }

//     set color(color) {

//         if (color !== 'black') {
//             this.color = color;
//         }

//     }

//     turnOn() {
//         console.log('Car is turned on');
//     }

//     turnOff() {
//         console.log('Car is turned off');
//     }

// }

// const bmw = new Car();
// bmw._turnOn();
// console.log(bmw._color);

// const audi = new Car();
// audi._turnOn();

// const opel = new Car('blue');

// console.log(opel.color);

// opel.color = 'new color';



class Animal {

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }


    testMethod() {
        console.log('Basic animal sound');
    }
}


class Dog extends Animal {

    askToEat() {
        console.log('Give me something to eat please');
    }

}

class Cat extends Animal {

    constructor(bride, name, color) {
        super(name, color);
        this.bride = bride;
    }

    askToEat() {
        console.log('Give me something to eat please, meow meow');
    }

    makeSound() {
        super.testMethod();

        console.log('Meow meow');
    }

}


const dog1 = new Dog('dogName', 'grey');
const cat1 = new Cat('StreetCat', 'catname', 'white');
console.log(cat1);