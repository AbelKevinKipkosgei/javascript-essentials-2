class Vehicle {
  status = "unavailable";
  #latitude;
  #longitude;
  constructor({ id, latitude, longitude }) {
    this.id = id;
    this.setPosition({ latitude, longitude });
  }

  setPosition({ latitude, longitude }) {
    this.time = Date.now();
    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  getPosition() {
    return {
      latitude: this.#latitude,
      longitude: this.#longitude,
    };
  }
}

let vehicle1 = new Vehicle({
  longitude: 18.213423,
  latitude: 59.367628,
  id: "AL1024",
});

vehicle1.setPosition({ longitude: 18.193121, latitude: 59.378654 });
console.log(vehicle1.getPosition());
