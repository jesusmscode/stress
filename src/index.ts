import { createServer, Socket } from 'net';

export const server = createServer((socket: Socket) => {
    socket.on('data', (data) => {
        const request = data.toString();
        console.log('Request received:', request);

        const response = [
            'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 13',
            '',
            'Hello, World!'
        ].join('\r\n');

        socket.write(response);
        socket.end();
    });
});

