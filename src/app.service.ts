import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServiceStatus() {
    return {
      status: 'Healthy',
      env: process.env.NODE_ENV || 'development',
      something: 'Something...'
    };
  }
}
