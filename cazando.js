let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

//tamaños
const ALTURA_GATO=40;
const ANCHO_GATO=60;
const ALTURA_COMIDA=20;
const ANCHO_COMIDA=20;

//posiciones
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;  
let comidaY = 0;

function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarGato(){
    graficarRectangulo(canvas.width/2 - ANCHO_GATO/2 + gatoX, canvas.height/2 - ALTURA_GATO/2 - gatoY, ANCHO_GATO, ALTURA_GATO, "blue");

    
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarComida(){
    graficarRectangulo(canvas.width - ANCHO_COMIDA, canvas.height - ALTURA_COMIDA, ANCHO_COMIDA, ALTURA_COMIDA, "orange");
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda(){
    gatoX-=10;
    actualizarPantalla();
}
function moverDerecha(){
    gatoX+=10;
    actualizarPantalla();
}
function moverArriba(){
    gatoY+=10;
    actualizarPantalla();
}
function moverAbajo(){
    gatoY-=10;
    actualizarPantalla();
}
function moverIzquierda(){
    gatoX-=10;
    actualizarPantalla();
}
function moverIzquierda(){
    gatoX-=10;
    actualizarPantalla();
}
function actualizarPantalla(){
    limpiarCanvas();
    graficarGato();
    graficarComida();
}

