// Conditions

// Operadores logicos

// if
if (true) {
  console.log("Si Entra");
} else {
  console.log("No Entra");
}

const userName = "yaneth";

if (userName === "daniel") {
  console.log("Hola Daniel");
} else if (userName === "claudia") {
  console.log("Hola Claudia");
} else {
  console.log(`Hola ${userName}`);
  console.log("Hola ", userName);
  console.log("Hola " + userName);
}

// Switch

const mobileBrand = "Apple";

switch (mobileBrand) {
  case "Apple":
    console.log("Este es el caso Apple");
    break;

  case "Google":
  case "facebook":
  case "x":
    console.log("Este es el caso Google, facebook y x");
    break;

  case "Samsung":
    console.log("Este es el caso Samsung");
    break;

  default:
    console.log(`Este es el caso ${mobileBrand}`);
    break;
}
