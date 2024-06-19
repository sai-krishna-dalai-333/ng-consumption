"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionDetailsValidator = void 0;
class ConsumptionDetailsValidator {
    premiseIdValidator(premiseId) {
        if (!premiseId) {
            return false;
        }
        if (premiseId.length < 10 || premiseId.length > 14) {
            return false;
        }
        if (!/^[A-Z0-9]+$/.test(premiseId)) {
            return false;
        }
        return true;
    }
}
exports.ConsumptionDetailsValidator = ConsumptionDetailsValidator;
//# sourceMappingURL=consumption-details-validator.js.map