const express = require('express');
const fs = require('fs');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    fs.writeFile('jose.txt', 'Hello, Jose!', (err)=> {
        if(err) {
            res.send('Error al crear archivo');
            return console.log(err);
        }
        res.send('Archivo creado exitosamente');
    });
});

app.get('/create-rar', (req, res) => {
    fs.writeFile('rar.txt', 'Hello, RAR!', (err)=> {
        if(err) {
            res.send('Error al crear archivo');
            return console.log(err);
        }
        res.send('Archivo creado exitosamente');
    });
});

app.get('/read', (req, res) => {
    fs.readFile('jose.txt', 'utf8', (err, data)=> {
        if(err) {
            res.send('Error al leer archivo');
            return console.log(err);
        }
        res.send(`Contenido del archivo: ${data}`);
    });
});

app.get('/read-rar', (req, res) => {
    fs.readFile('rar.txt', 'utf8', (err, data)=> {
        if(err) {
            res.send('Error al leer archivo');
            return console.log(err);
        }
        res.send(`Contenido del archivo: ${data}`);
    });
});

app.listen(port, () => {
    console.log(`El server corre en el port: ${port}`);
    let num2 = 2;
    let num1 = 1;
    console.log(`La suma es: ${num1+num2}`)
    let name = "Jose";
    console.log(`Mi nombre es ${name}`);
});