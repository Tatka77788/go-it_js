class Car {
  constructor(Car) {
    this.maxSpeed = Car.maxSpeed || 0;
    this.speed = Car.speed || 0;
    this.isOn = Car.isOn || false;
    this.distance = Car.distance || 0;
    this.price = Car.price || 0;
  }

  static getSpecs(car) {
    console.log(car);
  }

  get() {
    return this.price;
  }

  set(price) {
    this.price = price || 0;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
      // return true;
    }
    return false;
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.maxSpeed - (this.speed + value);
      return true;
    }
    return false;
  }

  drive(hours) {
    this.distance = hours * this.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
