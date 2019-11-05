import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemDTO } from './item.dto';
import { ItemService } from './item.service';
import { User } from 'src/decorator/user.decorator';
import { UserEntity } from 'src/model/user.entity';

@Controller('item')
export class ItemController {
    constructor(private serv: ItemService) {}

    @Get()
    public async getAll(): Promise<ItemDTO[]> {
        return await this.serv.getAll();
    }

    @Post()
    public async create(@User() user: UserEntity, @Body() dto: ItemDTO): Promise<ItemDTO> {
        user = new UserEntity();
        user.name = 'hao';
        user.id = 'someId';

        dto = ItemDTO.from(dto);
        return this.serv.create(dto, user);
    }
}
