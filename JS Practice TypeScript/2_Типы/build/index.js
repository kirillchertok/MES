"use strict";
const obj1 = { id: 12 };
const getStringFromSide = (side) => {
    function error(message) {
        throw new Error(message);
    }
    switch (side) {
        case 'east':
            return "east";
        case 'west':
            return "west";
        case 'south':
            return "south";
        case 'north':
            return "north";
        default:
            return error(side);
    }
};
