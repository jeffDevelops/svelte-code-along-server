import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity("SvelteFact")
export class SvelteFact {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  approved: boolean = false;

  @Column()
  type: "PRO" | "CON" = "PRO";
}
