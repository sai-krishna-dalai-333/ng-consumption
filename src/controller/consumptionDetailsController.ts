import { ConsumptionDetailsService } from "../service/consumptionDetailsService"
import { ConsumptionDetailsResponse } from "../model/iConsumptionDetailsResponse"

export class ConsumptionDetailsController {
    private consumptionDetailsService: ConsumptionDetailsService;

    constructor(consumptionDetailsService: ConsumptionDetailsService) {
        this.consumptionDetailsService = consumptionDetailsService;
    }

    async getConsumptionDetailsById(premiseId: string): Promise<ConsumptionDetailsResponse> {
        return await this.consumptionDetailsService.getConsumptionDetailsById(premiseId);
    }

}