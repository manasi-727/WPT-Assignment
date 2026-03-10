let data= {
"studentid": 10,
"studentname": "ABC",
"studentmarks": 150
}
console.log(data);
//object to jsaon format stringfy
let d = JSON.stringify(data);
console.log(d);
// parse json---> object
console.log (JSON.parse(d));