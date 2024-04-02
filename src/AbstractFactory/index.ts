interface MenClothing {
  getPrice(price: string): void
}

interface WomenClothing {
  getPrice(price: string): void
}

interface ChildrenClothing {
  getPrice(price: string): void
}

class AsianMenClothing implements MenClothing {
  getPrice(price): void {
    console.log(`Asia: This is ${price}`);
  }
}

class AsianWomenClothing implements MenClothing {
  getPrice(price): void {
    console.log(`Asia: This is ${price}`);
  }
}

class AsianChildrenClothing implements MenClothing {
  getPrice(price): void {
    console.log(`Asia: This is ${price}`);
  }
}

class EUMenClothing implements MenClothing {
  getPrice(price): void {
    console.log(`EU: This is ${price}`);
  }
}

class EUWomenClothing implements MenClothing {
  getPrice(price): void {
    console.log(`EU: This is ${price}`);
  }
}

class EUChildrenClothing implements MenClothing {
  getPrice(price): void {
    console.log(`EU: This is ${price}`);
  }
}

abstract class ClothingFactory {
  public abstract createMen(): MenClothing
  public abstract createWomenClothing(): WomenClothing
  public abstract createChildrenClothing(): ChildrenClothing
}

class AsiaClothingFactory extends ClothingFactory {
  public createMen(): MenClothing {
    return new AsianMenClothing();
  }
  public createWomenClothing(): MenClothing {
    return new AsianWomenClothing();
  }
  public createChildrenClothing(): MenClothing {
    return new AsianChildrenClothing();
  }
}

class EUClothingFactory extends ClothingFactory {
  public createMen(): MenClothing {
    return new EUMenClothing();
  }
  public createWomenClothing(): MenClothing {
    return new EUWomenClothing();
  }
  public createChildrenClothing(): MenClothing {
    return new EUChildrenClothing();
  }
}

function client(clothingFactory: ClothingFactory) {
  const menClothing = clothingFactory.createMen()
  menClothing.getPrice('22');

  const womenClothing = clothingFactory.createWomenClothing()
  womenClothing.getPrice('33');

  const childrenClothing = clothingFactory.createChildrenClothing()
  childrenClothing.getPrice('44');
}

client(new AsiaClothingFactory());