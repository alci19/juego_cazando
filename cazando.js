let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

//tamaños
const ALTURA_GATO=40;
const ANCHO_GATO=60;

//posiciones
let gatoX = 0;
let gatoY = 0;


function graficarGato(){
    graficarRectangulo(canvas.width/2 - ANCHO_GATO/2, canvas.height/2 - ALTURA_GATO/2, ANCHO_GATO, ALTURA_GATO);

    
}

function graficarRectangulo(x, y, ancho, alto) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, ancho, alto);
}
