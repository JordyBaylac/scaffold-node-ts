import { Server, createServer } from 'net';

class NetServer {

    public instance: Server;
    public HOST: string;
    public PORT: number;

    constructor() {        
        this.instance = createServer(); 
        this.HOST = '127.0.0.1';
        this.PORT = parseInt(process.env.PORT) || 3000;
    }

    public startInstance(port?: number, host?: string): void {          
        let sPort = port || this.PORT;
        let sHost = host || this.HOST;
         
        this.instance.listen(sPort, sHost);
        console.log('Server listening on ' + sHost + ':' + sPort);
    }

}

export default new NetServer()