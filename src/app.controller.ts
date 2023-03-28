import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { OnException } from './utils/exceptions/http.exceptions';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('application-status')
  healthCheck() {
    return this.appService.getServiceStatus();
  }
}
