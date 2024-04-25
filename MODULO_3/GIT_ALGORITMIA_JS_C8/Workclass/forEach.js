// ForEach

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Antes

for (let i = 0; i < numeros.length; i++) {
  console.log(`index: ${i} - value: ${numeros[i]}`);
}

// Before
// Arreglo original . foreach( Arrow function )
numeros.forEach((value, index) =>
  console.log(`index: ${index} - value: ${value}`)
);
