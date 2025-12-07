const fsp = require("fs/promises");

fsp
  .readFile("2-test.txt", "utf-8")
  .then((val) => {
    console.log(val);
    return fsp.readFile("3-test.txt", "utf-8");
  })
  .then((val) => {
    console.log(val);
    return fsp.readFile("4-test.txt", "utf-8");
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

// Wtihout then() the result is always pending

const p = fsp.readFile("2-test.txt", "utf-8");
console.log(p);
