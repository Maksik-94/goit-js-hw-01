let input;
const message = "Общая сумма чисел равна";
const alarm =
  "Было введено не число, попробуйте еще раз, на этот раз внимательнее";
let total = 0;

do {
  input = prompt("Введите число");
  Number.isNaN(Number(input)) ? alert(alarm) : (total = total + Number(input));
} while (input !== null);
{
  alert("Вы сломали алгоритм!");
  alert(`${message} ${total}`);
}

// let total = 0;
// let input;

// do {
//   input = prompt('Введите число!');
//   total += Number(input);
// } while (input !== null);

// alert(`Общая сумма чисел равна ${total}`);
