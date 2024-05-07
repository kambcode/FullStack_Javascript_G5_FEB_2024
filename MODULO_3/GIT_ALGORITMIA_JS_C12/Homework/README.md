# Tarea 9

- **Entendiendo Closures:**

  Descripción: Completa una función simple que demuestre el concepto de closure.
  Instrucciones:

  ```javascript
  // Ejercicio:
  function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }

  const miFuncion = creaFuncion();
  miFuncion(); // ¿Qué imprimirá? ¿Por qué?
  ```

- **Uso de Closures en Contextos Prácticos:**

  Descripción: Implementa una función que utilice closures para crear un contador.
  Instrucciones:

  ```javascript
  // Ejercicio:
  function crearContador() {
    let count = 0;
    return function () {
      // Completa esta función para incrementar 'count' en 1 y devolver su valor
    };
  }

  const contador = crearContador();
  console.log(contador()); // ¿Qué imprimirá? ¿Por qué?
  console.log(contador()); // ¿Qué imprimirá ahora?
  ```

- **Uso Avanzado de Closures:**

  Descripción: Implementa una función que tome un número como argumento y devuelva una función que multiplique su argumento por el número original utilizando un closure.
  Ejercicio:

  ```javascript
  function multiplicador(numero) {
    // Completa esta función para devolver una función que multiplique su argumento por 'numero'
  }
  const duplicar = multiplicador(2);
  console.log(duplicar(5)); // Debería imprimir 10
  ```
