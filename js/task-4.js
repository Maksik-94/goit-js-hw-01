const credits = 23500;
const pricePerDroid = 3000;
let totalPrice;
let message;

const input = prompt("Cколько едениц Вам нужно?");

if (input == null ) {
  message = "Отменено пользователем!";
} else if (input > 0) {
  totalPrice = input * pricePerDroid;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    const restCredits = credits - totalPrice;
    message = `Вы купили ${input} дроидов, на счету осталось ${restCredits} кредитов.`;
  }
} else {
  message = "Неверное количество";
}

console.log(message);
