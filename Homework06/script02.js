/* 2. Завершите написание функции getArrayOfUsers, чтобы она возвращала массив, содержащий все свойства объекта, который он получает в качестве аргумента. */

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

function getArrayOfUsers(obj) {
    let newArr = [];
    for (let user in obj) {
        newArr.push(user); 
        newArr.push((Object.keys(obj[user])));
    }

    return newArr;

}

console.log(getArrayOfUsers(users));