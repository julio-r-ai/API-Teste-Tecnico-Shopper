import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1732713906340 implements MigrationInterface {
    name = 'Default1732713906340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` DROP COLUMN \`value\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` ADD \`value\` float NOT NULL`);
    }

}
