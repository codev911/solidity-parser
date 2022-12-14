"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = exports.parseSourceCode = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
class parseSourceCode {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mainnet' }),
    __metadata("design:type", String)
], parseSourceCode.prototype, "network", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0x0000000000000000000000000000000000000000' }),
    __metadata("design:type", String)
], parseSourceCode.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678' }),
    __metadata("design:type", String)
], parseSourceCode.prototype, "apikey", void 0);
exports.parseSourceCode = parseSourceCode;
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getChainList() {
        return this.appService.getChainList();
    }
    getSource(network, address, apikey) {
        return this.appService.getSourceCode(network, address, apikey);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getChainList", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: parseSourceCode }),
    (0, common_1.Post)('parse-sourcecode'),
    __param(0, (0, common_1.Body)('network')),
    __param(1, (0, common_1.Body)('address')),
    __param(2, (0, common_1.Body)('apikey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getSource", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map