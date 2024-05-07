// Event loop
// console.log("Inicio programa");

// setTimeout(function () {
//   // realiza consult pokemon
//   console.log("retorne mis 20 pokemones");
// }, 2000);

// console.log("Fin de programa");

// Manejador de tareas programadas
// Base de tareas programadas
const tareas_programadas = [
  { id: 1, desc: "Tarea 1", tiempo: 2000 },
  { id: 2, desc: "Tarea 2", tiempo: 1000 },
  { id: 3, desc: "Tarea 3", tiempo: 4000 },
];

// Funcion que ejecuta una tarea programada a la vez
function procesaTarea(tarea) {
  console.log(`Iniciando ejecución de tarea ${tarea.desc}`);
  setTimeout(() => {
    console.log(`Finalizo tarea ${tarea.desc}`);
  }, tarea.tiempo);
}

console.log("Inicio programa Manejador de tareas");

tareas_programadas.forEach((tarea) => {
  procesaTarea(tarea);
});

console.log("Termino prgrama Manejador de tareas");
