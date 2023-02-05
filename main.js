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

const Barras = document.getElementById("barras")
const SkillsMouse = document.getElementById("Skills")

let skills = [
    { label: "Python", value: 75 },
    { label: "Java", value: 65 },
    { label: "SQL", value: 70 },
    { label: "Assembler", value: 40 },
    { label: "HTML", value: 80 },
    { label: "CSS", value: 60 },
    { label: "Javascript", value: 30 },
]
let done = false

function insertarBarras() {
    if (!done) {
        skills.forEach((item) => {

        Barras.innerHTML += `
        <div class="bloque">
            <div class="barra">
                <div class="progreso" id="${item.label}" style="height:${item.value}%"></div>
            </div>
            <h3>${item.label}</h3>
        </div>
        `
        },
        done = true
        ) 
    };
}

SkillsMouse.addEventListener("click", insertarBarras)