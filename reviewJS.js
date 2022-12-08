let json = '{"Fname": "Dear","lname":"Sukanya"}';
let obj = JSON.parse(json);
//console.log(typeof(obj));

let obg2 = {
    fname : "dear",
    lname : "sukanya"

};
let json2 = JSON.stringify(obg2);
console.log(typeof(obg2));
console.log(json2);
