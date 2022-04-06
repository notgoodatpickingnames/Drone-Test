import dgram from 'dgram';

// const server = dgram.createSocket('udp4');

export class Tello {
    private address = '192.168.10.1';
    private port = 8889;

    constructor() {
        // this.initializeSocket();
        const server = dgram.createSocket('udp4', () => console.log('DONe'));
    }

    private initializeSocket() {

        // server.on('message', this.socketMessage);

        // server.on('error', this.socketError);
    }

    public sendMessage(message: string) {
        const command = Buffer.from(message);
        // server.send(command, this.port, this.address, (error, bytes) => {
        //     if (Boolean(error)) {
        //         console.log(error);
        //     }
        // });
    }

    private socketMessage(message: Buffer, rInfo: dgram.RemoteInfo) {
        console.log('got message', message);
    }

    private socketError(error: Error) {
        if (Boolean(error)) {
            console.warn(error);
            //server.close();
        }
    }
}