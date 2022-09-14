export declare class AppService {
    getHello(): {
        message: string;
    };
    getChainList(): import("./chain").ChainConfig;
    getSourceCode(network: string, smartcontract: string, apikey: string): Promise<any>;
}
