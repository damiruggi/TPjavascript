
const valordolarCompra = 935
const valordolarVenta = 945

let operacion = prompt("Ingrese la operacion (compra o venta)")

if (operacion == "compra") {
let numero1 = parseFloat (prompt("Ingrese cuántos pesos va a utilizar para comprar"))
alert("Compraste: USD" + (numero1 / valordolarVenta))

} else if (operacion == "venta") {
    let numero2 = parseFloat (prompt("Ingrese dólares quiere vender"))
    alert("Vendiste: $" + (numero2 * valordolarCompra))

} else { alert("Operación inválida") 
}



/*
//Calculadora de prestamos
const valorTasa = 935
const valordolarVenta = 945

function calcularDolar () {

}

let operacion = prompt("Ingrese la operacion (compra o venta)")

if (operacion == "compra") {
let numero1 = parseFloat (prompt("Ingrese cuántos pesos va a utilizar para comprar"))
alert("Compraste: USD" + (numero1 / valordolarVenta))

} else if (operacion == "venta") {
    let numero2 = parseFloat (prompt("Ingrese dólares quiere vender"))
    alert("Vendiste: $" + (numero2 * valordolarCompra))

} else { alert("Operación inválida") 
}
*/



/*
function calcularImpuestos(valorBase, impPais = 0.30, impGanancias = 0.45, impBP = 0.25) {
    let impuestos = valorBase * impPais + valorBase * impGanancias + valorBase * impBP
    alert("La suma de sus impuestos es: " + impuestos)
    return valorBase + impuestos

}
let valorVideojuego=parseFloat(prompt("Ingrese el valor de su videojuego y te digo el valor con impuestos"))
let costoTotal = calcularImpuestos(valorVideojuego)
alert("El costo total es " + costoTotal)
*/





/*
//Calculadora de impuestos
function calcularImpuestos(valorBase, impPais = 0.30, impGanancias = 0.45, impBP = 0.25) {
    let impuestos = valorBase * impPais + valorBase * impGanancias + valorBase * impBP
    alert("La suma de sus impuestos es: " + impuestos)
    return valorBase + impuestos
}

let confirmacion = true
do {
    let valorVideojuego = parseFloat(prompt("Ingrese el valor de su videojuego"))
    let costoTotal = calcularImpuestos(valorVideojuego, 0.50, 0.45)
    alert("El costo total es " + costoTotal)

    let respuesta = prompt("¿Desea ingresar otro precio para calcular?")

    if (respuesta == "no") {
        confirmacion = false
    }

} while (confirmacion == true)
*/


