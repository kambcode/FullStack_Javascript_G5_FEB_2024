// Promesas -> la palabra reservada "Promise"
// Estados de las promesas: Pendiente / Resuelta / Rechazada
// Funciones de devolución: then() , catch() y finally()

// Sintaxis Básica
const miPrimeraPromesa = new Promise((resolve, reject) => {
  // Ser realizaría el proceso asincrona
  const operacionExitosa = false;
  if (operacionExitosa) {
    resolve({ otracosa: "El proceso se completo exitosamente" });
  } else {
    reject("Se presento un error");
  }
});
console.log("Hola mundo");
console.log("Hola mundo2");
miPrimeraPromesa
  .then((loquequiera) => console.log(loquequiera.otracosa))
  .catch((error) => console.log(error))
  .finally(() => console.log("Esto sucede siempre"));
console.log("Hola mundo3");

// Multiplicar numeros que envíe el usuarios y mostrar el resultado

const multiplicaNumeros = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      const resultado = num1 * num2;
      resolve(resultado);
    } else {
      reject("Error en los datos de la multiplicación");
    }
  });
};

multiplicaNumeros(4, 5)
  .then((multiplicacion) => console.log(`El resultado es: ${multiplicacion}`))
  .catch((error) => console.log(error));

// Encadenamiento de PROMESAS, Saludar a alguien y para saludar es el nombre de ese alguien

const obtenerNombre = (nombre) => {
  return new Promise((resolve, reject) => {
    if (nombre) {
      resolve(nombre);
    } else {
      reject("No se proporciono un nombre valido");
    }
  });
};
const saludar = (inicio_saludo, nombre) => {
  return new Promise((resolve, reject) => {
    if (inicio_saludo && nombre) {
      resolve(`${inicio_saludo}, ${nombre}`);
    } else {
      reject("No se proporciono un nombre y/o saludo valido");
    }
  });
};

obtenerNombre("Laura")
  .then((nombre) => {
    const saludo_inicial = "Hola";
    return saludar(saludo_inicial, nombre);
  })
  .then((saludo) => {
    console.log(saludo);
  })
  .catch((error) => console.log(error));

// Simulando fake api (setTimeut) para un proceso de registro que cumple dos condiciones
// Permite el registro exitos a mayores de 18
// Para menores imprime que el registro no esta habilitado

const usuarios = [
  {
    nombre: "Julian Vargas",
    edad: 15,
  },
  {
    nombre: "Erika Vargas",
    edad: 20,
  },
  {
    edad: 20,
  },
];

const validarEdad = (usuario) => {
  return new Promise((resolve, reject) => {
    if (usuario.edad > 18) {
      setTimeout(() => {
        resolve(usuario);
      }, 3000);
    } else {
      reject("El registro no esta habilitado");
    }
  });
};

const registrarUsuario = (usuario) => {
  return new Promise((resolve, reject) => {
    if (usuario.nombre) {
      resolve({
        message: "El registro fue exitoso",
        usuario,
      });
    } else {
      console.log("No fue posible realizar el registro, datos incompletos");
    }
  });
};

usuarios.forEach((usuario) => {
  validarEdad(usuario)
    .then((usuario) => {
      console.log("resultado primera promesa");
      return registrarUsuario(usuario);
    })
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
});
