/* 3. Допишите функцию countOnline; используйте оператор for ... in в этой функции для циклического обхода пользователей в объекте users и возврата количества пользователей, для которых для свойства онлайн установлено значение true. */

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {

    var val = 0;
    for (var user in obj) {
        if (obj[user]["online"] === true) {
            val++
        }
        

    } return val;

}

console.log(countOnline(users));