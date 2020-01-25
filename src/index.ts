import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { connection } from "./entity";

(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  connection.then(() => {
    server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
  });
})();
