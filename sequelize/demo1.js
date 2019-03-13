var Sequelize = require('sequelize');
var http=require('http');

http.createServer(function(req,res){
    req.on('data',function(data){



//Setting up the config

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

   // creating table structure

  var Item = sequelize.define('Item', {
    //id: Sequelize.STRING,
    name:Sequelize.STRING,
    qty: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
  
    // defaultScope: {
    //     attributes: {
    //       exclude: ['created_at', 'updated_at']
    //     }
    //   }
  
});


var jdata=JSON.parse(data);
var n1=jdata.name;
var q1=jdata.qty;
var p1=jdata.price;

var command=req.url;

//console.log(n1+'  '+q1+'  '+p1);

//applying table to database

if(command=='/insert'){

Item.sync({}).then(() => {
    console.log('Table created successfully.');
    // Table created
    return Item.create({
      name:n1,
      qty:q1,
      price:p1,
  });

  })
  .catch(err => {
    console.error('Unable to create table:', err);
  });
}


if(command=='/delete'){
Item.destroy({
    where: {
      name:n1
    }
  });
}

if(command=='/update'){
Item.update({
    qty:q1,
    price:p1,
  }, {
    where: {
      name:n1
    }
  });
}


});
res.write('Operation performed');
res.end();

}).listen(5000);
