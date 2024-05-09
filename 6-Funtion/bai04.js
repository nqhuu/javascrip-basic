// Bài 4: Viết function có đầu vào là số number và 1 array chứa số
// 	Function trả ra số lần number lặp lại trong array
function soLanLapLai(number, array) {
    let dem = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            dem++;
        }
    }
    return dem;
}
let array4 = [1,8,1,4,6,7,2,3,8,9,4,2,5]
let soCanDem = 1;
let soLanXuatHien = soLanLapLai (soCanDem,array4);
console.log(`Số ${soCanDem} xuất hiện ${soLanXuatHien} lần`);