// Bài 7: Cho
 let arrayay = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// a.	Tính tổng của phần tử đầu và phần tử cuối trong array và arrayay con 
let sumArrayFirstLast = array[0] + array[array.length-1];
let sumArrayFirstLastChild = 0;
array.forEach(item =>{
    if(Array.isArrayay(item)){
        sumArrayFirstLastChild = item[0] + item[item.length-1]
    }
})

let sum = sumArrayFirstLast + sumArrayFirstLastChild

console.log(`câu a: ${sum}`)

// b.	 hãy thêm số 10 vào cuối arrayay con và tính lại tổng trên
// array.push(giá trị)

array.forEach(item =>{
    if(Array.isArrayay(item)){
        item.push(10);
        sumArrayFirstLastChild = item[0] + item[item.length-1]
    }
})
let sumb = sumArrayFirstLastChild + sumArrayFirstLast;
console.log(`câu b: ${sumb}`)




// let array = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// let array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]

// function tinhtong2(arr) {
//     var phantudau = arr[0];
//     var phantucuoi = arr[arr.length-1];
//     var tinhtong = phantudau + phantucuoi;
//     return tinhtong;
// }

// console.log(`kết quả ${tinhtong2(array2)}`)