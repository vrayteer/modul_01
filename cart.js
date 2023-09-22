'use strict';



const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(name, price, quantity = 1) {
    const newItem = {
      name: name,
      price: price,
      quantity: quantity,
    };
    this.items.push(newItem);
    this.calculateItemPrice();
    this.increaseCount(quantity);
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0); 
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  }
};

cart.add("Товар 1", 10);
cart.add("Товар 2", 20, 2);
cart.add("Товар 3", 15);

cart.print();
