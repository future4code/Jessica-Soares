"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    setId(newId) {
        this.id = newId;
    }
    setName(newName) {
        this.name = newName;
    }
    setEmail(newEmail) {
        this.email = newEmail;
    }
    setPassword(newPassword) {
        this.password = newPassword;
    }
}
exports.User = User;
