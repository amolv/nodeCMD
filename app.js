const exec = require('child_process').exec;

var connect = require('connect');
var http = require('http');
var app = connect();

app.use(function(req, res){
  
  exec("pwd", function( error, stdout, stderr){
    res.write( 'echo pwd ********************************************************************************************************\n');
    res.write( stdout + '\n');
    exec("env", function( error, stdout, stderr){
      res.write( 'echo env ********************************************************************************************************\n');
      res.write( stdout + '\n');
      exec("ps -afe", function( error, stdout, stderr){
        res.write( 'echo ps -afe ********************************************************************************************************\n');
        res.write( stdout + '\n');
        exec("ps aux", function( error, stdout, stderr){
          res.write( 'echo ps aux ********************************************************************************************************\n');
          res.write( stdout + '\n');
          exec("ls -la", function( error, stdout, stderr){
            res.write( 'echo ls -la ********************************************************************************************************\n');
            res.write( stdout + '\n');
            exec("id", function( error, stdout, stderr){
              res.write( 'echo id ********************************************************************************************************\n');
              res.write( stdout + '\n');
              exec("netstat -an", function( error, stdout, stderr){
                res.write( 'echo netstat -an ********************************************************************************************************\n');
                res.write( stdout + '\n');
                exec("lsof -Pan -i", function( error, stdout, stderr){
                  res.write( 'echo lsof -Pan -i ********************************************************************************************************\n');
                  res.write( stdout + '\n');
                  res.end();                  
                });
              });
            });
          });
        });
      });
    });
  });
  
})

http.createServer(app).listen(3000);
if (typeof(PhusionPassenger) !== 'undefined') {
  console.log('Example app running inside Passenger.');
} else {
  console.log('Example app listening on http://127.0.0.1:3000/');
}

