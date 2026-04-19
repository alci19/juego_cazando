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
    graficarRectangulo(canvas.width/2 - ANCHO_GATO/2, canvas.height/2 - ALTURA_GATO/2, ANCHO_GATO, ALTURA_GATO, "blue");

    
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarComida(){
    graficarRectangulo(canvas.width - ANCHO_COMIDA, canvas.height - ALTURA_COMIDA, ANCHO_COMIDA, ALTURA_COMIDA, "orange");
}