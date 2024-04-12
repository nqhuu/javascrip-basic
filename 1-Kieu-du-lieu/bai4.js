// Bài 4: Cho trước một object sau:
// ví dụ: 
let monthSalary = {
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
// a.	console.log() ra tổng lương 3 tháng đầu năm.console.log() ra lương tháng trung bình cả năm.
let sum3Month = monthSalary.January + monthSalary.February + monthSalary.March
console.log(`Tổng lương 3 tháng đầu: ${sum3Month}`)

// b.	Thêm key lương tháng 13 và tính lại trung bình thu thập cả năm.
monthSalary.month13 = 15000;
let tbc = Object.values(monthSalary).reduce((prev, curren) => prev + curren, 0)/Object.keys(monthSalary).length;
console.log(`Trung bình thu nhập cả năm (bao gồm lương tháng 13): ${tbc}`)
