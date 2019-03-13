var Sequelize = require('sequelize');
var http=require('http');

var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('seq_db', 'root', 'root');
 
auto.run(function (err) {
  if (err) throw err;
 
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

http.createServer(function(req,res){
  req.on('data',function(data){


var sequelize = new Sequelize('seq_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
  define: {
      timestamps: false
  }
 
});

//checking the connection status

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

var jdata=JSON.parse(data);
var n1=jdata.name;
var a1=jdata.address;
var p1=jdata.phone;

var command=req.url;

//console.log(n1+'  '+q1+'  '+p1);

//applying table to database

var demo=sequelize.import('./models/demo.js');

if(command=='/insert'){

demo.sync({}).then(() => {
    console.log('Table created successfully.');
    // Table created
    return demo.create({
      name:n1,
      address:a1,
      phone:p1,
  });

  })
  .catch(err => {
    console.error('Unable to create table:', err);
  });
}


if(command=='/delete'){
demo.destroy({
    where: {
      name:n1
    }
  });
}

if(command=='/update'){
demo.update({
    address:a1,
    phone:p1,
  }, {
    where: {
      name:n1
    }
  });
}


});
res.write('Operation performed');
res.end();

}).listen(4000);
