import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1572626297488 implements MigrationInterface {
    name = 'myInit1572626297488'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" ADD "internalComment" character varying(300)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "internalComment"`, undefined);
    }

}
