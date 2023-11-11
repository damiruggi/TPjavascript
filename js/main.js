
class Dolar {
    constructor(title, compra, venta) {
        this.title = title
        this.compra = compra
        this.venta = venta
    }
}
const dolar1 = new Dolar("Blue", 940, 960)
const dolar2 = new Dolar("MEP", 872.87, 875.45)
const dolar3 = new Dolar("Banco Nación", 347.50, 365.50)
const dolar4 = new Dolar("Solidario", 695, 731)
const dolar5 = new Dolar("Tarjeta", 695, 731)
const dolar6 = new Dolar("Turista", 695, 731)
const dolar7 = new Dolar("Mayorista", 348.95, 349.95)
const dolar8 = new Dolar("Futuro", 383.60, 383.90)
const dolar9 = new Dolar("Cripto", 919.85, 888.13)
const dolar10 = new Dolar("CCL", 874.84, 881.09)
const dolares = [dolar1, dolar2, dolar3, dolar4, dolar5, dolar6, dolar7, dolar8, dolar9, dolar10]

for(let i = 0; i < dolares.length; i ++) {
    console.log(dolares.sort((compra1, compra2) => compra1.compra -compra2.compra)[i])
    }

    
    let confirmacionCompra = true
            do {
    let operacion = prompt("¿Desea comprar o vender dólares?")
    switch (operacion) {
        case "comprar":
            const DolarCompra = alert(dolares.map(prod => " " + prod.title + ": " + " $ " + prod.compra))
            function compra(monto, valor) {
            let montoPesos
            do {
                montoPesos = parseFloat (prompt("Ingrese cuántos pesos va a utilizar para comprar"))
            } while (isNaN(montoPesos) == true)
            const DolarCotizacionCompra = alert(dolares.map(prod => " " + prod.title + ": " + " USD " + (montoPesos / prod.compra).toFixed(3)))
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
            const DolarVenta = alert(dolares.map(prod => " " + prod.title + ": " + " $ " + prod.venta))
            function venta(monto, valor) {
            let montoDolares
            do {
            montoDolares = parseFloat (prompt("Ingrese cuántos dólares va a va vender"))
            } while (isNaN(montoDolares) == true)
            const DolarCotizacionVenta = alert(dolares.map(prod => " " + prod.title + ": " + " $" + (montoDolares * prod.venta)))
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