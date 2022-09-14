import { AppService } from './app.service';
export declare class parseSourceCode {
    network: string;
    address: string;
    apikey: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): {
        message: string;
    };
    getChainList(): import("./chain").ChainConfig;
    getSource(network: string, address: string, apikey: string): any;
}
