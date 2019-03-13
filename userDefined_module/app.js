var myticket=require('./ticket.js');
var argv=require('yargs').argv;

var jsondata={"ticket_id":argv.ticket_id,"ticket_name":argv.ticket_name,"ticket_num":argv.ticket_num};

var data=JSON.stringify(jsondata);
myticket.mydata(data)
//console.log(mydata);

