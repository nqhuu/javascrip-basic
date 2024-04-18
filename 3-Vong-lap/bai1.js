/*Bài 1: cho array = [1,5,7,8,9,15,8]
a. in ra các số chẵn của mảng
b. in ra các số lẻ của mảng
c. in ra các số lớn hơn hoặc bằng 5 của mảng
d.  Cộng tổng các số chia hết cho 5 của mảng
e. Tìm ra tích 3 số đầu của mảng array
f. Tính tổng 3 phần tử cuối của mảng
g. Tìm xem trong array có phần tử nào là số 5không?
h. Đếm số phần tử = 8 trong mảng

Bài làm */
// a. in ra các số chẵn của mảng
var array = [1,5,7,8,9,15,8];
console.log ("Các số chẵn của mảng là: ")
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element%2 === 0) {
    console.log(element)
    }
}

// b. in ra các số lẻ của mảng

var array = [1,5,7,8,9,15,8];
console.log ("Các số lẻ của mảng là: ")
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element%2 === 1) {
    console.log(element)
    }
}

// c. in ra các số lớn hơn hoặc bằng 5 của mảng
var array = [1,5,7,8,9,15,8];
console.log ("Các số lớn hơn hoặc bằng 5 là: ")
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element >= 5) {
    console.log(element)
    }
}

// d.  Cộng tổng các số chia hết cho 5 của mảng
var array = [1,5,7,8,9,15,8];
var tong = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element%5 === 0) {
    tong += element;
    }
}
console.log("Tổng các số chia hết cho 5 là: " + tong)

// e. Tìm ra tích 3 số đầu của mảng array
var array = [1,5,7,8,9,15,8];
var tich = 1;
for (let i = 0; i < 3; i++) {
    const element = array[i];
    tich *= element;
}
console.log("Tích 3 số đầu của mảng array là: " + tich)

// f. Tính tổng 3 phần tử cuối của mảng
var array = [1,5,7,8,9,15,8];
var tong3 = 0;
for (let i = array.length - 3; i < array.length; i++) {
    const element = array[i];
    tong3 += element;
}
console.log("Tổng 3 số cuối của mảng array là: " + tong3)


// g. Tìm xem trong array có phần tử nào là số 5 không?
var array = [1,5,7,8,9,15,8];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
   if (element === 5) {
    console.log("Có phần tử là số 5")
   }
}
// h. Đếm số phần tử = 8 trong mảng
var array = [1,5,7,8,9,15,8];
var sophantu = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 8) {
       sophantu++;
    }
    
}
console.log("Số phần tử bằng 8 là: " + sophantu)