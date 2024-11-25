import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1732569652540 implements MigrationInterface {
    name = 'Default1732569652540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`drivers\` DROP COLUMN \`rate_per_km\``);
        await queryRunner.query(`ALTER TABLE \`drivers\` ADD \`ratePerKm\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`drivers\` DROP COLUMN \`min_km\``);
        await queryRunner.query(`ALTER TABLE \`drivers\` ADD \`min_km\` double NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`drivers\` DROP COLUMN \`min_km\``);
        await queryRunner.query(`ALTER TABLE \`drivers\` ADD \`min_km\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`drivers\` DROP COLUMN \`ratePerKm\``);
        await queryRunner.query(`ALTER TABLE \`drivers\` ADD \`rate_per_km\` float NOT NULL`);
    }

}
