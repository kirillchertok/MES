"use strict";
function processData(arg) {
    if (Array.isArray(arg)) {
        console.log("Длина массива:", arg.length);
    }
    else {
        return `Имя: ${arg.name}, Возраст: ${arg.age}`;
    }
}
