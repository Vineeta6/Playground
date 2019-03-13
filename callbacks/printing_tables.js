
for(i=1;i<=10;i++){

table(5,function(result,err){
if(!err){
    console.log("5*"+i+"="+result);
}
});
}
function table(value,callback){
    callback(value*i,false);
}