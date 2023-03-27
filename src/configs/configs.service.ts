import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { ENVConfig } from 'src/app.const';
import { CONFIG_OPTIONS } from './configs.const';
import { EnvConfig } from './configs.interface';

@Injectable()
export class ConfigsService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) private options: Record<string, any>) {
    const filePath = `${process.env.NODE_ENV || 'develop'}.env`;
    const envFile = path.resolve(
      __dirname,
      '../../',
      this.options.folder,
      filePath,
    );
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: ENVConfig): string {
    return this.envConfig[key];
  }
}
