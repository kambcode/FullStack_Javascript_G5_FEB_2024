# Tarea 10

### pre-Pasos para la tarea

- copiar la carpeta "copiame" de la tarea_10
- cambiar el nombre de la carpeta por su propio nombre
- desde dentro de esa carpeta van a ejecutar el comando `npm i`
- asegurate de que la carpeta node_modules es creada

### Pasos para la tarea

- utilizando axios, obtener la informacion de los primeros 20 pokemons

```javascript
axios.get("https://pokeapi.co/api/v2/pokemon");
```

- guardar esa informacion en una variable

```javascript
const pokemons = [{ name: "bulbasaur" }, { name: "picachu" }];
```

- utilizando el nombre de cada pokemon, traer la informacion por cada uno (individualmente) para actualizar la informacion de cada pokemon

```javascript
axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur");

const pokemons = [{ name: "bulbasaur", ...response.data }];
```
