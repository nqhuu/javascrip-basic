/*Bài 4: Cho 1 số tự nhiên n. Viết chương trình kiểm tra n là số lẻ hay chẵn.
Nếu number là số chẵn , In ra "Even number" và "Done".Ngược lại, in "Done" ra màn hình.
Bài làm
*/
function sotunhien(n) {
    if (n%2 === 0) {
        console.log ("Even number")
    } else {
        console.log("Done")
    }
}
sotunhien(7)