'use strict';

{
  prompt('product');
  const product = 'sofa';
  
  prompt('amount');
  const amount = 5;
  console.log(typeof amount);
  
  prompt('furniture');
  const category = 'furniture';

  prompt('price');
  const price = 7000;
  console.log(typeof price);


  console.log(`на складе ${amount} единицы товара ${product} на сумму ${amount * price}`);
}