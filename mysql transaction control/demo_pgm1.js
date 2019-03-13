var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"transaction"
});

        con.query("select @sumsal1:=SUM(salary) from mytab where PID='11'");
        con.query("update mytab2 set summary=@sumsal1 where PID='11'");

        con.query("select @sumsal2:=SUM(salary) from mytab where PID='2'");
        con.query("update mytab2 set summary=@sumsal2 where PID='2'");
    
        con.beginTransaction();
   
        con.query("update mytab2 set summary='100' where PID='11'");
        con.query("update mytab2 set summary='100' where PID='2'");

         con.commit();
         con.rollback();
     con.end();