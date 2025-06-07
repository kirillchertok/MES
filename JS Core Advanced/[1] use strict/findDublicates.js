"use strict"

function findDublicates(array){
    return array.length !== (new Set(array)).size
}

console.log(findDublicates([1,2,3,4,5])) // false