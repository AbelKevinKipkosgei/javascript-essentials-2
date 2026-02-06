let sampleObject = {
  id: 10,
  delay: 20,
  name: "en to tre",
  isPresent: true,
  delay: 50,
};

sampleObject.delay = sampleObject.delay * 2;
console.log(`Id: ${sampleObject.id}`);
console.log(`Delay: ${sampleObject.delay}`);
console.log(`Name: ${sampleObject.name}`);
console.log(`Is present: ${sampleObject.isPresent}`);

// create an object
let contact = { email: "example@gmail.com" };

contact.tel = "207-662-5412";
console.log(contact);
console.log(contact.tel);

// nested object and properties
let test = {
  nr: 10,
  b: false,
  str: "uno dos tres",
  arr: [10, 20, 30],
  obj: {
    x: 10,
    y: 20,
  },
  fn: function (arg) {
    console.log(arg);
  },
};

test.fn(123);
console.log(`x: ${test.obj.x}`);
console.log(`y: ${test.obj.y}`);

// functions as a property type - methods
let point = {
  x: 0,
  y: 0,
  moveHorizontally: function (distance) {
    this.x += distance;
    console.log(this.x);
  },
  moveVertically: function (distance) {
    this.y += distance;
    console.log(this.y);
  },
};

console.log(point.x);
point.moveHorizontally(30);
point.moveVertically(54);

// modifying properties
contact.email = {
  private: "RonaldSMurphy@freepost.org",
  work: "rsmurphy@briazz.com",
};

console.log(contact.email.work);

// deleting a property
delete contact.email.work;
console.log(contact.email.work);
console.log(contact.email.private);
