const fs = require('fs');

var ticket={

    save_ticket:function(mydata){
        
        fs.writeFile('f1.txt',mydata,function(err){
            if(err)throw err;
        });
        console.log("Saved ticket successfully");
    },
    update_ticket:function(mydata){
        
        // var id,name,phone,email;
        // id=mydata.id;
        // name=mydata.name;
        // phone=mydata.phone;
        // email=mydata.email;

        fs.writeFile('f1.txt',mydata,function(err){
            if(err)throw err;
        });
        console.log("Updated ticket successfully");

    }
};
module.exports=ticket;