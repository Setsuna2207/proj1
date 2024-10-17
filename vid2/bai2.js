// class Person {
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
// getAddress(){
//     return "Tôi sống ở " + this.address;
// }
// }

// const test = new Person('Trung', 'Hà Đông');
// console.log(">>> ktra test: ", test)
// console.log(">>> ktra address: ", test.getAddress());

//class B extends A: extends giúp B kế thừa A
//cần cú pháp super();

class Novel {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getAuthor() {
        return this.author;
    }
}

let myNovel = new Novel('Vợ nhặt', 'Kim Lân');
console.log(">>> Truyện: ", myNovel.title);
console.log(">>> Tác giả: ", myNovel.getAuthor());

//lmao lỗi ngu vc :))