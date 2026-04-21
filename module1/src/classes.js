// Vehicle Base Class
class Vehicle {
  status = "unavailable";
  #latitude;
  #longitude;
  constructor({ id, latitude, longitude }) {
    this.id = id;
    this.position = { latitude, longitude };
  }

  set position({ latitude, longitude }) {
    this.time = Date.now();
    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  get position() {
    return {
      latitude: this.#latitude,
      longitude: this.#longitude,
    };
  }
}

// Bus Class
class Bus extends Vehicle {
  constructor({ seats, id, longitude, latitude }) {
    super({ id, latitude, longitude });
    this.seats = seats;
  }
}

// Vehicle
let vehicle1 = new Vehicle({
  longitude: 18.213423,
  latitude: 59.367628,
  id: "AL1024",
});

vehicle1.position = { longitude: 18.193121, latitude: 59.378654 };
console.log(vehicle1.position);
console.log(vehicle1.time);

// Bus
let bus = new Bus({
  seats: 4,
  longitude: 18.213423,
  latitude: 59.367628,
  id: "AL1024",
});

console.log(bus.seats);
console.log(bus.id);
