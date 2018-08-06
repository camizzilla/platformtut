/*******************************************************************************************************/
// ///Articolo 2 Immagini

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;

var fps = 30;
//Ascoltatare di eventi 
var keys = [];
var gravity = 0.98;

//Se viene premuto un tasto 
document.addEventListener('keydown', (event) => {
    keys[event.keyCode] = true;
})

document.addEventListener('keyup', (event) => {
    keys[event.keyCode] = false;
})


// //Funzione che crea l'oggetto immagine statica, prende come valori: il percoso "../dovesitrovalamiaimmagine",
// //la larghezza (w) e l'altezza (h). Queste ultime sono opzionali. La mia immagine per praticità è delle dimensioni del canvas, 600x480  
var image = function (path, w, h) {

    let img = new Image();
    img.src = path;

    this.width = w || img.width;
    this.height = h || img.height;

    return img;
}
//////////////////////////////////////////////////
//////////////Item////////////////////////////////
//////////////////////////////////////////////////

var itemsCreate = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
    this.img = img;

    //Relativo all'immagine
    this.sx = sx || 0;
    this.sy = sy || 0;
    this.sw = sw || this.img.width;
    this.sh = sh || this.img.height;
    //Relativo al canvas
    this.dx = dx || 0;
    this.dy = dy || 0;
    this.dw = dw || this.sw;
    this.dh = dh || this.sh;
}

var itemsDraw = (sprite) => {
    return ctx.drawImage(
        sprite.img,
        sprite.sx,
        sprite.sy,
        sprite.sw,
        sprite.sh,
        sprite.dx,
        sprite.dy,
        sprite.dw,
        sprite.dh
    )
}

//////////////////////////////////////////////////
//////////////Platform////////////////////////////
//////////////////////////////////////////////////

var platforms = [];
var platform_width = 120;
var platform_height = 10;

var platformsCreate = (x, y, w, h) => {
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 0;
    this.h = h || 0;
    let platform = {
        x: this.x,
        y: this.y,
        width: this.w,
        height: this.h,
    }
    platforms.push(platform);
}

platformsCreate(440, 184, platform_width, platform_height);
platformsCreate(225, 240, platform_width * 2, platform_height);
platformsCreate(50, 300, platform_width, platform_height);
platformsCreate(220, 340, platform_width, platform_height);
platformsCreate(400, 380, platform_width, platform_height);
platformsCreate(245, 420, platform_width, platform_height);
platformsCreate(0, canvas.height - platform_height, canvas.width, platform_height);

//////////////////////////////////////////////////
//////////////Item////////////////////////////////
//////////////////////////////////////////////////

var spriteCreate = function (img, frameTotal, x, y) {
    this.img = img;

    //Relativo all'immagine
    this.sx = 0;
    this.sy = 0;

    this.frameCurrent = 0;
    this.frameTotal = frameTotal || 0;
    this.rowCurrent = 0;
    this.rowRight = 0;
    this.rowLeft = 1;
    //this.rowJump      = 2;
    this.rowTotal = 2;
    this.img.onLoad
    this.spriteWidth = 80 || this.img.width / this.frameTotal;
    this.spriteHeight = 80 || this.img.height / this.rowTotal;

    //Relativo al canvas
    this.x = x || 0;
    this.y = canvas.height - 80;
    this.speedX = 5;
    this.speedY = 0;
    this.jumping = false;
    this.jump = 7;
}

var spritesDraw = (sprite) => {
    return ctx.drawImage(
        sprite.img,
        sprite.spriteWidth * sprite.frameCurrent,
        sprite.spriteHeight * sprite.rowCurrent,
        sprite.spriteWidth,
        sprite.spriteHeight,
        sprite.x,
        sprite.y,
        sprite.spriteWidth,
        sprite.spriteHeight
    )
}
// //Creiamo la nostra immagine di sfondo, passandogli i parametri e la salviamo nella variabile bkg
var bkg = new image('assets/images/sky.png', 10, 24);
var sprite = new image('assets/images/items_spritesheet.png');
var playerImg = new image('assets/images/Megaman.png');

var diamond = new itemsCreate(sprite, 148, 95, 39, 28, 500, 100, 39, 28);
var key = new itemsCreate(sprite, 60, 370, 92, 45, 200, 100, 92, 45);
var flag = new itemsCreate(sprite, 200, 0, 70, 70, 50, 100);

var player = new spriteCreate(playerImg, 10, 63, 400);

function loopGame() {

    setTimeout(function () {
        ctx.drawImage(bkg, 0, 0);
        platformsDraw(playerImg);

        itemsDraw(diamond);
        itemsDraw(key);
        itemsDraw(flag);

        spritesDraw(player);

        player.frameCurrent = ++player.frameCurrent % player.frameTotal;

        movePlayer();
        requestAnimationFrame(loopGame);
        // ... Code for Drawing the Frame ...

    }, 1000 / fps);
    // Do whatever
    //Mettiamo il nostro sfondo nel ciclo del gioco e se è stato caricato (bgReady == True), abbiamo il nostro sfondo

}
requestAnimationFrame(loopGame);


platformsDraw = () => {
    ctx.fillStyle = "#333333";
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

var movePlayer = () => {
    // if(player.x > 0 + player.width)  (player.x < canvas.width - player.frameWidth)
    if (keys[38]) {
        if (!player.jumping) {
            player.speedY = -player.jump * 2;
            player.jumping = true;
        }
    }

    if (keys[39]) {
        if (player.x < canvas.width - player.spriteWidth) {
            player.x += player.speedX;
            player.rowCurrent = player.rowRight;
        }

    }
    if (keys[37]) {
        if (player.x > 0) {
            player.x -= player.speedX;
            player.rowCurrent = player.rowLeft;
        }

    }
    player.y += player.speedY;
    player.speedY += gravity;

    if (player.y >= canvas.height - player.spriteHeight) {
        player.y = canvas.height - player.spriteHeight;
        player.jumping = false;
    }
}