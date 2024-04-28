interface SortStrategy {
  sort(numbers: number[]): number[];
}

class QuickSort implements SortStrategy {
  sort(numbers: number[]): number[] {
    console.log("Sắp xếp mảng bằng thuật toán QuickSort");
    return numbers.sort((a, b) => a - b);
  }
}

class SelectionSort implements SortStrategy {
  sort(numbers: number[]): number[] {
    console.log("Sắp xếp mảng bằng thuật toán SelectionSort");

    for (let i = 0; i < numbers.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
      }
    }
    return numbers;
  }
}

class SortContext {
  private strategy: SortStrategy

  constructor(strategy: SortStrategy) { 
    this.strategy = strategy;
  }

  setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  performSort(numbers: number[]): number[] {
    return this.strategy.sort(numbers);
  }
}

const numbers = [1, 5, 3, 2, 4];
const sortContext = new SortContext(new QuickSort());
console.log(sortContext.performSort(numbers));
const selectionSort = new SelectionSort();
sortContext.setStrategy(selectionSort);
console.log(sortContext.performSort(numbers));