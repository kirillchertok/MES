function unusualSum(arr){
    return arr.reduce((currentSum, elem) => elem < 10 && elem > 0 ? elem + currentSum : currentSum, 0)
}

console.log(unusualSum([1, 2, 9, -5, 44, 5, 3])) // 20