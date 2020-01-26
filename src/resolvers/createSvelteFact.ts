import { ObjectId } from "mongodb";
import { SvelteFact } from "../entity/SvelteFact";
import { connection } from "../entity";

export default {
  Mutation: {
    createSvelteFact: async (
      _,
      { input: { title, description, type, approved } }
    ) => {
      const svelteFact = new SvelteFact();
      svelteFact.title = title;
      svelteFact.description = description;
      svelteFact.type = type;
      svelteFact.approved = approved ? approved : false;
      svelteFact.createdAt = Date.now();
      svelteFact.updatedAt = Date.now();

      const manager = (await connection).manager;
      const doc = await manager.save(SvelteFact, svelteFact);
      return doc;
    }
  }
};
