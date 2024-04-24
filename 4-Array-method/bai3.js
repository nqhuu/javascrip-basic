/*
Bài 3 :
const persons = [
  {firstname : "Đào", lastname: "Văn Anh"},
  {firstname : "Trần", lastname: "Huy"},
  {firstname : "Lê", lastname: "Hoàng"}
]; 	
a ) Tạo ra một array persons mới . (newPersons)
a ) Thêm mới 1 object  {firstname : "Đào", lastname: "Văn Anh"} vao newPerosns
b) Đổi {firstname : "Trần", lastname: "Huy"}  thành 
{firstname : "Nguyễn", lastname: "Hoàng"}.
c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array persons . 

Bài làm
*/
const persons = [
  {firstname : "Đào", lastname: "Văn Anh"},
  {firstname : "Trần", lastname: "Huy"},
  {firstname : "Lê", lastname: "Hoàng"}
]; 
// a ) Tạo ra một array persons mới . (newPersons)
let newPersons = [...persons]
console.log(newPersons)

// a ) Thêm mới 1 object  {firstname : "Đào", lastname: "Văn Anh"} vao newPerosns
newPersons.push({firstname : "Đào", lastname: "Văn Anh"})
console.log(newPersons)

// b) Đổi {firstname : "Trần", lastname: "Huy"}  thành 
// {firstname : "Nguyễn", lastname: "Hoàng"}.
newPersons.forEach(person => {
  if (person.firstname === "Trần" && person.lastname === "Huy") {
    person.firstname = "Nguyễn";
    person.lastname = "Hoàng";
  }
});
console.log(newPersons)

// c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array persons . 
const personsWithAddress = persons.map(person => {
  return { ...person, address: "Hà Nội" };
});

console.log(newPersons);
console.log(personsWithAddress);