interface Iterator<T> {
  hasNext(): boolean;
  next(): IteratorResult<T>;
}

interface Aggregator<T> {
  getIterator(): Iterator<T>;
}

class NameIterator implements Iterator<string> {
  private index: number = 0;

  constructor(private names: string[]) {}

  hasNext(): boolean {
    return this.index < this.names.length;
  }

  next(): IteratorResult<string> {
    if (this.hasNext()) {
      return {
          done: false,
          value: this.names[this.index++]
      };
    } else {
        return { 
          done: true, 
          value: null 
      };
    }
  }
}

class NameRepository implements Aggregator<string> {
  private names: string[] = [];

  getIterator(): Iterator<string> {
    return new NameIterator(this.names);
  }

  addName(name: string): void {
    this.names.push(name);
  }
}

const namesRepository = new NameRepository();
namesRepository.addName('Robert');
namesRepository.addName('John');
namesRepository.addName('Julie');

const namesIterator = namesRepository.getIterator();

while (namesIterator.hasNext()) {
  console.log(namesIterator.next().value);
}