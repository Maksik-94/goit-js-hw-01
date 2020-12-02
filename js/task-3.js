const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let welcome = "Добро пожаловать!";
let cancel = "Отменено пользователем!";
let alarm = "Доступ запрещен, неверный пароль!";

message = prompt("Введите пароль администратора");
if (message === ADMIN_PASSWORD) {
  message = welcome;
} else if (message === null) {
  message = alarm;
} else {
  message = cancel;
}
alert (message);
