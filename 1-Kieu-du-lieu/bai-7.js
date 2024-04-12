// Bài 7: Cho
 let array = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// a.	Tính tổng của phần tử đầu và phần tử cuối trong array và array con 
let sumArrayFirstLast = array[0] + array[array.length-1];
let sumArrayFirstLastChild =0;
array.forEach(item =>{
    if(Array.isArray(item)){
        sumArrayFirstLastChild = item[0] + item[item.length-1]
    }
})

let sum = sumArrayFirstLast + sumArrayFirstLastChild

console.log(`câu a: ${sum}`)

// b.	 hãy thêm số 10 vào cuối array con và tính lại tổng trên
// arr.push(giá trị)

array.forEach(item =>{
    if(Array.isArray(item)){
        item.push(10);
        sumArrayFirstLastChild = item[0] + item[item.length-1]
    }
})
let sumb = sumArrayFirstLastChild + sumArrayFirstLast;
console.log(`câu b: ${sumb}`)
