interface CharacterFlyweight {
  printCharacter(font: string, size: number): void;
}

class Character implements CharacterFlyweight {
  constructor(private readonly char: string) {}

  printCharacter(font: string, size: number): void {
    console.log(`Character: ${this.char} ${font} - ${size}`);
  }
}

class CharacterFactory {
  private characters: { [key: string]: Character } = {};

  getCharacter(char: string): Character {
    if (!this.characters[char]) {
      this.characters[char] = new Character(char);
    }

    return this.characters[char];
  }
}

class CharacterStyle {
  constructor(public font: string, public size: number, public color: string) {}
}

const factory = new CharacterFactory();

const characterA = factory.getCharacter('A');
const characterB = factory.getCharacter('B');
const characterC = factory.getCharacter('C');

const style1 = new CharacterStyle('Arial', 12, 'black');
const style2 = new CharacterStyle('Arial', 11, 'red');
const style3 = new CharacterStyle('Arial', 10, 'white');

characterA.printCharacter(style1.font, style1.size);
characterB.printCharacter(style2.font, style2.size);
characterC.printCharacter(style3.font, style3.size);