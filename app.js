setTimeout(() => {
  console.log("Hello World");
}, 3000);

function greet() {
  console.log("Hello");
}

function name(callBack) {
  console.log('Abdul Salam');
  callBack();
}
name(greet);

function sayHello() {
  console.log("Hello World");
}

setTimeout(sayHello, 7000);
