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
let comidaX = canvas.width - ANCHO_COMIDA;  
let comidaY = canvas.height - ALTURA_COMIDA;
let tiempo = 20;
let puntaje = 0;
let intervalo;

function iniciarJuego(){
    graficarGato();
    graficarComida();

    intervalo = setInterval(restarTiempo, 1000);
}

function graficarGato(){
    graficarRectangulo(canvas.width/2 - ANCHO_GATO/2 + gatoX, canvas.height/2 - ALTURA_GATO/2 - gatoY, ANCHO_GATO, ALTURA_GATO, "blue");

    
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTURA_COMIDA, "orange");
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda(){
    gatoX-=10;
    actualizarPantalla();
    detectarColision();
}
function moverDerecha(){
    gatoX+=10;
    actualizarPantalla();
    detectarColision(); 
}
function moverArriba(){
    gatoY+=10;
    actualizarPantalla();
    detectarColision();
}
function moverAbajo(){
    gatoY-=10;
    actualizarPantalla();
    detectarColision(); 
}

function actualizarPantalla(){
    limpiarCanvas();
    graficarGato();
    graficarComida();
}
function detectarColision(){
      // posición REAL del gato
    let gatoRealX = canvas.width/2 - ANCHO_GATO/2 + gatoX;
    let gatoRealY = canvas.height/2 - ALTURA_GATO/2 - gatoY;


    // colisión
    if (gatoRealX < comidaX + ANCHO_COMIDA &&
        gatoRealX + ANCHO_GATO > comidaX &&
        gatoRealY < comidaY + ALTURA_COMIDA &&
        gatoRealY + ALTURA_GATO > comidaY) {
        
        aparecerComida();

        puntaje += 1;
        tiempo += 5;
        mostrarEnSpan("txtpuntos", puntaje);

        if (puntaje >= 6){
            clearInterval(intervalo);
            alert("🏆 ¡Ganaste!");
        }

    }
}

function restarTiempo(){
    tiempo -= 1;
    mostrarEnSpan("txttiempo", tiempo);
    if (tiempo <= 0){
        clearInterval(intervalo);
        alert("¡Se acabó el tiempo! Intenta de nuevo.");

    }
}
function aparecerComida(){
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTURA_COMIDA);
    actualizarPantalla();
}

function reiniciar(){
    //Reiniciar variables en código y en pantalla
    puntaje = 0;
    tiempo = 20;
    mostrarEnSpan("txtpuntos", puntaje);
    mostrarEnSpan("txttiempo", tiempo);

    iniciarJuego();
}

