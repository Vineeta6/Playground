var jsondata=require('./font.json');
var text="For long we have said in official and non-official forums that India will be compelled to respond robustly.";

    console.log(text.length);
    
    var width=50
    var sum=0;
    var s1="";
    var total=0;
     for(var i=0;i<text.length;i++)
     {
        var str=text.substr(i,1);
      //  console.log(str);
        var s1=s1+str
        var sum=sum+jsondata[str];  
        

        if(sum>=width-6)
        {
            console.log(s1);
            console.log(sum);
            s1="";
            total=total+sum;
            sum=0;
            console.log("");
           
        } 
        
      }
      console.log(s1);
     console.log(sum);
     total=total+sum;
    console.log("total= ",+total);





