// function greetConsole(name) {
//   console.log(`Hello Programmer : Mr./Mrs  ${name}`);
// }

// greetConsole("Yazh");

function greet(callback) {
  callback("ChellaKarthikeyan");
}

greet((name) => {
  console.log(`Hello Programmer : Mr./Mrs  ${name}`);
});
