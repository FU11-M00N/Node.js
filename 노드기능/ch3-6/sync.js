const fs = require('fs'); //이 파일은 동기적이라서 한번실행하거나 서버를 초기화작업 같은것을 할때만 써야함


let data = fs.readFileSync('./readme.txt');

console.log("1번",data.toString());
data = fs.readFileSync('./readme.txt');
console.log("2번",data.toString());
data = fs.readFileSync('./readme.txt');
console.log("3번",data.toString());
data = fs.readFileSync('./readme.txt');
console.log("4번",data.toString());