const persons = [
    { firstname: "Đào", lastname: "Văn Anh" },
    { firstname: "Trần", lastname: "Huy" },
    { firstname: "Lê", lastname: "Hoàng" }
];
//   a ) Tạo ra một array persons mới . (newPersons) Thêm mới 1 object  {firstname : "Đào", lastname: "Văn Anh"} vao newPerosns

let newPerosns = [...persons, { firstname: "Đào", lastname: "Văn Anh" }]
console.log(newPerosns);

//   b) Đổi {firstname : "Trần", lastname: "Huy"}  thành  {firstname : "Nguyễn", lastname: "Hoàng"}.

newPerosns.forEach(item => {
    if (item.firstname === "Trần" && item.lastname === "Huy") {
        item.firstname = "Nguyễn";
        item.lastname = "Hoàng";
    }
})
console.log(newPerosns);

//   c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array persons . 
let persons2 = persons.map(element => {
    return { ...element, address: "Hà Nội" }
}
);
console.log(persons2);