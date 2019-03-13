var fs=require('fs')

fs.readFile('main.js',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})