// const a = true;
const a = false;
if (!!a) {
  console.log("Entra IF (negación)");
} else {
  console.log("No Entra IF (negación)");
}

const b = true;
if (a && b) {
  console.log("Entra (and)");
} else {
  console.log("No Entra (and)");
}
if (!a && b && !!b) {
  console.log("Entra (and)");
}

if (a || b) {
  console.log("Entra");
}

// (T && T ) || T || F
// T || T || F
if ((!a && b) || !a || !b) {
  console.log("Si Entra");
}

// ((F || F) && F && T)  || (T && F)
// (F && F && T) || (T && F)
// F || F
if (((a || !b) && !!a && !!b) || (!!!a && !!!!!b)) {
  console.log("No Entra");
}
