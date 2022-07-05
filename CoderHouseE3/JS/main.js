console.log("Ingresa los productos al registro de sctok")
console.log("Para finalizar el ingreso de los productos escriba EXIT en vez de un producto")
const array = []

function productos() {
    
    for (let i = 0; i < Number.MAX_SAFE_INTEGER  ; i++) {
       
        let producto = prompt("producto").toUpperCase()
        while (producto == "") {
            alert("Error. Ingrese el nombre del producto")
            producto = prompt("producto").toUpperCase()
        }
        if (producto == "EXIT") {
            break
        }
        let precio = parseInt(prompt("precio"))
        while (isNaN(precio)) {
            alert("Error. Ingrese el precio del producto")
            precio = parseInt(prompt("precio"))
        }
        let cantidad = parseInt(prompt("cantidad"))
        while (isNaN(cantidad)) {
            alert("Error. Ingrese la cantidad del producto")
            cantidad = parseInt(prompt("cantidad"))
        }
        array[i]= Object.assign({producto,precio,cantidad})
        console.log("Nuevo ingreso realizado")
        
    }
    
}

productos()

for (let propiedad in array) {
    console.log(array[propiedad])
}
