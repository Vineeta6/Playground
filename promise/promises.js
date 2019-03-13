var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('welcome');
    }, 1200);
  });
  
  promise1.then(function(value) {
    console.log(value);

  });
  
  console.log(promise1);

  
  