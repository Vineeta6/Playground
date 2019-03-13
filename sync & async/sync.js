const fs = require('fs')

console.log('start reading a file...')

var content=fs.readFileSync('f1.txt', 'utf-8')
  
  console.log(content)

console.log('end of the file')