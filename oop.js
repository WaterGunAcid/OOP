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