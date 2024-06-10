import { ConsumptionDetailsRepository } from "../repository/consumptionDetailsRepository"
import { ConsumptionDetailsService } from "../service/consumptionDetailsService"
import { buildConsumptionResponse } from "../builder/response-builder"
import { ConsumptionDetailsController } from "../controller/consumptionDetailsController"

const consumptionTableName = 'ngConsumption'
const consumptionDetailsRepository = new ConsumptionDetailsRepository(consumptionTableName)
const consumptionDetailsService = new ConsumptionDetailsService(consumptionDetailsRepository);
const consumptionDetailsController = new ConsumptionDetailsController(consumptionDetailsService)

import {
    StatusCode,
    HEADERS,
    MESSAGES
} from "../constant/constants"

export const handler = async (event) => {
    try {
        const premiseId = event.pathParameters?.premiseId;
        if (!premiseId || premiseId.length < 7 || premiseId.length > 7) {
            return {
                "statusCode": StatusCode.BAD_REQUEST,
                "headers": HEADERS,
                "body": JSON.stringify({ error: MESSAGES.INVALID_PREMISE_ID }),
            };
        }
        const getConsumption = await consumptionDetailsController.getConsumptionDetailsById(premiseId);
        const body = buildConsumptionResponse(getConsumption);
        return {
            "statusCode": StatusCode.OK,
            "headers": HEADERS,
            "body": JSON.stringify(body),
        };
    } catch (error) {

        return {
            "statusCode": StatusCode.INTERNAL_SERVER_ERROR,
            "headers": HEADERS,
            "body": JSON.stringify({ error: MESSAGES.FAILED_TO_GET_DATA }),

        }
    }

}