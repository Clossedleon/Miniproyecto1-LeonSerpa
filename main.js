const carruselItems = document.getElementById("CarruselItems")
const BD = document.getElementById("BotonDerecho")
const BI = document.getElementById("BotonIzquierdo")
const carrusel = document.getElementById("Carrusel")

let width = carrusel.scrollWidth
let max

BD.onclick = function () {
    width = carrusel.scrollWidth
    carruselItems.scrollLeft = carruselItems.scrollLeft + width;
}

BI.onclick = function () {
    width = carrusel.scrollWidth
    carruselItems.scrollLeft = carruselItems.scrollLeft - width;
}

let intervalo = null;

const start = () => {
    intervalo = setInterval(function (params) {
        width = carrusel.scrollWidth
        carruselItems.scrollLeft = carruselItems.scrollLeft + width;
    }, 5000)
}

