import { MigrationInterface, QueryRunner, getMongoManager } from "typeorm";
import { SvelteFact } from "../entity/SvelteFact";

export class Approve1579997705288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const manager = getMongoManager();
    await manager.updateMany(SvelteFact, {}, { $set: { approved: true } });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
