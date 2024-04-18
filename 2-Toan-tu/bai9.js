// Bài 9: cho 
array = [3,5,4,9,8,1,10]
// a.	hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10

function totalFirstLast(arr) {
    let first = array[0];
    let last = array[array.length-1];
    let sum = first + last;
    return sum;
}
console.log(`Tổng phần tử đầu và cuối của array là: ${totalFirstLast(array)}`);
// b.	hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối  // 3 + 20
array.push(20);
console.log(`Tổng phần tử đầu và cuối của array sau khi thêm là: ${totalFirstLast(array)}`);

