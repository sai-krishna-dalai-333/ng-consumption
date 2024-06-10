"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const consumptionDetailsRepository_1 = require("../repository/consumptionDetailsRepository");
const consumptionDetailsService_1 = require("../service/consumptionDetailsService");
const response_builder_1 = require("../builder/response-builder");
const consumptionDetailsController_1 = require("../controller/consumptionDetailsController");
const consumptionTableName = 'ngConsumption';
const consumptionDetailsRepository = new consumptionDetailsRepository_1.ConsumptionDetailsRepository(consumptionTableName);
const consumptionDetailsService = new consumptionDetailsService_1.ConsumptionDetailsService(consumptionDetailsRepository);
const consumptionDetailsController = new consumptionDetailsController_1.ConsumptionDetailsController(consumptionDetailsService);
const constants_1 = require("../constant/constants");
const handler = async (event) => {
    try {
        const premiseId = event.pathParameters?.premiseId;
        if (!premiseId || premiseId.length < 7 || premiseId.length > 7) {
            return {
                "statusCode": constants_1.StatusCode.BAD_REQUEST,
                "headers": constants_1.HEADERS,
                "body": JSON.stringify({ error: constants_1.MESSAGES.INVALID_PREMISE_ID }),
            };
        }
        const getConsumption = await consumptionDetailsController.getConsumptionDetailsById(premiseId);
        const body = (0, response_builder_1.buildConsumptionResponse)(getConsumption);
        return {
            "statusCode": constants_1.StatusCode.OK,
            "headers": constants_1.HEADERS,
            "body": JSON.stringify(body),
        };
    }
    catch (error) {
        return {
            "statusCode": constants_1.StatusCode.INTERNAL_SERVER_ERROR,
            "headers": constants_1.HEADERS,
            "body": JSON.stringify({ error: constants_1.MESSAGES.FAILED_TO_GET_DATA }),
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=resource-handler.js.map