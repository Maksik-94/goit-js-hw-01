let country = prompt("Введите страну доставки");

const CHINA = "Китай";
const CHILI = "Чили";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
const CANCELED = "В вашей стране доставка не доступна";
let price = 0;
let message;

if (country === null) {
  message = "Отменено пользователем";
} else {
  country = country[0].toUpperCase() + country.slice(1).toLowerCase();
  switch (country) {
    case CHINA:
      country = "Китай";
      price = 100;
      break;

    case CHILI:
      country = "Чили";
      price = 250;
      break;

    case AUSTRALIA:
      country = "Австралию";
      price = 170;
      break;

    case INDIA:
      country = "Индию";
      price = 80;
      break;

    case JAMAICA:
      country = "Ямайку";
      price = 120;
      break;

    default:
      message = CANCELED;
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
alert (message);



// if (!input) {
//   message = CANCELED;
// } else {
// //   country = country.toLowerCase();
//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);
