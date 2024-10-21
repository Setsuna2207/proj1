const s1 = "hello world";
const s2 = 'hello world';
const s3 = `hello world`;

console.log(`string 1 
string 2`);

//-----------------------//

let a = 5;
let b = 10;

console.log(`Fifteen is ${a+b} and
not ${2*a+b}.`)

//${...}

//-----------------------//


const base_url = "localhost:8080";
const api = "get-user";
fetch_page = 2;

console.log(`${base_url}/${api}?page=${fetch_page}`)
