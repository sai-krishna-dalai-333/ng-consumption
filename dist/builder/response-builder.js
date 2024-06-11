"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildConsumptionResponse = void 0;
const buildConsumptionResponse = (consumption) => {
    const getConsumptionJsonApi = {
        "jsonapi": {
            "version": "1.0"
        },
        "data": {
            "type": "consumptionDetails",
            "attributes": {
                "premiseId": consumption.Item.premiseId,
                "consumption_details": consumption.Item.consumptionDetails.map(consumptionDeatil => ({
                    month: consumptionDeatil.month,
                    reading: consumptionDeatil.reading,
                    billAmount: consumptionDeatil.billAmount,
                    carbonFootPrint: consumptionDeatil.carbonFootPrint,
                }))
            }
        }
    };
    return getConsumptionJsonApi;
};
exports.buildConsumptionResponse = buildConsumptionResponse;
//# sourceMappingURL=response-builder.js.map