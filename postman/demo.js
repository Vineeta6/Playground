var http = require('http');
var mysql=require('mysql');

//create a server object:
http.createServer(function (req, res) {
   // console.log(req.url);
req.on('data',function(data){

    var con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"new_db"
    });
    

    var jdata=JSON.parse(data);
    var name=jdata.name;
    var email=jdata.email;
    var address=jdata.address;
    var phone=jdata.Phone;
    //var command=jdata.command;

    //console.log(name+" "+email+" " +address+" "  +phone);
var command=req.url;
console.log(req.url);

if(command=="/insert")
{
    con.query("insert into user values('"+name+"','"+email+"','"+address+"','"+phone+"' ) ");
    console.log('Data inserted successful'); 
}
else if(command=="/update")
{
    con.query("update user set email='"+email+"',address='"+address+"',phone='"+phone+"' where name='"+name+"'");
    console.log('Data updated successful'); 
}
else if(command=="/delete")
{
    con.query("delete from user where name='"+name+"'");
    console.log('Data deleted!'); 
}

});

  res.write('Hello World!'); 

res.end(); 
}).listen(3000); 
