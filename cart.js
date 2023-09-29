'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(name, price, quantity = 1) {
    const newItem = {
      name,
      price,
      quantity,
    };
    this.items.push(newItem);
    this.increaseCount(quantity);
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity, 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },


  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('Товар 1', 10);
cart.add('Товар 2', 15, 3);
cart.add('Товар 3', 8);


cart.print();
