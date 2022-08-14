// 11 Iterate Over All Properties0

// function Dog(name) {
//     this.name = name;
//   }

//   Dog.prototype.numLegs = 4;

//   let beagle = new Dog("Snoopy");

//   let ownProps = [];
//   let prototypeProps = [];

//   for (let property in beagle) {
//     if (Dog.hasOwnProperty(property)) {
//       ownProps.push(property);
//     } else {
//       prototypeProps.push(property);
//     }
//   }

// 12 Understand the Constructor Property

// function Dog(name) {
//     this.name = name;
//   }

//   function joinDogFraternity(candidate) {
//     if (candidate.constructor === Dog) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// 13 Change the Prototype to a New Object

// function Dog(name) {
//     this.name = name;
//   }

//   Dog.prototype = {
//     numLegs: 2,
//     eat() {
//       console.log("nom nom nom");
//     },
//     describe() {
//       console.log("My name is " + this.name);
//     }
//   };

// 14 Remember to Set the Constructor Property when Changing the Prototype

// function Dog(name) {
//     this.name = name;
//   }

//   Dog.prototype = {
//     constructor: Dog,

//     numLegs: 2,
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };

// 15 Understand Where an Object’s Prototype Comes From

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle);

// 16 Understand the Prototype Chain

// function Dog(name) {
//     this.name = name;
//   }
  
//   let beagle = new Dog("Snoopy");
  
//   Dog.prototype.isPrototypeOf(beagle); 
  
//   Object.prototype.isPrototypeOf(Dog.prototype);

// 17 Use Inheritance So You Don't Repeat Yourself

// function Cat(name) {
//     this.name = name;
//   }
  
//   Cat.prototype = {
//     constructor: Cat
//   };
  
//   function Bear(name) {
//     this.name = name;
//   }
  
//   Bear.prototype = {
//     constructor: Bear
//   };
  
//   function Animal() {}
  
//   Animal.prototype = {
//     constructor: Animal,
//     eat: function() {
//       console.log("nom nom nom");
//     }
//   };

// 18 Inherit Behaviors from a Supertype

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// let duck = Object.create(Animal.prototype); 
// let beagle = Object.create(Animal.prototype); 

// duck.eat(); 
// beagle.eat(); 

// 19 Set the Child's Prototype to an Instance of the Parent

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// let beagle = new Dog();
// beagle.eat(); 

// 20 Reset an Inherited Constructor Property

// function Animal() {}
// function Bird() {}
// function Dog() {}

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();

// 21 Add Methods After Inheritance

// function Animal() {}
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };

// function Dog() {}


// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };

// let beagle = new Dog();
// beagle.eat(); 
// beagle.bark(); 

// 22 Override Inherited Methods

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line
// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird.";
// };


// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());

// 23 Use a Mixin to Add Common Behavior Between Unrelated Objects

// let bird = {
//     name: "Donald",
//     numLegs: 2
//   };
  
//   let boat = {
//     name: "Warrior",
//     type: "race-boat"
//   };
  
//   let glideMixin = function(obj) {
//     obj.glide = function() {
//       console.log("123");
//     };
//   };
//   glideMixin(bird);
//   glideMixin(boat);

// 24 Use Closure to Protect Properties Within an Object from Being Modified Externally

// function Bird() {
//     let weight = 15;
//     this.getWeight = () => weight;  
//   }

// 25 Understand the Immediately Invoked Function Expression (IIFE)
// (function() {
//     console.log("A cozy nest is ready");
//   })();