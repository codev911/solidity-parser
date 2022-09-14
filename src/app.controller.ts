import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';

export class parseSourceCode{
  @ApiProperty({ example: 'mainnet'}) network: string;
  @ApiProperty({ example: '0x0000000000000000000000000000000000000000'}) address: string;
  @ApiProperty({ example: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678'}) apikey: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('list')
  getChainList() {
    return this.appService.getChainList();
  }

  @ApiBody({type: parseSourceCode})
  @Post('parse-sourcecode')
  getSource(
    @Body('network') network: string,
    @Body('address') address: string,
    @Body('apikey') apikey: string,
  ): any {
    return this.appService.getSourceCode(network, address, apikey);
  }
}
