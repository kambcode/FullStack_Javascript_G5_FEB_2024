// Ejemplo de callback para manejar una solicitud AJAX
function fetchData(url, callback) {
  // Simulación de una solicitud AJAX
  console.log("ingreso función fetchData");
  setTimeout(() => {
    const data = "Datos recuperados de " + url;
    callback(data);
  }, 100);
  console.log("salgo función fetchData");
}

function processData(data) {
  console.log("Procesando datos:", data);
}

fetchData("https://ejemplo.com/datos", processData);
console.log("Despues del llamado a fetch data");

// Funcion de procesamiento
function asyncOperation(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

// Funcion principal
function principal() {
  console.log("llamdo callback 1");
  asyncOperation(function () {
    console.log("llamdo callback 2");
    asyncOperation(function () {
      console.log("llamdo callback 3");
    });
  });
}

principal();
function mi_nuevocallback() {
  console.log("El boton fue clickeado");
}

document.getElementById("btn").addEventListener("click", mi_nuevocallback);
