/* 2. Построить прямоугольный треугольник состоящий из символа "*". */

function row(length) {
    var stars = "";
    for (var j = 1; j <= length; j++) {
        stars += "* ";
    }
    return stars + "\n";
}
    function triangle(height) {
    var triangle = "";
    for (var i = 1; i <= height; i++) {
        triangle += row(i);
    }
    return triangle;
}
    console.log(triangle(15));