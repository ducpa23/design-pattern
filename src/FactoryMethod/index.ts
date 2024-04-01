interface IPizza {
  name: string;
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}

abstract class Pizza implements IPizza {
  name: string = "";

  prepare(): void {
    console.log(`Preparing ${this.name}`);
  }

  bake(): void {
    console.log(`Baking ${this.name}`);
  }

  cut(): void {
    console.log(`Cutting ${this.name}`);
  }

  box(): void {
    console.log(`Boxing ${this.name}`);
  }
}

class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Cheese Pizza';
  }
}

class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Pepperoni Pizza';
  }
}

abstract class PizzaFactory {
  abstract createPizza(type: string): Pizza;
}

class JapanPizzaFactory extends PizzaFactory {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'pepperoni':
        return new PepperoniPizza();
      default:
        throw new Error('Unknown pizza type');
    }
  }
}

const japanFactory = new JapanPizzaFactory();
const pizza = japanFactory.createPizza('cheese');
pizza.prepare();
pizza.bake();
