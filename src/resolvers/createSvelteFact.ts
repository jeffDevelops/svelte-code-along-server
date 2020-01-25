import { SvelteFact } from "../entity/SvelteFact";
import { connection } from "../entity";

export default {
  Mutation: {
    createSvelteFact: async (_, { input: { title, description, type } }) => {
      const svelteFact = new SvelteFact();
      svelteFact.title = title;
      svelteFact.description = description;
      svelteFact.type = type;

      const manager = (await connection).manager;
      const doc = await manager.save(SvelteFact, svelteFact);
      return doc;
    }
  }
};
