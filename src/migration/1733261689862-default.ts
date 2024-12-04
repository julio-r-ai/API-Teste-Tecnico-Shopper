import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1733261689862 implements MigrationInterface {
    name = 'Default1733261689862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` CHANGE \`driver_id\` \`driver\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rides\` DROP COLUMN \`driver\``);
        await queryRunner.query(`ALTER TABLE \`rides\` ADD \`driver\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` DROP COLUMN \`driver\``);
        await queryRunner.query(`ALTER TABLE \`rides\` ADD \`driver\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rides\` CHANGE \`driver\` \`driver_id\` int NOT NULL`);
    }

}
