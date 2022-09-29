const WebSocket = require('ws');
const fs = require('fs');
const crypto = require('crypto');

let frames = [];
let i = 0;

fs.readdir("./src/frames", (err, files) => {
    files.shift();
    frames = files.sort((a,b) => {return parseInt(a.replace( /^\D+/g, '')) - parseInt(b.replace( /^\D+/g, ''))});
});

const ws_server = new WebSocket.Server({ port: 8088 });

ws_server.on('connection', function connection(ws) {
    console.log("A client connected");
    ws.on('message', function incoming(message) {
        console.log("I received: " + message);
    });

    setInterval(() => {
        const file = frames[i];
        if (fs.existsSync('./src/frames/' + file)) {
            const data = fs.readFileSync('./src/frames/' + file).toString('base64');
            
            ws.send(JSON.stringify({
                type: "frame",
                meta: "",
                data: data,
                id: crypto.randomUUID(),
                date: new Date(Date.now()).toISOString()
            }));
        }
        if(i >= 1735) {
            i = 0;
        } else {
            i++;
        }
    }, 10000)
});