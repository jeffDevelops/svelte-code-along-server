"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var svelteFactTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type SvelteFact {\n    id: ID!\n    title: String!\n    description: String!\n    approved: String!\n  }\n\n  type Query {\n    svelteFacts: [SvelteFact]!\n  }\n"], ["\n  type SvelteFact {\n    id: ID!\n    title: String!\n    description: String!\n    approved: String!\n  }\n\n  type Query {\n    svelteFacts: [SvelteFact]!\n  }\n"])));
exports.default = svelteFactTypeDefs;
var templateObject_1;
