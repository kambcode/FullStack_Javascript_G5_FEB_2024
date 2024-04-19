var prompt = require("prompt");
var first_name = "";
var lastname = "";
prompt.start();
console.log("I will now ask you for your name.");
prompt.get(["name"], function (err, res) {
  first_name = res.name;
  console.log("I will now ask you for your lastname.");
  prompt.get(["lastname"], function (err, res) {
    lastname = res.lastname;

    console.log("Hello ".concat(first_name, lastname, ". How are you"));
  });
});
