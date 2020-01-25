import { gql } from "apollo-server";

const svelteFactTypeDefs = gql`
  enum ProOrCon {
    PRO
    CON
  }

  type SvelteFact {
    id: ID!
    title: String!
    description: String!
    approved: Boolean!
    type: ProOrCon!
  }

  input SvelteFactQueryInput {
    id: ID
    title: String
    description: String
    approved: Boolean
    type: ProOrCon
  }

  type Query {
    svelteFacts(where: SvelteFactQueryInput): [SvelteFact]!
  }

  input CreateSvelteFactInput {
    title: String!
    description: String!
    type: ProOrCon!
  }

  type Mutation {
    createSvelteFact(input: CreateSvelteFactInput!): SvelteFact!
  }
`;

export default svelteFactTypeDefs;
