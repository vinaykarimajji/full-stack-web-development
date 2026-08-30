class Instrument {
    play() {
        console.log("Instrument can play");
    }
}

class Guitar extends Instrument {
    strum() {
        console.log("Guitar is strumming");
    }
}

class Piano extends Instrument {
    press() {
        console.log("Piano is playing");
    }
}

let g = new Guitar();
let p = new Piano();

g.play();
g.strum();

p.play();
p.press();