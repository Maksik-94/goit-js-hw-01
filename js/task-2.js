const total = 100; //на складе
const ordered = 20; //заказ
const message =
  total < ordered
    ? "На складе недостаточно товаров!"
    : "Заказ оформлен, с вами свяжется менеджер";

console.log(message);
