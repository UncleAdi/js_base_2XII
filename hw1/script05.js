/* 5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?". Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false. */

var age = prompt('How old are you?');

var conf = confirm('Are you sure you have ' + age + ' years old?');

alert(conf);