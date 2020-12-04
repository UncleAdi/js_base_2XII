/* 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран. */

/* 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран. */

var a, b ,c;
a = prompt("insert the first number","");
b = prompt("insert the second number","");
c = prompt("insert the third number","");

    if(a == ""){
        alert("First number error!")
    }
        else if(b == ""){
            alert("Second number error!")
        }
        else if(c == ""){
            alert("Third number error!")
        }
        else if(a >= b){
                        if(a >= c){
                                alert("First number is highest")
                                }
                        else{
                            alert("Third number is highest")
                            }
                            }
                        else
                            {
                        if( b >= c)
                            {
                            alert("Second number is highest")
                            }
                        else
                            {
                            alert("Third number is highest")
                            }
}
