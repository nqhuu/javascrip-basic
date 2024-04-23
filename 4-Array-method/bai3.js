// Bài 3 :
const persons = [
  {firstname : "Đào", lastname: "Văn Anh"},
  {firstname : "Trần", lastname: "Huy"},
  {firstname : "Lê", lastname: "Hoàng"}
];
// a ) Tạo ra một array persons mới . (newPersons)
// const newPerosns = [...persons]; //sao chép array persons
const newPerosns = [
    {firstname : "Trần", lastname: "Trung Đại"},
    {firstname : "Trần", lastname: "Tuấn Linh"},
    {firstname : "Nguyễn", lastname: "Xuân Cường"},
    {firstname : "Dương", lastname: "Hội An"},
    {firstname : "Nguyễn", lastname: "Thị Thu Huyền"},
  ];
// a ) Thêm mới 1 object  {firstname : "Đào", lastname: "Văn Anh"} vao newPerosns
newPerosns.push({firstname : "Đào", lastname: "Văn Anh"})
console.table(newPerosns);

// b) Đổi {firstname : "Trần", lastname: "Huy"}  thành 
// {firstname : "Nguyễn", lastname: "Hoàng"}.
persons[1] = {firstname : "Trần", lastname: "Huy"}
console.table(persons);

// c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array persons . 

let updatePersons = persons.map(function(persons){
  return {...persons, address: "Hà Nội"};
});
console.table(updatePersons);
