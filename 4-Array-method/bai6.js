// Bài 6: 
var data = [1,2,3,1,2,3,4,5,6,5,4,1,6]
// in ra các phần tử bị trùng nhau


/*Tạo hàm lấy phần tử trùng trong mảng JavaScript*/
function duplicateElement( array, size){
    let result = [];
    let count = 0;
    for (let i = 0; i < size-1; ++i) {
        for (let j = i + 1; j < size; ++j) {
            if (array[i] === array[j]) {
                /*Tìm thấy phần tử trùng thì thêm vào mảng kết quả*/

                result[count]=array[i];
                ++ count;
            }
        }
    }
    return result
}



let result1 = duplicateElement (data,data.length);
console.table(`Các phần tử bị trùng nhau: ${result1}`);
console.log(result1);


function phanTuTrung(data) {
    var counts = {}; // Đối tượng để lưu trữ số lần xuất hiện của từng phần tử

    // Lặp qua mảng và đếm số lần xuất hiện của mỗi phần tử
    data.forEach(function(item) {
        if (counts[item]) {
            counts[item] += 1;
        } else {
            counts[item] = 1;
        }
    });

    // Lọc ra các phần tử có số lần xuất hiện lớn hơn 1
    var duplicates = Object.keys(counts).filter(function(key) {
        return counts[key] > 1;
    });

    return duplicates;
}

console.log(phanTuTrung(data)); 
