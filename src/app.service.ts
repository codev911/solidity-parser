import { Injectable } from '@nestjs/common';
import { chainConfig } from './chain';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'This is API for downloading solidity source code from verified contract.' };
  }

  getChainList() {
    return chainConfig;
  }

  async getSourceCode(
    network: string,
    smartcontract: string,
    apikey: string
  ): Promise<any> {
    if(chainConfig[`${network}`] !== undefined){
      const { data, status } = await axios.get(`${chainConfig[`${network}`].urls.apiURL}?module=contract&action=getsourcecode&address=${smartcontract}&apikey=${apikey}`,{
          headers: {
            Accept: 'application/json',
          },
        }); 

      if(status === 200){
        const sc = data.result[0].SourceCode;
        if(sc !== undefined && sc.length > 0){
          const scParsed = JSON.parse(sc.substring(1, sc.length-1));
          const scCode = JSON.parse(`[${JSON.stringify(scParsed.sources).replace(/},"/g,'}},{"')}]`);
          const scMap = new Array();

          scCode.forEach(async (object) => {
            // const source = ((Object.values(object)[0]['content']).toString()).replace(/\\"/g, '"');
            scMap.push({
              file_location: Object.keys(object)[0].toString(),
              source_code: Object.values(object)[0]['content']
            });
          });

          return scMap;
        }else{
          return {error: "Invalid API key or not verified contract!"};
        }
      }else{
        return {error: "unexpected error!"};
      }
    }else{
      return {error: "Invalid network, please check supported network param!"};
    }
  }
}
