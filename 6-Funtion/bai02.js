// Bài 2: Viết function có đầu vào là 1 array chứa các số
// a.	Function trả ra số lớn nhất trong array 
function timSoLonNhat (arr){
    let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let array2 = [0,8,5,6,4,,11,84]
let soLonNhat = timSoLonNhat(array2);
console.log(`Số lớn nhất trong mảng là: ${soLonNhat}`);

// b.	Function trả ra số bé nhất trong array 
function timSoNhoNhat (arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }       
    }
    return min;
}
let soNhoNhat = timSoNhoNhat(array2);
console.log(`Số nhỏ nhất trong mảng là ${soNhoNhat}`);