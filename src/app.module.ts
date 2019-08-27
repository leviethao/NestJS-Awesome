import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ExampleModule],
})
export class AppModule {}
