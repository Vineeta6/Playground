var mysql=require('mysql');
var args=require('yargs').argv;

//return new Promise(function(resolve, reject) {
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"user_details"
});
con.connect();


var name=args.name;
var address=args.address;
var phone=args.phone;

con.query('select * from user',function(err,rows,field){
    if(err) throw err;

    if(rows[0]==null){
        con.query("insert into user (name,address,phone) values('"+name+"','"+address+"','"+phone+"')");
        console.log("data inserted")
    }
    

    var flag=false;
    
    for(i=0;i<rows.length;i++){
    var n1=rows[i].name;
    var p1=rows[i].phone;
        
    if(name==n1 && phone==p1){
      
        flag=true;
    
    }
  
}
//console.log(flag);
if(flag==true){

          console.log("Oops..!  user already exist")
}
if(flag==false){
    con.query("insert into user (name,address,phone) values('"+name+"','"+address+"','"+phone+"')");
     console.log("data inserted")

}
})
    