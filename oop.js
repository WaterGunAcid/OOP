class car {
    constructor(make, modle, year, color) {
        this.make = make;
        this.modle = modle;
        this.year = year;
        this.color = color;
    }

    start() {
        console.log("The car has started.")
    }
};

let Camery = new car("Toyota", "Camery", 2009, "Tan")

Camery.start();




class person {
    constructor(first, last, age, city) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.city = city;
    }

    greet() {
        console.log(`Hi my name is ${James.first + ' ' + this.last}. I\'m ${this.age} old. I live in ${this["city"]}.`)
    }
};

let James = new person("James", "Houston", 18, "Lititz")

James.greet();

James.age = 30;

James.occupation = "student";

James.greet();

console.log(James.occupation); 



class student{
    constructor(first, last, course1, course2, course3) {
        this.first = first;
        this.last = last;
        this.course1 = course1;
        this.course2 = course2;
        this.course3 = course3;
    }

    printInfo() {
        console.log(`Hi my name is ${James.first + ' ' + this.last}. I\'m in ${this.course1 + ", " + this.course2 + ", and " + this.course3}.`);
    }
};

let james2 = new student("James", "Houston", "CSET 105", "CSET 110", "CSET 115")

james2.printInfo();
//slide 2, 1
// let text = '{"type": "laptop", "model": "Macbook Pro", "price": 1200}'

// let object = JSON.parse(text);

// console.log(object);
// console.log(object.type);
// console.log(object['model']);
// console.log(object['price']);

//slide 2, 2
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
//         this.age = age;
// 	}

// 	greeting() {
// 		console.log(`Hi, I\'m ${this.name} and I am ${this.age} years old.`);
// 	}
// }

// let p = new Person("James", 19);
// let p2 = new Person("Lewis", 19)
// p.greeting();
// p2.greeting();

//slide 2, 3
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
//         this.age = age;
// 	}

// 	greeting() {
// 		console.log(`Hi, I\'m ${this.name} and I am ${this.age} years old.`);
// 	}

//     birthday() {
//         this.age += 1;
//         console.log(`Happy birthday, ${this.name}, you are now ${this.age} years old.`);
//     }
// }

// let p = new Person("James", 19);
// let p2 = new Person("Lewis", 19)
// p.greeting();
// p2.greeting();
// p.birthday();
// p2.birthday();

//slide 2, 4
// class BankAccount {
//   constructor(owner, balance = 0) {
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     if (amount <= 0) {
//       console.log("Broke L");
//       return;
//     }
//     this.balance += amount;
//     console.log(`Deposited $${amount.toFixed(2)}.`);
//   }

//   withdraw(amount) {
//     if (amount <= 0) {
//       console.log("Gotta take out more money, dude. Can't withdraw nothing, what's the point?");
//       return;
//     }
//     if (amount > this.balance) {
//       console.log(`Too broke for that. Can't withdraw $${amount.toFixed(2)}.`);
//       return;
//     }
//     this.balance -= amount;
//     console.log(`Withdrew $${amount.toFixed(2)}.`);
//   }

//   displayBalance() {
//     console.log(`${this.owner}'s balance: $${this.balance.toFixed(2)}`);
//   }
// }

// const account = new BankAccount("James", 100);

// account.displayBalance();
// account.deposit(50);
// account.displayBalance();
// account.withdraw(30);
// account.displayBalance();
// account.withdraw(500);
// account.deposit(-20);
// account.displayBalance();

//slide 2, 5
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} goes ${this.sound}`);
    }
}

let dog = new Animal("dog", "woof");
let bird = new Animal("bird", "I WANT A CRACKER NOW.");

dog.makeSound();
bird.makeSound();
