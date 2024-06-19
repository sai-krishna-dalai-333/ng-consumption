
import { ConsumptionDetailsService } from "../service/consumptionDetailsService"
import { ConsumptionDetailsController } from "../controller/consumptionDetailsController"
import {ConsumptionDetailsValidator} from "../validator/consumption-details-validator"
import { mockConsumptionDetailsRepository } from "../mockData/mock-consumptionDetails-repo"
import {event} from "../constant/constants"
const consumptionDetailsRepository = new mockConsumptionDetailsRepository();
const consumptionDetailsService = new ConsumptionDetailsService(consumptionDetailsRepository);
const consumptionDetailsController = new ConsumptionDetailsController(consumptionDetailsService);
const consumptionDetailsValidator = new ConsumptionDetailsValidator();


export const handler = async (event, context, callback) => {
    
    const premiseId = event.queryParameter.premiseId;
    const response = await consumptionDetailsController.getConsumptionDetailsById(premiseId);
    console.log(response);
    //callback(null, response);

}
handler(event,null,null);

