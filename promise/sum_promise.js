var result
function cal(x,y){
    console.log("x= "+x+"   y= "+y);
    positivesum(x,y).then(function(result){
        console.log("sum="+result);


    },function(err){
        console.log(err)
      
    
    })
    
    console.log("end of function")
}

function positivesum(x,y){
    
    return new Promise(function(resolve,reject){
        if((x+y)>0){
            resolve(x+y);
        }
        else{
            reject("sum is less than zero");
        }
    })
}
cal(2,-9);

