"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var svelteFactTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  enum ProOrCon {\n    PRO\n    CON\n  }\n\n  type SvelteFact {\n    id: ID!\n    title: String!\n    description: String!\n    approved: Boolean!\n    type: ProOrCon!\n  }\n\n  input SvelteFactQueryInput {\n    id: ID\n    title: String\n    description: String\n    approved: Boolean\n    type: ProOrCon\n  }\n\n  type Query {\n    svelteFacts(where: SvelteFactQueryInput): [SvelteFact]!\n  }\n\n  input CreateSvelteFactInput {\n    title: String!\n    description: String!\n    type: ProOrCon!\n  }\n\n  type Mutation {\n    createSvelteFact(input: CreateSvelteFactInput!): SvelteFact!\n  }\n"], ["\n  enum ProOrCon {\n    PRO\n    CON\n  }\n\n  type SvelteFact {\n    id: ID!\n    title: String!\n    description: String!\n    approved: Boolean!\n    type: ProOrCon!\n  }\n\n  input SvelteFactQueryInput {\n    id: ID\n    title: String\n    description: String\n    approved: Boolean\n    type: ProOrCon\n  }\n\n  type Query {\n    svelteFacts(where: SvelteFactQueryInput): [SvelteFact]!\n  }\n\n  input CreateSvelteFactInput {\n    title: String!\n    description: String!\n    type: ProOrCon!\n  }\n\n  type Mutation {\n    createSvelteFact(input: CreateSvelteFactInput!): SvelteFact!\n  }\n"])));
exports.default = svelteFactTypeDefs;
var templateObject_1;
