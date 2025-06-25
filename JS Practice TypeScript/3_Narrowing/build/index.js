"use strict";
function identifyElement(element) {
    if (typeof element === "number") {
        return "Это число";
    }
    else if (typeof element === "string") {
        return "Это строка";
    }
    else if (typeof element === "object" && element !== null) {
        return "Это объект";
    }
    else {
        return "Неизвестный тип";
    }
}
