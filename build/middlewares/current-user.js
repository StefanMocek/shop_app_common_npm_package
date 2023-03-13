"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
;
const currentUser = (jwt_key) => {
    return (req, res, next) => {
        if (!req.session.jwt) {
            return next();
        }
        ;
        try {
            const payload = jsonwebtoken_1.default.verify(req.session.jwt, jwt_key);
            req.currentUser = payload;
        }
        catch (err) {
            next(err);
        }
        ;
    };
};
exports.currentUser = currentUser;
