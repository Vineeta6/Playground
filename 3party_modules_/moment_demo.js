var moment=require('moment');

 console.log(moment());
 console.log("");

 // validating a date
 
 console.log( moment('2018-11-23').isValid());
 console.log(moment('2018-13-23').isValid());
 console.log("");

 //time ago using fromNow()

 console.log(moment('2016-11-23').fromNow()); 
 console.log(moment('2018-05-23').fromNow());
 console.log(moment('2019-01-13').fromNow());
 
console.log("");
 console.log(moment('2016-11-23').fromNow(true)); 
 console.log(moment('2018-05-23').fromNow(true));
 console.log(moment('2019-01-13').fromNow(true));

 //date in proper format
 
 console.log("");
 console.log(moment().format('MMMM Do YYYY, h:mm:ss A'));
 
 // adding 1 day to present day

 console.log(moment().add(1, 'days').calendar());