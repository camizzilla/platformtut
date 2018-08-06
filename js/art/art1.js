///Articolo 1 Iniziamo con il canvas, anzi inizializiamo
/*jshint esversion: 6 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;


var intro = () => {
    ctx.font        = '60px Tahoma';
    ctx.fillStyle   = '#0099CC';
    ctx.textAlign   ='center';
    ctx.fillText('Platform Game', canvas.width/2, canvas.height/2 -100);
    
    ctx.font        = '20px Geneva';
    ctx.fillText('Tra poco un giocone incredibile', canvas.width/2, canvas.height/2 -50);    
}


var backgroundPsychedelic = () => {
    //https://www.sitepoint.com/generating-random-color-values/
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    ctx.fillStyle = hue;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

var background = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

var startGame = () => {
    requestAnimationFrame(loopGame);
}


var loopGame = () => {
    background('#000');
    //backgroundPsychedelic();
    requestAnimationFrame(loopGame);
  }

  //Timer che dopo tre secondi fa partire il gioco 
  //Verrà sostituito con la pressione di un di tasto per far partire il gioco, nell'articolo della gestione dei tasti 
setTimeout(() => {
    startGame();
}, 3000);

intro();
