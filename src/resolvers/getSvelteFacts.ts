import { SvelteFact } from "../entity/SvelteFact";
import { connection } from "../entity";

export default {
  Query: {
    svelteFacts: async (_, { where }) => {
      const manager = (await connection).manager;
      return await manager.find(SvelteFact, { ...where, approved: true });
    }
  }
};
