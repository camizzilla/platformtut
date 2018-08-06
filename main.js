///Articolo 1 Iniziamo con il canvas, anzi inizializiamo
// var canvas = document.getElementById("myCanvas1");
// var ctx = canvas.getContext('2d');

// canvas.width = 800;
// canvas.height = 600;

// var backgroundPsychedelic = () => {
//     //https://www.sitepoint.com/generating-random-color-values/
//     var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     ctx.fillStyle = hue;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }

// var background = (color) => {
//     ctx.fillStyle = color;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }


// function loopGame() {
//     // Do whatever
//     background('#000');
//     //backgroundPsychedelic();
//     requestAnimationFrame(loopGame);
//   }
//   requestAnimationFrame(loopGame);

/*******************************************************************************************************/
// ///Articolo 2 Immagini

// var canvas = document.getElementById("myCanvas2");
// var ctx = canvas.getContext('2d');
// canvas.width = 640;
// canvas.height = 480;

// //Funzione che crea l'oggetto immagine statica, prende come valori: il percoso "../dovesitrovalamiaimmagine",
// //la larghezza (w) e l'altezza (h). Queste ultime sono opzionali. La mia immagine per praticità è delle dimensioni del canvas, 600x480  
//     var imageStatic = (path, w, h) => {
//     let img = new Image (w, h);
//     img.src = path;
//     return img;
// }

// //Creiamo la nostra immagine di sfondo, passandogli i parametri e la salviamo nella variabile bkg
// var bkg = imageStatic('assets/images/VulcanBack.png', 640, 480);

// //Con Onload si assicuriamo che la nostra immagine venga caricata completamente prima di essere stampata a video
// //Non è il massimo, specialmente se ci sono tante immagini da caricare. 
// //Non volevo fare qualcosa di complicato e questa è delle soluzioni più semplici.
// //Più avanti ottimizzere questa parte  
// var bgReady = false;
// bgImage.onload = function () {
// 	bgReady = true;
// };


// function loopGame() {
//     // Do whatever
//     //Mettiamo il nostro sfondo nel ciclo del gioco e se è stato caricato (bgReady == True), abbiamo il nostro sfondo
//     if (bgReady) {
//         ctx.drawImage(bkg, 0, 0);
//     }
//     requestAnimationFrame(loopGame);
//   }
//   requestAnimationFrame(loopGame);

  /*******************************************************************************************************/
///Articolo 3 Sprites

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;

//Funzione che crea l'oggetto immagine statica, prende come valori: il percoso "../dovesitrovalamiaimmagine",
//la larghezza (w) e l'altezza (h). Queste ultime sono opzionali. La mia immagine per praticità è delle dimensioni del canvas, 600x480  
    var imageStatic = (path, w, h) => {
    let img = new Image (w, h); //@@@Guardare per opzioni w h@@@@
    img.src = path;
    return img;
}
//Creiamo la nostra immagine di sfondo, passandogli i parametri e la salviamo nella variabile bkg
var bkg = imageStatic('assets/images/VulcanBack.png', 640, 480);
//Con Onload si assicuriamo che la nostra immagine venga caricata completamente prima di essere stampata a video
//Non è il massimo, specialmente se ci sono tante immagini da caricare. 
//Non volevo fare qualcosa di complicato e questa è delle soluzioni più semplici.
//Più avanti ottimizzere questa parte  
var bgReady = false;
bkg.onload = function () {
    bgReady = true;
};

var items = imageStatic('assets/images/lock_key_star_yellow.png', 210, 70);

function loopGame() {
    // Do whatever
    //Mettiamo il nostro sfondo nel ciclo del gioco e se è stato caricato (bgReady == True), abbiamo il nostro sfondo
    if (bgReady) {
        ctx.drawImage(bkg, 0, 0);
    }
    ctx.drawImage(items, 100, 100);

    requestAnimationFrame(loopGame);
  }
  requestAnimationFrame(loopGame);