var fs=require("fs");

// READING A FILE

  var data= fs.readFileSync('demoFile1.txt')
   console.log(data.toString());


// APPENDING TO FILE

// fs.appendFile('demoFile1.txt','Data has been appended to File1',(err)=>{
// console.log('Data has been appended to File1');  


// WRITTING TO A FILE

// fs.writeFile('demoFile1.txt','Data has been written to File1',(err)=>{
//     console.log('Data has been written to File1');
//  });
//});

 