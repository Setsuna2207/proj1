const n1 = [1, 2, 3];
const n2 = [4, 5, 6];

const n3 = [...n1, ...n2];
const n4 = [...n2, ...n1];

// Toán tử ... để copy all phần tử của mảng

console.log(n3)
console.log(n4)

//-------------------------//

let a1 = ["Trung", "Huy", "Tuýn"];
//array.push('new item'); thêm phần tử vào cuối mảng
//array.unshift('new item'); thêm phần tử vào đầu mảng
a2 = [...a1, "Proj Thread"]
a3 = ["Proj Thread", ...a1]

console.log(a2)
console.log(a3)

//-------------------------//

const b1 = {
    name: 'Trung', 
    home: 'Hà Đông',
    class: '21CN3'
    }
    const b2 = {
    class: '21CN4',
    uni: 'HAU'
}
// Toán tử ... ghi đè phần tử từ bên phải lên bên trái (trùng thuộc tính)

const b3 = {...b1, ...b2};

console.log(b3) 

//-------------------------//

const status = {
    name: 'Huy',
    age: 20,
    gpa: 3.0
}
const newStatus = {...status, gpa: 3.5}
console.log(newStatus)