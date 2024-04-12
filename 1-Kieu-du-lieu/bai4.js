// Bài 4: Cho trước một object sau:
// ví dụ: 
var monthSalary = {
    January:    1000,
    February:   4000,
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
// a.	console.log() ra tổng lương 3 tháng đầu năm.console.log() ra lương tháng trung bình cả năm.
// b.	Thêm key lương tháng 13 và tính lại trung bình thu thập cả năm.
var tongLuong3ThangDauNam = monthSalary.January + monthSalary.February + monthSalary.March;
console.log(`Tổng lương 3 tháng đầu năm: ${tongLuong3ThangDauNam}`);

//cách 1: Sử dụng vòng lặp for
var tongLuongNam = 0;
for(var month in monthSalary){
    tongLuongNam += monthSalary[month]; //cộng dồn các tháng trước và gán vào giá trị tháng hiện tại
}
console.log(`Lương tháng trung bình cả năm: ${tongLuongNam/12}`);

//cách 2: Sử dụng reduce
var trungBinhThangC2 = Object.values(monthSalary).reduce((sum, salary) => sum +salary,0)/12
console.log(`Lương tháng trung bình cả năm: ${trungBinhThangC2}`);

//Cách 3: Sủ dụng Object.keys
var trungBinhThangC3 = Object.keys(monthSalary).reduce((sum,month) => sum + monthSalary[month],0)/12
console.log(`Lương tháng trung bình cả năm: ${trungBinhThangC3}`);
monthSalary.thang13 = 2000;
var tongSoThang = Object.keys(monthSalary).length;
// console.log(Object.keys(monthSalary).length);
// console.log(monthSalary);
var trungBinhThangC4 = Object.values(monthSalary).reduce((num, salary) => num + salary,0)/tongSoThang;
console.log(`Lương tháng trung bình cả năm sau khi thêm lương tháng 13 là: ${trungBinhThangC4}`);

