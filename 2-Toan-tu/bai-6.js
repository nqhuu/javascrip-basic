// Bài 6: Viết chương trình nhập vào giá trị
// dùng prompt trên web console
// let chuoi = prompt('nhập giá trị').trim().toUpperCase();
let input1 = 'Employee';
let input2 = 'Director';
// a.	Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
// b.	Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
// c.	Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login
login = input => {
    if (input === input1.toUpperCase()){
        return alert('Hello');
        // return 'Hello';
    } else if(input === input2.toUpperCase()){
        return  alert('Greetings');
        // return  'Greetings';
    } 
    return alert('No login');
    // return 'No login';
};
let chuoi = prompt('nhập giá trị').trim().toUpperCase();
login(chuoi)
// console.log(login(chuoi));
