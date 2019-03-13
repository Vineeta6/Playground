var fs=require('fs');
var argv=require('yargs').argv;

var jsondata={"ticketid":argv.tid,"ticket_name":argv.tname,"ticket_num":argv.tnum};

var mydata=JSON.stringify(jsondata);

 fs.writeFile('j1.json',mydata,(err)=>{});


console.log("Data saved successfully");
