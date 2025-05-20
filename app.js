setTimeout(() => {
  console.log("Hello World");
}, 3000);

function greet() {
  console.log("Hello");
}

function age(callBack) {
  console.log(21);
  callBack();
}
age(greet);
