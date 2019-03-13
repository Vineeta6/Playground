console.log("started");
console.log("promise started");
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise fulfilled');
    }, 1500);
  });
  promise1.then(function(value) {
    console.log(value);

  });
  console.log("promise made")
    
  
