import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { ProductEntity } from './product.entity'
import { Repository } from 'typeorm';

@Injectable()
export class ProductService extends TypeOrmCrudService<ProductEntity> {
    constructor(@InjectRepository(ProductEntity) repo: Repository<ProductEntity>) {
        super(repo);
    }

    async findAll (): Promise<ProductEntity[]> {
        return await this.repo.find();
    }
}
