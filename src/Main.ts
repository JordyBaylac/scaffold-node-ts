
import server from './NetServer';

const addon = require('../build/Release/nativeModule');
console.log(addon.hello);
console.log(addon.hello());


server.instance.on('connection', function (sock) {

    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {

        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write('You said "' + data + '"');

    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function (data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

});


server.startInstance();