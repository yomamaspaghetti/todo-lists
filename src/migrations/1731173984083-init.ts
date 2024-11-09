import { MigrationInterface, QueryRunner } from 'typeorm'

export class Init1731173984083 implements MigrationInterface {
  name = 'Init1731173984083'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "list_items" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "due_at_utc" TIMESTAMP, "user_id" integer NOT NULL, "list_id" integer NOT NULL, "status" "public"."list_items_status_enum" NOT NULL, "created_at_utc" TIMESTAMP NOT NULL DEFAULT now(), "updated_at_utc" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_26260957b2b71a1d8e2ecd005f8" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "lists" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at_utc" TIMESTAMP NOT NULL DEFAULT now(), "updated_at_utc" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_268b525e9a6dd04d0685cb2aaaa" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at_utc" TIMESTAMP NOT NULL DEFAULT now(), "updated_at_utc" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "user_lists" ("user_id" integer NOT NULL, "list_id" integer NOT NULL, CONSTRAINT "PK_500379a43c4cd67cd901f52a786" PRIMARY KEY ("user_id", "list_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_e63bde2fe816b25138fac5e065" ON "user_lists" ("user_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_20cc86498cae501e4a465ae944" ON "user_lists" ("list_id") `
    )
    await queryRunner.query(
      `ALTER TABLE "list_items" ADD CONSTRAINT "FK_8bf07909d6d9e95e8e637bd5b3e" FOREIGN KEY ("list_id") REFERENCES "lists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "list_items" ADD CONSTRAINT "FK_fd4f8b20a05bd2fcd6b1750ce4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "user_lists" ADD CONSTRAINT "FK_e63bde2fe816b25138fac5e065b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_lists" ADD CONSTRAINT "FK_20cc86498cae501e4a465ae9442" FOREIGN KEY ("list_id") REFERENCES "lists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_lists" DROP CONSTRAINT "FK_20cc86498cae501e4a465ae9442"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_lists" DROP CONSTRAINT "FK_e63bde2fe816b25138fac5e065b"`
    )
    await queryRunner.query(
      `ALTER TABLE "list_items" DROP CONSTRAINT "FK_fd4f8b20a05bd2fcd6b1750ce4b"`
    )
    await queryRunner.query(
      `ALTER TABLE "list_items" DROP CONSTRAINT "FK_8bf07909d6d9e95e8e637bd5b3e"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_20cc86498cae501e4a465ae944"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_e63bde2fe816b25138fac5e065"`
    )
    await queryRunner.query(`DROP TABLE "user_lists"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TABLE "lists"`)
    await queryRunner.query(`DROP TABLE "list_items"`)
  }
}
