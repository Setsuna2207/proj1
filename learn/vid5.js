const myArray = [1, 2, 3, 4];
//const myList = myArray.map((item) => item * 2); //jsx

//map tạo array mới từ array đầu và lặp từng phần tử
//map k thay đổi array gốc
//trong map là 1 function

//const a = () => {}

const myList = myArray.map((item, index) => {
    console.log(item, index)
    return item * 2; //ra lệnh cho map
});

const newArray = [];
for(let i = 0; i < myArray.length; i++){
    let item = myArray[i] * 3;
    newArray.push(item);
}

console.log(myList, newArray)

//-----------------------------//

//filter tương tự map nhưng dùng để giản lược hóa array

const ages = [32, 35, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age){
//     return age >= 18;
// }
const result = ages.filter((item) => {
    return item >= 18;
})
console.log(result)
