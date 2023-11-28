class Dolar {
    constructor(title, compra, venta) {
        this.title = title
        this.compra = compra
        this.venta = venta
    }
}
const dolar1 = new Dolar("Dólar Blue", 940, 960)
const dolar2 = new Dolar("Dólar MEP", 872.87, 875.45)
const dolar3 = new Dolar("Dólar Banco Nación", 347.50, 365.50)
const dolar4 = new Dolar("Dólar Solidario", 695, 731)
const dolar5 = new Dolar("Dólar Tarjeta", 695, 731)
const dolar6 = new Dolar("Dólar Turista", 695, 731)
const dolar7 = new Dolar("Dólar Mayorista", 348.95, 349.95)
const dolar8 = new Dolar("Dólar Futuro", 383.60, 383.90)
const dolar9 = new Dolar("Dólar Cripto", 919.85, 888.13)
const dolar10 = new Dolar("Dólar CCL", 874.84, 881.09)
const dolares = [dolar1, dolar2, dolar3, dolar4, dolar5, dolar6, dolar7, dolar8, dolar9, dolar10]




//Cards de cotizaciones
let cards = document.querySelector(".cards");
let i = 0; i < dolares.length; i ++
dolares.sort((compra1, compra2) => compra1.compra -compra2.compra)[i]
for (const dolar of dolares) {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<h3>${dolar.title}</h3>
                            <div class="precios">
                                <div class="precio"><h4>Compra</h4><h2>${dolar.compra}</h2></div>
                                <div class="precio"><h4>Venta</h4><h2>${dolar.venta}</h2></div>
                            </div>
                            <span>Últimas 24hs.</span>`
    cards.appendChild(card);
}



//Select para tipos de dolar compra
let tipoDolarCompra = document.getElementById("tipoDolarCompra")
for (const dolar of dolares) {
    let optionCompra = document.createElement("option")
    optionCompra.value = dolar.compra
    optionCompra.id = dolar.title
    optionCompra.innerHTML = `${dolar.title} = USD ${dolar.compra}`
    tipoDolarCompra.appendChild(optionCompra)
}


//Select para tipos de dolar venta
let tipoDolarVenta = document.getElementById("tipoDolarVenta")
for (const dolar of dolares) {
    let optionVenta = document.createElement("option")
    optionVenta.value = dolar.venta
    optionVenta.innerHTML = `${dolar.title} = USD ${dolar.venta}`
    tipoDolarVenta.appendChild(optionVenta)
}





//Esto es la calculadora de compra
let comprar = document.getElementById("comprar")
let calcularCompra = document.getElementById("calcularCompra")
let resultadoCompra = document.querySelector("#resultadoCompra")
let dolarSeleccionadoCompra = document.getElementById("tipoDolarCompra")

calcularCompra.onclick = () => {
    let precioCompraFinal = (comprar.value / dolarSeleccionadoCompra.value).toFixed(2)
    let totalDolares = document.getElementById("totalDolares")
    totalDolares.innerHTML = `USD ${precioCompraFinal}`
    resultadoCompra.appendChild(totalDolares)
    localStorage.setItem("Compra USD ", precioCompraFinal)
    historialCompra()
}

function historialCompra() {
    let CompraLocalStorage = localStorage.getItem("Compra USD ")
    let pCompra = document.createElement("p")
    pCompra.textContent = "Compra USD " + CompraLocalStorage
    historialCompras.appendChild(pCompra)
}





//Esto es la calculadora de venta
let vender = document.getElementById("vender")
let calcularVenta = document.getElementById("calcularVenta")
let resultadoVenta = document.querySelector("#resultadoVenta")
let dolarSeleccionadoVenta = document.getElementById("tipoDolarVenta")

calcularVenta.onclick = () => {
    let precioVentaFinal = (vender.value / dolarSeleccionadoVenta.value).toFixed(2)
    let totalPesos = document.getElementById("totalPesos")
    totalPesos.innerHTML = `$ ${precioVentaFinal}`
    resultadoVenta.appendChild(totalPesos)
    localStorage.setItem("Vende por $ ", precioVentaFinal)
    historialVenta()
}

function historialVenta() {
    let VentaLocalStorage = localStorage.getItem("Vende por $ ")
    let pVenta = document.createElement("p")
    pVenta.textContent = "Vende por $ " + VentaLocalStorage
    historialVentas.appendChild(pVenta)
}





//limpia el historial
let reset = document.getElementById("reset")
reset.onclick = () => {
    localStorage.clear()
    historialCompras.remove()
    historialVentas.remove()
}