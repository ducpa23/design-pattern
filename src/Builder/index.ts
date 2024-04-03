class Car {
  public name: string;
  public color: string;
  public engine: string;
  public doors: number;
  public seats: number;

  public setName(name: string) {
    this.name = name;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public setEngine(engine: string) {
    this.engine = engine;
  }

  public setDoors(doors: number) {
    this.doors = doors;
  }

  public setSeats(seats: number) {
    this.seats = seats;
  }
}

interface CarBuilder {
  reset(): void; 
  setName(name: string): void;
  setColor(color: string): void;
  setEngine(engine: string): void;
  setDoors(doors: number): void;
  setSeats(seats: number): void;
  getCar(): Car;
}

class CarBuilderImpl implements CarBuilder {
  private car: Car;

  constructor() {
    this.reset();
  }

  public reset() {
    this.car = new Car();

    return this;
  }

  public setName(name: string) {
    this.car.setName(name);

    return this;
  }

  public setColor(color: string) {
    this.car.setColor(color);

    return this;
  }

  public setEngine(engine: string) {
    this.car.setEngine(engine);

    return this;
  }

  public setDoors(doors: number) {
    this.car.setDoors(doors);
    
    return this;
  }

  public setSeats(seats: number) {
    this.car.setSeats(seats);

    return this;
  }

  public getCar(): Car {
    const car = this.car;
    this.reset();

    return car;
  }
}

// Usage
const carBuilder = new CarBuilderImpl();
carBuilder.setColor('white').setDoors(4).setEngine('V8').setName('BMW').setSeats(4);
const car = carBuilder.getCar();
console.log(car);