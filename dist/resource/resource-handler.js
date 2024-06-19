"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const consumptionDetailsService_1 = require("../service/consumptionDetailsService");
const consumptionDetailsController_1 = require("../controller/consumptionDetailsController");
const consumption_details_validator_1 = require("../validator/consumption-details-validator");
const mock_consumptionDetails_repo_1 = require("../mockData/mock-consumptionDetails-repo");
const constants_1 = require("../constant/constants");
const consumptionDetailsRepository = new mock_consumptionDetails_repo_1.mockConsumptionDetailsRepository();
const consumptionDetailsService = new consumptionDetailsService_1.ConsumptionDetailsService(consumptionDetailsRepository);
const consumptionDetailsController = new consumptionDetailsController_1.ConsumptionDetailsController(consumptionDetailsService);
const consumptionDetailsValidator = new consumption_details_validator_1.ConsumptionDetailsValidator();
const handler = async (event, context, callback) => {
    const premiseId = event.queryParameter.premiseId;
    const response = await consumptionDetailsController.getConsumptionDetailsById(premiseId);
    console.log(response);
    //callback(null, response);
};
exports.handler = handler;
(0, exports.handler)(constants_1.event, null, null);
//# sourceMappingURL=resource-handler.js.map