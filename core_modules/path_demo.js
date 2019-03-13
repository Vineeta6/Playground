var path = require('path');

//directory name

var dirname = path.dirname('/Desktop/vineeta/nodePrograms/task11.js');
console.log("Directory name: "+dirname);

//file name

 var filename = path.basename('/Desktop/vineeta/nodePrograms/task11.js');
 console.log("File name: "+filename);

//extension

 var ext = path.extname('/Desktop/vineeta/nodePrograms/task11.js');
 console.log("Extension: "+ext);

//Absolute path

 var abs = path.isAbsolute('/Desktop/vineeta/nodePrograms/task11.js');
 console.log("Absolute: "+abs);
