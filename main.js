/************* Hero *************/

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

/************* Skills *************/

const Barras = document.getElementById("barras")
const SkillsMouse = document.getElementById("Skills")

let skills = [
    { label: "Python", value: 75 },
    { label: "Java", value: 65 },
    { label: "SQL", value: 70 },
    { label: "Assembler", value: 40 },
    { label: "HTML", value: 80 },
    { label: "CSS", value: 60 },
    { label: "Javascript", value: 20 },
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

SkillsMouse.addEventListener("mouseover", insertarBarras)

/************* Contact Me *************/

const send = document.getElementById("Send")

send.onclick = () => {
    let name = document.getElementById("Name").value
    let email = document.getElementById("Email").value
    let msg = document.getElementById("Message").value

    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name != "") {
        if (email != "") {
            if(email.match(validEmail)) {
                if (msg != "") {

                    alert(`
                    Su solicitud ha sido enviada con éxito!

                    Nombre: ${name}
                    Email: ${email}
                    Mensaje: ${msg}
                    `)
                    document.getElementById("Message").value = ""
                    document.getElementById("Email").value = ""
                    document.getElementById("Name").value = ""
                } else {
                    alert(`Error, por favor agregue un mensaje al formulario`)
                    }
            } else {
                alert("Error, por favor ingrese un email válido")
                
            }
        } else {
                alert(`Error, por favor ingrese un email`)
            }
    } else {
                alert(`Error, por favor ingrese un nombre`)
            }

}