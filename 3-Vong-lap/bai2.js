/*Bài 2: cho var data = [3,2,4,1,8,7,1,10,1,2]
a.	tính tổng các phần tử trong array
b.	tính tích các phần từ trong array
c.	tính tổng các số lẻ trong array
d.	tính tích các số chẵn trong array
e.	có mấy số 1 trong array, ở những vị trí nào
f.	số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array

Bài làm:
*/
// a.	tính tổng các phần tử trong array
let data = [3,2,4,1,8,7,1,10,1,2]
let sum = data.reduce ((tong, data2) => tong + data2, 0)
console.log ("Tổng các phần tử trong array là: " + sum)

// b.	tính tích các phần từ trong array
let tich = data.reduce((tich , data3) => tich * data3, 1)
console.log ("Tích các phần tử trong array là: " + tich)

// c.	tính tổng các số lẻ trong array
// Cách 1
let tongc = 0;
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element%2 !== 0) {
        tongc += element;
    }
    
}
console.log ("Tổng các số lẻ trong array là: " + tongc)
// Cách 2
let tong2c = data.reduce((tong, data3) =>{
if (data3% 2 !== 0) {
    return tong + data3
}
return tong
}, 0)
console.log ("Tổng các số lẻ trong array là: " + tong2c)

// d.	tính tích các số chẵn trong array
// Cách 1
let tichd = 1
for (let i = 0; i< data.length; i++) {
  const element = data[i];
  if (element%2 === 0) {
    tichd *= element
  }
    }
console.log ("Tích các số chẵn trong array là: " + tichd)
// Cách 2
let tichd2 = data.reduce((tich , data4) => {
if (data4%2 === 0){
    return tich * data4
}
return tich
}, 1)
console.log ("Tích các số chẵn trong array là: " + tichd2)

// e.	có mấy số 1 trong array, ở những vị trí nào
let sodem = 0;
let vitri = [];
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element === 1) {
        vitri.push(i);
        sodem++
    }
}
console.log("Vị trí số 1 trong array là: " + vitri.join (", "));
console.log("Tổng số 1 trong array là: " + sodem);

// f.	số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array
let vitridau = data.indexOf(1)
let vitricuoi = data.lastIndexOf(1)

console.log("Số 1 đầu tiên trong chuỗi là: " + vitridau)
console.log("Số 1 cuối cùng trong chuỗi là: " + vitricuoi)

