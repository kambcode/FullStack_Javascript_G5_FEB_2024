let arregloNumeros = [];

let numero = 100;
while (numero > 0) {
  arregloNumeros.push(numero);
  numero--; //numero = numero +1;
}
// console.log(arregloNumeros);

// OBTENER EL NUMERO MAYOR
let temporal = arregloNumeros[0];
for (let index = 1; index < arregloNumeros.length; index++) {
  if (arregloNumeros[index] > temporal) {
    temporal = arregloNumeros[index];
  }
}
// console.log("El numero mayor es:" + temporal);

// IMPRIMIR LOS PARES
for (let index = 0; index < arregloNumeros.length; index++) {
  if (arregloNumeros[index] % 2 == 0) {
    // console.log(arregloNumeros[index]);
  }
}

// let numeros = 1;
// console.log(numeros);
// numeros++;
// console.log(numeros);
// console.log(numeros + 2);

let arregloEdades = [];
// Crear arreglo de edadades qeu sean pares entre 10 y 50
for (let edades = 10; edades <= 50; edades += 2) {
  arregloEdades.push(edades);
}
// console.log(arregloEdades);
// Sumar todas las edades
let suma = 0;
for (const elemento of arregloEdades) {
  suma += elemento;
}
// console.log("suma forof", suma);
suma = 0;
arregloEdades.forEach((edad) => {
  suma += edad;
});
console.log("suma foreach edades", suma);
console.log("promedio edades", suma / arregloEdades.length);

// Objetos y for in
let objeto_carro = {
  marca: "cupra",
  modelo: 2023,
  linea: "formentor",
};

for (const key in objeto_carro) {
  // console.log("Forin", key);
}

// EJERCICIO FINAL
const carrito_compras = [
  {
    nombre: "Camisa",
    precio: 25,
    cantidad: 2,
    categoria: "Ropa",
    color: "Azul",
    talla: "M",
  },
  {
    nombre: "Pantalón",
    precio: 40,
    cantidad: 1,
    categoria: "Ropa",
    color: "Negro",
    talla: "32",
  },
  {
    nombre: "Zapatos",
    precio: 50,
    cantidad: 1,
    categoria: "Calzado",
    color: "Marrón",
    talla: "40",
  },
  // {
  //   nombre: "Bolso",
  //   precio: 30,
  //   cantidad: 1,
  //   categoria: "Accesorios",
  //   color: "Rojo",
  //   material: "Cuero",
  // },
  // {
  //   nombre: "Gorra",
  //   precio: 15,
  //   cantidad: 3,
  //   categoria: "Accesorios",
  //   color: "Negro",
  //   estilo: "Béisbol",
  // },
  // {
  //   nombre: "Reloj",
  //   precio: 80,
  //   cantidad: 1,
  //   categoria: "Accesorios",
  //   color: "Plateado",
  //   marca: "Casio",
  // },
];

let valor_total = 0;
for (const producto of carrito_compras) {
  valor_total += producto.precio * producto.cantidad;
}
// if (valor_total > 120) {
//   console.log("¡Felicitaciones! Tu compra califica para envío gratuito");
//   console.log(" EL valor total es:", valor_total);
// } else {
//   console.log("Agrega más productos para calificar para envío gratuito");
//   console.log(" EL valor total es:", valor_total);
// }
