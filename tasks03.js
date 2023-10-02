'use strict';

const rectangle = {
  width: 5,
  height: 5,

  setWidth(width) {
    if (typeof width === 'number') {
      this.width = width;
    }
  },

  setHeight(height) {
    if (typeof height === 'number') {
      this.height = height;
    }
  },

  getPerimeter() {
    return (this.width + this.height) * 2 + 'см';
  },

  getArea() {
    return this.width * this.height + 'см^2';
  },
};

rectangle.setWidth(10);
rectangle.setHeight(15);

console.log('Периметр прямоугольника:',
  rectangle.getPerimeter());
console.log('Площадь прямоугольника:',
  rectangle.getArea());
