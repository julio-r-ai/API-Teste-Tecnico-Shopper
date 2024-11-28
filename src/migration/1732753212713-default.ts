import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1732753212713 implements MigrationInterface {
    name = 'Default1732753212713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` ADD \`value\` decimal(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` DROP COLUMN \`value\``);
    }

}
