/* Jsnack #1:
Creare un array di 7 oggetti:
Ogni oggetto descriverà una bici  con le seguenti proprietà:
nome, peso e brand. */

const bike = [

    {
        "bikeName" : "cross",
        "bikeWeigth" : 80,
        "bikeBrand" : "decathlon"
    },

    {
        "bikeName" : "road",
        "bikeWeigth" : 70,
        "bikeBrand" : "rock"
    },

    {
        "bikeName" : "mountain",
        "bikeWeigth" : 50,
        "bikeBrand" : "yamaha"
    },

    {
        "bikeName" : "electric",
        "bikeWeigth" : 55,
        "bikeBrand" : "star"
    },

    {
        "bikeName" : "hybrid",
        "bikeWeigth" : 40,
        "bikeBrand" : "gt"
    },

    {
        "bikeName" : "city",
        "bikeWeigth" : 56,
        "bikeBrand" : "mercedes"
    },

    {
        "bikeName" : "downhill",
        "bikeWeigth" : 37,
        "bikeBrand" : "bmw"
    }

]

console.log(bike);

/* Jsnack #2:
Creare un nuovo oggetto,
crearne una copia con la proprietà “numeroMarce” aggiunta
pushare il nuovo oggetto copia nell’array di oggetti
log in console dell’oggetto originale + log in console dell’oggeto copia
log in console dell’array di oggetti */

/* creiamo un nuovo oggetto al quale inseriamo un altro valore e lo pushamo */

let newBike = {

    "bikeName" : "climbing",
    "bikeWeigth" : 15,
    "bikeBrand" : "ferrari"

}

const newBikeUp = {...newBike, "numeroMarce" : "5"}

bike.push(newBikeUp)

console.log(newBike, newBikeUp);

console.log(bike);

/* Jsnack #3:
stampare a schermo l’elenco delle bici con tutte le info, principali (numero delle marce no); */

/* creiamo la variabile per stampare gli elementi in pagina */

const bikePage = document.getElementById("bikes");

/* andiamo a stampare gli elementi in pagina */

let bikeEl = "";

/* creiamo un ciclo for per stampare gli elementi */

for (let i = 0; i < bike.length; i++){

    /* facciamo un destructuring per creare le variabili in base al valore degli oggetti nell'array */

    const {bikeName, bikeWeigth, bikeBrand} = bike[i];

    /* creiamo gli elementi corrispondenti */

    bikeEl += `
        <div>${bikeName}</div>
        
        <div>${bikeWeigth}</div>

        <div>${bikeBrand}</div>
    `

    bikePage.innerHTML = bikeEl;

    bikePage.style.textAlign = "center";

    bikePage.style.fontSize = "20px";

}
