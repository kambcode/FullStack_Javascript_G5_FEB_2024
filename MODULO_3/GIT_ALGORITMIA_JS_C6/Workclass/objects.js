// Objects {}

const obj = {
  key: "value",
  key2: 2,
  key3: { name: "daniel" },
  key4: ["orange"],
  key5: () => {
    console.log("hello");
  },
};
// console.log(obj["key"]);

const persona = {
  name: "david",
  age: 23,
  job: "developer",
  address: "cll33 #33 - 33",
};

const persona2 = {
  name: "julian",
  age: 23,
  job: "developer",
  address: "cll33 #33 - 33",
};

let arrglo_objetos = [persona, persona2];
console.log(arrglo_objetos[1]);

// // Como obtener los valores
// console.log(persona.name);
// console.log(persona["name"]);

// // Como agregar un nuevo campo
persona.country = "Colombia";
persona["hobby"] = "Play guitar";

// console.log(persona);

delete persona.country;

// console.log(persona);

// Iterar
let valores = Object.values(persona);
for (let index = 0; index < valores.length; index++) {
  // console.log(valores[index]);
}

for (const propiedad_key in persona) {
  // console.log("key:", propiedad_key);
  // console.log("valor:", persona[propiedad_key]);
}

for (const iterator of Object.entries(persona)) {
  console.log(iterator.join(" "));
}
