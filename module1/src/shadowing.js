class AlmostEmptyClass {
  constructor(sth) {
    console.log(sth);
  }

  sayHi() {
    console.log("Hi!");
  }
}

class ExtendedClass extends AlmostEmptyClass {
  constructor(name) {
    super("I'm super ...");
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }

  newHi() {
    this.sayHi();
  }

  oldHi() {
    super.sayHi();
  }
}

let obj = new ExtendedClass("Bob");
obj.sayHi();
obj.newHi();
obj.oldHi();
