import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './configs.const';
import { ConfigsService } from './configs.service';

@Module({})
export class ConfigsModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: ConfigsModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigsService,
      ],
      exports: [ConfigsService],
    };
  }
}
