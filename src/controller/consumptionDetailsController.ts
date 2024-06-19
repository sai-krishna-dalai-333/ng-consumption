import { ConsumptionDetailsService } from "../service/consumptionDetailsService"
import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse"
import { mockConsumptionDetailsRepository } from "../mockData/mock-consumptionDetails-repo";
import { ConsumptionDetailsValidator } from "../validator/consumption-details-validator";
import { ResponseBuilder } from "../builder/response-builder";
import { InvalidPremiseId,UserNotFoundError } from "../error/premiseId-error";

const consumptionValidator = new ConsumptionDetailsValidator();
const responseBuilder = new ResponseBuilder();

export class ConsumptionDetailsController {
    private consumptionDetailsService: ConsumptionDetailsService;
    
    constructor(consumptionDetailsService: ConsumptionDetailsService) {
        this.consumptionDetailsService = consumptionDetailsService;
    }

    async getConsumptionDetailsById(premiseId: string) {
       try {
            if (!consumptionValidator.premiseIdValidator(premiseId)) {
               throw new InvalidPremiseId();
               }
                const data = await this.consumptionDetailsService.getConsumptionDetailsById(premiseId); 
                if (!(data as any).Item) {
                throw new UserNotFoundError();
                } else {
                return responseBuilder.success(200, (data as any).Item);
                }
            
      } catch (error) {
        if (error instanceof InvalidPremiseId) {
            return responseBuilder.error(error.message, error.statusCode);  
          } else {
            return responseBuilder.error(error.message, error.statusCode);
          }
          
      }

    }
    

    

}