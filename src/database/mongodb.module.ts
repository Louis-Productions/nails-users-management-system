import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ENVConfig } from 'src/app.const';
import { ConfigsModule } from 'src/configs/configs.module';
import { ConfigsService } from 'src/configs/configs.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigsModule.register({ folder: 'environments' })],
      useFactory: async (configService: ConfigsService) => {
        console.log(
          'Connect to mongodb: ',
          configService.get(ENVConfig.MONGODB_URL),
        );
        return {
          uri: configService.get(ENVConfig.MONGODB_URL),
        };
      },
      inject: [ConfigsService],
    }),
  ],
})
export class MongoDBModule {}
