var args=require('yargs');
var fs=require('fs');

var jsondata={"employee":[
    {"name":"sam","salary":20000,"address":"Belgaum"},
    {"name":"preeti","salary":30000,"address":"Delhi"},
    {"name":"Regina","salary":60000,"address":"Dubai"}
]};

var data=JSON.stringify(jsondata);
fs.writeFile('demo.json',data,(err)=>{});
console.log(data);
