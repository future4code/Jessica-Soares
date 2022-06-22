"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const uuid_1 = require("uuid");
const userDatabase = new UserDatabase_1.UserDatabase();
class UserBusiness {
    create({ email, name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !name || !password) {
                throw new Error("Dados inválidos (email, name, password)");
            }
            const id = (0, uuid_1.v4)();
            yield userDatabase.create({
                id,
                name,
                email,
                password,
            });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userDatabase.findAll();
            return result;
        });
    }
}
exports.UserBusiness = UserBusiness;
