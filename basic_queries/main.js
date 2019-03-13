var ticket=require('./ticket.js');
const args = require('yargs').argv;

var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"tic"
});

//con.query("create database tic");
//con.query("create table ticket(id varchar(10),name varchar(20),phone varchar(15),email varchar(30))");

var id=args.id;
var name=args.name;
var phone=args.phone;
var email=args.email;
var command=args.command;



if(command=="save"){
 
 ticket.save_ticket(id,name,phone,email).then(function(result){
     console.log("save success",result)
 },function(err){
     console.log("err in save");
 })

}

else if(command=="update")
{
    ticket.update_ticket(id,name,phone,email).then(function(result){
        console.log("update success",result)
    },function(err){
      console.log("err in update");
    
    })
}

else
{
    ticket.delete_ticket(id).then(function(result){
        console.log("Delete success",result);
    },function(err){
        console.log("Err in delete");
    })
}