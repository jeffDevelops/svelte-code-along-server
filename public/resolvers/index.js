"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getSvelteFacts_1 = __importDefault(require("./getSvelteFacts"));
var createSvelteFact_1 = __importDefault(require("./createSvelteFact"));
exports.default = [getSvelteFacts_1.default, createSvelteFact_1.default];
