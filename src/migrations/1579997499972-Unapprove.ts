import { MigrationInterface, QueryRunner, getMongoManager } from "typeorm";
import { SvelteFact } from "../entity/SvelteFact";

export class Unapprove1579997499972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const manager = getMongoManager();
    await manager.updateMany(
      SvelteFact,
      {},
      {
        $set: {
          approved: false
        }
      }
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
