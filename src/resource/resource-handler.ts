import { ConsumptionDetailsRepository } from "../repository/consumptionDetailsRepository"
import { ConsumptionDetailsService } from "../service/consumptionDetailsService"
import { buildConsumptionResponse } from "../builder/response-builder"
import { ConsumptionDetailsController } from "../controller/consumptionDetailsController"


//defining tavble name
const consumptionTableName = 'ngConsumption'
//creating objects for every class
const consumptionDetailsRepository = new ConsumptionDetailsRepository(consumptionTableName)
const consumptionDetailsService = new ConsumptionDetailsService(consumptionDetailsRepository);
const consumptionDetailsController = new ConsumptionDetailsController(consumptionDetailsService)

//getting the constant file
import {
    StatusCode,
    HEADERS,
    MESSAGES
} from "../constant/constants"

//purpose of handler method : It is a AWS function that serves an endpoint.
export const handler = async (event) => {
    try {
        //Getting the premiseId from the Url (path parameter)
        const premiseId = event.pathParameters?.premiseId;
        //after fetching the url i just verifying the premiseId is Valid or not.
        //if it is valid then i return 200 Ok,else gives error invalid premiseId
        if (!premiseId || premiseId.length < 10 || premiseId.length > 10) {
            return {
                "statusCode": StatusCode.BAD_REQUEST,
                "headers": HEADERS,
                "body": JSON.stringify({ error: MESSAGES.INVALID_PREMISE_ID }),
            };
        }
        //if the premiseID is valid one. Then i will fetch the data using premiseId with the methods present in service ,controller and repo.
        const getConsumption = await consumptionDetailsController.getConsumptionDetailsById(premiseId);
        //store that response in a variable "body"
        //method buildConsumptionResponse() is used to convert the json object into json api.
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