import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from 'src/model/item.entity';
import { ItemDTO } from './item.dto';
import { UserEntity } from 'src/model/user.entity';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(ItemEntity) private readonly repo: Repository<ItemEntity>) {}

    public async getAll (): Promise<ItemDTO[]> {
        return this.repo.find()
            .then(items => items.map(e => ItemDTO.fromEntity(e)));
    }

    public async create(dto: ItemDTO, user: UserEntity): Promise<ItemDTO> {
        return this.repo.save(dto.toEntity(user))
            .then(e => ItemDTO.fromEntity(e));
    }
}
