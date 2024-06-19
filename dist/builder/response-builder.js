"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBuilder = void 0;
class ResponseBuilder {
    success(statusCode, data) {
        return {
            statusCode: statusCode,
            body: {
                jsonapi: {
                    version: "1.0",
                    data,
                },
            },
        };
    }
    error(message, statusCode) {
        return {
            statusCode: statusCode,
            errors: {
                message,
            },
        };
    }
}
exports.ResponseBuilder = ResponseBuilder;
//# sourceMappingURL=response-builder.js.map