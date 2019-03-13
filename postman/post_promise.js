var mysql=require('mysql');
var http=require('http');

http.createServer(function (req, res) {
    // console.log(req.url);
 req.on('data',function(data){
 

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"user_details"
});
con.connect();


var jdata=JSON.parse(data);
    var name=jdata.name;
    var address=jdata.address;
    var phone=jdata.phone;



function select(){

    
    return new Promise(function(resolve,reject){

    
    con.query("select name,phone from user where name='"+name+"' && phone='"+phone+"'",function(err,rows,field){
        if(err){
            reject(err);
        }
        else{
            resolve(rows)
        }
    })
    
})
        
}




function insert(){

    return new Promise(function(resolve,reject){

        con.query("insert into user (name,address,phone) values('"+name+"','"+address+"','"+phone+"')",function(err,data){
            if(err){
                reject("Could not insert");
            }
            else{
                resolve("data inserted")
            }

        })

    })
}

select().then(function(result){
    console.log(result.length)

    if(result.length==0){

            insert().then(function(value){
                console.log(value);
            },function(err){
                console.log(err);
            })
        } 
    else{
        console.log("User already exist")
        }   
    
    },function(err){
        console.log("invalid syntax");
})

});

res.write('Hello World!'); 

res.end(); 
}).listen(3001); 
