// Bài 4: Cho 1 số tự nhiên n. Viết chương trình kiểm tra n là số lẻ hay chẵn.
// Nếu number là số chẵn , In ra "Even number" và "Done".Ngược lại, in "Done" ra màn hình.

function kiemTra(n) {
    if (n %2 === 0) {
        console.log('Evren number');
    } 
    console.log('Done');
}

let n = 2;
kiemTra(n);