// debe ser divisible entre 1 y el mismo número

// 2 = 2 / 2 y 2 / 1

for (let i = 1; i !== 100; i++) {
  const divisor = [];

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      divisor.push(j);
    }
  }

  if (divisor.length === 2) {
    console.log(i, " Es un primo");
  }
}
