console.log(2 + 2); // Operaddor aritmetico suma
console.log("2" + "2"); //  Operador para la concatenación
console.log(+"2"); // Operador unario que busca covertir a entero lo que lo acompaña a la derecha
console.log(+true);
console.log(10 - 5); // Operador aritmetico de resta
const x = 5;
console.log(-x); // Operador unario de negacion de numero o convertir a negativos
console.log(20 * 5); // Operador aritmetico de multiplicación
console.log("Dividido", 9 / 2); // Operador aritmetico de division
console.log("Modulo", 9 % 2); // Operador aritmetico de modulo
console.log(2 ** 5); //Operador aritmetico de potenciación

function numeroPar() {
  //loop
  for (let i = 0; i <= 100; i++) {
    //  0 !== 0 (false) and 0 % 2 === 0 (true)
    if (i !== 0 && i % 2 === 0) {
      console.log("El numero: ", i, " es par");
    }
  }
}

numeroPar();
