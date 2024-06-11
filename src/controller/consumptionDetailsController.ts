import { ConsumptionDetailsService } from "../service/consumptionDetailsService"
import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse"

export class ConsumptionDetailsController {
    //created an object foir service
    private consumptionDetailsService: ConsumptionDetailsService;
    
    //initialize that object.
    constructor(consumptionDetailsService: ConsumptionDetailsService) {
        this.consumptionDetailsService = consumptionDetailsService;
    }

    //uses the method from service class to get the data from it.
    async getConsumptionDetailsById(premiseId: string): Promise<ConsumptionDetailsResponse> {
        return await this.consumptionDetailsService.getConsumptionDetailsById(premiseId);
    }

}