import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { configService } from './config/config.service';
import { ItemModule } from './item/item.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ExampleModule,
    ProductModule,
    ItemModule
  ],
})
export class AppModule {}
