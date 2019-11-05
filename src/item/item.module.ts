import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/model/item.entity';
import { ItemService } from './item.service';

@Module({
    imports: [TypeOrmModule.forFeature([ItemEntity])],
    controllers: [ItemController],
    providers: [ItemService]
})
export class ItemModule {}
