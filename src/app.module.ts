import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import { CatsService } from './cats/cats.service';

@Module({
  controllers: [AppController],
  providers: [AppService, CatsService],
  imports: [ExampleModule],
})
export class AppModule {}
