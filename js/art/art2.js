/*******************************************************************************************************/
// ///Articolo 2 Immagini

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;

// //Funzione che crea l'oggetto immagine statica, prende come valori: il percoso "../dovesitrovalamiaimmagine",
// //la larghezza (w) e l'altezza (h). Queste ultime sono opzionali. La mia immagine per praticità è delle dimensioni del canvas, 600x480  
    var imageStatic = (path, w, h) => {
    this.width = w;
    this.height = h;
    
    let img = new Image ();
    img.src = path;

    if (w){
        img.width = this.width; 
    }
    if (h){
        img.height = this.height; 
    }
    return img;
}

// //Creiamo la nostra immagine di sfondo, passandogli i parametri e la salviamo nella variabile bkg
var bkg = imageStatic('assets/images/VulcanBack.png', 10, 24);
console.log('bkg',bkg);

function loopGame() {
    // Do whatever
    //Mettiamo il nostro sfondo nel ciclo del gioco e se è stato caricato (bgReady == True), abbiamo il nostro sfondo
    ctx.drawImage(bkg, 0, 0);
    requestAnimationFrame(loopGame);
  }
  requestAnimationFrame(loopGame);
