import dgram, { Socket } from 'dgram';

export class Tello {
    private address = '192.168.10.1';
    private port = 8889;

    private server: Socket;

    constructor() {
        this.initializeSocket();
    }

    private initializeSocket() {
        this.server = dgram.createSocket('udp4');

        this.server.on('message', this.socketMessage);
        this.server.on('error', this.socketError);
    }

    public sendMessage(message: string) {
        const command = Buffer.from(message);

        this.server.send(command, this.port, this.address, (error, bytes) => {
            console.log('COMMAND SENT', command, message);
            if (Boolean(error)) {
                console.log(error);
            }
        });
    }

    private socketMessage(message: Buffer, rInfo: dgram.RemoteInfo) {
        console.log('got message', message);
    }

    private socketError(error: Error) {
        if (Boolean(error)) {
            console.warn(error);
            this.server.close();
        }
    }
}