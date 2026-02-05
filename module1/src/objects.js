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
