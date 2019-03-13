var ticket=require('./ticket.js');
const args = require('yargs').argv;

var jsondata={"id":args.id,"name":args.name,"phone":args.phone,"email":args.email};
var mydata=JSON.stringify(jsondata);

var command=args.command;

if(command=="save"){
 
 ticket.save_ticket(mydata);

}

if(command=="update")
{
    ticket.update_ticket(mydata);
}