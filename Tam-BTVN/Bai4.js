// Bài 4: Cho trước một object sau:
// ví dụ: var monthSalary = {
//     January:    1000,
//     February:    4000,
//     March:      5400,
//     April:      6040,
//     May:        1700,
//     June:       1000,
//     July:       8000,
//     August:     1600,
//     September:  1000,
//     October:    1700,
//     November:   1903,
//     December:   9050
// }
// a.	console.log() ra tổng lương 3 tháng đầu năm.console.log() ra lương tháng trung bình cả năm.
// b.	Thêm key lương tháng 13 và tính lại trung bình thu thập cả năm.

var monthSalary = {
        January:    1000,
        February:    4000,
        March:      5400,
        April:      6040,
        May:        1700,
        June:       1000,
        July:       8000,
        August:     1600,
        September:  1000,
        October:    1700,
        November:   1903,
        December:   9050
    }
    console.log(monthSalary.January + monthSalary.February + monthSalary.March );
    // Tính trung bình lương 12 tháng bằng hàm reduce
    var trungbinh = Object.values(monthSalary).reduce((tong, giatri) => tong + giatri) / 12;
    console.log(trungbinh);

// b.	Thêm key lương tháng 13 và tính lại trung bình thu thập cả năm.
monthSalary["thang 13"] = 5000;
var trungbinh13 = Object.values(monthSalary).reduce((tong, giatri) => tong + giatri) / 13;
console.log(trungbinh13);
