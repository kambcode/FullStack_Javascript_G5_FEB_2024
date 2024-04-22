# Workshop de JavaScript: Fundamentos de objetos, arrays, bucles y condicionales

## Objetivo general: Practicar el manejo de objetos, arrays, bucles y condicionales en JavaScript.

- **Punto 1: Creación y Manipulación Básica de Arrays**

  - Crea un array llamado nombres que contenga los nombres de tus compañeros de clase.
  - Imprime en la consola el primer y último nombre del array.
  - Añade tu nombre al final del array.
  - Imprime en la consola la longitud del array después de agregar tu nombre.

- **Punto 2: Creación y Manipulación Básica de Objetos**

  - Crea un objeto llamado estudiante que represente a un estudiante con propiedades como nombre, edad y curso.
  - Imprime en la consola el nombre y la edad del estudiante.
  - Actualiza la propiedad curso del estudiante con el valor "JavaScript Básico".
  - Imprime en la consola todas las propiedades del objeto utilizando un bucle for...in.

- **Punto 3: Bucle For y Condicionales**

  - Crea un array de números llamado numeros con al menos 5 números enteros.
  - Utiliza un bucle for para imprimir en la consola solo los números pares del array.
  - Utiliza un bucle for y una sentencia if para encontrar el número más grande en el array.
  - Imprime en la consola el número más grande encontrado.

- **Punto 4: Manipulación Básica de Arrays**

  - Crea un array llamado edades que contenga las edades de tus familiares.
  - Utiliza un bucle for para calcular la suma de todas las edades en el array.
  - Calcula el promedio de edad de tus familiares.
  - Imprime en la consola tanto la suma como el promedio de edad.

- **Punto 5: Desafío Final: Combinación de Objetos y Arrays (opcional)**

  - Utiliza un array de objetos llamado productos.
  - Utiliza un bucle for para calcular el total del valor de todos los productos (precio \* cantidad).
  - Utiliza una sentencia if para determinar si el total supera un cierto umbral (por ejemplo, $100).
  - Imprime en la consola el mensaje "¡Felicitaciones! Tu compra califica para envío gratuito" si el total supera el umbral, de lo contrario, imprime "Agrega más productos para calificar para envío gratuito".

```javascript
const productos = [
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
  {
    nombre: "Bolso",
    precio: 30,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Rojo",
    material: "Cuero",
  },
  {
    nombre: "Gorra",
    precio: 15,
    cantidad: 3,
    categoria: "Accesorios",
    color: "Negro",
    estilo: "Béisbol",
  },
  {
    nombre: "Reloj",
    precio: 80,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Plateado",
    marca: "Casio",
  },
];
```
