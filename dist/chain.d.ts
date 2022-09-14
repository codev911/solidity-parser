interface EtherscanChainConfig {
    chainId: number;
    urls: EtherscanURLs;
}
export interface EtherscanURLs {
    apiURL: string;
    browserURL: string;
}
export declare type ChainConfig = Record<string, EtherscanChainConfig>;
export declare const chainConfig: ChainConfig;
export {};
