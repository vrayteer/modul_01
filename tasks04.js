'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount += 21;
    }
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
    const discountRate = 1 - (this.discount / 100);
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity * discountRate,
      0,
    );
  },

  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
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

cart.setDiscount('METHED');
cart.print();

cart.setDiscount('NEWYEAR');
cart.print();
