const exec = require('child_process').exec;

function puts(error, stdout, stderr) { console.log(stdout) }

exec("pwd", puts);
exec("env", puts);
