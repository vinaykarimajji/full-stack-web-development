class Tree {
    grow() {
        console.log("Tree can grow");
    }
}

class FruitTree extends Tree {
    fruit() {
        console.log("Fruit tree gives fruit");
    }
}

class MangoTree extends FruitTree {
    mango() {
        console.log("Mango tree gives mangoes");
    }
}

let m = new MangoTree();

m.grow();
m.fruit();
m.mango();