import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1756122016248 implements MigrationInterface {
  name = 'InitialMigration1756122016248';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `INSERT INTO "user" ("email", "password", "name") VALUES ('test@trevia.com', 'test', 'Test User')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "user" WHERE "email" = 'test@trevia.com'`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
  }
}

