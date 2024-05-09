// Bài 1: Viết function có đầu vào là 1 array chứa các số
// a.	Function trả ra tổng các phần tử trong array
function tinhTong(arr){
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        tong += arr[i]
    }
    return tong;
}
let array1 = [1,5,3,4,8];
let tongCacPhanTu = tinhTong(array1);
console.log(`Tổng các phần tử trong array là: ${tongCacPhanTu}`);

// b.	Function trả ra tích các phần tử trong array
function tinhTich(arr){
    let tich = 1;
    for (let i = 0; i < arr.length; i++) {
        tich *= arr[i];
    }
    return tich;
}
let tichCacPhanTu = tinhTich(array1);
console.log(`Tích các phần tử có trong array là: ${tichCacPhanTu}`);


