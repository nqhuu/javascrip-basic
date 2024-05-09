// Bài 8: Viết function có đầu vào là 1 array chứa các số
// 	Function trả ra số lớn nhất trong array  

function findNumberMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];  
        }        
    }
    return max;
}
let array8 = [1,9,11,2,3,4,6,8];
let numberMax = findNumberMax(array8);
console.log(`Số lớn nhất trong mảng là: ${numberMax}`);

