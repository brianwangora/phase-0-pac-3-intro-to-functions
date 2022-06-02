// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  sayHelloToLiz();

function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToSamip();

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); // passing the argument 'anything' into our function

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1" 

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say ("Goodbye", "Julio");

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

function add(x, y) {
    return x + y;
  }
  add(1,2)
  console.log(add(1000,200))

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  } 
  console.log(say("Hello", "Brian")) 
  
const num1= 900
const num2=1500
const sum = add(num1, num2);
const message = `The sum of your numbers is: ${sum}.`;
console.log(message)