const ADMIN_PASSWORD = "1";
let message;
let welcome = "Добро пожаловать!";
let cancel = "Отменено пользователем!";
let alarm = "Доступ запрещен, неверный пароль!";
let input = prompt("Введите пароль администратора");
if (input === ADMIN_PASSWORD) {
  message = welcome;
} else if (input === null) {
  message = cancel;
} else {
  message = alarm;
}
alert(message);
