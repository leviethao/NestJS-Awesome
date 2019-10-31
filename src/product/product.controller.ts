import { Controller, Get } from '@nestjs/common';
import {Crud} from '@nestjsx/crud';
import {ProductService} from './product.service';
import {ProductEntity} from './product.entity';

@Crud({
    model: {
        type: ProductEntity
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
})
@Controller('product')
export class ProductController {
    constructor(public service: ProductService) {}

    @Get('getAll')
    async findAll () {
        return await this.service.findAll();
    }
}
