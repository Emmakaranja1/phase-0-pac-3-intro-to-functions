// Follow along with the examples here
function doNothing() {}
function sayHello(){
    console.log("Hello!");
    
  }
  // Call the function
sayHello();
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  // call the function
  sayHelloToGuadalupe();
  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  //cal the function
    sayHelloToLiz();
    function sayHelloToSamip() {
        console.log("Hello, Samip!");

    }
    //call the function
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
      // call the function
      say("Goodbye", "Julio");
      say("Hello", "Julio")
      function say(greeting, firstName) {
        console.log("firstName: ", firstName);
        console.log("greeting: ", greeting);
        console.log(`${greeting}, ${firstName}!`);
      }
      function add(x, y) {
        return x + y;
      }
      //call the function
        add(1, 2);
        console.log(add(1, 2));
        function say(Hello, Liz) {
            return `${Hello}, ${Liz}!`;
          }
          //call the function
            say("Hello", "Liz");
            console.log(say("Hello", "Liz"))
            function say(greeting, firstName) {
                console.log(`${greeting}, ${firstName}!`);
              }