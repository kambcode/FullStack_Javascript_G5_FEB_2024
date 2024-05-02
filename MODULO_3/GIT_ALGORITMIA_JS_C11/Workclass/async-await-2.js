function handlerTime(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

function main() {
  const promiseMessage1 = handlerTime("primera respuesta", 1000);
  const promiseMessage2 = handlerTime("segunda respuesta", 3000);
  const promiseMessage3 = handlerTime("tercera respuesta", 3000);

  console.log("hola 1");

  promiseMessage1.then((response) => {
    console.log(response);
  });

  console.log("hola 2");

  promiseMessage2.then((response) => {
    console.log(response);
  });

  console.log("hola 3");

  promiseMessage3.then((response) => {
    console.log(response);
  });

  console.log("hola 4");
}

// main();

async function mainAwait() {
  console.log("hola 1");
  const response1 = await handlerTime("primera respuesta", 1000);
  console.log(response1);
  console.log("hola 2");
  const response2 = await handlerTime("segunda respuesta", 3000);
  console.log(response2);
  console.log("hola 3");
  const response3 = await handlerTime("tercera respuesta", 3000);
  console.log(response3);
  console.log("hola 4");
}

// mainAwait();

async function parallelAwait() {
  console.log("hola 1");
  const responses = await Promise.all([
    handlerTime("primera respuesta", 1000),
    handlerTime("segunda respuesta", 3000),
    handlerTime("tercera respuesta", 3000),
  ]);

  responses.forEach((response) => {
    console.log(response);
  });

  console.log("hola 2");
}

parallelAwait();
