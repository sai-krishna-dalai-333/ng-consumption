"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = exports.InvalidPremiseId = exports.InternalServerError = void 0;
class InternalServerError extends Error {
    statusCode;
    constructor() {
        super("Internal server error");
        this.statusCode = 500;
    }
}
exports.InternalServerError = InternalServerError;
class InvalidPremiseId extends Error {
    statusCode;
    constructor() {
        super("Invalid premise Id");
        this.statusCode = 400;
    }
}
exports.InvalidPremiseId = InvalidPremiseId;
class UserNotFoundError extends Error {
    statusCode;
    constructor() {
        super("Premise not found");
        this.statusCode = 404;
    }
}
exports.UserNotFoundError = UserNotFoundError;
//# sourceMappingURL=premiseId-error.js.map