const carrito = [];

function verificarExistenciaProducto(producto) {
    for (let i = 0; i < carrito.length; i++) {
        const productoExistente = carrito[i];
        if (productoExistente === producto) {
            return productoExistente === producto;
        }
    } 
}

const producto1 = prompt('Ingrese producto 1');
carrito.push(producto1);
console.log(carrito);

const producto2 = prompt('Ingrese producto 2');
const existeElProducto2 = verificarExistenciaProducto(producto2);
if (existeElProducto2) {
    console.log('Este elemento ya esta en la lista de compras');
} else {
    carrito.push(producto2);
}

console.log(carrito);

const producto3 = prompt('Ingrese producto 3');
const existeElProducto3 = verificarExistenciaProducto(producto3);
if (existeElProducto3) {
    console.log('Este elemento ya esta en la lista de compras');
} else {
    carrito.push(producto3);
}

console.log(carrito);

const producto4 = prompt('Ingrese producto 4');
const existeElProducto4 = verificarExistenciaProducto(producto4);
if (existeElProducto4) {
    console.log('Este elemento ya esta en la lista de compras');
} else {
    carrito.push(producto4);
}

document.write('<h1>Lista de compra</h1>');
for (const producto of carrito) {
    document.write(`<li>${producto}</li>`);
}