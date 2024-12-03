import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1733256228155 implements MigrationInterface {
    name = 'Default1733256228155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` DROP COLUMN \`driver_id\``);
        await queryRunner.query(`ALTER TABLE \`rides\` ADD \`driver_id\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` DROP COLUMN \`driver_id\``);
        await queryRunner.query(`ALTER TABLE \`rides\` ADD \`driver_id\` decimal NOT NULL`);
    }

}
