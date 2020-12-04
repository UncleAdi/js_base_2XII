/* 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран. */

var name, surname, age;

name = prompt('Enter your name');
surname = prompt('Enter your surname');
age = prompt('How old are you?');

document.write('Name: ' + name + '<br>' + 'Surname: ' + surname + '<br>' + 'Age: ' + age );