const estadoJugador = {
    velocidad: 100,
    mostrar: true,
    top: 0,
    left: 0,
};
const keycodes = {
    izquierda : 37,
    arriba : 38,
    derecha : 39,
    abajo : 40,

};

const jugador = document.querySelector("#jugador");
const desaparecer = document.querySelector("#desaparecer");

desaparecer.onclick = () => {
    //si esta visible escondelo sino mostralo
    if (jugador.mostrar) {
        jugador.style.opacity = 0;
        jugador.mostrar = false;

    } else {
        jugador.style.opacity = 1;
        jugador.mostrar = true;

    }
}

const mover = (e) => {
    //ver que tecla apreto el usuario y segun eso mover
    switch (e.keyCode) {
        case (keycodes.arriba):
            estadoJugador.top -= estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px"
            break;
        case (keycodes.abajo):
            estadoJugador.top += estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px"
            break;
        case (keycodes.izquierda):
            estadoJugador.left -= estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px"
            break;
        case (keycodes.derecha):
            estadoJugador.left += estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px"
            break;

        default:
            alert("solo se puede jugar con las flechas");
            break;
    }
}

window.addEventListener("keydown", mover);