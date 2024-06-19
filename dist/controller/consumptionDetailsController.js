"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionDetailsController = void 0;
const consumption_details_validator_1 = require("../validator/consumption-details-validator");
const response_builder_1 = require("../builder/response-builder");
const premiseId_error_1 = require("../error/premiseId-error");
const consumptionValidator = new consumption_details_validator_1.ConsumptionDetailsValidator();
const responseBuilder = new response_builder_1.ResponseBuilder();
class ConsumptionDetailsController {
    consumptionDetailsService;
    constructor(consumptionDetailsService) {
        this.consumptionDetailsService = consumptionDetailsService;
    }
    async getConsumptionDetailsById(premiseId) {
        try {
            if (!consumptionValidator.premiseIdValidator(premiseId)) {
                throw new premiseId_error_1.InvalidPremiseId();
            }
            const data = await this.consumptionDetailsService.getConsumptionDetailsById(premiseId);
            if (!data.Item) {
                throw new premiseId_error_1.UserNotFoundError();
            }
            else {
                return responseBuilder.success(200, data.Item);
            }
        }
        catch (error) {
            if (error instanceof premiseId_error_1.InvalidPremiseId) {
                return responseBuilder.error(error.message, error.statusCode);
            }
            else {
                return responseBuilder.error(error.message, error.statusCode);
            }
        }
    }
}
exports.ConsumptionDetailsController = ConsumptionDetailsController;
//# sourceMappingURL=consumptionDetailsController.js.map