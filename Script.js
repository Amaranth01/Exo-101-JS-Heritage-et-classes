class Vehicules {

    constructor(color, wheel, brand) {
        this.color = color;
        this.wheel = wheel;
        this.brand = brand;
    }

    presenter() {
        console.log("Bravo vous avez démarré la voiture");
        console.log("Vous avez arrêté votre voiture");
    }
}

let vehicle = new Vehicules("Rouge", 4, "Ford");
vehicle.presenter()

class Velo extends Vehicules {

    constructor(color, wheel, brand,rayonRoues, typePeinture) {
        super(color, wheel, brand);
        this.rayonRoues = rayonRoues;
        this.typePeinture = typePeinture;
    }
    presenter1(){
        console.log("Je suis monté sur mon vélo, je part");
    }
}
let velo = new Velo("Gris", 2, "Decathlon", 35, "metallique");
velo.presenter1();

class Voiture extends Vehicules{

    constructor(color, wheel, brand, assurance, proprietaire) {
        super(color, wheel, brand);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }

    presenter2 () {
        console.log("J'ai jeté un sous au carWash");
    }
}

let voiture = new Voiture("Rouge", 4, "Ford", "AXA", "moi");
voiture.presenter2();