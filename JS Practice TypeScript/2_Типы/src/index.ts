// Реализуйте встроенный дженерик Required<T>, не используя его.
type MyRequired<T> = {
    [K in keyof T]-?: T[K]
}

type Test = {
    id?: number
    name?: string
}

const obj1: Test = { id: 12 }
//const obj2: MyRequired<Test> = { id: 12 } // Error

// Создайте функцию, которая принимает на вход переменную типа string...

type Side = 'east' | 'west' | 'south' | 'north'

const getStringFromSide = (side: Side) => {
    function error(message: never): never {
        throw new Error(message);
    }

    switch (side) {
        case 'east':
            return "east"
        case 'west':
            return "west"
        case 'south':
            return "south"
        case 'north':
            return "north"
        default:
            return error(side)
    }
}
