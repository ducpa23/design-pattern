interface component {
  getPrice(): number;
  getDescription(): string;
}

class Coffee implements component {
  getPrice(): number {
    return 10;
  }
  getDescription(): string {
    return 'Coffee';
  }
}

class Tea implements component {
  getPrice(): number {
    return 5;
  }
  getDescription(): string {
    return 'Tea';
  }
}

abstract class BeverageDecorator implements component {
  protected beverage: component;
  constructor(beverage: component) {
    this.beverage = beverage;
  }
  getPrice(): number {
    return this.beverage.getPrice();
  }
  getDescription(): string {
    return this.beverage.getDescription();
  }
}

class Sugar extends BeverageDecorator {
  getPrice(): number {
    return this.beverage.getPrice() + 1;
  }
  getDescription(): string {
    return this.beverage.getDescription() + ', Sugar';
  }
}

class Milk extends BeverageDecorator {
  getPrice(): number {
    return this.beverage.getPrice() + 2;
  }
  getDescription(): string {
    return this.beverage.getDescription() + ', Milk';
  }
}

const coffee = new Coffee();
const tea = new Tea();

const coffeeWithSugar = new Sugar(coffee);
const teaWithMilk = new Milk(tea);
console.log(coffeeWithSugar.getPrice());
console.log(coffeeWithSugar.getDescription());
console.log(teaWithMilk.getPrice());
console.log(teaWithMilk.getDescription());
