// Objects

const obj = {
  key: "value",
  key2: 2,
  key3: { name: "daniel" },
  key4: ["orange"],
  key5: () => {
    console.log("hello");
  },
};

const persona = {
  name: "david",
  age: 23,
  job: "developer",
  address: "cll33 #33 - 33",
};

// Como obtener los valores
console.log(persona.name);
console.log(persona["name"]);

// Como agregar un nuevo campo
persona.country = "Colombia";
persona.hobbie = "Play guitar";

console.log(persona);

delete persona.country;

console.log(persona);

// Iterar
