interface UIComponent { 
  render(): string;
  add(component: UIComponent): void;  
  remove(component: UIComponent): void; 
}

class Container implements UIComponent {
  private components: UIComponent[] = [];
  render(): string {
    return this.components.map(component => component.render()).join('');
  }
  add(component: UIComponent): void {
    this.components.push(component);
  }
  remove(component: UIComponent): void {
    this.components = this.components.filter(c => c !== component);
  }
}

class Button implements UIComponent {
  render(): string {
    return '<button>Click me</button>';
  }
  add(component: UIComponent): void {
    throw new Error('Method not implemented.');
  }
  remove(component: UIComponent): void {
    throw new Error('Method not implemented.');
  }
}

class Input implements UIComponent {
  render(): string {
    return '<input type="text" />';
  }
  add(component: UIComponent): void {
    throw new Error('Method not implemented.');
  }
  remove(component: UIComponent): void {
    throw new Error('Method not implemented.');
  }
}

const container = new Container();
const button = new Button();
const input = new Input();
container.add(button);
container.add(input);
console.log(container.render());


const container2 = new Container();
container2.add(container);
container2.add(button);
console.log(container2.render());