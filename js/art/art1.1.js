/*jshint esversion: 6 */

//Articolo 0
//Come funziona il canvas e l'asse cartesiono.
//


///Articolo 1 Iniziamo con il canvas, anzi inizializiamo
//Catturiamo il nostro elemento <canvas> trammite il suo id "myCanvas"
var canvas = document.getElementById('myCanvas');

//Due proprietà sono l'altezza e la larghezza del canvas. Utili per quando vorremo rendere responsive il nostro gioco.
canvas.height = 480;
canvas.width = 640;


//Con getContext gli diciamo che tipo di contenuto vogliamo elaborare, 2d, come faremo noi, oppure 3d con l'attributo "webgl"
//Mentre il 2d è una tecnologia consolidata, il 3d è in fase sperimentale. 
//Ci sono molti lavori interessanti, come 
var ctx = canvas.getContext('2d');

//Con questa semplice introduzione, vedremo alcuni metodi del canvas che abbiamo richiamato con getContext
let intro = () => {
    //Creiamo un titolo per il nostro gioco
    //scegliamo il tipo di font e la grandezza
    ctx.font        = '60px Tahoma';
    //con fillStyle "rempiamo" di colore la scritta
    ctx.fillStyle   = '#0099CC';
    //e la centriamo
    ctx.textAlign   ='center';
    //FillText, prende 3 argomenti. Il testo, la cordinata x e y del canvas. Nel Nostro caso l'x corrisponde alla metà del canvas in orizzonatale e l'y la metà in verticale meno 100px.
    ctx.fillText('Platform Game', canvas.width/2, canvas.height/2 -100);
    
    //e facciamo lo stesso per il sotto titolo e lo posizioniamo un po' più in basso
    ctx.font        = '20px Geneva';
    ctx.fillStyle   = '#000';
    ctx.fillText('Tra poco un giocone incredibile', canvas.width/2, canvas.height/2 -50);    
};


let backgroundPsychedelic = () => {
    //https://www.sitepoint.com/generating-random-color-values/
    let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    ctx.fillStyle = hue;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

let background = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};


let startGame = () => {
    //Visualiziamo l'introduzione 
    intro();
    
    //e tre secondi facciamo partire il gioco 
    //Questo timeOut verrà sostituito con la pressione di un di tasto per far partire il gioco con il suo ciclo, nell'articolo della gestione dei tasti 
    setTimeout(() => {
        
        requestAnimationFrame(loopGame);
    }, 3000);
}


let loopGame = () => {
    background('#000');
    //backgroundPsychedelic();
    requestAnimationFrame(loopGame);
  }



//Appena tutta la pagina si sarà caricata, facciamo partire il gioco richiamando la funzione startGame(). 
//Importante in special modo quando si caricano delle immagini, che sono pesanti.//Correggere 
window.onload = () => {
    startGame();
  };

