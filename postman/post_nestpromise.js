var mysql=require('mysql');
var http=require('http');

http.createServer(function(req,res){
    req.on('data',function(data){
      

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"user_details"
});
con.connect();

var jdata=JSON.parse(data);
var n1=jdata.name;
var a1=jdata.address;
var p1=jdata.phone;
var command=req.url;
console.log(command);

function insert(){

    return new Promise(function(resolve,reject){



        function select(){
            return new Promise(function(resolve,reject){
        
            
            con.query("select name,phone from user where name='"+n1+"' && phone='"+p1+"'",function(err,rows,field){
                if(err){
                    reject(err);
                }
                else{
                    resolve(rows)
                }
            })
            
        })
                
        }
        select().then(function(result){
            if(result.length==0){

                con.query("insert into user (name,address,phone) values('"+n1+"','"+a1+"','"+p1+"')",function(err,data){
                    if(err){
                        reject("Could not insert");
                    }
                    else{
                        resolve("data inserted")
                    }
        
                })
        
            }
            else{
                console.log("User already exist")
            }

            
        })

    })

}

if(command=='/insert')
insert().then(function(value){
    console.log(value);
},function(err){
    console.log(err);
})

});

res.write('Hello World!'); 

res.end(); 
}).listen(3002); 
