const spawn = require('child_process').spawn;

const serverProcess = spawn('npx', ['lite-server']);

serverProcess.stdout.on('data', (data) => {
    console.log(data.toString());
});

serverProcess.stderr.on('data', (data) => {
    console.error(data.toString());
});