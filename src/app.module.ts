import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import { CatsService } from './cats/cats.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { configService } from './config/config.service';

@Module({
  controllers: [AppController],
  providers: [AppService, CatsService],
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ExampleModule,
    ProductModule
  ],
})
export class AppModule {}
