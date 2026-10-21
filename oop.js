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
