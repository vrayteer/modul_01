
const calculate = (amount, items, promo) => {
  let discountAmount = 0;


  // товаров в корзине > 10 

  if (items > 10) {
    discountAmount = amount * 0.03;
  }

  // при сумму превышающей 30000 скидка к 15%

  if (amount > 30000) {
    let excessAmount = amount - 30000;
    discountAmount += excessAmount * 0.15;
  }

  //Если промокод равен "METHED", то скидка 10%

  if (promo === 'methed') {
    discountAmount += amount * 0.1;
  } 

  /* Применение скидки 500р при промокоде "G3H2z1" только если сумма корзины 
  после предыдущих скидок превышает 2000р */

  if (promo === 'G3H2Z1') {
    if (amount - discountAmount > 2000) {
      discountAmount += 500;
    }
  }

  let finalAmount = amount - discountAmount;

  return finalAmount;
}
