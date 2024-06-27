const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(port, () => {
    console.log(`El server corre en el port: ${port}`);
    let num2 = 2;
    let num1 = 1;
    console.log(`La suma es: ${num1+num2}`)
    let name = "Jose";
    console.log(`Mi nombre es ${name}`);
});