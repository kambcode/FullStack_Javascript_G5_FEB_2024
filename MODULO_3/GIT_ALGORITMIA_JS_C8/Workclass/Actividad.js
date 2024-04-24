const productos = [
  {
    nombre: "Camisa",
    precio: 25000,
    cantidad: 2,
    categoria: "Ropa",
    color: "Azul",
    talla: "M",
  },
  {
    nombre: "Pantalón",
    precio: 40000,
    cantidad: 1,
    categoria: "Ropa",
    color: "Negro",
    talla: "32",
  },
  {
    nombre: "Zapatos",
    precio: 50000,
    cantidad: 1,
    categoria: "Calzado",
    color: "Marrón",
    talla: "40",
  },
  {
    nombre: "Bolso",
    precio: 30000,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Rojo",
    material: "Cuero",
  },
  {
    nombre: "Gorra",
    precio: 15000,
    cantidad: 3,
    categoria: "Accesorios",
    color: "Negro",
    estilo: "Béisbol",
  },
  {
    nombre: "Reloj",
    precio: 80000,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Plateado",
    marca: "Casio",
  },
];

// forEach
productos.forEach((producto) =>
  console.log(`producto: ${producto.nombre} - precio: ${producto.precio}`)
);

// map
const agregaIva19 = productos.map(
  (producto) => producto.precio * 0.19 + producto.precio
);

console.log(agregaIva19);

// filter
const calzado = productos.filter(
  (producto) => producto.categoria === "Calzado"
);

console.log(calzado);

// reduce

const callback = (acumulador, producto) =>
  acumulador + producto.precio * producto.cantidad;

const valorInicial = 0;

const total = productos.reduce(callback, valorInicial);

console.log("total: ", total);

if (total > 100000) {
  console.log("¡Felicitaciones! Tu compra califica para envío gratuito");
} else {
  console.log("Agrega más productos para calificar para envío gratuito");
}
