// Bài 4: Cho 1 số tự nhiên n. Viết chương trình kiểm tra n là số lẻ hay chẵn.
// Nếu number là số chẵn , In ra "Even number" và "Done".Ngược lại, in "Done" ra màn hình.

// (typeof input === "string") ? 'bạn cần nhập số':(typeof input === "number") ?
let input = prompt('nhập Số').trim();
let check = true;
// do {
//     if (!isNaN(input) === !check) {
//         alert('bạn cần nhập số');
//         input = prompt('nhập Số').trim();
//     } else if (!isNaN(input)) {
//         check = false;
//         if (input % 2 === 0) {
//             confirm('Even number');
//             alert('Done');
//         } else {
//             alert('Done');
//         }
//     }
// } while (check === true)

while (check === true) {
    if (!isNaN(input) === !check) {
        alert('bạn cần nhập số');
        input = prompt('nhập Số').trim();
    } else if (!isNaN(input)) {
        check = false;
        if (input % 2 === 0) {
            confirm('Even number');
            alert('Done');
        } else {
            alert('Done');
        }
    }
}


// let a = 'a'
// console.log(!isNaN(a) + ' ' + a); 