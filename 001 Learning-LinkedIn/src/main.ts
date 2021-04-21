import { CustomUser, StringValidator } from "./interfaces/Validation";

let validators: { [s: string]: StringValidator } = {};

// show whether each striong passed validator
strings.forEach((s) => {
  for (let name in validators) {
    console.log(
      `"{s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
});

console.log("Hola Mundo");

const user: CustomUser = {
  name: "Sergio",
};
