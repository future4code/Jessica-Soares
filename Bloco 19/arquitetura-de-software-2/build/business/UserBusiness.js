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
const uuid_1 = require("uuid");
const UserDataBase_1 = require("../data/UserDataBase");
class UserBusiness {
    constructor() {
        this.createUser = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new Error('Preencha os campos "name", "email" e "password"');
                }
                const id = (0, uuid_1.v4)();
                const userDatabase = new UserDataBase_1.UserDatabase();
                yield userDatabase.insertUser({
                    id,
                    name,
                    email,
                    password,
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map