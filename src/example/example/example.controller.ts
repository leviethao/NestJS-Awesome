import { Controller, Get, Post, Body, HttpCode, Header, Param } from '@nestjs/common';

@Controller('example')
export class ExampleController {
    @Get()
    index() {
        return 'Example controller';
    }

    @Get('string')
    getString() {
        return 'This is some string';
    }

    @Get('number')
    getNumber() {
        return 10;
    }

    @Get('object')
    getObject() {
        return {name: 'hao', age: 22}
    }

    @Get('array')
    getArray() {
        return [1, 2, 3, 'le', 'hao']
    }

    @Get('boolean')
    getBoolean() {
        return true;
    }

    @Post('echo')
    echo(@Body() data): any {
        return data;
    }

    @Get('changeHttpCode')
    @HttpCode(204)
    changeHttpCode() {
        return 'This action adds a new cat';
    }

    @Get('withHeader')
    @Header('Cache-Control', 'none')
    withHeader() {
        return 'This action adds a new cat';
    }

    @Get('findOne1/:id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Get('findOne2/:id')
    findOne2(@Param('id') id): string {
        return `This action returns a #${id} cat`;
    }


}
