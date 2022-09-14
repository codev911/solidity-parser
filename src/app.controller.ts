import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

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

  @Post('parse-sourcecode')
  getSource(
    @Body('network') network: string,
    @Body('address') address: string,
    @Body('apikey') apikey: string,
  ): any {
    return this.appService.getSourceCode(network, address, apikey);
  }
}
