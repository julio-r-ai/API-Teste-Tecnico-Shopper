import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1732540469619 implements MigrationInterface {
    name = 'Default1732540469619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`drivers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`vehicle\` varchar(255) NOT NULL, \`rating\` float NOT NULL, \`comment\` varchar(255) NOT NULL, \`rate_per_km\` float NOT NULL, \`min_km\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rides\` (\`id\` int NOT NULL AUTO_INCREMENT, \`customer_id\` int NOT NULL, \`origin\` varchar(255) NOT NULL, \`destination\` varchar(255) NOT NULL, \`distance\` double NOT NULL, \`duration\` varchar(255) NOT NULL, \`value\` float NOT NULL, \`date\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`driver_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rides\` ADD CONSTRAINT \`FK_fb13184768dea9734b022874c6f\` FOREIGN KEY (\`driver_id\`) REFERENCES \`drivers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rides\` DROP FOREIGN KEY \`FK_fb13184768dea9734b022874c6f\``);
        await queryRunner.query(`DROP TABLE \`rides\``);
        await queryRunner.query(`DROP TABLE \`drivers\``);
    }

}
