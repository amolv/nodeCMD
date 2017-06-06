const exec = require('child_process').exec;

var connect = require('connect');
var http = require('http');
var app = connect();

app.use(function(req, res){
  
  exec("pwd", function( error, stdout, stderr){
    res.write( stdout + '\n');
    exec("env", function( error, stdout, stderr){
      res.write( stdout + '\n');
      exec("ps -afe", function( error, stdout, stderr){
        res.write( stdout + '\n');
        exec("ps aux", function( error, stdout, stderr){
          res.write( stdout + '\n');
          exec("la -la", function( error, stdout, stderr){
            res.write( stdout + '\n');
            exec("id", function( error, stdout, stderr){
              res.write( stdout + '\n');
              exec("netstat -an", function( error, stdout, stderr){
                res.write( stdout + '\n');
                res.end();
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

