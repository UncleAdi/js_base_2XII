/* 3.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var computerChoice = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
 */


function knb(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function go() {
    do {
        var computerChoice = knb(0, 4);

        switch (computerChoice) {
            case 0:
                alert("Камінь");
                break;
            case 1:
                alert("Ножиці");
                break;
            case 2:
                alert("Папір");
                break;
            case 3:
                alert("Криниця");
                break;
            default:
                alert("Error!");
        }
        ans = confirm("Зіграймо ще?");
    } while (ans);
}

go();