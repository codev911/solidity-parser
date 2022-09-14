"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const chain_1 = require("./chain");
const axios_1 = require("axios");
let AppService = class AppService {
    getHello() {
        return { message: 'This is API for parsing solidity source code from verified contract.' };
    }
    getChainList() {
        return chain_1.chainConfig;
    }
    async getSourceCode(network, smartcontract, apikey) {
        if (chain_1.chainConfig[`${network}`] !== undefined) {
            const { data, status } = await axios_1.default.get(`${chain_1.chainConfig[`${network}`].urls.apiURL}?module=contract&action=getsourcecode&address=${smartcontract}&apikey=${apikey}`, {
                headers: {
                    Accept: 'application/json',
                },
            });
            if (status === 200) {
                const sc = data.result[0].SourceCode;
                if (sc !== undefined && sc.length > 0) {
                    const scParsed = JSON.parse(sc.substring(1, sc.length - 1));
                    const scCode = JSON.parse(`[${JSON.stringify(scParsed.sources).replace(/},"/g, '}},{"')}]`);
                    const scMap = new Array();
                    scCode.forEach(async (object) => {
                        scMap.push({
                            file_location: Object.keys(object)[0].toString(),
                            source_code: Object.values(object)[0]['content']
                        });
                    });
                    return scMap;
                }
                else {
                    return { error: "Invalid API key or not verified contract!" };
                }
            }
            else {
                return { error: "unexpected error!" };
            }
        }
        else {
            return { error: "Invalid network, please check supported network param!" };
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map