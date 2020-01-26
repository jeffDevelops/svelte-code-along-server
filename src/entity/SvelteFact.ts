import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

interface SvelteFactProps {
  id: ObjectId;
  title: string;
  description: string;
  type: "PRO" | "CON";
  approved?: boolean;
  createdAt?: number;
  updatedAt?: number;
}

@Entity("SvelteFact")
export class SvelteFact implements SvelteFactProps {
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

  @Column()
  createdAt: number;

  @Column()
  updatedAt: number;
}
