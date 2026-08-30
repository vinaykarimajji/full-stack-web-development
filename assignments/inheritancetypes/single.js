class Bird {
    fly() {
        console.log("Bird can fly");
    }
}

class Parrot extends Bird {
    speak() {
        console.log("Parrot can speak");
    }
}

let p = new Parrot();

p.fly();
p.speak();