// NODE JS
/* 
    - Crear servidores web: Puedes crear aplicaciones web del lado del servidor utilizando Node.js para manejar solicitudes HTTP, procesar datos y servir contenido dinámico a los clientes.
    - Acceso a la base de datos: Node.js proporciona módulos para interactuar con bases de datos, como MongoDB, MySQL, PostgreSQL, entre otras, lo que te permite realizar operaciones de lectura, escritura y manipulación de datos en la base de datos desde el servidor.
    - APIs RESTful: Puedes crear y consumir APIs RESTful utilizando Node.js para permitir que otras aplicaciones o servicios accedan y manipulen datos a través de solicitudes HTTP.
    - Manipulación de archivos y sistemas de archivos: Node.js proporciona módulos para trabajar con archivos y directorios en el sistema de archivos del servidor, lo que te permite leer, escribir, modificar y eliminar archivos de manera programática.
    - Procesamiento de datos en tiempo real: Node.js es ideal para aplicaciones que requieren procesamiento de datos en tiempo real, como chats en tiempo real, aplicaciones de mensajería, juegos en línea, etc.
    - Automatización de tareas: Puedes usar Node.js para crear scripts de automatización de tareas, como procesamiento por lotes de archivos, tareas de respaldo, programación de tareas, etc.
    - Aplicaciones de línea de comandos: Puedes crear herramientas de línea de comandos utilizando Node.js para realizar tareas como administración de sistemas, análisis de datos, manipulación de archivos, entre otros.
    - Servicios de backend para aplicaciones móviles y de escritorio: Node.js puede utilizarse como backend para aplicaciones móviles y de escritorio, proporcionando servicios de autenticación, almacenamiento de datos, notificaciones push, entre otros.
    - Microservicios: Node.js es adecuado para la creación de microservicios, lo que te permite descomponer aplicaciones monolíticas en servicios más pequeños y especializados que se comunican entre sí a través de API.
*/

console.log('Hola mundo desde Node');
const animal = 'perro';
if (animal === 'perro') {
    console.log('Es un perro');
} else {
    console.log('No es un perro');
}

// Manipulación de archivos
const fileSystem = require('fs');

// creacion de un archivo
fileSystem.writeFile('prueba.txt', 'Curso Js Modulo 2', function(err) {
    if (err) {
        console.log('Error al crear al archivo', err);
        return;
    }

    console.log('Archivo creado correctamente')
});

// leer archivo
fileSystem.readFile('prueba.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log('Error al leer al archivo', err);
        return;
    }

    console.log('Contenido del archivo: ', data);
});

// creacion de carpeta
fileSystem.mkdir('nueva-carpeta-1', (err) => {
    if (err) {
        console.error('Error al crear la carpeta', err);
        return;
    }

    console.log('Carpeta creada correctamente');
});

fileSystem.rmdir('nueva-carpeta-1', (err) => {
    if (err) {
        console.error('Error al eliminar la carpeta');
        return;
    }

    console.log('Carpeta eliminada correctamente');
});

const operations = require('./operations');

const sum = operations.sumar(1, 2);
console.log('la suma da: ', sum);

setTimeout(() => {
    console.log('se ejecuta en dos segundos');
}, 5000);