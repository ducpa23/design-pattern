class UserManager {
  createUser(name: string, email: string) {
    console.log(`User created ${name} ${email}`);
    return { userId: Date.now(), name, email };
  }
}

class OrderManager {
  createOrder(userId: string, item: string) {
    console.log(`Order created for ${userId} with item ${item}`);
    return { orderId: Date.now(), userId, item };
  }
}

class ShoppingFacade {
  private userManager = new UserManager();
  private orderManager = new OrderManager();

  createShopping(user: { name: string; email: string }, item: string) {
    const userCreated = this.userManager.createUser(user.name, user.email);
    return this.orderManager.createOrder(userCreated.userId.toString(), item);
  }
}

const shoppingFacade = new ShoppingFacade();
shoppingFacade.createShopping({ name: "John", email: "example@gmail.com" }, "Shoes");