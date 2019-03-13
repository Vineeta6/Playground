const fs = require('fs');
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"tic"
});

var ticket={

    save_ticket:function(id,name,phone,email){

        return new Promise(function(resolve,reject){
            var sql="INSERT INTO ticket (id, name, phone, email) VALUES ('"+id+"','"+name+"','"+phone+"','"+email+"')";
            con.query(sql,function(err,result){
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
                
            });
            // console.log("Saved ticket successfully");
        })
        //console.log(id+"\n"+name+"\n"+phone+"\n"+email);
        
     },
    update_ticket:function(id,name,phone,email){
        return new Promise(function(resolve,reject){
            var sql="update ticket set name='"+name+"' ,phone='"+phone+"',email='"+email+"' where id='"+id+"'";
        con.query(sql,function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
        //console.log("Updated ticket successfully");
    
        })
        
     },
    delete_ticket:function(id){
       return new Promise(function(resolve,reject){
        con.query("delete from ticket where id='"+id+"'",function(err,result){
            if(err){
                  reject(err);
                  }
            else{
                resolve(result);
            }
        });
        //console.log("Deleted ticket successfully");

       })
        
    }
};
module.exports=ticket;