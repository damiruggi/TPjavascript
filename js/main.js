

const valordolarCompra = 935
const valordolarVenta = 945

let confirmacionCompra = true
        do {
let operacion = prompt("¿Desea comprar o vender dólares?")
switch (operacion) {
    case "comprar":
        function compra(monto, valor) {
        let montoPesos
        do {
            montoPesos = parseFloat (prompt("Ingrese cuántos pesos va a utilizar para comprar"))
        } while (isNaN(montoPesos) == true)
        alert("Compraste: USD" + (montoPesos / valordolarVenta))
        }

        let confirmacionCompra = true
        do {
            compra ()

            let respuesta = prompt("¿Desea volver a calcular?")

            if (respuesta == "no") {
                confirmacionCompra = false
            }

        } while (confirmacionCompra == true)
        break

    case "vender":
        function venta(monto, valor) {
        let montoDolares
        do {
        montoDolares = parseFloat (prompt("Ingrese cuántos dólares va a va vender"))
        } while (isNaN(montoDolares) == true)
        alert("Vendiste: $" + (montoDolares * valordolarCompra))
        }

        let confirmacionVenta = true
        do {
            
            venta ()

            let respuesta = prompt("¿Desea volver a calcular?")

            if (respuesta == "no") {
                confirmacionVenta = false
            }

        } while (confirmacionVenta == true)
        break

    default:
        alert("Operacion invalida")
}
let respuesta = prompt("¿Desea realizar otro cálculo?")

            if (respuesta == "no") {
                confirmacionCompra = false
            }
} while (confirmacionCompra == true)