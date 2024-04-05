interface Prototype {
  clone()
}

class Person implements Prototype {
  public name: string
  public age: number
  public address: {
    city: string;
    country: string;
  }
  constructor (name: string, age: number, city: string, country: string) {
    this.name = name
    this.age = age,
    this.address = {city, country}
  }

  clone() {
    return Object.assign({}, this);
  }

  cloneDeep() {
    return JSON.parse(JSON.stringify(this))
  }
}

// Clone object shadow
const objectShadow = new Person('Anh Duc', 35, 'Ha noi', 'Viet Nam');
const clone1 = objectShadow.clone();
clone1.name = 'toi la duc'
clone1.address.city = 'HCM'
// console.log('clone1', clone1);
// console.log('clone1 address', clone1.address.city);
// console.log('objectShadow', objectShadow);

// Clone object deep 
const objectDeep = new Person('Hung Dung', 32, 'Ha noi', 'Viet Nam');
const clone2 = objectShadow.cloneDeep();
clone2.address.city = 'HCM'
console.log('clone2', clone2);
console.log('clone2 address', clone2.address.city);
console.log('objectDeep', objectDeep);