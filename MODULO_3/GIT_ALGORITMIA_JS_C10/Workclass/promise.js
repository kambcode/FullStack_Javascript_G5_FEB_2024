function handlerTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world despues de 5 segundos");
    }, 5000);
  });
}

function main() {
  console.log("Primera respuesta");

  const response = handlerTime();

  response.then((response) => {
    console.log(response);

    console.log("Ultima respuesta");
  });
}

// main();

function handlerTime2(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

function main2() {
  const promiseMessage1 = handlerTime2("primera respuesta", 1000);
  const promiseMessage2 = handlerTime2("segunda respuesta", 3000);
  const promiseMessage3 = handlerTime2("tercera respuesta", 3000);

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

// main2();

function main3() {
  const promiseMessage1 = handlerTime2("primera respuesta", 4000);

  promiseMessage1
    .then((value) => {
      console.log(value);
      return handlerTime2("segunda respuesta", 1000);
    })
    .then((value) => {
      console.log(value);
      return handlerTime2("tercera respuesta", 2000);
    })
    .then((value) => {
      console.log(value);
    });
}

main3();
