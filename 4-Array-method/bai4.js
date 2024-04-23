// Bài 4: 
let arr2 = ['4', '6', 1, 2, 3, 5, 'y', 't', 5]
// in ra tổng các số có trong array

let sumNumber = arr2.reduce((prev, current) => {
    if (!isNaN(current)) {
        let num = +current
        return prev + num
    }
    return prev
}, 0)
console.log(sumNumber);