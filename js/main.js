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