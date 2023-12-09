

//Genero el constructor para los datos que quiero traer
class Dolar {
    constructor(nombre,compra,venta,fechaActualizacion) {
        this.nombre = nombre
        this.compra = compra
        this.venta = venta
        this.fechaActualizacion = fechaActualizacion
    }
}



//Traigo los datos de la API de dolar
fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
        const dolar1 = new Dolar(data[0].nombre, data[0].compra, data[0].venta, formatearFecha(data[0].fechaActualizacion))
        const dolar2 = new Dolar(data[1].nombre, data[1].compra, data[1].venta, formatearFecha(data[1].fechaActualizacion))
        const dolar3 = new Dolar(data[2].nombre, data[2].compra, data[2].venta, formatearFecha(data[2].fechaActualizacion))
        const dolar4 = new Dolar(data[3].nombre, data[3].compra, data[3].venta, formatearFecha(data[3].fechaActualizacion))
        const dolar5 = new Dolar(data[4].nombre, data[4].compra, data[4].venta, formatearFecha(data[4].fechaActualizacion))
        const dolar6 = new Dolar(data[5].nombre, data[5].compra, data[5].venta, formatearFecha(data[5].fechaActualizacion))
        const dolar7 = new Dolar(data[6].nombre, data[6].compra, data[6].venta, formatearFecha(data[6].fechaActualizacion))
        const dolares = [dolar1, dolar2, dolar3, dolar4, dolar5, dolar6, dolar7]







// Cards de cotizaciones
let cards = document.querySelector(".cards")
for (const dolar of dolares) {
let card = document.createElement("div")
card.className = "card"

let compraHTML = ""
if (dolar.compra !== null) {
    compraHTML = `<div class="precio"><h4>Compra</h4><h2>${dolar.compra}</h2></div>`
}

card.innerHTML = `<h3>${dolar.nombre}</h3>
                    <div class="precios">${compraHTML}
                        <div class="precio">
                            <h4>Venta</h4>
                            <h2>${dolar.venta}</h2>
                        </div>
                    </div>
                    <span>${dolar.fechaActualizacion}</span>`
cards.appendChild(card)
}




//Select para tipos de dolar compra
let tipoDolarCompra = document.getElementById("tipoDolarCompra")
for (const dolar of dolares) {
  if (dolar.compra !== null) {
        let optionCompra = document.createElement("option")
        optionCompra.value = dolar.compra
        optionCompra.id = dolar.nombre
        optionCompra.innerHTML = `${dolar.nombre} = USD ${dolar.compra}`
        tipoDolarCompra.appendChild(optionCompra)
  }
}


//Select para tipos de dolar venta
let tipoDolarVenta = document.getElementById("tipoDolarVenta")
for (const dolar of dolares) {
    if (dolar.venta !== null) {
        let optionVenta = document.createElement("option")
        optionVenta.value = dolar.venta
        optionVenta.innerHTML = `${dolar.nombre} = USD ${dolar.venta}`
        tipoDolarVenta.appendChild(optionVenta)
    }
}





//Esto es la calculadora de compra
let comprar = document.getElementById("comprar")
let calcularCompra = document.getElementById("calcularCompra")
let resultadoCompra = document.querySelector("#resultadoCompra")
let dolarSeleccionadoCompra = document.getElementById("tipoDolarCompra")


calcularCompra.onclick = () => {
    if (comprar.value > 0) {
    let precioCompraFinal = (comprar.value / dolarSeleccionadoCompra.value).toFixed(2)
    let totalDolares = document.getElementById("totalDolares")
    totalDolares.innerHTML = `USD ${precioCompraFinal}`
    resultadoCompra.appendChild(totalDolares)
    localStorage.setItem("Compra USD ", precioCompraFinal)
    historialCompra()
    } else {
        validarNumeroCompra()
    }
}

function historialCompra() {
    let CompraLocalStorage = localStorage.getItem("Compra USD ")
    let pCompra = document.createElement("p")
    pCompra.textContent = "Compra USD " + CompraLocalStorage
    historialResultado.appendChild(pCompra)
}



//validadores del input de compra
let inputCompra = document.getElementById('comprar')
inputCompra.addEventListener('input', () => {
    validarNumeroCompra()
})

function validarNumeroCompra() {
    let numeroCompra = parseFloat(inputCompra.value)
    if (isNaN(numeroCompra) || numeroCompra <= 0) {
        document.getElementById('errorMensajeCompra').innerText = 'Ingrese un número mayor a 0'
    } else {
        document.getElementById('errorMensajeCompra').innerText = ''
    }
}





//Esto es la calculadora de venta
let vender = document.getElementById("vender")
let calcularVenta = document.getElementById("calcularVenta")
let resultadoVenta = document.querySelector("#resultadoVenta")
let dolarSeleccionadoVenta = document.getElementById("tipoDolarVenta")

calcularVenta.onclick = () => {
    if (vender.value > 0) {
    let precioVentaFinal = (vender.value / dolarSeleccionadoVenta.value).toFixed(2)
    let totalPesos = document.getElementById("totalPesos")
    totalPesos.innerHTML = `$ ${precioVentaFinal}`
    resultadoVenta.appendChild(totalPesos)
    localStorage.setItem("Vende por $ ", precioVentaFinal)
    historialVenta()
    } else {
        validarNumeroVenta()
    }
}

function historialVenta() {
    let VentaLocalStorage = localStorage.getItem("Vende por $ ")
    let pVenta = document.createElement("p")
    pVenta.textContent = "Vende por $ " + VentaLocalStorage
    historialResultado.appendChild(pVenta)
}




//validadores del input de venta
let inputVenta = document.getElementById('vender')
inputVenta.addEventListener('input', () => {
    validarNumeroVenta()
})

function validarNumeroVenta() {
    let numeroVenta = parseFloat(inputVenta.value)
    if (isNaN(numeroVenta) || numeroVenta <= 0) {
        document.getElementById('errorMensajeVenta').innerText = 'Ingrese un número mayor a 0'
    } else {
        document.getElementById('errorMensajeVenta').innerText = ''
    }
}







//limpia el historial
let reset = document.getElementById("reset")
reset.onclick = () => {
  let historialResultado = document.getElementById("historialResultado")
  historialResultado.innerHTML = ""
}





//Hago un alerta cada 10 minutos para recordar que revise los valores ya que se ven actualizando por la API
setTimeout (() => {
    Swal.fire({
        title: "Hace más de 10 minutos que estas en la página, recordá chequear los valores del precio ya que se actualizan",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}, 600000)




//Cierro el fecth de la API y cambio el formato de la fecha
})

//Muestro un alerta en el caso de que la API este caida
.catch(error => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema en la recolección de datos y estamos trabajando para solucionarlo",
      });
})

    //Cambio el formato de la fecha que trae la API
function formatearFecha(fecha) {
    return new Date(fecha).toLocaleString('es-AR', {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    })
}