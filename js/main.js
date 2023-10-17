
const valordolarCompra = 935
const valordolarVenta = 945

let operacion = prompt("¿Desea comprar o vender dólares?")
switch (operacion) {
    case "comprar":
        let montoPesos = parseFloat (prompt("Ingrese cuántos pesos va a utilizar para comprar"))
        alert("Compraste: USD" + (montoPesos / valordolarVenta))
        break

    case "vender":
        let montoDolares = parseFloat (prompt("Ingrese cuántos dólares va a va vender"))
        alert("Vendiste: $" + (montoDolares * valordolarCompra))
        break

    default:
        alert("Operacion invalida")
}