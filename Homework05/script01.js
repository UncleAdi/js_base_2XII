/* 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant. */


a = +prompt("Введіть занчення Х");
b = +prompt("Введіть занчення Y");
        
            if (isNaN(a) || isNaN(b)) {
                document.write("Введіть коректні значення!");
            }

var point = {
    x: a,
    y: b
};

var GetQuadrant = function (x, y) {
    if (point.x > 0 && point.y > 0) {
        document.write("Точка у квадранті Х+ У+");
    } else if (point.x > 0 && point.y < 0) {
        document.write("Точка у квадранті Х+ У-");
    } else if (point.x < 0 && point.y < 0) {
        document.write("Точка у квадранті Х- У-");
    } else if (point.x < 0 && point.y > 0) {
        document.write("Точка у квадранті Х- У+");
    } else if (point.x == 0 && point.y == 0) {
        document.write("Точка має нульові координати");
    }
}
GetQuadrant();